import fs from 'node:fs'
import path from 'node:path'

import {
  buildSchema,
  parse,
  validate,
} from 'graphql'

import DocumentFieldCoverageInspector from '~/tests/contract/DocumentFieldCoverageInspector.js'

import ExpensesQueryGraphqlPayload from '~/app/graphql/client/queries/expenses/ExpensesQueryGraphqlPayload'
import ExpenseCategoriesQueryGraphqlPayload from '~/app/graphql/client/queries/expenseCategories/ExpenseCategoriesQueryGraphqlPayload'
import RecordExpenseMutationGraphqlPayload from '~/app/graphql/client/mutations/recordExpense/RecordExpenseMutationGraphqlPayload'
import CorrectExpenseMutationGraphqlPayload from '~/app/graphql/client/mutations/correctExpense/CorrectExpenseMutationGraphqlPayload'
import RemoveExpenseMutationGraphqlPayload from '~/app/graphql/client/mutations/removeExpense/RemoveExpenseMutationGraphqlPayload'

/*
 * ────────────────────────────────────────────────────────────────────────────────────────────────
 * WHAT THIS FILE PROVES, AND WHAT IT DOES NOT
 * ────────────────────────────────────────────────────────────────────────────────────────────────
 *
 * It proves that every document this repository sends is a legal operation against the agreed
 * contract, and that each one asks for everything the contract offers it. The contract file is the
 * oracle: no expected shape is transcribed into this file, so a change to the contract turns these
 * cases red without anybody editing them.
 *
 * It does NOT prove that a server answers. Nothing here opens a socket, and no resolver — actual or
 * stub — is reached. A document that matches the contract perfectly will still fail against a
 * backend that implements the contract wrongly, and that is a different gate's job.
 *
 * ── Why the contract rather than the stub ───────────────────────────────────────────────────────
 *
 * The checkpoint's own words are that testing against the stub proves the client matches the
 * CONTRACT rather than whatever the implementation happens to return. The stub is no longer able to
 * do that: the backend resolves a field from its actual pool before its stub pool, so a caller
 * reaching the schema now meets the real resolver. Checking against the contract directly keeps the
 * stated purpose and drops the indirection that no longer holds.
 *
 * ── Why validation rather than an AST comparison ────────────────────────────────────────────────
 *
 * The contract is a SCHEMA; what this repository holds are DOCUMENTS. There is no document in the
 * contract to diff a document against, so comparing node by node would mean hand-writing the
 * expected document — reintroducing exactly the transcription step the check exists to remove, and
 * proving only that two strings the same author wrote agree with each other.
 *
 * The relation that genuinely holds between a document and a schema is validation, so that is what
 * is asserted, using graphql's own rules.
 *
 * ── Why two assertions and not one ──────────────────────────────────────────────────────────────
 *
 * `validate()` rejects a field the contract does not declare, an unknown or missing argument, and a
 * variable typed differently from the argument it feeds. It deliberately ACCEPTS a document that
 * selects only part of what the contract declares — partial selection is what GraphQL is for. So an
 * added field is caught by `validate()` and a missing one is caught by the coverage inspector.
 * Together they are exact in both directions, which one of them alone is not.
 */

const CONTRACT_FILE_PATH = path.resolve('tests/contract/staff-graphql.graphql')

describe('the documents of #expense-entry', () => {
  describe('to be valid operations against the pinned contract', () => {
    const cases = [
      {
        label: 'ExpensesQuery',
        params: {
          document: ExpensesQueryGraphqlPayload.document,
        },
      },
      {
        label: 'ExpenseCategoriesQuery',
        params: {
          document: ExpenseCategoriesQueryGraphqlPayload.document,
        },
      },
      {
        label: 'RecordExpenseMutation',
        params: {
          document: RecordExpenseMutationGraphqlPayload.document,
        },
      },
      {
        label: 'CorrectExpenseMutation',
        params: {
          document: CorrectExpenseMutationGraphqlPayload.document,
        },
      },
      {
        label: 'RemoveExpenseMutation',
        params: {
          document: RemoveExpenseMutationGraphqlPayload.document,
        },
      },
    ]

    test.each(cases)('label: $label', ({
      params,
    }) => {
      const schema = buildSchema(
        fs.readFileSync(CONTRACT_FILE_PATH, 'utf8')
      )

      const actual = validate(
        schema,
        parse(params.document)
      )

      expect(actual)
        .toHaveLength(0)
    })
  })
})

describe('the documents of #expense-entry', () => {
  describe('to select every field the contract declares for them', () => {
    const cases = [
      {
        label: 'ExpensesQuery',
        params: {
          document: ExpensesQueryGraphqlPayload.document,
        },
      },
      {
        label: 'ExpenseCategoriesQuery',
        params: {
          document: ExpenseCategoriesQueryGraphqlPayload.document,
        },
      },
      {
        label: 'RecordExpenseMutation',
        params: {
          document: RecordExpenseMutationGraphqlPayload.document,
        },
      },
      {
        label: 'CorrectExpenseMutation',
        params: {
          document: CorrectExpenseMutationGraphqlPayload.document,
        },
      },
      {
        label: 'RemoveExpenseMutation',
        params: {
          document: RemoveExpenseMutationGraphqlPayload.document,
        },
      },
    ]

    test.each(cases)('label: $label', ({
      params,
    }) => {
      const schema = buildSchema(
        fs.readFileSync(CONTRACT_FILE_PATH, 'utf8')
      )
      const inspector = DocumentFieldCoverageInspector.create({
        schema,
      })

      const actual = inspector.extractUnselectedFieldPaths({
        graphqlDocument: params.document,
      })

      expect(actual)
        .toHaveLength(0)
    })
  })
})

describe('the documents of #expense-entry', () => {
  /*
   * The two checks above both pass vacuously if a document names an operation the contract does not
   * have — `validate()` would fail, so that much is covered, but the coverage inspector reaching the
   * wrong root field would report nothing rather than complain. Pinning each document's root field
   * to the operation §11.2 says this screen calls keeps the pair honest about WHICH operation it
   * just checked.
   */
  describe('to call the operation the screen is specified to call', () => {
    const cases = [
      {
        label: 'ExpensesQuery',
        params: {
          document: ExpensesQueryGraphqlPayload.document,
        },
        expected: 'expenses',
      },
      {
        label: 'ExpenseCategoriesQuery',
        params: {
          document: ExpenseCategoriesQueryGraphqlPayload.document,
        },
        expected: 'expenseCategories',
      },
      {
        label: 'RecordExpenseMutation',
        params: {
          document: RecordExpenseMutationGraphqlPayload.document,
        },
        expected: 'recordExpense',
      },
      {
        label: 'CorrectExpenseMutation',
        params: {
          document: CorrectExpenseMutationGraphqlPayload.document,
        },
        expected: 'correctExpense',
      },
      {
        label: 'RemoveExpenseMutation',
        params: {
          document: RemoveExpenseMutationGraphqlPayload.document,
        },
        expected: 'removeExpense',
      },
    ]

    test.each(cases)('label: $label', ({
      params,
      expected,
    }) => {
      const [operation] = parse(params.document)
        .definitions

      const actual = operation.selectionSet
        .selections[0]
        .name
        .value

      expect(actual)
        .toBe(expected)
    })
  })
})
