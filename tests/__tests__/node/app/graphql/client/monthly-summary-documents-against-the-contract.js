import fs from 'node:fs'
import path from 'node:path'

import {
  buildSchema,
  parse,
  validate,
} from 'graphql'

import DocumentFieldCoverageInspector from '~/tests/contract/DocumentFieldCoverageInspector.js'

import MonthlyExpensesQueryGraphqlPayload from '~/app/graphql/client/queries/monthlyExpenses/MonthlyExpensesQueryGraphqlPayload'

/*
 * ────────────────────────────────────────────────────────────────────────────────────────────────
 * WHAT THIS FILE PROVES, AND WHAT IT DOES NOT
 * ────────────────────────────────────────────────────────────────────────────────────────────────
 *
 * It proves that the one document #monthly-summary sends is a legal operation against the agreed
 * contract, and that it asks for everything the contract offers it. The contract file is the
 * oracle: no expected shape is transcribed into this file, so a change to the contract turns these
 * cases red without anybody editing them.
 *
 * It is the sibling of `documents-against-the-contract.js`, which does the same for #expense-entry.
 * The two are separate files rather than one because each belongs to the feature whose documents it
 * checks, and its titles say which feature that is. The rationale in that file — why validation
 * rather than an AST comparison, and why the coverage walk is needed beside `validate()` — applies
 * here unchanged and is not repeated.
 *
 * It does NOT prove that a server answers, and nothing here opens a socket. Whether the client reads
 * the backend stub's answer is the separate question `monthly-expenses-against-the-stub.js` asks.
 *
 * §12.1 declares exactly one operation for this feature, so there is one document to check. The
 * cases are written as a `test.each` all the same, so that 1.2.0's export — which §12.1 says calls
 * `monthlyExpenses` rather than summing again — is added as a row rather than as a rewrite.
 */

const CONTRACT_FILE_PATH = path.resolve('tests/contract/staff-graphql.graphql')

describe('the documents of #monthly-summary', () => {
  describe('to be valid operations against the pinned contract', () => {
    const cases = [
      {
        label: 'MonthlyExpensesQuery',
        params: {
          document: MonthlyExpensesQueryGraphqlPayload.document,
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

describe('the documents of #monthly-summary', () => {
  describe('to select every field the contract declares for them', () => {
    const cases = [
      {
        label: 'MonthlyExpensesQuery',
        params: {
          document: MonthlyExpensesQueryGraphqlPayload.document,
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

describe('the documents of #monthly-summary', () => {
  /*
   * The two checks above both pass vacuously if a document names an operation the contract does not
   * have — `validate()` would fail, so that much is covered, but the coverage inspector reaching the
   * wrong root field would report nothing rather than complain. Pinning the document's root field to
   * the operation §12.1 says this screen calls keeps the pair honest about WHICH operation it just
   * checked, and in particular that it is not `expenses`, whose result shares the row type.
   */
  describe('to call the operation the screen is specified to call', () => {
    const cases = [
      {
        label: 'MonthlyExpensesQuery',
        params: {
          document: MonthlyExpensesQueryGraphqlPayload.document,
        },
        expected: 'monthlyExpenses',
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

describe('the documents of #monthly-summary', () => {
  /*
   * `validate()` checks that a variable's declared type FEEDS the argument it is used for; it does
   * not check that the document declares the variable the caller must supply, under the name the
   * caller supplies it by. The month the screen asks for reaches the server only if `$input` is the
   * name on both sides, so the declaration is pinned.
   */
  describe('to declare the variable the caller supplies the month by', () => {
    const cases = [
      {
        label: 'MonthlyExpensesQuery',
        params: {
          document: MonthlyExpensesQueryGraphqlPayload.document,
        },
        expected: 'input',
      },
    ]

    test.each(cases)('label: $label', ({
      params,
      expected,
    }) => {
      const [operation] = parse(params.document)
        .definitions

      const actual = operation.variableDefinitions[0]
        .variable
        .name
        .value

      expect(actual)
        .toBe(expected)
    })
  })
})
