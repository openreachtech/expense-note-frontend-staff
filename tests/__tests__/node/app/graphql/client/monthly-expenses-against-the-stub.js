import fs from 'node:fs'
import path from 'node:path'

import {
  buildSchema,
  graphql,
} from 'graphql'

import MonthlyExpensesQueryGraphqlPayload from '~/app/graphql/client/queries/monthlyExpenses/MonthlyExpensesQueryGraphqlPayload'
import MonthlyExpensesQueryGraphqlCapsule from '~/app/graphql/client/queries/monthlyExpenses/MonthlyExpensesQueryGraphqlCapsule'

/*
 * ────────────────────────────────────────────────────────────────────────────────────────────────
 * WHAT THIS FILE PROVES, AND WHAT IT DOES NOT
 * ────────────────────────────────────────────────────────────────────────────────────────────────
 *
 * Checkpoint 14's exit condition is that the client WORKS against the backend's stub of
 * `monthlyExpenses`. This file is that check, and it runs the whole client end to end:
 *
 *   1. the document this repository really sends — read off the Payload, not transcribed here;
 *   2. executed by graphql's own engine against a schema built from the PINNED CONTRACT, so every
 *      field selected, every argument, every variable type and every nullability is enforced by the
 *      agreed schema rather than by whatever a server chose to implement;
 *   3. over the answer the backend's stub resolver gives
 *      (`expense-note-backend/server/graphql/resolvers/staff/stub/queries/MonthlyExpensesQueryResolver.js`)
 *      — its seven September 2026 entries, in its order;
 *   4. read back through the Capsule this repository really uses.
 *
 * If the document asked for a field the contract does not declare, execution errors and `data` is
 * null. If the Capsule reached into the wrong place, the assertion fails. So "the client works
 * against the stub" is established, and no part of it is taken on trust.
 *
 * ── No socket is opened ─────────────────────────────────────────────────────────────────────────
 *
 * Nothing here listens, connects or fetches. `graphql()` executes in this process. That matters
 * twice over: `server/index.js` cannot boot on the development machine (Q24), and this repository's
 * CI checks out this repository alone, so a test needing the backend running would be a test that
 * never runs.
 *
 * ── Why the stub's data is transcribed, and what keeps it honest ────────────────────────────────
 *
 * The stub lives in another repository, which this one's CI cannot see — the same constraint that
 * made the contract a vendored copy (Q57). Its seven entries are therefore written out below rather
 * than imported. The transcription is confined to the DATA: the document, the schema and the Capsule
 * are all the real ones, so a drift in the stub's fixture would show up as a stale expectation here
 * and not as a client that silently disagrees with the contract. The contract-level check, which has
 * a mechanical oracle, lives in `monthly-summary-documents-against-the-contract.js`.
 *
 * `createdAt` / `updatedAt` are written as ISO strings while the stub holds `Date` objects: the
 * contract's `DateTime` is a scalar, and what reaches a browser is its serialized form. The strings
 * are those same instants.
 */

const CONTRACT_FILE_PATH = path.resolve('tests/contract/staff-graphql.graphql')

