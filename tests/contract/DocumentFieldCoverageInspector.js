import {
  getNamedType,
  isObjectType,
  parse,
} from 'graphql'

/**
 * Report the fields a GraphQL document leaves unselected.
 *
 * `validate()` answers the opposite question. A document naming a field the contract does not
 * declare is invalid and `validate()` rejects it; a document that selects only some of what the
 * contract declares is **valid GraphQL by design**, so `validate()` passes it. That gap is what
 * this class closes: it walks the contract's own type definitions and reports every declared field
 * the document failed to ask for, as a dotted path.
 *
 * Only the operation's single root field is walked. The root Query / Mutation type declares every
 * operation the contract has, and one document is expected to call exactly one of them.
 */
export default class DocumentFieldCoverageInspector {
  /**
   * Constructor.
   *
   * @param {DocumentFieldCoverageInspectorParams} params
   */
  constructor ({
    schema,
  }) {
    this.schema = schema
  }

  /**
   * Factory method.
   *
   * @param {DocumentFieldCoverageInspectorParams} params
   * @returns {DocumentFieldCoverageInspector}
   */
  static create ({
    schema,
  }) {
    return new this({
      schema,
    })
  }

  /**
   * Extract the dotted paths of the contract-declared fields this document does not select.
   *
   * @param {{
   *   graphqlDocument: string
   * }} params
   * @returns {Array<string>} Empty when the document selects everything the contract declares.
   */
  extractUnselectedFieldPaths ({
    graphqlDocument,
  }) {
    const operation = parse(graphqlDocument)
      .definitions
      .find(definition => definition.kind === 'OperationDefinition')

    const [rootField] = operation.selectionSet
      .selections

    const rootFieldName = rootField.name
      .value

    const operationType = this.extractOperationType({
      operationKind: operation.operation,
    })

    const resultType = getNamedType(
      operationType.getFields()[rootFieldName]
        .type
    )

    return this.collectUnselectedFieldPaths({
      parentType: resultType,
      selectionSet: rootField.selectionSet,
      ancestry: [
        rootFieldName,
      ],
    })
  }

  /**
   * Extract the contract's root type for an operation kind.
   *
   * @param {{
   *   operationKind: string
   * }} params
   * @returns {*} The Query or the Mutation type.
   */
  extractOperationType ({
    operationKind,
  }) {
    const operationTypeHash = {
      query: this.schema.getQueryType(),
      mutation: this.schema.getMutationType(),
    }

    return operationTypeHash[operationKind]
  }

  /**
   * Collect the unselected field paths under one selection set, recursively.
   *
   * @param {{
   *   parentType: *
   *   selectionSet: *
   *   ancestry: Array<string>
   * }} params
   * @returns {Array<string>} Dotted paths.
   */
  collectUnselectedFieldPaths ({
    parentType,
    selectionSet,
    ancestry,
  }) {
    const declaredFieldHash = parentType.getFields()

    const selectedFieldNames = selectionSet.selections
      .map(selection => selection.name.value)

    const unselectedPaths = Object.keys(declaredFieldHash)
      .filter(fieldName => !selectedFieldNames.includes(fieldName))
      .map(fieldName =>
        [
          ...ancestry,
          fieldName,
        ].join('.')
      )

    const nestedPaths = this.collectNestedUnselectedFieldPaths({
      declaredFieldHash,
      selectionSet,
      ancestry,
    })

    return [
      ...unselectedPaths,
      ...nestedPaths,
    ]
  }

  /**
   * Collect the unselected field paths beneath each selected object-typed field.
   *
   * @param {{
   *   declaredFieldHash: *
   *   selectionSet: *
   *   ancestry: Array<string>
   * }} params
   * @returns {Array<string>} Dotted paths.
   */
  collectNestedUnselectedFieldPaths ({
    declaredFieldHash,
    selectionSet,
    ancestry,
  }) {
    return selectionSet.selections
      .filter(selection =>
        this.hasObjectTypedSelectionSet({
          declaredFieldHash,
          selection,
        })
      )
      .flatMap(selection =>
        this.collectUnselectedFieldPaths({
          parentType: getNamedType(
            declaredFieldHash[selection.name.value].type
          ),
          selectionSet: selection.selectionSet,
          ancestry: [
            ...ancestry,
            selection.name.value,
          ],
        })
      )
  }

  /**
   * Check whether a selection drills into an object type the contract declares.
   *
   * A selection the contract does not declare answers false rather than throwing. Such a document
   * is already rejected by `validate()`, which is asserted separately; reporting it as a coverage
   * shortfall too would only blur which check caught it.
   *
   * @param {{
   *   declaredFieldHash: *
   *   selection: *
   * }} params
   * @returns {boolean}
   */
  hasObjectTypedSelectionSet ({
    declaredFieldHash,
    selection,
  }) {
    const declaredField = declaredFieldHash[selection.name.value]

    if (!declaredField) {
      return false
    }

    if (!selection.selectionSet) {
      return false
    }

    return isObjectType(
      getNamedType(declaredField.type)
    )
  }
}

/**
 * @typedef {{
 *   schema: import('graphql').GraphQLSchema
 * }} DocumentFieldCoverageInspectorParams
 */