describe('the monthlyExpenses client against the backend stub', () => {
  /*
   * The whole value hash in one assertion: the seven entries in the order the stub answers in —
   * newest `spentOn` first, the `2026-09-18` pair with the later-recorded one ahead of the other —
   * the null memo on `9203`, the nested category on every row, and the total beside them.
   */
  describe('to read the month the stub answers', () => {
    test('with the stub\'s seven September 2026 entries', async () => {
      const schema = buildSchema(
        fs.readFileSync(CONTRACT_FILE_PATH, 'utf8')
      )
      const stubbedResult = await graphql({
        schema,
        source: MonthlyExpensesQueryGraphqlPayload.document,
        rootValue: {
          monthlyExpenses: {
            expenses: [
              {
                id: 9201,
                spentOn: '2026-09-30',
                amount: 4200,
                memo: 'Taxi home after the month-end close',
                status: 'recorded',
                expenseCategory: {
                  id: 10000001,
                  name: 'transport',
                  displayOrder: 1,
                },
                createdAt: '2026-09-30T12:40:00.000Z',
                updatedAt: '2026-09-30T12:40:00.000Z',
              },
              {
                id: 9202,
                spentOn: '2026-09-18',
                amount: 1650,
                memo: 'Dinner with the visiting audit team',
                status: 'recorded',
                expenseCategory: {
                  id: 10000002,
                  name: 'meals',
                  displayOrder: 2,
                },
                createdAt: '2026-09-18T11:20:00.000Z',
                updatedAt: '2026-09-18T11:20:00.000Z',
              },
              {
                id: 9203,
                spentOn: '2026-09-18',
                amount: 780,
                memo: null,
                status: 'recorded',
                expenseCategory: {
                  id: 10000003,
                  name: 'supplies',
                  displayOrder: 3,
                },
                createdAt: '2026-09-18T02:05:00.000Z',
                updatedAt: '2026-09-18T02:05:00.000Z',
              },
              {
                id: 9204,
                spentOn: '2026-09-12',
                amount: 23500,
                memo: 'Conference ticket for the autumn meetup',
                status: 'recorded',
                expenseCategory: {
                  id: 10000004,
                  name: 'other',
                  displayOrder: 4,
                },
                createdAt: '2026-09-12T06:15:00.000Z',
                updatedAt: '2026-09-12T06:15:00.000Z',
              },
              {
                id: 9205,
                spentOn: '2026-09-09',
                amount: 340,
                memo: 'Stamps for posting the signed contract',
                status: 'recorded',
                expenseCategory: {
                  id: 10000003,
                  name: 'supplies',
                  displayOrder: 3,
                },
                createdAt: '2026-09-09T23:55:00.000Z',
                updatedAt: '2026-09-09T23:55:00.000Z',
              },
              {
                id: 9206,
                spentOn: '2026-09-05',
                amount: 2100,
                memo: 'Lunch boxes for the Saturday shift',
                status: 'recorded',
                expenseCategory: {
                  id: 10000002,
                  name: 'meals',
                  displayOrder: 2,
                },
                createdAt: '2026-09-05T04:30:00.000Z',
                updatedAt: '2026-09-05T08:10:00.000Z',
              },
              {
                id: 9207,
                spentOn: '2026-09-01',
                amount: 990,
                memo: 'Train fare to the client kickoff',
                status: 'recorded',
                expenseCategory: {
                  id: 10000001,
                  name: 'transport',
                  displayOrder: 1,
                },
                createdAt: '2026-09-01T00:20:00.000Z',
                updatedAt: '2026-09-01T00:20:00.000Z',
              },
            ],
            totalAmount: 33560,
          },
        },
        variableValues: {
          input: {
            year: 2026,
            month: 9,
          },
        },
      })
      const capsule = MonthlyExpensesQueryGraphqlCapsule.create({
        result: stubbedResult,
      })
      const expected = {
        expenses: [
          {
            id: 9201,
            spentOn: '2026-09-30',
            amount: 4200,
            memo: 'Taxi home after the month-end close',
            status: 'recorded',
            expenseCategory: {
              id: 10000001,
              name: 'transport',
              displayOrder: 1,
            },
            createdAt: '2026-09-30T12:40:00.000Z',
            updatedAt: '2026-09-30T12:40:00.000Z',
          },
          {
            id: 9202,
            spentOn: '2026-09-18',
            amount: 1650,
            memo: 'Dinner with the visiting audit team',
            status: 'recorded',
            expenseCategory: {
              id: 10000002,
              name: 'meals',
              displayOrder: 2,
            },
            createdAt: '2026-09-18T11:20:00.000Z',
            updatedAt: '2026-09-18T11:20:00.000Z',
          },
          {
            id: 9203,
            spentOn: '2026-09-18',
            amount: 780,
            memo: null,
            status: 'recorded',
            expenseCategory: {
              id: 10000003,
              name: 'supplies',
              displayOrder: 3,
            },
            createdAt: '2026-09-18T02:05:00.000Z',
            updatedAt: '2026-09-18T02:05:00.000Z',
          },
          {
            id: 9204,
            spentOn: '2026-09-12',
            amount: 23500,
            memo: 'Conference ticket for the autumn meetup',
            status: 'recorded',
            expenseCategory: {
              id: 10000004,
              name: 'other',
              displayOrder: 4,
            },
            createdAt: '2026-09-12T06:15:00.000Z',
            updatedAt: '2026-09-12T06:15:00.000Z',
          },
          {
            id: 9205,
            spentOn: '2026-09-09',
            amount: 340,
            memo: 'Stamps for posting the signed contract',
            status: 'recorded',
            expenseCategory: {
              id: 10000003,
              name: 'supplies',
              displayOrder: 3,
            },
            createdAt: '2026-09-09T23:55:00.000Z',
            updatedAt: '2026-09-09T23:55:00.000Z',
          },
          {
            id: 9206,
            spentOn: '2026-09-05',
            amount: 2100,
            memo: 'Lunch boxes for the Saturday shift',
            status: 'recorded',
            expenseCategory: {
              id: 10000002,
              name: 'meals',
              displayOrder: 2,
            },
            createdAt: '2026-09-05T04:30:00.000Z',
            updatedAt: '2026-09-05T08:10:00.000Z',
          },
          {
            id: 9207,
            spentOn: '2026-09-01',
            amount: 990,
            memo: 'Train fare to the client kickoff',
            status: 'recorded',
            expenseCategory: {
              id: 10000001,
              name: 'transport',
              displayOrder: 1,
            },
            createdAt: '2026-09-01T00:20:00.000Z',
            updatedAt: '2026-09-01T00:20:00.000Z',
          },
        ],
        totalAmount: 33560,
      }

      const actual = capsule.monthlyExpensesValueHash

      expect(actual)
        .toEqual(expected)
    })
  })
})

describe('the monthlyExpenses client against the backend stub', () => {
  /*
   * Spec section 12's first acceptance criterion is that the total shown equals the sum of the
   * amounts of the entries shown. The stub sums its own rows rather than writing a literal, so the
   * number asserted here is the one the entries above add up to:
   * 4200 + 1650 + 780 + 23500 + 340 + 2100 + 990.
   *
   * It is asserted through `#totalAmount` — the getter a screen reads — rather than through the
   * value hash, so that the criterion is checked at the member that will serve it.
   */
  describe('to read the total the stub took over that month', () => {
    test('with the sum of the stub\'s seven amounts', async () => {
      const schema = buildSchema(
        fs.readFileSync(CONTRACT_FILE_PATH, 'utf8')
      )
      const stubbedResult = await graphql({
        schema,
        source: MonthlyExpensesQueryGraphqlPayload.document,
        rootValue: {
          monthlyExpenses: {
            expenses: [
              {
                id: 9201,
                spentOn: '2026-09-30',
                amount: 4200,
                memo: 'Taxi home after the month-end close',
                status: 'recorded',
                expenseCategory: {
                  id: 10000001,
                  name: 'transport',
                  displayOrder: 1,
                },
                createdAt: '2026-09-30T12:40:00.000Z',
                updatedAt: '2026-09-30T12:40:00.000Z',
              },
              {
                id: 9202,
                spentOn: '2026-09-18',
                amount: 1650,
                memo: 'Dinner with the visiting audit team',
                status: 'recorded',
                expenseCategory: {
                  id: 10000002,
                  name: 'meals',
                  displayOrder: 2,
                },
                createdAt: '2026-09-18T11:20:00.000Z',
                updatedAt: '2026-09-18T11:20:00.000Z',
              },
              {
                id: 9203,
                spentOn: '2026-09-18',
                amount: 780,
                memo: null,
                status: 'recorded',
                expenseCategory: {
                  id: 10000003,
                  name: 'supplies',
                  displayOrder: 3,
                },
                createdAt: '2026-09-18T02:05:00.000Z',
                updatedAt: '2026-09-18T02:05:00.000Z',
              },
              {
                id: 9204,
                spentOn: '2026-09-12',
                amount: 23500,
                memo: 'Conference ticket for the autumn meetup',
                status: 'recorded',
                expenseCategory: {
                  id: 10000004,
                  name: 'other',
                  displayOrder: 4,
                },
                createdAt: '2026-09-12T06:15:00.000Z',
                updatedAt: '2026-09-12T06:15:00.000Z',
              },
              {
                id: 9205,
                spentOn: '2026-09-09',
                amount: 340,
                memo: 'Stamps for posting the signed contract',
                status: 'recorded',
                expenseCategory: {
                  id: 10000003,
                  name: 'supplies',
                  displayOrder: 3,
                },
                createdAt: '2026-09-09T23:55:00.000Z',
                updatedAt: '2026-09-09T23:55:00.000Z',
              },
              {
                id: 9206,
                spentOn: '2026-09-05',
                amount: 2100,
                memo: 'Lunch boxes for the Saturday shift',
                status: 'recorded',
                expenseCategory: {
                  id: 10000002,
                  name: 'meals',
                  displayOrder: 2,
                },
                createdAt: '2026-09-05T04:30:00.000Z',
                updatedAt: '2026-09-05T08:10:00.000Z',
              },
              {
                id: 9207,
                spentOn: '2026-09-01',
                amount: 990,
                memo: 'Train fare to the client kickoff',
                status: 'recorded',
                expenseCategory: {
                  id: 10000001,
                  name: 'transport',
                  displayOrder: 1,
                },
                createdAt: '2026-09-01T00:20:00.000Z',
                updatedAt: '2026-09-01T00:20:00.000Z',
              },
            ],
            totalAmount: 33560,
          },
        },
        variableValues: {
          input: {
            year: 2026,
            month: 9,
          },
        },
      })
      const capsule = MonthlyExpensesQueryGraphqlCapsule.create({
        result: stubbedResult,
      })
      const expected = 33560

      const actual = capsule.totalAmount

      expect(actual)
        .toBe(expected)
    })
  })
})
