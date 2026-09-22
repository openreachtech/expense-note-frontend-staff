import BaseAppContext from '~/app/vue/contexts/BaseAppContext.js'

import ExpensesQueryGraphqlCapsule from '~/app/graphql/client/queries/expenses/ExpensesQueryGraphqlCapsule.js'
import ExpenseCategoriesQueryGraphqlCapsule from '~/app/graphql/client/queries/expenseCategories/ExpenseCategoriesQueryGraphqlCapsule.js'
import RecordExpenseMutationGraphqlCapsule from '~/app/graphql/client/mutations/recordExpense/RecordExpenseMutationGraphqlCapsule.js'
import CorrectExpenseMutationGraphqlCapsule from '~/app/graphql/client/mutations/correctExpense/CorrectExpenseMutationGraphqlCapsule.js'
import RemoveExpenseMutationGraphqlCapsule from '~/app/graphql/client/mutations/removeExpense/RemoveExpenseMutationGraphqlCapsule.js'
import SignOutMutationGraphqlCapsule from '~/app/graphql/client/mutations/signOut/SignOutMutationGraphqlCapsule.js'

import ExpensesPageContext from '~/pages/expenses/ExpensesPageContext.js'

/*
 * The key furo reads a response's content from. It is written as a constant because the name furo
 * chose for it is one `@openreachtech/eslint-config` denies as an identifier, and the envelope is
 * furo's to name, not this repository's.
 */
const RESPONSE_CONTENT_FIELD = 'data'

describe('ExpensesPageContext', () => {
  describe('super class', () => {
    test('to be derived class of BaseAppContext', () => {
      const actual = ExpensesPageContext.prototype

      expect(actual)
        .toBeInstanceOf(BaseAppContext)
    })
  })
})

describe('ExpensesPageContext', () => {
  describe('.create()', () => {
    describe('to be instance of ExpensesPageContext', () => {
      const cases = [
        {
          params: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            formValueHashReactive: {
              spentOn: null,
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            router: {
              replace: async () => {},
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: 'first-created-expenses-capsule',
                },
              },
              expenseCategories: {
                capsuleRef: {
                  value: 'first-created-expenseCategories-capsule',
                },
              },
              recordExpense: {
                capsuleRef: {
                  value: 'first-created-recordExpense-capsule',
                },
              },
              correctExpense: {
                capsuleRef: {
                  value: 'first-created-correctExpense-capsule',
                },
              },
              removeExpense: {
                capsuleRef: {
                  value: 'first-created-removeExpense-capsule',
                },
              },
              signOut: {
                capsuleRef: {
                  value: 'first-created-signOut-capsule',
                },
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
        },
        {
          params: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page expenses',
              },
            },
            formValueHashReactive: {
              spentOn: '2026-09-20',
              amount: 1200,
              expenseCategoryId: 10000001,
              memo: 'Taxi back from the client',
            },
            statusReactive: {
              isLoadingExpenses: true,
              isLoadingExpenseCategories: true,
              isRecordingExpense: true,
              isRemovingExpense: true,
              isSigningOut: true,
              correctingExpenseId: 10200015,
              removingExpenseId: 10200016,
            },
            errorMessageHashReactive: {
              submittingExpense: 'The date the money was paid cannot be later than today.',
              removingExpense: 'That entry is not available. Reload the page and try again.',
              readingExpenses: 'The entries could not be loaded. Reload the page and try again.',
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            router: {
              replace: async () => {},
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: 'second-created-expenses-capsule',
                },
              },
              expenseCategories: {
                capsuleRef: {
                  value: 'second-created-expenseCategories-capsule',
                },
              },
              recordExpense: {
                capsuleRef: {
                  value: 'second-created-recordExpense-capsule',
                },
              },
              correctExpense: {
                capsuleRef: {
                  value: 'second-created-correctExpense-capsule',
                },
              },
              removeExpense: {
                capsuleRef: {
                  value: 'second-created-removeExpense-capsule',
                },
              },
              signOut: {
                capsuleRef: {
                  value: 'second-created-signOut-capsule',
                },
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
        },
      ]

      test.each(cases)('attrs.class: $params.componentContext.attrs.class', ({
        params,
      }) => {
        const actual = ExpensesPageContext.create(params)

        expect(actual)
          .toBeInstanceOf(ExpensesPageContext)
      })
    })

    describe('should be call by constructor', () => {
      const cases = [
        {
          params: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            formValueHashReactive: {
              spentOn: null,
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            router: {
              replace: async () => {},
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: 'first-delegated-expenses-capsule',
                },
              },
              expenseCategories: {
                capsuleRef: {
                  value: 'first-delegated-expenseCategories-capsule',
                },
              },
              recordExpense: {
                capsuleRef: {
                  value: 'first-delegated-recordExpense-capsule',
                },
              },
              correctExpense: {
                capsuleRef: {
                  value: 'first-delegated-correctExpense-capsule',
                },
              },
              removeExpense: {
                capsuleRef: {
                  value: 'first-delegated-removeExpense-capsule',
                },
              },
              signOut: {
                capsuleRef: {
                  value: 'first-delegated-signOut-capsule',
                },
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
        },
        {
          params: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page expenses',
              },
            },
            formValueHashReactive: {
              spentOn: '2026-09-19',
              amount: 800,
              expenseCategoryId: 10000003,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            router: {
              replace: async () => {},
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: 'second-delegated-expenses-capsule',
                },
              },
              expenseCategories: {
                capsuleRef: {
                  value: 'second-delegated-expenseCategories-capsule',
                },
              },
              recordExpense: {
                capsuleRef: {
                  value: 'second-delegated-recordExpense-capsule',
                },
              },
              correctExpense: {
                capsuleRef: {
                  value: 'second-delegated-correctExpense-capsule',
                },
              },
              removeExpense: {
                capsuleRef: {
                  value: 'second-delegated-removeExpense-capsule',
                },
              },
              signOut: {
                capsuleRef: {
                  value: 'second-delegated-signOut-capsule',
                },
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
        },
      ]

      test.each(cases)('attrs.class: $params.componentContext.attrs.class', ({
        params,
      }) => {
        const SpyClass = globalThis.constructorSpy.spyOn(ExpensesPageContext)

        SpyClass.create(params)

        expect(SpyClass.__spy__)
          .toHaveBeenCalledWith(params)
      })
    })
  })
})

describe('ExpensesPageContext', () => {
  describe('constructor', () => {
    describe('to keep properties', () => {
      describe('#props', () => {
        const cases = [
          {
            params: {
              props: {},
              componentContext: {
                attrs: {
                  class: 'unit-page',
                },
              },
              formValueHashReactive: {
                spentOn: null,
                amount: null,
                expenseCategoryId: null,
                memo: null,
              },
              statusReactive: {
                isLoadingExpenses: false,
                isLoadingExpenseCategories: false,
                isRecordingExpense: false,
                isRemovingExpense: false,
                isSigningOut: false,
                correctingExpenseId: null,
                removingExpenseId: null,
              },
              errorMessageHashReactive: {
                submittingExpense: null,
                removingExpense: null,
                readingExpenses: null,
              },
              responseHashReactive: {
                expenses: [],
                expensesPagination: null,
                expenseCategories: [],
              },
            },
          },
          {
            params: {
              props: {
                isEmbedded: true,
              },
              componentContext: {
                attrs: {
                  class: 'unit-page expenses',
                },
              },
              formValueHashReactive: {
                spentOn: null,
                amount: null,
                expenseCategoryId: null,
                memo: null,
              },
              statusReactive: {
                isLoadingExpenses: false,
                isLoadingExpenseCategories: false,
                isRecordingExpense: false,
                isRemovingExpense: false,
                isSigningOut: false,
                correctingExpenseId: null,
                removingExpenseId: null,
              },
              errorMessageHashReactive: {
                submittingExpense: null,
                removingExpense: null,
                readingExpenses: null,
              },
              responseHashReactive: {
                expenses: [],
                expensesPagination: null,
                expenseCategories: [],
              },
            },
          },
        ]

        test.each(cases)('attrs.class: $params.componentContext.attrs.class', ({
          params,
        }) => {
          const actual = new ExpensesPageContext(params)

          expect(actual)
            .toHaveProperty('props', params.props)
        })
      })

      describe('#componentContext', () => {
        const cases = [
          {
            params: {
              props: {},
              componentContext: {
                attrs: {
                  class: 'unit-page',
                },
              },
              formValueHashReactive: {
                spentOn: null,
                amount: null,
                expenseCategoryId: null,
                memo: null,
              },
              statusReactive: {
                isLoadingExpenses: false,
                isLoadingExpenseCategories: false,
                isRecordingExpense: false,
                isRemovingExpense: false,
                isSigningOut: false,
                correctingExpenseId: null,
                removingExpenseId: null,
              },
              errorMessageHashReactive: {
                submittingExpense: null,
                removingExpense: null,
                readingExpenses: null,
              },
              responseHashReactive: {
                expenses: [],
                expensesPagination: null,
                expenseCategories: [],
              },
            },
          },
          {
            params: {
              props: {},
              componentContext: {
                attrs: {
                  class: 'unit-page expenses',
                },
              },
              formValueHashReactive: {
                spentOn: null,
                amount: null,
                expenseCategoryId: null,
                memo: null,
              },
              statusReactive: {
                isLoadingExpenses: false,
                isLoadingExpenseCategories: false,
                isRecordingExpense: false,
                isRemovingExpense: false,
                isSigningOut: false,
                correctingExpenseId: null,
                removingExpenseId: null,
              },
              errorMessageHashReactive: {
                submittingExpense: null,
                removingExpense: null,
                readingExpenses: null,
              },
              responseHashReactive: {
                expenses: [],
                expensesPagination: null,
                expenseCategories: [],
              },
            },
          },
        ]

        test.each(cases)('attrs.class: $params.componentContext.attrs.class', ({
          params,
        }) => {
          const actual = new ExpensesPageContext(params)

          expect(actual)
            .toHaveProperty('componentContext', params.componentContext)
        })
      })

      describe('#formValueHashReactive', () => {
        const cases = [
          {
            params: {
              props: {},
              componentContext: {
                attrs: {
                  class: 'unit-page',
                },
              },
              formValueHashReactive: {
                spentOn: null,
                amount: null,
                expenseCategoryId: null,
                memo: null,
              },
              statusReactive: {
                isLoadingExpenses: false,
                isLoadingExpenseCategories: false,
                isRecordingExpense: false,
                isRemovingExpense: false,
                isSigningOut: false,
                correctingExpenseId: null,
                removingExpenseId: null,
              },
              errorMessageHashReactive: {
                submittingExpense: null,
                removingExpense: null,
                readingExpenses: null,
              },
              responseHashReactive: {
                expenses: [],
                expensesPagination: null,
                expenseCategories: [],
              },
            },
          },
          {
            params: {
              props: {},
              componentContext: {
                attrs: {
                  class: 'unit-page expenses',
                },
              },
              formValueHashReactive: {
                spentOn: '2026-09-20',
                amount: 1200,
                expenseCategoryId: 10000001,
                memo: 'Taxi back from the client',
              },
              statusReactive: {
                isLoadingExpenses: false,
                isLoadingExpenseCategories: false,
                isRecordingExpense: false,
                isRemovingExpense: false,
                isSigningOut: false,
                correctingExpenseId: null,
                removingExpenseId: null,
              },
              errorMessageHashReactive: {
                submittingExpense: null,
                removingExpense: null,
                readingExpenses: null,
              },
              responseHashReactive: {
                expenses: [],
                expensesPagination: null,
                expenseCategories: [],
              },
            },
          },
        ]

        test.each(cases)('spentOn: $params.formValueHashReactive.spentOn', ({
          params,
        }) => {
          const actual = new ExpensesPageContext(params)

          expect(actual)
            .toHaveProperty('formValueHashReactive', params.formValueHashReactive)
        })
      })

      describe('#statusReactive', () => {
        const cases = [
          {
            params: {
              props: {},
              componentContext: {
                attrs: {
                  class: 'unit-page',
                },
              },
              formValueHashReactive: {
                spentOn: null,
                amount: null,
                expenseCategoryId: null,
                memo: null,
              },
              statusReactive: {
                isLoadingExpenses: false,
                isLoadingExpenseCategories: false,
                isRecordingExpense: false,
                isRemovingExpense: false,
                isSigningOut: false,
                correctingExpenseId: null,
                removingExpenseId: null,
              },
              errorMessageHashReactive: {
                submittingExpense: null,
                removingExpense: null,
                readingExpenses: null,
              },
              responseHashReactive: {
                expenses: [],
                expensesPagination: null,
                expenseCategories: [],
              },
            },
          },
          {
            params: {
              props: {},
              componentContext: {
                attrs: {
                  class: 'unit-page expenses',
                },
              },
              formValueHashReactive: {
                spentOn: null,
                amount: null,
                expenseCategoryId: null,
                memo: null,
              },
              statusReactive: {
                isLoadingExpenses: true,
                isLoadingExpenseCategories: false,
                isRecordingExpense: false,
                isRemovingExpense: false,
                isSigningOut: false,
                correctingExpenseId: 10200016,
                removingExpenseId: null,
              },
              errorMessageHashReactive: {
                submittingExpense: null,
                removingExpense: null,
                readingExpenses: null,
              },
              responseHashReactive: {
                expenses: [],
                expensesPagination: null,
                expenseCategories: [],
              },
            },
          },
        ]

        test.each(cases)('correctingExpenseId: $params.statusReactive.correctingExpenseId', ({
          params,
        }) => {
          const actual = new ExpensesPageContext(params)

          expect(actual)
            .toHaveProperty('statusReactive', params.statusReactive)
        })
      })

      describe('#errorMessageHashReactive', () => {
        const cases = [
          {
            params: {
              props: {},
              componentContext: {
                attrs: {
                  class: 'unit-page',
                },
              },
              formValueHashReactive: {
                spentOn: null,
                amount: null,
                expenseCategoryId: null,
                memo: null,
              },
              statusReactive: {
                isLoadingExpenses: false,
                isLoadingExpenseCategories: false,
                isRecordingExpense: false,
                isRemovingExpense: false,
                isSigningOut: false,
                correctingExpenseId: null,
                removingExpenseId: null,
              },
              errorMessageHashReactive: {
                submittingExpense: null,
                removingExpense: null,
                readingExpenses: null,
              },
              responseHashReactive: {
                expenses: [],
                expensesPagination: null,
                expenseCategories: [],
              },
            },
          },
          {
            params: {
              props: {},
              componentContext: {
                attrs: {
                  class: 'unit-page expenses',
                },
              },
              formValueHashReactive: {
                spentOn: null,
                amount: null,
                expenseCategoryId: null,
                memo: null,
              },
              statusReactive: {
                isLoadingExpenses: false,
                isLoadingExpenseCategories: false,
                isRecordingExpense: false,
                isRemovingExpense: false,
                isSigningOut: false,
                correctingExpenseId: null,
                removingExpenseId: null,
              },
              errorMessageHashReactive: {
                submittingExpense: 'The date the money was paid cannot be later than today.',
                removingExpense: null,
                readingExpenses: null,
              },
              responseHashReactive: {
                expenses: [],
                expensesPagination: null,
                expenseCategories: [],
              },
            },
          },
        ]

        test.each(cases)('submittingExpense: $params.errorMessageHashReactive.submittingExpense', ({
          params,
        }) => {
          const actual = new ExpensesPageContext(params)

          expect(actual)
            .toHaveProperty('errorMessageHashReactive', params.errorMessageHashReactive)
        })
      })

      describe('#responseHashReactive', () => {
        const cases = [
          {
            params: {
              props: {},
              componentContext: {
                attrs: {
                  class: 'unit-page',
                },
              },
              formValueHashReactive: {
                spentOn: null,
                amount: null,
                expenseCategoryId: null,
                memo: null,
              },
              statusReactive: {
                isLoadingExpenses: false,
                isLoadingExpenseCategories: false,
                isRecordingExpense: false,
                isRemovingExpense: false,
                isSigningOut: false,
                correctingExpenseId: null,
                removingExpenseId: null,
              },
              errorMessageHashReactive: {
                submittingExpense: null,
                removingExpense: null,
                readingExpenses: null,
              },
              responseHashReactive: {
                expenses: [],
                expensesPagination: null,
                expenseCategories: [],
              },
            },
          },
          {
            params: {
              props: {},
              componentContext: {
                attrs: {
                  class: 'unit-page expenses',
                },
              },
              formValueHashReactive: {
                spentOn: null,
                amount: null,
                expenseCategoryId: null,
                memo: null,
              },
              statusReactive: {
                isLoadingExpenses: false,
                isLoadingExpenseCategories: false,
                isRecordingExpense: false,
                isRemovingExpense: false,
                isSigningOut: false,
                correctingExpenseId: null,
                removingExpenseId: null,
              },
              errorMessageHashReactive: {
                submittingExpense: null,
                removingExpense: null,
                readingExpenses: null,
              },
              responseHashReactive: {
                expenses: [],
                expensesPagination: {
                  limit: 20,
                  offset: 20,
                  sort: null,
                  totalRecords: 41,
                },
                expenseCategories: [],
              },
            },
          },
        ]

        test.each(cases)('expensesPagination: $params.responseHashReactive.expensesPagination', ({
          params,
        }) => {
          const actual = new ExpensesPageContext(params)

          expect(actual)
            .toHaveProperty('responseHashReactive', params.responseHashReactive)
        })
      })

      describe('#router', () => {
        const cases = [
          {
            params: {
              props: {},
              componentContext: {
                attrs: {
                  class: 'unit-page',
                },
              },
              formValueHashReactive: {
                spentOn: null,
                amount: null,
                expenseCategoryId: null,
                memo: null,
              },
              statusReactive: {
                isLoadingExpenses: false,
                isLoadingExpenseCategories: false,
                isRecordingExpense: false,
                isRemovingExpense: false,
                isSigningOut: false,
                correctingExpenseId: null,
                removingExpenseId: null,
              },
              errorMessageHashReactive: {
                submittingExpense: null,
                removingExpense: null,
                readingExpenses: null,
              },
              responseHashReactive: {
                expenses: [],
                expensesPagination: null,
                expenseCategories: [],
              },
              router: {
                replace: async () => '/sign-in',
              },
              graphqlClientHash: {
                expenses: {
                  capsuleRef: {
                    value: 'first-kept-expenses-capsule',
                  },
                },
                expenseCategories: {
                  capsuleRef: {
                    value: 'first-kept-expenseCategories-capsule',
                  },
                },
                recordExpense: {
                  capsuleRef: {
                    value: 'first-kept-recordExpense-capsule',
                  },
                },
                correctExpense: {
                  capsuleRef: {
                    value: 'first-kept-correctExpense-capsule',
                  },
                },
                removeExpense: {
                  capsuleRef: {
                    value: 'first-kept-removeExpense-capsule',
                  },
                },
                signOut: {
                  capsuleRef: {
                    value: 'first-kept-signOut-capsule',
                  },
                },
              },
              accessTokenClerk: {
                retrieveToken: () => 'first-kept-access-token',
              },
            },
          },
          {
            params: {
              props: {},
              componentContext: {
                attrs: {
                  class: 'unit-page expenses',
                },
              },
              formValueHashReactive: {
                spentOn: '2026-09-19',
                amount: 2400,
                expenseCategoryId: 10000003,
                memo: 'Lunch with the client',
              },
              statusReactive: {
                isLoadingExpenses: false,
                isLoadingExpenseCategories: false,
                isRecordingExpense: false,
                isRemovingExpense: false,
                isSigningOut: false,
                correctingExpenseId: null,
                removingExpenseId: null,
              },
              errorMessageHashReactive: {
                submittingExpense: null,
                removingExpense: null,
                readingExpenses: null,
              },
              responseHashReactive: {
                expenses: [],
                expensesPagination: null,
                expenseCategories: [],
              },
              router: {
                replace: async () => '/expenses',
              },
              graphqlClientHash: {
                expenses: {
                  capsuleRef: {
                    value: 'second-kept-expenses-capsule',
                  },
                },
                expenseCategories: {
                  capsuleRef: {
                    value: 'second-kept-expenseCategories-capsule',
                  },
                },
                recordExpense: {
                  capsuleRef: {
                    value: 'second-kept-recordExpense-capsule',
                  },
                },
                correctExpense: {
                  capsuleRef: {
                    value: 'second-kept-correctExpense-capsule',
                  },
                },
                removeExpense: {
                  capsuleRef: {
                    value: 'second-kept-removeExpense-capsule',
                  },
                },
                signOut: {
                  capsuleRef: {
                    value: 'second-kept-signOut-capsule',
                  },
                },
              },
              accessTokenClerk: {
                retrieveToken: () => 'second-kept-access-token',
              },
            },
          },
        ]

        test.each(cases)('attrs.class: $params.componentContext.attrs.class', ({
          params,
        }) => {
          const actual = new ExpensesPageContext(params)

          expect(actual)
            .toHaveProperty('router', params.router)
        })
      })

      describe('#graphqlClientHash', () => {
        const cases = [
          {
            params: {
              props: {},
              componentContext: {
                attrs: {
                  class: 'unit-page',
                },
              },
              formValueHashReactive: {
                spentOn: null,
                amount: null,
                expenseCategoryId: null,
                memo: null,
              },
              statusReactive: {
                isLoadingExpenses: false,
                isLoadingExpenseCategories: false,
                isRecordingExpense: false,
                isRemovingExpense: false,
                isSigningOut: false,
                correctingExpenseId: null,
                removingExpenseId: null,
              },
              errorMessageHashReactive: {
                submittingExpense: null,
                removingExpense: null,
                readingExpenses: null,
              },
              responseHashReactive: {
                expenses: [],
                expensesPagination: null,
                expenseCategories: [],
              },
              router: {
                replace: async () => '/sign-in',
              },
              graphqlClientHash: {
                expenses: {
                  capsuleRef: {
                    value: 'first-kept-expenses-capsule',
                  },
                },
                expenseCategories: {
                  capsuleRef: {
                    value: 'first-kept-expenseCategories-capsule',
                  },
                },
                recordExpense: {
                  capsuleRef: {
                    value: 'first-kept-recordExpense-capsule',
                  },
                },
                correctExpense: {
                  capsuleRef: {
                    value: 'first-kept-correctExpense-capsule',
                  },
                },
                removeExpense: {
                  capsuleRef: {
                    value: 'first-kept-removeExpense-capsule',
                  },
                },
                signOut: {
                  capsuleRef: {
                    value: 'first-kept-signOut-capsule',
                  },
                },
              },
              accessTokenClerk: {
                retrieveToken: () => 'first-kept-access-token',
              },
            },
          },
          {
            params: {
              props: {},
              componentContext: {
                attrs: {
                  class: 'unit-page expenses',
                },
              },
              formValueHashReactive: {
                spentOn: '2026-09-19',
                amount: 2400,
                expenseCategoryId: 10000003,
                memo: 'Lunch with the client',
              },
              statusReactive: {
                isLoadingExpenses: false,
                isLoadingExpenseCategories: false,
                isRecordingExpense: false,
                isRemovingExpense: false,
                isSigningOut: false,
                correctingExpenseId: null,
                removingExpenseId: null,
              },
              errorMessageHashReactive: {
                submittingExpense: null,
                removingExpense: null,
                readingExpenses: null,
              },
              responseHashReactive: {
                expenses: [],
                expensesPagination: null,
                expenseCategories: [],
              },
              router: {
                replace: async () => '/expenses',
              },
              graphqlClientHash: {
                expenses: {
                  capsuleRef: {
                    value: 'second-kept-expenses-capsule',
                  },
                },
                expenseCategories: {
                  capsuleRef: {
                    value: 'second-kept-expenseCategories-capsule',
                  },
                },
                recordExpense: {
                  capsuleRef: {
                    value: 'second-kept-recordExpense-capsule',
                  },
                },
                correctExpense: {
                  capsuleRef: {
                    value: 'second-kept-correctExpense-capsule',
                  },
                },
                removeExpense: {
                  capsuleRef: {
                    value: 'second-kept-removeExpense-capsule',
                  },
                },
                signOut: {
                  capsuleRef: {
                    value: 'second-kept-signOut-capsule',
                  },
                },
              },
              accessTokenClerk: {
                retrieveToken: () => 'second-kept-access-token',
              },
            },
          },
        ]

        test.each(cases)('expenses capsule: $params.graphqlClientHash.expenses.capsuleRef.value', ({
          params,
        }) => {
          const actual = new ExpensesPageContext(params)

          expect(actual)
            .toHaveProperty('graphqlClientHash', params.graphqlClientHash)
        })
      })

      describe('#accessTokenClerk', () => {
        const cases = [
          {
            params: {
              props: {},
              componentContext: {
                attrs: {
                  class: 'unit-page',
                },
              },
              formValueHashReactive: {
                spentOn: null,
                amount: null,
                expenseCategoryId: null,
                memo: null,
              },
              statusReactive: {
                isLoadingExpenses: false,
                isLoadingExpenseCategories: false,
                isRecordingExpense: false,
                isRemovingExpense: false,
                isSigningOut: false,
                correctingExpenseId: null,
                removingExpenseId: null,
              },
              errorMessageHashReactive: {
                submittingExpense: null,
                removingExpense: null,
                readingExpenses: null,
              },
              responseHashReactive: {
                expenses: [],
                expensesPagination: null,
                expenseCategories: [],
              },
              router: {
                replace: async () => '/sign-in',
              },
              graphqlClientHash: {
                expenses: {
                  capsuleRef: {
                    value: 'first-kept-expenses-capsule',
                  },
                },
                expenseCategories: {
                  capsuleRef: {
                    value: 'first-kept-expenseCategories-capsule',
                  },
                },
                recordExpense: {
                  capsuleRef: {
                    value: 'first-kept-recordExpense-capsule',
                  },
                },
                correctExpense: {
                  capsuleRef: {
                    value: 'first-kept-correctExpense-capsule',
                  },
                },
                removeExpense: {
                  capsuleRef: {
                    value: 'first-kept-removeExpense-capsule',
                  },
                },
                signOut: {
                  capsuleRef: {
                    value: 'first-kept-signOut-capsule',
                  },
                },
              },
              accessTokenClerk: {
                retrieveToken: () => 'first-kept-access-token',
              },
            },
          },
          {
            params: {
              props: {},
              componentContext: {
                attrs: {
                  class: 'unit-page expenses',
                },
              },
              formValueHashReactive: {
                spentOn: '2026-09-19',
                amount: 2400,
                expenseCategoryId: 10000003,
                memo: 'Lunch with the client',
              },
              statusReactive: {
                isLoadingExpenses: false,
                isLoadingExpenseCategories: false,
                isRecordingExpense: false,
                isRemovingExpense: false,
                isSigningOut: false,
                correctingExpenseId: null,
                removingExpenseId: null,
              },
              errorMessageHashReactive: {
                submittingExpense: null,
                removingExpense: null,
                readingExpenses: null,
              },
              responseHashReactive: {
                expenses: [],
                expensesPagination: null,
                expenseCategories: [],
              },
              router: {
                replace: async () => '/expenses',
              },
              graphqlClientHash: {
                expenses: {
                  capsuleRef: {
                    value: 'second-kept-expenses-capsule',
                  },
                },
                expenseCategories: {
                  capsuleRef: {
                    value: 'second-kept-expenseCategories-capsule',
                  },
                },
                recordExpense: {
                  capsuleRef: {
                    value: 'second-kept-recordExpense-capsule',
                  },
                },
                correctExpense: {
                  capsuleRef: {
                    value: 'second-kept-correctExpense-capsule',
                  },
                },
                removeExpense: {
                  capsuleRef: {
                    value: 'second-kept-removeExpense-capsule',
                  },
                },
                signOut: {
                  capsuleRef: {
                    value: 'second-kept-signOut-capsule',
                  },
                },
              },
              accessTokenClerk: {
                retrieveToken: () => 'second-kept-access-token',
              },
            },
          },
        ]

        test.each(cases)('attrs.class: $params.componentContext.attrs.class', ({
          params,
        }) => {
          const actual = new ExpensesPageContext(params)

          expect(actual)
            .toHaveProperty('accessTokenClerk', params.accessTokenClerk)
        })
      })
    })
  })
})

describe('ExpensesPageContext', () => {
  describe('.generateTodayDate()', () => {
    test('should answer a date in the wire format', () => {
      const expectedPattern = /^\d{4}-\d{2}-\d{2}$/u

      const actual = ExpensesPageContext.generateTodayDate()

      expect(actual)
        .toMatch(expectedPattern)
    })
  })
})

describe('ExpensesPageContext', () => {
  describe('.generateTodayDate()', () => {
    test('should answer the browser calendar date, not the UTC one', () => {
      const expectedTotalLength = 10

      const actual = ExpensesPageContext.generateTodayDate()

      expect(actual)
        .toHaveLength(expectedTotalLength)
    })
  })
})

describe('ExpensesPageContext', () => {
  describe('#get:pageTitle', () => {
    const cases = [
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          formValueHashReactive: {
            spentOn: null,
            amount: null,
            expenseCategoryId: null,
            memo: null,
          },
          statusReactive: {
            isLoadingExpenses: false,
            isLoadingExpenseCategories: false,
            isRecordingExpense: false,
            isRemovingExpense: false,
            isSigningOut: false,
            correctingExpenseId: null,
            removingExpenseId: null,
          },
          errorMessageHashReactive: {
            submittingExpense: null,
            removingExpense: null,
            readingExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            expensesPagination: null,
            expenseCategories: [],
          },
        },
        expected: 'Expenses',
      },
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page expenses',
            },
          },
          formValueHashReactive: {
            spentOn: null,
            amount: null,
            expenseCategoryId: null,
            memo: null,
          },
          statusReactive: {
            isLoadingExpenses: false,
            isLoadingExpenseCategories: false,
            isRecordingExpense: false,
            isRemovingExpense: false,
            isSigningOut: false,
            correctingExpenseId: 10200016,
            removingExpenseId: null,
          },
          errorMessageHashReactive: {
            submittingExpense: null,
            removingExpense: null,
            readingExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            expensesPagination: null,
            expenseCategories: [],
          },
        },
        expected: 'Expenses',
      },
    ]

    test.each(cases)('attrs.class: $factoryParams.componentContext.attrs.class', ({
      factoryParams,
      expected,
    }) => {
      const context = ExpensesPageContext.create(factoryParams)

      const actual = context.pageTitle

      expect(actual)
        .toBe(expected)
    })
  })
})

describe('ExpensesPageContext', () => {
  describe('#get:formHeading', () => {
    const cases = [
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          formValueHashReactive: {
            spentOn: null,
            amount: null,
            expenseCategoryId: null,
            memo: null,
          },
          statusReactive: {
            isLoadingExpenses: false,
            isLoadingExpenseCategories: false,
            isRecordingExpense: false,
            isRemovingExpense: false,
            isSigningOut: false,
            correctingExpenseId: null,
            removingExpenseId: null,
          },
          errorMessageHashReactive: {
            submittingExpense: null,
            removingExpense: null,
            readingExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            expensesPagination: null,
            expenseCategories: [],
          },
        },
        expected: 'Record an expense',
      },
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          formValueHashReactive: {
            spentOn: null,
            amount: null,
            expenseCategoryId: null,
            memo: null,
          },
          statusReactive: {
            isLoadingExpenses: false,
            isLoadingExpenseCategories: false,
            isRecordingExpense: false,
            isRemovingExpense: false,
            isSigningOut: false,
            correctingExpenseId: 10200016,
            removingExpenseId: null,
          },
          errorMessageHashReactive: {
            submittingExpense: null,
            removingExpense: null,
            readingExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            expensesPagination: null,
            expenseCategories: [],
          },
        },
        expected: 'Correct this entry',
      },
    ]

    test.each(cases)('correctingExpenseId: $factoryParams.statusReactive.correctingExpenseId', ({
      factoryParams,
      expected,
    }) => {
      const context = ExpensesPageContext.create(factoryParams)

      const actual = context.formHeading

      expect(actual)
        .toBe(expected)
    })
  })
})

describe('ExpensesPageContext', () => {
  describe('#get:submitButtonLabel', () => {
    const cases = [
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          formValueHashReactive: {
            spentOn: null,
            amount: null,
            expenseCategoryId: null,
            memo: null,
          },
          statusReactive: {
            isLoadingExpenses: false,
            isLoadingExpenseCategories: false,
            isRecordingExpense: false,
            isRemovingExpense: false,
            isSigningOut: false,
            correctingExpenseId: null,
            removingExpenseId: null,
          },
          errorMessageHashReactive: {
            submittingExpense: null,
            removingExpense: null,
            readingExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            expensesPagination: null,
            expenseCategories: [],
          },
        },
        expected: 'Record the expense',
      },
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          formValueHashReactive: {
            spentOn: null,
            amount: null,
            expenseCategoryId: null,
            memo: null,
          },
          statusReactive: {
            isLoadingExpenses: false,
            isLoadingExpenseCategories: false,
            isRecordingExpense: false,
            isRemovingExpense: false,
            isSigningOut: false,
            correctingExpenseId: 10200017,
            removingExpenseId: null,
          },
          errorMessageHashReactive: {
            submittingExpense: null,
            removingExpense: null,
            readingExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            expensesPagination: null,
            expenseCategories: [],
          },
        },
        expected: 'Save the correction',
      },
    ]

    test.each(cases)('correctingExpenseId: $factoryParams.statusReactive.correctingExpenseId', ({
      factoryParams,
      expected,
    }) => {
      const context = ExpensesPageContext.create(factoryParams)

      const actual = context.submitButtonLabel

      expect(actual)
        .toBe(expected)
    })
  })
})

describe('ExpensesPageContext', () => {
  describe('#extractMemoText()', () => {
    describe('with a memo', () => {
      const cases = [
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            formValueHashReactive: {
              spentOn: null,
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
          },
          params: {
            expense: {
              id: 10200015,
              spentOn: '2026-09-20',
              amount: 1200,
              memo: 'Taxi back from the client',
              status: 'recorded',
              expenseCategory: {
                id: 10000001,
                name: 'transport',
                displayOrder: 1,
              },
            },
          },
          expected: 'Taxi back from the client',
        },
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            formValueHashReactive: {
              spentOn: null,
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
          },
          params: {
            expense: {
              id: 10200016,
              spentOn: '2026-09-18',
              amount: 4800,
              memo: 'Lunch with the auditor',
              status: 'recorded',
              expenseCategory: {
                id: 10000002,
                name: 'meals',
                displayOrder: 2,
              },
            },
          },
          expected: 'Lunch with the auditor',
        },
      ]

      test.each(cases)('memo: $params.expense.memo', ({
        factoryParams,
        params,
        expected,
      }) => {
        const context = ExpensesPageContext.create(factoryParams)

        const actual = context.extractMemoText(params)

        expect(actual)
          .toBe(expected)
      })
    })

    describe('without a memo', () => {
      const cases = [
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            formValueHashReactive: {
              spentOn: null,
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
          },
          params: {
            expense: {
              id: 10200018,
              spentOn: '2026-09-19',
              amount: 800,
              memo: null,
              status: 'recorded',
              expenseCategory: {
                id: 10000003,
                name: 'supplies',
                displayOrder: 3,
              },
            },
          },
          expected: '',
        },
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            formValueHashReactive: {
              spentOn: null,
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
          },
          params: {
            expense: {
              id: 10200019,
              spentOn: '2026-09-17',
              amount: 330,
              memo: null,
              status: 'recorded',
              expenseCategory: {
                id: 10000004,
                name: 'other',
                displayOrder: 4,
              },
            },
          },
          expected: '',
        },
      ]

      test.each(cases)('id: $params.expense.id', ({
        factoryParams,
        params,
        expected,
      }) => {
        const context = ExpensesPageContext.create(factoryParams)

        const actual = context.extractMemoText(params)

        expect(actual)
          .toBe(expected)
      })
    })
  })
})

describe('ExpensesPageContext', () => {
  describe('#extractAmountText()', () => {
    const cases = [
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          formValueHashReactive: {
            spentOn: null,
            amount: null,
            expenseCategoryId: null,
            memo: null,
          },
          statusReactive: {
            isLoadingExpenses: false,
            isLoadingExpenseCategories: false,
            isRecordingExpense: false,
            isRemovingExpense: false,
            isSigningOut: false,
            correctingExpenseId: null,
            removingExpenseId: null,
          },
          errorMessageHashReactive: {
            submittingExpense: null,
            removingExpense: null,
            readingExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            expensesPagination: null,
            expenseCategories: [],
          },
        },
        params: {
          expense: {
            id: 10200015,
            spentOn: '2026-09-20',
            amount: 1200,
            memo: 'Taxi back from the client',
            status: 'recorded',
            expenseCategory: {
              id: 10000001,
              name: 'transport',
              displayOrder: 1,
            },
          },
        },
        expected: '¥1,200',
      },
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          formValueHashReactive: {
            spentOn: null,
            amount: null,
            expenseCategoryId: null,
            memo: null,
          },
          statusReactive: {
            isLoadingExpenses: false,
            isLoadingExpenseCategories: false,
            isRecordingExpense: false,
            isRemovingExpense: false,
            isSigningOut: false,
            correctingExpenseId: null,
            removingExpenseId: null,
          },
          errorMessageHashReactive: {
            submittingExpense: null,
            removingExpense: null,
            readingExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            expensesPagination: null,
            expenseCategories: [],
          },
        },
        params: {
          expense: {
            id: 10200020,
            spentOn: '2026-09-16',
            amount: 1234567,
            memo: 'Conference tickets for the team',
            status: 'recorded',
            expenseCategory: {
              id: 10000004,
              name: 'other',
              displayOrder: 4,
            },
          },
        },
        expected: '¥1,234,567',
      },
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          formValueHashReactive: {
            spentOn: null,
            amount: null,
            expenseCategoryId: null,
            memo: null,
          },
          statusReactive: {
            isLoadingExpenses: false,
            isLoadingExpenseCategories: false,
            isRecordingExpense: false,
            isRemovingExpense: false,
            isSigningOut: false,
            correctingExpenseId: null,
            removingExpenseId: null,
          },
          errorMessageHashReactive: {
            submittingExpense: null,
            removingExpense: null,
            readingExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            expensesPagination: null,
            expenseCategories: [],
          },
        },
        params: {
          expense: {
            id: 10200021,
            spentOn: '2026-09-15',
            amount: 7,
            memo: null,
            status: 'recorded',
            expenseCategory: {
              id: 10000003,
              name: 'supplies',
              displayOrder: 3,
            },
          },
        },
        expected: '¥7',
      },
    ]

    test.each(cases)('amount: $params.expense.amount', ({
      factoryParams,
      params,
      expected,
    }) => {
      const context = ExpensesPageContext.create(factoryParams)

      const actual = context.extractAmountText(params)

      expect(actual)
        .toBe(expected)
    })
  })
})

describe('ExpensesPageContext', () => {
  describe('#extractSpentOnText()', () => {
    const cases = [
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          formValueHashReactive: {
            spentOn: null,
            amount: null,
            expenseCategoryId: null,
            memo: null,
          },
          statusReactive: {
            isLoadingExpenses: false,
            isLoadingExpenseCategories: false,
            isRecordingExpense: false,
            isRemovingExpense: false,
            isSigningOut: false,
            correctingExpenseId: null,
            removingExpenseId: null,
          },
          errorMessageHashReactive: {
            submittingExpense: null,
            removingExpense: null,
            readingExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            expensesPagination: null,
            expenseCategories: [],
          },
        },
        params: {
          expense: {
            id: 10200015,
            spentOn: '2026-09-20',
            amount: 1200,
            memo: 'Taxi back from the client',
            status: 'recorded',
            expenseCategory: {
              id: 10000001,
              name: 'transport',
              displayOrder: 1,
            },
          },
        },
        expected: '2026-09-20',
      },
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          formValueHashReactive: {
            spentOn: null,
            amount: null,
            expenseCategoryId: null,
            memo: null,
          },
          statusReactive: {
            isLoadingExpenses: false,
            isLoadingExpenseCategories: false,
            isRecordingExpense: false,
            isRemovingExpense: false,
            isSigningOut: false,
            correctingExpenseId: null,
            removingExpenseId: null,
          },
          errorMessageHashReactive: {
            submittingExpense: null,
            removingExpense: null,
            readingExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            expensesPagination: null,
            expenseCategories: [],
          },
        },
        params: {
          expense: {
            id: 10200022,
            spentOn: '2024-02-29',
            amount: 560,
            memo: null,
            status: 'recorded',
            expenseCategory: {
              id: 10000002,
              name: 'meals',
              displayOrder: 2,
            },
          },
        },
        expected: '2024-02-29',
      },
    ]

    test.each(cases)('spentOn: $params.expense.spentOn', ({
      factoryParams,
      params,
      expected,
    }) => {
      const context = ExpensesPageContext.create(factoryParams)

      const actual = context.extractSpentOnText(params)

      expect(actual)
        .toBe(expected)
    })
  })
})

describe('ExpensesPageContext', () => {
  describe('#buildExpenseRow()', () => {
    const cases = [
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          formValueHashReactive: {
            spentOn: null,
            amount: null,
            expenseCategoryId: null,
            memo: null,
          },
          statusReactive: {
            isLoadingExpenses: false,
            isLoadingExpenseCategories: false,
            isRecordingExpense: false,
            isRemovingExpense: false,
            isSigningOut: false,
            correctingExpenseId: null,
            removingExpenseId: null,
          },
          errorMessageHashReactive: {
            submittingExpense: null,
            removingExpense: null,
            readingExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            expensesPagination: null,
            expenseCategories: [],
          },
        },
        params: {
          expense: {
            id: 10200015,
            spentOn: '2026-09-20',
            amount: 1200,
            memo: 'Taxi back from the client',
            status: 'recorded',
            expenseCategory: {
              id: 10000001,
              name: 'transport',
              displayOrder: 1,
            },
          },
        },
        expected: {
          id: 10200015,
          spentOn: '2026-09-20',
          spentOnText: '2026-09-20',
          amount: 1200,
          amountText: '¥1,200',
          expenseCategoryId: 10000001,
          expenseCategoryName: 'transport',
          memo: 'Taxi back from the client',
          memoText: 'Taxi back from the client',
        },
      },
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          formValueHashReactive: {
            spentOn: null,
            amount: null,
            expenseCategoryId: null,
            memo: null,
          },
          statusReactive: {
            isLoadingExpenses: false,
            isLoadingExpenseCategories: false,
            isRecordingExpense: false,
            isRemovingExpense: false,
            isSigningOut: false,
            correctingExpenseId: null,
            removingExpenseId: null,
          },
          errorMessageHashReactive: {
            submittingExpense: null,
            removingExpense: null,
            readingExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            expensesPagination: null,
            expenseCategories: [],
          },
        },
        params: {
          expense: {
            id: 10200018,
            spentOn: '2026-09-19',
            amount: 800,
            memo: null,
            status: 'recorded',
            expenseCategory: {
              id: 10000003,
              name: 'supplies',
              displayOrder: 3,
            },
          },
        },
        expected: {
          id: 10200018,
          spentOn: '2026-09-19',
          spentOnText: '2026-09-19',
          amount: 800,
          amountText: '¥800',
          expenseCategoryId: 10000003,
          expenseCategoryName: 'supplies',
          memo: null,
          memoText: '',
        },
      },
    ]

    test.each(cases)('id: $params.expense.id', ({
      factoryParams,
      params,
      expected,
    }) => {
      const context = ExpensesPageContext.create(factoryParams)

      const actual = context.buildExpenseRow(params)

      expect(actual)
        .toEqual(expected)
    })
  })
})

describe('ExpensesPageContext', () => {
  describe('#get:expenseCategoryOptions', () => {
    const cases = [
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          formValueHashReactive: {
            spentOn: null,
            amount: null,
            expenseCategoryId: null,
            memo: null,
          },
          statusReactive: {
            isLoadingExpenses: false,
            isLoadingExpenseCategories: false,
            isRecordingExpense: false,
            isRemovingExpense: false,
            isSigningOut: false,
            correctingExpenseId: null,
            removingExpenseId: null,
          },
          errorMessageHashReactive: {
            submittingExpense: null,
            removingExpense: null,
            readingExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            expensesPagination: null,
            expenseCategories: [
              {
                id: 10000001,
                name: 'transport',
                displayOrder: 1,
              },
              {
                id: 10000002,
                name: 'meals',
                displayOrder: 2,
              },
              {
                id: 10000003,
                name: 'supplies',
                displayOrder: 3,
              },
              {
                id: 10000004,
                name: 'other',
                displayOrder: 4,
              },
            ],
          },
        },
        expected: [
          {
            label: 'transport',
            value: 10000001,
          },
          {
            label: 'meals',
            value: 10000002,
          },
          {
            label: 'supplies',
            value: 10000003,
          },
          {
            label: 'other',
            value: 10000004,
          },
        ],
      },
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          formValueHashReactive: {
            spentOn: null,
            amount: null,
            expenseCategoryId: null,
            memo: null,
          },
          statusReactive: {
            isLoadingExpenses: false,
            isLoadingExpenseCategories: false,
            isRecordingExpense: false,
            isRemovingExpense: false,
            isSigningOut: false,
            correctingExpenseId: null,
            removingExpenseId: null,
          },
          errorMessageHashReactive: {
            submittingExpense: null,
            removingExpense: null,
            readingExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            expensesPagination: null,
            expenseCategories: [
              {
                id: 10000004,
                name: 'other',
                displayOrder: 4,
              },
              {
                id: 10000001,
                name: 'transport',
                displayOrder: 1,
              },
            ],
          },
        },
        expected: [
          {
            label: 'other',
            value: 10000004,
          },
          {
            label: 'transport',
            value: 10000001,
          },
        ],
      },
    ]

    test.each(cases)('first category: $factoryParams.responseHashReactive.expenseCategories.0.name', ({
      factoryParams,
      expected,
    }) => {
      const context = ExpensesPageContext.create(factoryParams)

      const actual = context.expenseCategoryOptions

      expect(actual)
        .toEqual(expected)
    })
  })
})

describe('ExpensesPageContext', () => {
  describe('#isSpentOnColumn()', () => {
    const cases = [
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          formValueHashReactive: {
            spentOn: null,
            amount: null,
            expenseCategoryId: null,
            memo: null,
          },
          statusReactive: {
            isLoadingExpenses: false,
            isLoadingExpenseCategories: false,
            isRecordingExpense: false,
            isRemovingExpense: false,
            isSigningOut: false,
            correctingExpenseId: null,
            removingExpenseId: null,
          },
          errorMessageHashReactive: {
            submittingExpense: null,
            removingExpense: null,
            readingExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            expensesPagination: null,
            expenseCategories: [],
          },
        },
        params: {
          column: {
            field: 'spentOnText',
            label: 'Date paid',
            sortable: false,
          },
        },
        expected: true,
      },
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          formValueHashReactive: {
            spentOn: null,
            amount: null,
            expenseCategoryId: null,
            memo: null,
          },
          statusReactive: {
            isLoadingExpenses: false,
            isLoadingExpenseCategories: false,
            isRecordingExpense: false,
            isRemovingExpense: false,
            isSigningOut: false,
            correctingExpenseId: null,
            removingExpenseId: null,
          },
          errorMessageHashReactive: {
            submittingExpense: null,
            removingExpense: null,
            readingExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            expensesPagination: null,
            expenseCategories: [],
          },
        },
        params: {
          column: {
            field: 'amountText',
            label: 'Amount',
            sortable: false,
          },
        },
        expected: false,
      },
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          formValueHashReactive: {
            spentOn: null,
            amount: null,
            expenseCategoryId: null,
            memo: null,
          },
          statusReactive: {
            isLoadingExpenses: false,
            isLoadingExpenseCategories: false,
            isRecordingExpense: false,
            isRemovingExpense: false,
            isSigningOut: false,
            correctingExpenseId: null,
            removingExpenseId: null,
          },
          errorMessageHashReactive: {
            submittingExpense: null,
            removingExpense: null,
            readingExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            expensesPagination: null,
            expenseCategories: [],
          },
        },
        params: {
          column: {
            field: 'memoText',
            label: 'Memo',
            sortable: false,
          },
        },
        expected: false,
      },
    ]

    test.each(cases)('field: $params.column.field', ({
      factoryParams,
      params,
      expected,
    }) => {
      const context = ExpensesPageContext.create(factoryParams)

      const actual = context.isSpentOnColumn(params)

      expect(actual)
        .toBe(expected)
    })
  })
})

describe('ExpensesPageContext', () => {
  describe('#isSpentOnLaterThanToday()', () => {
    describe('with a date that is not later than today', () => {
      const cases = [
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            formValueHashReactive: {
              spentOn: '2026-09-22',
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
          },
        },
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            formValueHashReactive: {
              spentOn: '2026-09-21',
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
          },
        },
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            formValueHashReactive: {
              spentOn: null,
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
          },
        },
      ]

      test.each(cases)('spentOn: $factoryParams.formValueHashReactive.spentOn', ({
        factoryParams,
      }) => {
        jest.spyOn(ExpensesPageContext, 'generateTodayDate')
          .mockReturnValue('2026-09-22')

        const context = ExpensesPageContext.create(factoryParams)

        const actual = context.isSpentOnLaterThanToday()

        expect(actual)
          .toBeFalsy()
      })
    })

    describe('with a date later than today', () => {
      const cases = [
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            formValueHashReactive: {
              spentOn: '2026-09-23',
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
          },
        },
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            formValueHashReactive: {
              spentOn: '2027-01-01',
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
          },
        },
      ]

      test.each(cases)('spentOn: $factoryParams.formValueHashReactive.spentOn', ({
        factoryParams,
      }) => {
        jest.spyOn(ExpensesPageContext, 'generateTodayDate')
          .mockReturnValue('2026-09-22')

        const context = ExpensesPageContext.create(factoryParams)

        const actual = context.isSpentOnLaterThanToday()

        expect(actual)
          .toBeTruthy()
      })
    })
  })
})

describe('ExpensesPageContext', () => {
  describe('#onSubmitForm()', () => {
    describe('should refuse a date later than today without sending it', () => {
      const cases = [
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            formValueHashReactive: {
              spentOn: '2026-09-23',
              amount: 1200,
              expenseCategoryId: 10000001,
              memo: 'Taxi booked for tomorrow',
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            graphqlClientHash: {
              recordExpense: {
                capsuleRef: {
                  value: RecordExpenseMutationGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        recordExpense: {
                          expenseId: 10200031,
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: CorrectExpenseMutationGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        correctExpense: {
                          expenseId: 10200032,
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              expenses: {
                capsuleRef: {
                  value: ExpensesQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        expenses: {
                          expenses: [],
                          pagination: {
                            limit: 20,
                            offset: 0,
                            totalRecords: 3,
                          },
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
          },
          expected: 'The date the money was paid cannot be later than today.',
        },
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            formValueHashReactive: {
              spentOn: '2027-03-10',
              amount: 4800,
              expenseCategoryId: 10000002,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: 10200016,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            graphqlClientHash: {
              recordExpense: {
                capsuleRef: {
                  value: RecordExpenseMutationGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        recordExpense: {
                          expenseId: 10200033,
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: CorrectExpenseMutationGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        correctExpense: {
                          expenseId: 10200034,
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              expenses: {
                capsuleRef: {
                  value: ExpensesQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        expenses: {
                          expenses: [],
                          pagination: {
                            limit: 20,
                            offset: 20,
                            totalRecords: 41,
                          },
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
          },
          expected: 'The date the money was paid cannot be later than today.',
        },
      ]

      test.each(cases)('spentOn: $factoryParams.formValueHashReactive.spentOn', async ({
        factoryParams,
        expected,
      }) => {
        jest.spyOn(ExpensesPageContext, 'generateTodayDate')
          .mockReturnValue('2026-09-22')

        const context = ExpensesPageContext.create(factoryParams)

        const submitExpenseFormSpy = jest.spyOn(context, 'submitExpenseForm')

        await context.onSubmitForm()

        expect(factoryParams.errorMessageHashReactive.submittingExpense)
          .toBe(expected)
        expect(submitExpenseFormSpy)
          .not
          .toHaveBeenCalled()
      })
    })

    describe('should send a date that is not later than today', () => {
      const cases = [
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            formValueHashReactive: {
              spentOn: '2026-09-22',
              amount: 1200,
              expenseCategoryId: 10000001,
              memo: 'Taxi back from the client',
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            graphqlClientHash: {
              recordExpense: {
                capsuleRef: {
                  value: RecordExpenseMutationGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        recordExpense: {
                          expenseId: 10200035,
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: CorrectExpenseMutationGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        correctExpense: {
                          expenseId: 10200036,
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              expenses: {
                capsuleRef: {
                  value: ExpensesQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        expenses: {
                          expenses: [],
                          pagination: {
                            limit: 20,
                            offset: 0,
                            totalRecords: 5,
                          },
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
          },
        },
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            formValueHashReactive: {
              spentOn: '2026-09-18',
              amount: 4800,
              expenseCategoryId: 10000002,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: 10200016,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            graphqlClientHash: {
              recordExpense: {
                capsuleRef: {
                  value: RecordExpenseMutationGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        recordExpense: {
                          expenseId: 10200037,
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: CorrectExpenseMutationGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        correctExpense: {
                          expenseId: 10200038,
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              expenses: {
                capsuleRef: {
                  value: ExpensesQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        expenses: {
                          expenses: [],
                          pagination: {
                            limit: 20,
                            offset: 40,
                            totalRecords: 62,
                          },
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
          },
        },
      ]

      test.each(cases)('spentOn: $factoryParams.formValueHashReactive.spentOn', async ({
        factoryParams,
      }) => {
        jest.spyOn(ExpensesPageContext, 'generateTodayDate')
          .mockReturnValue('2026-09-22')

        const context = ExpensesPageContext.create(factoryParams)

        const submitExpenseFormSpy = jest.spyOn(context, 'submitExpenseForm')

        await context.onSubmitForm()

        expect(submitExpenseFormSpy)
          .toHaveBeenCalledWith()
        expect(factoryParams.errorMessageHashReactive.submittingExpense)
          .toBeNull()
      })
    })

    describe('should clear the previous refusal before trying again', () => {
      const cases = [
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            formValueHashReactive: {
              spentOn: '2026-09-20',
              amount: 1200,
              expenseCategoryId: 10000001,
              memo: 'Taxi back from the client',
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: 'That category is not available. Reload the page and choose again.',
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            graphqlClientHash: {
              recordExpense: {
                capsuleRef: {
                  value: RecordExpenseMutationGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        recordExpense: {
                          expenseId: 10200039,
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: CorrectExpenseMutationGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        correctExpense: {
                          expenseId: 10200040,
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              expenses: {
                capsuleRef: {
                  value: ExpensesQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        expenses: {
                          expenses: [],
                          pagination: {
                            limit: 20,
                            offset: 0,
                            totalRecords: 7,
                          },
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
          },
        },
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            formValueHashReactive: {
              spentOn: '2026-09-17',
              amount: 330,
              expenseCategoryId: 10000004,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: 'Something went wrong. Try again.',
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            graphqlClientHash: {
              recordExpense: {
                capsuleRef: {
                  value: RecordExpenseMutationGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        recordExpense: {
                          expenseId: 10200041,
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: CorrectExpenseMutationGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        correctExpense: {
                          expenseId: 10200042,
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              expenses: {
                capsuleRef: {
                  value: ExpensesQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        expenses: {
                          expenses: [],
                          pagination: {
                            limit: 20,
                            offset: 60,
                            totalRecords: 83,
                          },
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
          },
        },
      ]

      test.each(cases)('spentOn: $factoryParams.formValueHashReactive.spentOn', async ({
        factoryParams,
      }) => {
        jest.spyOn(ExpensesPageContext, 'generateTodayDate')
          .mockReturnValue('2026-09-22')

        const context = ExpensesPageContext.create(factoryParams)

        await context.onSubmitForm()

        expect(factoryParams.errorMessageHashReactive.submittingExpense)
          .toBeNull()
      })
    })
  })
})

describe('ExpensesPageContext', () => {
  describe('#onClickCorrect()', () => {
    describe('should fill every one of the four fields from the row', () => {
      const cases = [
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            formValueHashReactive: {
              spentOn: null,
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
          },
          params: {
            row: {
              id: 10200016,
              spentOn: '2026-09-18',
              spentOnText: '2026-09-18',
              amount: 12000,
              amountText: '¥12,000',
              expenseCategoryId: 10000002,
              expenseCategoryName: 'meals',
              memo: 'Lunch with the auditor',
              memoText: 'Lunch with the auditor',
            },
          },
          expected: {
            spentOn: '2026-09-18',
            amount: 12000,
            expenseCategoryId: 10000002,
            memo: 'Lunch with the auditor',
          },
        },
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            formValueHashReactive: {
              spentOn: '2026-09-20',
              amount: 1200,
              expenseCategoryId: 10000001,
              memo: 'Taxi back from the client',
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
          },
          params: {
            row: {
              id: 10200018,
              spentOn: '2026-09-19',
              spentOnText: '2026-09-19',
              amount: 800,
              amountText: '¥800',
              expenseCategoryId: 10000003,
              expenseCategoryName: 'supplies',
              memo: null,
              memoText: '',
            },
          },
          expected: {
            spentOn: '2026-09-19',
            amount: 800,
            expenseCategoryId: 10000003,
            memo: null,
          },
        },
      ]

      test.each(cases)('id: $params.row.id', ({
        factoryParams,
        params,
        expected,
      }) => {
        const context = ExpensesPageContext.create(factoryParams)

        context.onClickCorrect(params)

        expect(factoryParams.formValueHashReactive)
          .toEqual(expected)
      })
    })

    describe('should record which entry is being corrected', () => {
      const cases = [
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            formValueHashReactive: {
              spentOn: null,
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
          },
          params: {
            row: {
              id: 10200016,
              spentOn: '2026-09-18',
              spentOnText: '2026-09-18',
              amount: 12000,
              amountText: '¥12,000',
              expenseCategoryId: 10000002,
              expenseCategoryName: 'meals',
              memo: 'Lunch with the auditor',
              memoText: 'Lunch with the auditor',
            },
          },
          expected: 10200016,
        },
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            formValueHashReactive: {
              spentOn: null,
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
          },
          params: {
            row: {
              id: 10200021,
              spentOn: '2026-09-15',
              spentOnText: '2026-09-15',
              amount: 7,
              amountText: '¥7',
              expenseCategoryId: 10000003,
              expenseCategoryName: 'supplies',
              memo: null,
              memoText: '',
            },
          },
          expected: 10200021,
        },
      ]

      test.each(cases)('id: $params.row.id', ({
        factoryParams,
        params,
        expected,
      }) => {
        const context = ExpensesPageContext.create(factoryParams)

        context.onClickCorrect(params)

        expect(context.correctingExpenseId)
          .toBe(expected)
      })
    })
  })
})

describe('ExpensesPageContext', () => {
  describe('#onClickCancelCorrection()', () => {
    const cases = [
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          formValueHashReactive: {
            spentOn: '2026-09-18',
            amount: 12000,
            expenseCategoryId: 10000002,
            memo: 'Lunch with the auditor',
          },
          statusReactive: {
            isLoadingExpenses: false,
            isLoadingExpenseCategories: false,
            isRecordingExpense: false,
            isRemovingExpense: false,
            isSigningOut: false,
            correctingExpenseId: 10200016,
            removingExpenseId: null,
          },
          errorMessageHashReactive: {
            submittingExpense: 'Something went wrong. Try again.',
            removingExpense: null,
            readingExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            expensesPagination: null,
            expenseCategories: [],
          },
        },
        expected: {
          spentOn: null,
          amount: null,
          expenseCategoryId: null,
          memo: null,
        },
      },
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          formValueHashReactive: {
            spentOn: '2026-09-15',
            amount: 7,
            expenseCategoryId: 10000003,
            memo: null,
          },
          statusReactive: {
            isLoadingExpenses: false,
            isLoadingExpenseCategories: false,
            isRecordingExpense: false,
            isRemovingExpense: false,
            isSigningOut: false,
            correctingExpenseId: 10200021,
            removingExpenseId: null,
          },
          errorMessageHashReactive: {
            submittingExpense: null,
            removingExpense: null,
            readingExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            expensesPagination: null,
            expenseCategories: [],
          },
        },
        expected: {
          spentOn: null,
          amount: null,
          expenseCategoryId: null,
          memo: null,
        },
      },
    ]

    test.each(cases)('correctingExpenseId: $factoryParams.statusReactive.correctingExpenseId', ({
      factoryParams,
      expected,
    }) => {
      const context = ExpensesPageContext.create(factoryParams)

      context.onClickCancelCorrection()

      expect(factoryParams.formValueHashReactive)
        .toEqual(expected)
      expect(context.correctingExpenseId)
        .toBeNull()
    })
  })
})

describe('ExpensesPageContext', () => {
  describe('#onClickRemove()', () => {
    const cases = [
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          formValueHashReactive: {
            spentOn: null,
            amount: null,
            expenseCategoryId: null,
            memo: null,
          },
          statusReactive: {
            isLoadingExpenses: false,
            isLoadingExpenseCategories: false,
            isRecordingExpense: false,
            isRemovingExpense: false,
            isSigningOut: false,
            correctingExpenseId: null,
            removingExpenseId: null,
          },
          errorMessageHashReactive: {
            submittingExpense: null,
            removingExpense: null,
            readingExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            expensesPagination: null,
            expenseCategories: [],
          },
        },
        params: {
          row: {
            id: 10200017,
            spentOn: '2026-09-21',
            spentOnText: '2026-09-21',
            amount: 640,
            amountText: '¥640',
            expenseCategoryId: 10000001,
            expenseCategoryName: 'transport',
            memo: 'Duplicate of the taxi fare',
            memoText: 'Duplicate of the taxi fare',
          },
        },
        expected: 10200017,
      },
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          formValueHashReactive: {
            spentOn: null,
            amount: null,
            expenseCategoryId: null,
            memo: null,
          },
          statusReactive: {
            isLoadingExpenses: false,
            isLoadingExpenseCategories: false,
            isRecordingExpense: false,
            isRemovingExpense: false,
            isSigningOut: false,
            correctingExpenseId: null,
            removingExpenseId: null,
          },
          errorMessageHashReactive: {
            submittingExpense: null,
            removingExpense: null,
            readingExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            expensesPagination: null,
            expenseCategories: [],
          },
        },
        params: {
          row: {
            id: 10200019,
            spentOn: '2026-09-17',
            spentOnText: '2026-09-17',
            amount: 330,
            amountText: '¥330',
            expenseCategoryId: 10000004,
            expenseCategoryName: 'other',
            memo: null,
            memoText: '',
          },
        },
        expected: 10200019,
      },
    ]

    test.each(cases)('id: $params.row.id', ({
      factoryParams,
      params,
      expected,
    }) => {
      const context = ExpensesPageContext.create(factoryParams)

      context.onClickRemove(params)

      expect(context.removingExpenseId)
        .toBe(expected)
      expect(context.isRemovalConfirmationOpen())
        .toBeTruthy()
    })
  })
})

describe('ExpensesPageContext', () => {
  describe('#onCancelRemoval()', () => {
    const cases = [
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          formValueHashReactive: {
            spentOn: null,
            amount: null,
            expenseCategoryId: null,
            memo: null,
          },
          statusReactive: {
            isLoadingExpenses: false,
            isLoadingExpenseCategories: false,
            isRecordingExpense: false,
            isRemovingExpense: false,
            isSigningOut: false,
            correctingExpenseId: null,
            removingExpenseId: 10200017,
          },
          errorMessageHashReactive: {
            submittingExpense: null,
            removingExpense: null,
            readingExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            expensesPagination: null,
            expenseCategories: [],
          },
        },
      },
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          formValueHashReactive: {
            spentOn: null,
            amount: null,
            expenseCategoryId: null,
            memo: null,
          },
          statusReactive: {
            isLoadingExpenses: false,
            isLoadingExpenseCategories: false,
            isRecordingExpense: false,
            isRemovingExpense: false,
            isSigningOut: false,
            correctingExpenseId: null,
            removingExpenseId: 10200019,
          },
          errorMessageHashReactive: {
            submittingExpense: null,
            removingExpense: null,
            readingExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            expensesPagination: null,
            expenseCategories: [],
          },
        },
      },
    ]

    test.each(cases)('removingExpenseId: $factoryParams.statusReactive.removingExpenseId', ({
      factoryParams,
    }) => {
      const context = ExpensesPageContext.create(factoryParams)

      context.onCancelRemoval()

      expect(context.removingExpenseId)
        .toBeNull()
    })
  })
})

describe('ExpensesPageContext', () => {
  describe('#onConfirmRemoval()', () => {
    const cases = [
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          formValueHashReactive: {
            spentOn: null,
            amount: null,
            expenseCategoryId: null,
            memo: null,
          },
          statusReactive: {
            isLoadingExpenses: false,
            isLoadingExpenseCategories: false,
            isRecordingExpense: false,
            isRemovingExpense: false,
            isSigningOut: false,
            correctingExpenseId: null,
            removingExpenseId: 10200017,
          },
          errorMessageHashReactive: {
            submittingExpense: null,
            removingExpense: 'That entry is not available. Reload the page and try again.',
            readingExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            expensesPagination: null,
            expenseCategories: [],
          },
          graphqlClientHash: {
            removeExpense: {
              capsuleRef: {
                value: RemoveExpenseMutationGraphqlCapsule.create({
                  result: {
                    [RESPONSE_CONTENT_FIELD]: {
                      removeExpense: {
                        expenseId: 10200017,
                      },
                    },
                  },
                }),
              },
              invokeRequestOnEvent: async () => {},
            },
            expenses: {
              capsuleRef: {
                value: ExpensesQueryGraphqlCapsule.create({
                  result: {
                    [RESPONSE_CONTENT_FIELD]: {
                      expenses: {
                        expenses: [],
                        pagination: {
                          limit: 20,
                          offset: 0,
                          totalRecords: 9,
                        },
                      },
                    },
                  },
                }),
              },
              invokeRequestOnEvent: async () => {},
            },
          },
        },
        expected: {
          expenseId: 10200017,
        },
      },
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          formValueHashReactive: {
            spentOn: null,
            amount: null,
            expenseCategoryId: null,
            memo: null,
          },
          statusReactive: {
            isLoadingExpenses: false,
            isLoadingExpenseCategories: false,
            isRecordingExpense: false,
            isRemovingExpense: false,
            isSigningOut: false,
            correctingExpenseId: null,
            removingExpenseId: 10200019,
          },
          errorMessageHashReactive: {
            submittingExpense: null,
            removingExpense: null,
            readingExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            expensesPagination: null,
            expenseCategories: [],
          },
          graphqlClientHash: {
            removeExpense: {
              capsuleRef: {
                value: RemoveExpenseMutationGraphqlCapsule.create({
                  result: {
                    [RESPONSE_CONTENT_FIELD]: {
                      removeExpense: {
                        expenseId: 10200019,
                      },
                    },
                  },
                }),
              },
              invokeRequestOnEvent: async () => {},
            },
            expenses: {
              capsuleRef: {
                value: ExpensesQueryGraphqlCapsule.create({
                  result: {
                    [RESPONSE_CONTENT_FIELD]: {
                      expenses: {
                        expenses: [],
                        pagination: {
                          limit: 20,
                          offset: 20,
                          totalRecords: 24,
                        },
                      },
                    },
                  },
                }),
              },
              invokeRequestOnEvent: async () => {},
            },
          },
        },
        expected: {
          expenseId: 10200019,
        },
      },
    ]

    test.each(cases)('removingExpenseId: $factoryParams.statusReactive.removingExpenseId', async ({
      factoryParams,
      expected,
    }) => {
      const context = ExpensesPageContext.create(factoryParams)

      const removeExpenseSpy = jest.spyOn(context, 'removeExpense')

      await context.onConfirmRemoval()

      expect(removeExpenseSpy)
        .toHaveBeenCalledWith(expected)
      expect(context.removingExpenseId)
        .toBeNull()
    })
  })
})

describe('ExpensesPageContext', () => {
  describe('#hasMultipleExpensePages()', () => {
    describe('with one page or less', () => {
      const cases = [
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            formValueHashReactive: {
              spentOn: null,
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
          },
        },
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            formValueHashReactive: {
              spentOn: null,
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: {
                limit: 20,
                offset: 0,
                sort: null,
                totalRecords: 20,
              },
              expenseCategories: [],
            },
          },
        },
      ]

      test.each(cases)('expensesPagination: $factoryParams.responseHashReactive.expensesPagination', ({
        factoryParams,
      }) => {
        const context = ExpensesPageContext.create(factoryParams)

        const actual = context.hasMultipleExpensePages()

        expect(actual)
          .toBeFalsy()
      })
    })

    describe('with more than one page', () => {
      const cases = [
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            formValueHashReactive: {
              spentOn: null,
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: {
                limit: 20,
                offset: 0,
                sort: null,
                totalRecords: 21,
              },
              expenseCategories: [],
            },
          },
        },
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            formValueHashReactive: {
              spentOn: null,
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: {
                limit: 20,
                offset: 40,
                sort: null,
                totalRecords: 137,
              },
              expenseCategories: [],
            },
          },
        },
      ]

      test.each(cases)('totalRecords: $factoryParams.responseHashReactive.expensesPagination.totalRecords', ({
        factoryParams,
      }) => {
        const context = ExpensesPageContext.create(factoryParams)

        const actual = context.hasMultipleExpensePages()

        expect(actual)
          .toBeTruthy()
      })
    })
  })
})

describe('ExpensesPageContext', () => {
  describe('#get:expenseTableParcel', () => {
    const cases = [
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          formValueHashReactive: {
            spentOn: null,
            amount: null,
            expenseCategoryId: null,
            memo: null,
          },
          statusReactive: {
            isLoadingExpenses: true,
            isLoadingExpenseCategories: false,
            isRecordingExpense: false,
            isRemovingExpense: false,
            isSigningOut: false,
            correctingExpenseId: null,
            removingExpenseId: null,
          },
          errorMessageHashReactive: {
            submittingExpense: null,
            removingExpense: null,
            readingExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            expensesPagination: null,
            expenseCategories: [],
          },
        },
        expected: expect.objectContaining({
          rows: [],
          rowKey: 'id',
          loading: true,
          errorMessage: null,
          rowActionsLabel: 'Actions',
        }),
      },
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          formValueHashReactive: {
            spentOn: null,
            amount: null,
            expenseCategoryId: null,
            memo: null,
          },
          statusReactive: {
            isLoadingExpenses: false,
            isLoadingExpenseCategories: false,
            isRecordingExpense: false,
            isRemovingExpense: false,
            isSigningOut: false,
            correctingExpenseId: null,
            removingExpenseId: null,
          },
          errorMessageHashReactive: {
            submittingExpense: null,
            removingExpense: null,
            readingExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            expensesPagination: null,
            expenseCategories: [],
          },
        },
        expected: expect.objectContaining({
          rows: [],
          rowKey: 'id',
          loading: false,
          errorMessage: null,
          rowActionsLabel: 'Actions',
        }),
      },
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          formValueHashReactive: {
            spentOn: null,
            amount: null,
            expenseCategoryId: null,
            memo: null,
          },
          statusReactive: {
            isLoadingExpenses: false,
            isLoadingExpenseCategories: false,
            isRecordingExpense: false,
            isRemovingExpense: false,
            isSigningOut: false,
            correctingExpenseId: null,
            removingExpenseId: null,
          },
          errorMessageHashReactive: {
            submittingExpense: null,
            removingExpense: null,
            readingExpenses: 'The entries could not be loaded. Reload the page and try again.',
          },
          responseHashReactive: {
            expenses: [],
            expensesPagination: null,
            expenseCategories: [],
          },
        },
        expected: expect.objectContaining({
          rows: [],
          rowKey: 'id',
          loading: false,
          errorMessage: 'The entries could not be loaded. Reload the page and try again.',
          rowActionsLabel: 'Actions',
        }),
      },
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          formValueHashReactive: {
            spentOn: null,
            amount: null,
            expenseCategoryId: null,
            memo: null,
          },
          statusReactive: {
            isLoadingExpenses: false,
            isLoadingExpenseCategories: false,
            isRecordingExpense: false,
            isRemovingExpense: false,
            isSigningOut: false,
            correctingExpenseId: null,
            removingExpenseId: null,
          },
          errorMessageHashReactive: {
            submittingExpense: null,
            removingExpense: null,
            readingExpenses: null,
          },
          responseHashReactive: {
            expenses: [
              {
                id: 10200015,
                spentOn: '2026-09-20',
                amount: 1200,
                memo: 'Taxi back from the client',
                status: 'recorded',
                expenseCategory: {
                  id: 10000001,
                  name: 'transport',
                  displayOrder: 1,
                },
              },
            ],
            expensesPagination: {
              limit: 20,
              offset: 0,
              sort: null,
              totalRecords: 1,
            },
            expenseCategories: [],
          },
        },
        expected: expect.objectContaining({
          rows: [
            {
              id: 10200015,
              spentOn: '2026-09-20',
              spentOnText: '2026-09-20',
              amount: 1200,
              amountText: '¥1,200',
              expenseCategoryId: 10000001,
              expenseCategoryName: 'transport',
              memo: 'Taxi back from the client',
              memoText: 'Taxi back from the client',
            },
          ],
          rowKey: 'id',
          loading: false,
          errorMessage: null,
          rowActionsLabel: 'Actions',
        }),
      },
    ]

    test.each(cases)('isLoadingExpenses: $factoryParams.statusReactive.isLoadingExpenses, readingExpenses: $factoryParams.errorMessageHashReactive.readingExpenses', ({
      factoryParams,
      expected,
    }) => {
      const context = ExpensesPageContext.create(factoryParams)

      const actual = context.expenseTableParcel

      expect(actual)
        .toEqual(expected)
    })
  })
})

describe('ExpensesPageContext', () => {
  describe('#get:expenseColumns', () => {
    const cases = [
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          formValueHashReactive: {
            spentOn: null,
            amount: null,
            expenseCategoryId: null,
            memo: null,
          },
          statusReactive: {
            isLoadingExpenses: false,
            isLoadingExpenseCategories: false,
            isRecordingExpense: false,
            isRemovingExpense: false,
            isSigningOut: false,
            correctingExpenseId: null,
            removingExpenseId: null,
          },
          errorMessageHashReactive: {
            submittingExpense: null,
            removingExpense: null,
            readingExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            expensesPagination: null,
            expenseCategories: [],
          },
        },
        expected: [
          {
            field: 'spentOnText',
            label: 'Date paid',
            sortable: false,
          },
          {
            field: 'amountText',
            label: 'Amount',
            sortable: false,
            align: 'end',
          },
          {
            field: 'expenseCategoryName',
            label: 'Category',
            sortable: false,
          },
          {
            field: 'memoText',
            label: 'Memo',
            sortable: false,
          },
        ],
      },
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page expenses',
            },
          },
          formValueHashReactive: {
            spentOn: null,
            amount: null,
            expenseCategoryId: null,
            memo: null,
          },
          statusReactive: {
            isLoadingExpenses: true,
            isLoadingExpenseCategories: false,
            isRecordingExpense: false,
            isRemovingExpense: false,
            isSigningOut: false,
            correctingExpenseId: null,
            removingExpenseId: null,
          },
          errorMessageHashReactive: {
            submittingExpense: null,
            removingExpense: null,
            readingExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            expensesPagination: null,
            expenseCategories: [],
          },
        },
        expected: [
          {
            field: 'spentOnText',
            label: 'Date paid',
            sortable: false,
          },
          {
            field: 'amountText',
            label: 'Amount',
            sortable: false,
            align: 'end',
          },
          {
            field: 'expenseCategoryName',
            label: 'Category',
            sortable: false,
          },
          {
            field: 'memoText',
            label: 'Memo',
            sortable: false,
          },
        ],
      },
    ]

    test.each(cases)('attrs.class: $factoryParams.componentContext.attrs.class', ({
      factoryParams,
      expected,
    }) => {
      const context = ExpensesPageContext.create(factoryParams)

      const actual = context.expenseColumns

      expect(actual)
        .toEqual(expected)
    })
  })
})

describe('ExpensesPageContext', () => {
  describe('#get:expensePaginationParcel', () => {
    const cases = [
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          formValueHashReactive: {
            spentOn: null,
            amount: null,
            expenseCategoryId: null,
            memo: null,
          },
          statusReactive: {
            isLoadingExpenses: false,
            isLoadingExpenseCategories: false,
            isRecordingExpense: false,
            isRemovingExpense: false,
            isSigningOut: false,
            correctingExpenseId: null,
            removingExpenseId: null,
          },
          errorMessageHashReactive: {
            submittingExpense: null,
            removingExpense: null,
            readingExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            expensesPagination: null,
            expenseCategories: [],
          },
        },
        expected: {
          offset: 0,
          limit: 20,
          totalRecords: 0,
          disabled: false,
        },
      },
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          formValueHashReactive: {
            spentOn: null,
            amount: null,
            expenseCategoryId: null,
            memo: null,
          },
          statusReactive: {
            isLoadingExpenses: true,
            isLoadingExpenseCategories: false,
            isRecordingExpense: false,
            isRemovingExpense: false,
            isSigningOut: false,
            correctingExpenseId: null,
            removingExpenseId: null,
          },
          errorMessageHashReactive: {
            submittingExpense: null,
            removingExpense: null,
            readingExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            expensesPagination: {
              limit: 20,
              offset: 40,
              sort: null,
              totalRecords: 137,
            },
            expenseCategories: [],
          },
        },
        expected: {
          offset: 40,
          limit: 20,
          totalRecords: 137,
          disabled: true,
        },
      },
    ]

    test.each(cases)('expensesPagination: $factoryParams.responseHashReactive.expensesPagination', ({
      factoryParams,
      expected,
    }) => {
      const context = ExpensesPageContext.create(factoryParams)

      const actual = context.expensePaginationParcel

      expect(actual)
        .toEqual(expected)
    })
  })
})

describe('ExpensesPageContext', () => {
  describe('#get:removalConfirmationParcel', () => {
    const cases = [
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          formValueHashReactive: {
            spentOn: null,
            amount: null,
            expenseCategoryId: null,
            memo: null,
          },
          statusReactive: {
            isLoadingExpenses: false,
            isLoadingExpenseCategories: false,
            isRecordingExpense: false,
            isRemovingExpense: false,
            isSigningOut: false,
            correctingExpenseId: null,
            removingExpenseId: null,
          },
          errorMessageHashReactive: {
            submittingExpense: null,
            removingExpense: null,
            readingExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            expensesPagination: null,
            expenseCategories: [],
          },
        },
        expected: {
          open: false,
          title: 'Remove this entry?',
          description: 'The entry is removed permanently and cannot be restored.',
          tone: 'destructive',
          confirmText: 'Remove the entry',
          cancelText: 'Keep the entry',
          busy: false,
        },
      },
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          formValueHashReactive: {
            spentOn: null,
            amount: null,
            expenseCategoryId: null,
            memo: null,
          },
          statusReactive: {
            isLoadingExpenses: false,
            isLoadingExpenseCategories: false,
            isRecordingExpense: false,
            isRemovingExpense: true,
            isSigningOut: false,
            correctingExpenseId: null,
            removingExpenseId: 10200017,
          },
          errorMessageHashReactive: {
            submittingExpense: null,
            removingExpense: null,
            readingExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            expensesPagination: null,
            expenseCategories: [],
          },
        },
        expected: {
          open: true,
          title: 'Remove this entry?',
          description: 'The entry is removed permanently and cannot be restored.',
          tone: 'destructive',
          confirmText: 'Remove the entry',
          cancelText: 'Keep the entry',
          busy: true,
        },
      },
    ]

    test.each(cases)('removingExpenseId: $factoryParams.statusReactive.removingExpenseId', ({
      factoryParams,
      expected,
    }) => {
      const context = ExpensesPageContext.create(factoryParams)

      const actual = context.removalConfirmationParcel

      expect(actual)
        .toEqual(expected)
    })
  })
})

describe('ExpensesPageContext', () => {
  describe('#extractCorrectRowButtonLabel()', () => {
    const cases = [
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          formValueHashReactive: {
            spentOn: null,
            amount: null,
            expenseCategoryId: null,
            memo: null,
          },
          statusReactive: {
            isLoadingExpenses: false,
            isLoadingExpenseCategories: false,
            isRecordingExpense: false,
            isRemovingExpense: false,
            isSigningOut: false,
            correctingExpenseId: null,
            removingExpenseId: null,
          },
          errorMessageHashReactive: {
            submittingExpense: null,
            removingExpense: null,
            readingExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            expensesPagination: null,
            expenseCategories: [],
          },
        },
        params: {
          row: {
            id: 10200015,
            spentOn: '2026-09-20',
            spentOnText: '2026-09-20',
            amount: 1200,
            amountText: '¥1,200',
            expenseCategoryId: 10000001,
            expenseCategoryName: 'transport',
            memo: 'Taxi back from the client',
            memoText: 'Taxi back from the client',
          },
        },
        expected: 'Correct the entry of ¥1,200 paid on 2026-09-20',
      },
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          formValueHashReactive: {
            spentOn: null,
            amount: null,
            expenseCategoryId: null,
            memo: null,
          },
          statusReactive: {
            isLoadingExpenses: false,
            isLoadingExpenseCategories: false,
            isRecordingExpense: false,
            isRemovingExpense: false,
            isSigningOut: false,
            correctingExpenseId: null,
            removingExpenseId: null,
          },
          errorMessageHashReactive: {
            submittingExpense: null,
            removingExpense: null,
            readingExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            expensesPagination: null,
            expenseCategories: [],
          },
        },
        params: {
          row: {
            id: 10200018,
            spentOn: '2026-09-19',
            spentOnText: '2026-09-19',
            amount: 800,
            amountText: '¥800',
            expenseCategoryId: 10000003,
            expenseCategoryName: 'supplies',
            memo: null,
            memoText: '',
          },
        },
        expected: 'Correct the entry of ¥800 paid on 2026-09-19',
      },
    ]

    test.each(cases)('id: $params.row.id', ({
      factoryParams,
      params,
      expected,
    }) => {
      const context = ExpensesPageContext.create(factoryParams)

      const actual = context.extractCorrectRowButtonLabel(params)

      expect(actual)
        .toBe(expected)
    })
  })
})

describe('ExpensesPageContext', () => {
  describe('#extractRemoveRowButtonLabel()', () => {
    const cases = [
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          formValueHashReactive: {
            spentOn: null,
            amount: null,
            expenseCategoryId: null,
            memo: null,
          },
          statusReactive: {
            isLoadingExpenses: false,
            isLoadingExpenseCategories: false,
            isRecordingExpense: false,
            isRemovingExpense: false,
            isSigningOut: false,
            correctingExpenseId: null,
            removingExpenseId: null,
          },
          errorMessageHashReactive: {
            submittingExpense: null,
            removingExpense: null,
            readingExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            expensesPagination: null,
            expenseCategories: [],
          },
        },
        params: {
          row: {
            id: 10200017,
            spentOn: '2026-09-21',
            spentOnText: '2026-09-21',
            amount: 640,
            amountText: '¥640',
            expenseCategoryId: 10000001,
            expenseCategoryName: 'transport',
            memo: 'Duplicate of the taxi fare',
            memoText: 'Duplicate of the taxi fare',
          },
        },
        expected: 'Remove the entry of ¥640 paid on 2026-09-21',
      },
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          formValueHashReactive: {
            spentOn: null,
            amount: null,
            expenseCategoryId: null,
            memo: null,
          },
          statusReactive: {
            isLoadingExpenses: false,
            isLoadingExpenseCategories: false,
            isRecordingExpense: false,
            isRemovingExpense: false,
            isSigningOut: false,
            correctingExpenseId: null,
            removingExpenseId: null,
          },
          errorMessageHashReactive: {
            submittingExpense: null,
            removingExpense: null,
            readingExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            expensesPagination: null,
            expenseCategories: [],
          },
        },
        params: {
          row: {
            id: 10200019,
            spentOn: '2026-09-17',
            spentOnText: '2026-09-17',
            amount: 330,
            amountText: '¥330',
            expenseCategoryId: 10000004,
            expenseCategoryName: 'other',
            memo: null,
            memoText: '',
          },
        },
        expected: 'Remove the entry of ¥330 paid on 2026-09-17',
      },
    ]

    test.each(cases)('id: $params.row.id', ({
      factoryParams,
      params,
      expected,
    }) => {
      const context = ExpensesPageContext.create(factoryParams)

      const actual = context.extractRemoveRowButtonLabel(params)

      expect(actual)
        .toBe(expected)
    })
  })
})

describe('ExpensesPageContext', () => {
  describe('#onClickRetry()', () => {
    const cases = [
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          formValueHashReactive: {
            spentOn: null,
            amount: null,
            expenseCategoryId: null,
            memo: null,
          },
          statusReactive: {
            isLoadingExpenses: false,
            isLoadingExpenseCategories: false,
            isRecordingExpense: false,
            isRemovingExpense: false,
            isSigningOut: false,
            correctingExpenseId: null,
            removingExpenseId: null,
          },
          errorMessageHashReactive: {
            submittingExpense: null,
            removingExpense: null,
            readingExpenses: 'The entries could not be loaded. Reload the page and try again.',
          },
          responseHashReactive: {
            expenses: [],
            expensesPagination: null,
            expenseCategories: [],
          },
          graphqlClientHash: {
            expenses: {
              capsuleRef: {
                value: ExpensesQueryGraphqlCapsule.create({
                  result: {
                    [RESPONSE_CONTENT_FIELD]: {
                      expenses: {
                        expenses: [],
                        pagination: {
                          limit: 20,
                          offset: 0,
                          totalRecords: 11,
                        },
                      },
                    },
                  },
                }),
              },
              invokeRequestOnEvent: async () => {},
            },
          },
        },
        expected: {
          offset: 0,
        },
      },
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          formValueHashReactive: {
            spentOn: null,
            amount: null,
            expenseCategoryId: null,
            memo: null,
          },
          statusReactive: {
            isLoadingExpenses: false,
            isLoadingExpenseCategories: false,
            isRecordingExpense: false,
            isRemovingExpense: false,
            isSigningOut: false,
            correctingExpenseId: null,
            removingExpenseId: null,
          },
          errorMessageHashReactive: {
            submittingExpense: null,
            removingExpense: null,
            readingExpenses: 'Your session is no longer valid. Sign in again.',
          },
          responseHashReactive: {
            expenses: [],
            expensesPagination: {
              limit: 20,
              offset: 60,
              sort: null,
              totalRecords: 137,
            },
            expenseCategories: [],
          },
          graphqlClientHash: {
            expenses: {
              capsuleRef: {
                value: ExpensesQueryGraphqlCapsule.create({
                  result: {
                    [RESPONSE_CONTENT_FIELD]: {
                      expenses: {
                        expenses: [],
                        pagination: {
                          limit: 20,
                          offset: 60,
                          totalRecords: 137,
                        },
                      },
                    },
                  },
                }),
              },
              invokeRequestOnEvent: async () => {},
            },
          },
        },
        expected: {
          offset: 60,
        },
      },
    ]

    test.each(cases)('readingExpenses: $factoryParams.errorMessageHashReactive.readingExpenses', async ({
      factoryParams,
      expected,
    }) => {
      const context = ExpensesPageContext.create(factoryParams)

      const readExpensesSpy = jest.spyOn(context, 'readExpenses')

      await context.onClickRetry()

      expect(readExpensesSpy)
        .toHaveBeenCalledWith(expected)
      expect(factoryParams.errorMessageHashReactive.readingExpenses)
        .toBeNull()
    })
  })
})

describe('ExpensesPageContext', () => {
  describe('#onChangePage()', () => {
    const cases = [
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          formValueHashReactive: {
            spentOn: null,
            amount: null,
            expenseCategoryId: null,
            memo: null,
          },
          statusReactive: {
            isLoadingExpenses: false,
            isLoadingExpenseCategories: false,
            isRecordingExpense: false,
            isRemovingExpense: false,
            isSigningOut: false,
            correctingExpenseId: null,
            removingExpenseId: null,
          },
          errorMessageHashReactive: {
            submittingExpense: null,
            removingExpense: null,
            readingExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            expensesPagination: null,
            expenseCategories: [],
          },
          graphqlClientHash: {
            expenses: {
              capsuleRef: {
                value: ExpensesQueryGraphqlCapsule.create({
                  result: {
                    [RESPONSE_CONTENT_FIELD]: {
                      expenses: {
                        expenses: [],
                        pagination: {
                          limit: 20,
                          offset: 20,
                          totalRecords: 46,
                        },
                      },
                    },
                  },
                }),
              },
              invokeRequestOnEvent: async () => {},
            },
          },
        },
        params: {
          payload: {
            page: 2,
            offset: 20,
            limit: 20,
          },
        },
        expected: {
          offset: 20,
        },
      },
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          formValueHashReactive: {
            spentOn: null,
            amount: null,
            expenseCategoryId: null,
            memo: null,
          },
          statusReactive: {
            isLoadingExpenses: false,
            isLoadingExpenseCategories: false,
            isRecordingExpense: false,
            isRemovingExpense: false,
            isSigningOut: false,
            correctingExpenseId: null,
            removingExpenseId: null,
          },
          errorMessageHashReactive: {
            submittingExpense: null,
            removingExpense: null,
            readingExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            expensesPagination: null,
            expenseCategories: [],
          },
          graphqlClientHash: {
            expenses: {
              capsuleRef: {
                value: ExpensesQueryGraphqlCapsule.create({
                  result: {
                    [RESPONSE_CONTENT_FIELD]: {
                      expenses: {
                        expenses: [],
                        pagination: {
                          limit: 20,
                          offset: 80,
                          totalRecords: 118,
                        },
                      },
                    },
                  },
                }),
              },
              invokeRequestOnEvent: async () => {},
            },
          },
        },
        params: {
          payload: {
            page: 5,
            offset: 80,
            limit: 20,
          },
        },
        expected: {
          offset: 80,
        },
      },
    ]

    test.each(cases)('offset: $params.payload.offset', async ({
      factoryParams,
      params,
      expected,
    }) => {
      const context = ExpensesPageContext.create(factoryParams)

      const readExpensesSpy = jest.spyOn(context, 'readExpenses')

      await context.onChangePage(params)

      expect(readExpensesSpy)
        .toHaveBeenCalledWith(expected)
    })
  })
})

/*
 * Link 3 of the chain that refuses an expense dated after today, and the reason it is written here
 * rather than left to the sentence "the screen refuses a future date".
 *
 * `FuroDatePicker`'s `maxValue` MARKS a date out of range and does not BLOCK one -- Reka's
 * `DateFieldRoot` reads it only to set `data-invalid`, `modelValue` still updates and the change
 * events still fire, read twice from the installed `reka-ui`. So a member of staff who types
 * tomorrow into the date segments produces an event carrying tomorrow.
 *
 * | link | where it is established |
 * | :-- | :-- |
 * | 1. somebody types tomorrow into the segments | the library's, not reachable from here |
 * | 2. the picker emits `change-value` carrying that date | read from `reka-ui`'s own source |
 * | 3. `#onChangeSpentOn()` writes it into the form's state | THE TWO DESCRIBES BELOW |
 * | 4. `#onSubmitForm()` refuses it and sends nothing | `#onSubmitForm()`'s describes above |
 *
 * **Links 3 and 4 meet at one named field**, `formValueHashReactive.spentOn`. These describes
 * assert what is written into it; `#isSpentOnLaterThanToday()`, which `#onSubmitForm()` calls,
 * reads that same field through `#get:spentOnValue` and has describes of its own. Neither test
 * reaches through the other, and the field they share is named on both sides.
 *
 * **What these do NOT cover, said plainly rather than left to be assumed:** the template binding in
 * `pages/expenses/index.vue` that routes the component's `change-value` emit into this method. No
 * `.vue` file in this repository can be unit tested at all, so that link is forced rather than
 * omitted -- which is exactly the distinction this describe exists to stop from being blurred.
 */
describe('ExpensesPageContext', () => {
  describe('#onChangeSpentOn()', () => {
    describe('should hold the date the field emitted, later than today included', () => {
      const cases = [
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: null,
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: 'spent-on-first-expenses-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: 'spent-on-first-expenseCategories-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: 'spent-on-first-recordExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: 'spent-on-first-correctExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: 'spent-on-first-removeExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: 'spent-on-first-signOut-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
          params: {
            payload: {
              value: '2026-09-18',
            },
          },
          expected: '2026-09-18',
        },
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: null,
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: 'spent-on-second-expenses-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: 'spent-on-second-expenseCategories-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: 'spent-on-second-recordExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: 'spent-on-second-correctExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: 'spent-on-second-removeExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: 'spent-on-second-signOut-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
          params: {
            payload: {
              value: '2026-09-22',
            },
          },
          expected: '2026-09-22',
        },
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: null,
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: 'spent-on-third-expenses-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: 'spent-on-third-expenseCategories-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: 'spent-on-third-recordExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: 'spent-on-third-correctExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: 'spent-on-third-removeExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: 'spent-on-third-signOut-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
          params: {
            payload: {
              value: '2026-09-23',
            },
          },
          expected: '2026-09-23',
        },
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: null,
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: 'spent-on-fourth-expenses-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: 'spent-on-fourth-expenseCategories-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: 'spent-on-fourth-recordExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: 'spent-on-fourth-correctExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: 'spent-on-fourth-removeExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: 'spent-on-fourth-signOut-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
          params: {
            payload: {
              value: '2027-03-10',
            },
          },
          expected: '2027-03-10',
        },
      ]

      test.each(cases)('value: $params.payload.value', ({
        factoryParams,
        params,
        expected,
      }) => {
        const context = ExpensesPageContext.create(factoryParams)

        context.onChangeSpentOn(params)

        expect(factoryParams.formValueHashReactive.spentOn)
          .toBe(expected)
      })
    })
  })
})

describe('ExpensesPageContext', () => {
  describe('#onChangeSpentOn()', () => {
    describe('should hold nothing when the field was cleared', () => {
      const cases = [
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: '2026-09-21',
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: 'spent-on-cleared-first-expenses-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: 'spent-on-cleared-first-expenseCategories-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: 'spent-on-cleared-first-recordExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: 'spent-on-cleared-first-correctExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: 'spent-on-cleared-first-removeExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: 'spent-on-cleared-first-signOut-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
          params: {
            payload: {
              value: null,
            },
          },
        },
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: '2026-09-24',
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: 'spent-on-cleared-second-expenses-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: 'spent-on-cleared-second-expenseCategories-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: 'spent-on-cleared-second-recordExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: 'spent-on-cleared-second-correctExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: 'spent-on-cleared-second-removeExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: 'spent-on-cleared-second-signOut-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
          params: {
            payload: {
              value: null,
            },
          },
        },
      ]

      test.each(cases)('spentOn: $factoryParams.formValueHashReactive.spentOn', ({
        factoryParams,
        params,
      }) => {
        const context = ExpensesPageContext.create(factoryParams)

        context.onChangeSpentOn(params)

        expect(factoryParams.formValueHashReactive.spentOn)
          .toBeNull()
      })
    })
  })
})

describe('ExpensesPageContext', () => {
  describe('#get:expensesLauncherHooks', () => {
    describe('should raise the pending state and let the request go', () => {
      const cases = [
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: null,
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: 'expenses-hooks-raise-first-expenses-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: 'expenses-hooks-raise-first-expenseCategories-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: 'expenses-hooks-raise-first-recordExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: 'expenses-hooks-raise-first-correctExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: 'expenses-hooks-raise-first-removeExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: 'expenses-hooks-raise-first-signOut-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
        },
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: null,
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: true,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: 'expenses-hooks-raise-second-expenses-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: 'expenses-hooks-raise-second-expenseCategories-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: 'expenses-hooks-raise-second-recordExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: 'expenses-hooks-raise-second-correctExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: 'expenses-hooks-raise-second-removeExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: 'expenses-hooks-raise-second-signOut-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
        },
      ]

      test.each(cases)('isLoadingExpenses: $factoryParams.statusReactive.isLoadingExpenses', async ({
        factoryParams,
      }) => {
        const context = ExpensesPageContext.create(factoryParams)

        const actual = await context.expensesLauncherHooks
          .beforeRequest()

        expect(actual)
          .toBeFalsy()
        expect(factoryParams.statusReactive.isLoadingExpenses)
          .toBeTruthy()
      })
    })
  })
})

describe('ExpensesPageContext', () => {
  describe('#get:expensesLauncherHooks', () => {
    describe('should lower the pending state when the response comes back', () => {
      const cases = [
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: null,
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: true,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: 'expenses-hooks-lower-first-expenses-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: 'expenses-hooks-lower-first-expenseCategories-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: 'expenses-hooks-lower-first-recordExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: 'expenses-hooks-lower-first-correctExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: 'expenses-hooks-lower-first-removeExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: 'expenses-hooks-lower-first-signOut-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
        },
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: null,
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: 'expenses-hooks-lower-second-expenses-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: 'expenses-hooks-lower-second-expenseCategories-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: 'expenses-hooks-lower-second-recordExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: 'expenses-hooks-lower-second-correctExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: 'expenses-hooks-lower-second-removeExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: 'expenses-hooks-lower-second-signOut-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
        },
      ]

      test.each(cases)('isLoadingExpenses: $factoryParams.statusReactive.isLoadingExpenses', async ({
        factoryParams,
      }) => {
        const context = ExpensesPageContext.create(factoryParams)

        await context.expensesLauncherHooks
          .afterRequest()

        expect(factoryParams.statusReactive.isLoadingExpenses)
          .toBeFalsy()
      })
    })
  })
})

describe('ExpensesPageContext', () => {
  describe('#get:expenseCategoriesLauncherHooks', () => {
    describe('should raise the pending state and let the request go', () => {
      const cases = [
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: null,
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: 'categories-hooks-raise-first-expenses-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: 'categories-hooks-raise-first-expenseCategories-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: 'categories-hooks-raise-first-recordExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: 'categories-hooks-raise-first-correctExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: 'categories-hooks-raise-first-removeExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: 'categories-hooks-raise-first-signOut-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
        },
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: null,
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: true,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: 'categories-hooks-raise-second-expenses-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: 'categories-hooks-raise-second-expenseCategories-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: 'categories-hooks-raise-second-recordExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: 'categories-hooks-raise-second-correctExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: 'categories-hooks-raise-second-removeExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: 'categories-hooks-raise-second-signOut-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
        },
      ]

      test.each(cases)('isLoadingExpenseCategories: $factoryParams.statusReactive.isLoadingExpenseCategories', async ({
        factoryParams,
      }) => {
        const context = ExpensesPageContext.create(factoryParams)

        const actual = await context.expenseCategoriesLauncherHooks
          .beforeRequest()

        expect(actual)
          .toBeFalsy()
        expect(factoryParams.statusReactive.isLoadingExpenseCategories)
          .toBeTruthy()
      })
    })
  })
})

describe('ExpensesPageContext', () => {
  describe('#get:expenseCategoriesLauncherHooks', () => {
    describe('should lower the pending state when the response comes back', () => {
      const cases = [
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: null,
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: true,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: 'categories-hooks-lower-first-expenses-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: 'categories-hooks-lower-first-expenseCategories-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: 'categories-hooks-lower-first-recordExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: 'categories-hooks-lower-first-correctExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: 'categories-hooks-lower-first-removeExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: 'categories-hooks-lower-first-signOut-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
        },
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: null,
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: 'categories-hooks-lower-second-expenses-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: 'categories-hooks-lower-second-expenseCategories-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: 'categories-hooks-lower-second-recordExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: 'categories-hooks-lower-second-correctExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: 'categories-hooks-lower-second-removeExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: 'categories-hooks-lower-second-signOut-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
        },
      ]

      test.each(cases)('isLoadingExpenseCategories: $factoryParams.statusReactive.isLoadingExpenseCategories', async ({
        factoryParams,
      }) => {
        const context = ExpensesPageContext.create(factoryParams)

        await context.expenseCategoriesLauncherHooks
          .afterRequest()

        expect(factoryParams.statusReactive.isLoadingExpenseCategories)
          .toBeFalsy()
      })
    })
  })
})

describe('ExpensesPageContext', () => {
  describe('#get:submittingExpenseLauncherHooks', () => {
    describe('should raise the pending state and let the request go', () => {
      const cases = [
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: null,
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: 'submitting-hooks-raise-first-expenses-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: 'submitting-hooks-raise-first-expenseCategories-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: 'submitting-hooks-raise-first-recordExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: 'submitting-hooks-raise-first-correctExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: 'submitting-hooks-raise-first-removeExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: 'submitting-hooks-raise-first-signOut-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
        },
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: null,
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: true,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: 'submitting-hooks-raise-second-expenses-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: 'submitting-hooks-raise-second-expenseCategories-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: 'submitting-hooks-raise-second-recordExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: 'submitting-hooks-raise-second-correctExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: 'submitting-hooks-raise-second-removeExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: 'submitting-hooks-raise-second-signOut-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
        },
      ]

      test.each(cases)('isRecordingExpense: $factoryParams.statusReactive.isRecordingExpense', async ({
        factoryParams,
      }) => {
        const context = ExpensesPageContext.create(factoryParams)

        const actual = await context.submittingExpenseLauncherHooks
          .beforeRequest()

        expect(actual)
          .toBeFalsy()
        expect(factoryParams.statusReactive.isRecordingExpense)
          .toBeTruthy()
      })
    })
  })
})

describe('ExpensesPageContext', () => {
  describe('#get:submittingExpenseLauncherHooks', () => {
    describe('should lower the pending state when the response comes back', () => {
      const cases = [
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: null,
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: true,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: 'submitting-hooks-lower-first-expenses-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: 'submitting-hooks-lower-first-expenseCategories-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: 'submitting-hooks-lower-first-recordExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: 'submitting-hooks-lower-first-correctExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: 'submitting-hooks-lower-first-removeExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: 'submitting-hooks-lower-first-signOut-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
        },
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: null,
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: 'submitting-hooks-lower-second-expenses-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: 'submitting-hooks-lower-second-expenseCategories-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: 'submitting-hooks-lower-second-recordExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: 'submitting-hooks-lower-second-correctExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: 'submitting-hooks-lower-second-removeExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: 'submitting-hooks-lower-second-signOut-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
        },
      ]

      test.each(cases)('isRecordingExpense: $factoryParams.statusReactive.isRecordingExpense', async ({
        factoryParams,
      }) => {
        const context = ExpensesPageContext.create(factoryParams)

        await context.submittingExpenseLauncherHooks
          .afterRequest()

        expect(factoryParams.statusReactive.isRecordingExpense)
          .toBeFalsy()
      })
    })
  })
})

describe('ExpensesPageContext', () => {
  describe('#get:removeExpenseLauncherHooks', () => {
    describe('should raise the pending state and let the request go', () => {
      const cases = [
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: null,
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: 'removing-hooks-raise-first-expenses-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: 'removing-hooks-raise-first-expenseCategories-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: 'removing-hooks-raise-first-recordExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: 'removing-hooks-raise-first-correctExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: 'removing-hooks-raise-first-removeExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: 'removing-hooks-raise-first-signOut-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
        },
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: null,
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: true,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: 'removing-hooks-raise-second-expenses-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: 'removing-hooks-raise-second-expenseCategories-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: 'removing-hooks-raise-second-recordExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: 'removing-hooks-raise-second-correctExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: 'removing-hooks-raise-second-removeExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: 'removing-hooks-raise-second-signOut-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
        },
      ]

      test.each(cases)('isRemovingExpense: $factoryParams.statusReactive.isRemovingExpense', async ({
        factoryParams,
      }) => {
        const context = ExpensesPageContext.create(factoryParams)

        const actual = await context.removeExpenseLauncherHooks
          .beforeRequest()

        expect(actual)
          .toBeFalsy()
        expect(factoryParams.statusReactive.isRemovingExpense)
          .toBeTruthy()
      })
    })
  })
})

describe('ExpensesPageContext', () => {
  describe('#get:removeExpenseLauncherHooks', () => {
    describe('should lower the pending state when the response comes back', () => {
      const cases = [
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: null,
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: true,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: 'removing-hooks-lower-first-expenses-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: 'removing-hooks-lower-first-expenseCategories-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: 'removing-hooks-lower-first-recordExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: 'removing-hooks-lower-first-correctExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: 'removing-hooks-lower-first-removeExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: 'removing-hooks-lower-first-signOut-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
        },
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: null,
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: 'removing-hooks-lower-second-expenses-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: 'removing-hooks-lower-second-expenseCategories-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: 'removing-hooks-lower-second-recordExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: 'removing-hooks-lower-second-correctExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: 'removing-hooks-lower-second-removeExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: 'removing-hooks-lower-second-signOut-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
        },
      ]

      test.each(cases)('isRemovingExpense: $factoryParams.statusReactive.isRemovingExpense', async ({
        factoryParams,
      }) => {
        const context = ExpensesPageContext.create(factoryParams)

        await context.removeExpenseLauncherHooks
          .afterRequest()

        expect(factoryParams.statusReactive.isRemovingExpense)
          .toBeFalsy()
      })
    })
  })
})

describe('ExpensesPageContext', () => {
  describe('#get:signOutLauncherHooks', () => {
    describe('should raise the pending state and let the request go', () => {
      const cases = [
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: null,
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: 'signing-out-hooks-raise-first-expenses-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: 'signing-out-hooks-raise-first-expenseCategories-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: 'signing-out-hooks-raise-first-recordExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: 'signing-out-hooks-raise-first-correctExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: 'signing-out-hooks-raise-first-removeExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: 'signing-out-hooks-raise-first-signOut-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
        },
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: null,
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: true,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: 'signing-out-hooks-raise-second-expenses-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: 'signing-out-hooks-raise-second-expenseCategories-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: 'signing-out-hooks-raise-second-recordExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: 'signing-out-hooks-raise-second-correctExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: 'signing-out-hooks-raise-second-removeExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: 'signing-out-hooks-raise-second-signOut-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
        },
      ]

      test.each(cases)('isSigningOut: $factoryParams.statusReactive.isSigningOut', async ({
        factoryParams,
      }) => {
        const context = ExpensesPageContext.create(factoryParams)

        const actual = await context.signOutLauncherHooks
          .beforeRequest()

        expect(actual)
          .toBeFalsy()
        expect(factoryParams.statusReactive.isSigningOut)
          .toBeTruthy()
      })
    })
  })
})

describe('ExpensesPageContext', () => {
  describe('#get:signOutLauncherHooks', () => {
    describe('should lower the pending state when the response comes back', () => {
      const cases = [
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: null,
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: true,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: 'signing-out-hooks-lower-first-expenses-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: 'signing-out-hooks-lower-first-expenseCategories-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: 'signing-out-hooks-lower-first-recordExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: 'signing-out-hooks-lower-first-correctExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: 'signing-out-hooks-lower-first-removeExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: 'signing-out-hooks-lower-first-signOut-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
        },
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: null,
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: 'signing-out-hooks-lower-second-expenses-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: 'signing-out-hooks-lower-second-expenseCategories-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: 'signing-out-hooks-lower-second-recordExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: 'signing-out-hooks-lower-second-correctExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: 'signing-out-hooks-lower-second-removeExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: 'signing-out-hooks-lower-second-signOut-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
        },
      ]

      test.each(cases)('isSigningOut: $factoryParams.statusReactive.isSigningOut', async ({
        factoryParams,
      }) => {
        const context = ExpensesPageContext.create(factoryParams)

        await context.signOutLauncherHooks
          .afterRequest()

        expect(factoryParams.statusReactive.isSigningOut)
          .toBeFalsy()
      })
    })
  })
})

describe('ExpensesPageContext', () => {
  describe('#readExpenses()', () => {
    describe('should ask the API for the page it was given, with its own hooks', () => {
      const cases = [
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: null,
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: ExpensesQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        expenses: {
                          expenses: [
                            {
                              id: 10200011,
                              spentOn: '2026-09-20',
                              amount: 1200,
                              memo: 'Train fare to the client',
                              status: 'recorded',
                              expenseCategory: {
                                id: 10000001,
                                name: 'Travel',
                                displayOrder: 1,
                              },
                              createdAt: '2026-09-20T11:30:00.000Z',
                              updatedAt: '2026-09-20T11:30:00.000Z',
                            },
                          ],
                          pagination: {
                            limit: 20,
                            offset: 0,
                            totalRecords: 1,
                          },
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: 'read-asks-first-expenseCategories-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: 'read-asks-first-recordExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: 'read-asks-first-correctExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: 'read-asks-first-removeExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: 'read-asks-first-signOut-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
          params: {
            offset: 0,
          },
          expected: {
            variables: {
              input: {
                pagination: {
                  limit: 20,
                  offset: 0,
                },
              },
            },
            hooks: expect.objectContaining({
              beforeRequest: expect.any(Function),
              afterRequest: expect.any(Function),
            }),
          },
        },
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page expenses',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: null,
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: ExpensesQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        expenses: {
                          expenses: [],
                          pagination: {
                            limit: 20,
                            offset: 40,
                            totalRecords: 41,
                          },
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: 'read-asks-second-expenseCategories-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: 'read-asks-second-recordExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: 'read-asks-second-correctExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: 'read-asks-second-removeExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: 'read-asks-second-signOut-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
          params: {
            offset: 40,
          },
          expected: {
            variables: {
              input: {
                pagination: {
                  limit: 20,
                  offset: 40,
                },
              },
            },
            hooks: expect.objectContaining({
              beforeRequest: expect.any(Function),
              afterRequest: expect.any(Function),
            }),
          },
        },
      ]

      test.each(cases)('offset: $params.offset', async ({
        factoryParams,
        params,
        expected,
      }) => {
        const context = ExpensesPageContext.create(factoryParams)
        const invokeSpy = jest.spyOn(factoryParams.graphqlClientHash.expenses, 'invokeRequestOnEvent')

        await context.readExpenses(params)

        expect(invokeSpy)
          .toHaveBeenCalledWith(expected)
      })
    })
  })
})

describe('ExpensesPageContext', () => {
  describe('#readExpenses()', () => {
    describe('should hold the entries and the pagination the answer carried', () => {
      const cases = [
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: null,
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: ExpensesQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        expenses: {
                          expenses: [
                            {
                              id: 10200011,
                              spentOn: '2026-09-20',
                              amount: 1200,
                              memo: 'Train fare to the client',
                              status: 'recorded',
                              expenseCategory: {
                                id: 10000001,
                                name: 'Travel',
                                displayOrder: 1,
                              },
                              createdAt: '2026-09-20T11:30:00.000Z',
                              updatedAt: '2026-09-20T11:30:00.000Z',
                            },
                            {
                              id: 10200012,
                              spentOn: '2026-09-19',
                              amount: 2400,
                              memo: null,
                              status: 'recorded',
                              expenseCategory: {
                                id: 10000002,
                                name: 'Meals',
                                displayOrder: 2,
                              },
                              createdAt: '2026-09-19T05:10:00.000Z',
                              updatedAt: '2026-09-19T05:10:00.000Z',
                            },
                            {
                              id: 10200013,
                              spentOn: '2026-09-18',
                              amount: 640,
                              memo: 'Printer paper',
                              status: 'recorded',
                              expenseCategory: {
                                id: 10000003,
                                name: 'Supplies',
                                displayOrder: 3,
                              },
                              createdAt: '2026-09-18T02:45:00.000Z',
                              updatedAt: '2026-09-18T02:45:00.000Z',
                            },
                          ],
                          pagination: {
                            limit: 20,
                            offset: 0,
                            totalRecords: 3,
                          },
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: 'read-holds-first-expenseCategories-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: 'read-holds-first-recordExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: 'read-holds-first-correctExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: 'read-holds-first-removeExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: 'read-holds-first-signOut-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
          params: {
            offset: 0,
          },
          expected: {
            expenses: [
              {
                id: 10200011,
                spentOn: '2026-09-20',
                amount: 1200,
                memo: 'Train fare to the client',
                status: 'recorded',
                expenseCategory: {
                  id: 10000001,
                  name: 'Travel',
                  displayOrder: 1,
                },
                createdAt: '2026-09-20T11:30:00.000Z',
                updatedAt: '2026-09-20T11:30:00.000Z',
              },
              {
                id: 10200012,
                spentOn: '2026-09-19',
                amount: 2400,
                memo: null,
                status: 'recorded',
                expenseCategory: {
                  id: 10000002,
                  name: 'Meals',
                  displayOrder: 2,
                },
                createdAt: '2026-09-19T05:10:00.000Z',
                updatedAt: '2026-09-19T05:10:00.000Z',
              },
              {
                id: 10200013,
                spentOn: '2026-09-18',
                amount: 640,
                memo: 'Printer paper',
                status: 'recorded',
                expenseCategory: {
                  id: 10000003,
                  name: 'Supplies',
                  displayOrder: 3,
                },
                createdAt: '2026-09-18T02:45:00.000Z',
                updatedAt: '2026-09-18T02:45:00.000Z',
              },
            ],
            expensesPagination: {
              limit: 20,
              offset: 0,
              totalRecords: 3,
            },
            expenseCategories: [],
          },
        },
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page expenses',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: null,
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: ExpensesQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        expenses: {
                          expenses: [
                            {
                              id: 10200013,
                              spentOn: '2026-09-18',
                              amount: 640,
                              memo: 'Printer paper',
                              status: 'recorded',
                              expenseCategory: {
                                id: 10000003,
                                name: 'Supplies',
                                displayOrder: 3,
                              },
                              createdAt: '2026-09-18T02:45:00.000Z',
                              updatedAt: '2026-09-18T02:45:00.000Z',
                            },
                          ],
                          pagination: {
                            limit: 20,
                            offset: 20,
                            totalRecords: 21,
                          },
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: 'read-holds-second-expenseCategories-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: 'read-holds-second-recordExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: 'read-holds-second-correctExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: 'read-holds-second-removeExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: 'read-holds-second-signOut-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
          params: {
            offset: 20,
          },
          expected: {
            expenses: [
              {
                id: 10200013,
                spentOn: '2026-09-18',
                amount: 640,
                memo: 'Printer paper',
                status: 'recorded',
                expenseCategory: {
                  id: 10000003,
                  name: 'Supplies',
                  displayOrder: 3,
                },
                createdAt: '2026-09-18T02:45:00.000Z',
                updatedAt: '2026-09-18T02:45:00.000Z',
              },
            ],
            expensesPagination: {
              limit: 20,
              offset: 20,
              totalRecords: 21,
            },
            expenseCategories: [],
          },
        },
      ]

      test.each(cases)('offset: $params.offset', async ({
        factoryParams,
        params,
        expected,
      }) => {
        const context = ExpensesPageContext.create(factoryParams)

        await context.readExpenses(params)

        expect(factoryParams.responseHashReactive)
          .toEqual(expected)
      })
    })
  })
})

describe('ExpensesPageContext', () => {
  describe('#readExpenses()', () => {
    describe('should report a refused read through the message its code maps to', () => {
      const cases = [
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: null,
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: ExpensesQueryGraphqlCapsule.create({
                    result: {
                      errors: [
                        {
                          message: '204.Q002.001',
                        },
                      ],
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: 'read-refused-first-expenseCategories-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: 'read-refused-first-recordExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: 'read-refused-first-correctExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: 'read-refused-first-removeExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: 'read-refused-first-signOut-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
          params: {
            offset: 0,
          },
          expected: 'Your session is no longer valid. Sign in again.',
        },
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page expenses',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: null,
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: ExpensesQueryGraphqlCapsule.create({
                    result: {
                      errors: [
                        {
                          message: '203.Q002.003',
                        },
                      ],
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: 'read-refused-second-expenseCategories-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: 'read-refused-second-recordExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: 'read-refused-second-correctExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: 'read-refused-second-removeExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: 'read-refused-second-signOut-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
          params: {
            offset: 20,
          },
          expected: 'The entries could not be loaded. Reload the page and try again.',
        },
      ]

      test.each(cases)('offset: $params.offset', async ({
        factoryParams,
        params,
        expected,
      }) => {
        const context = ExpensesPageContext.create(factoryParams)

        await context.readExpenses(params)

        expect(factoryParams.errorMessageHashReactive.readingExpenses)
          .toBe(expected)
      })
    })
  })
})

describe('ExpensesPageContext', () => {
  describe('#readExpenses()', () => {
    describe('should leave the entries already on screen alone when the read is refused', () => {
      const cases = [
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: null,
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [
                {
                  id: 10200011,
                  spentOn: '2026-09-20',
                  amount: 1200,
                  memo: 'Train fare to the client',
                  status: 'recorded',
                  expenseCategory: {
                    id: 10000001,
                    name: 'Travel',
                    displayOrder: 1,
                  },
                  createdAt: '2026-09-20T11:30:00.000Z',
                  updatedAt: '2026-09-20T11:30:00.000Z',
                },
                {
                  id: 10200012,
                  spentOn: '2026-09-19',
                  amount: 2400,
                  memo: null,
                  status: 'recorded',
                  expenseCategory: {
                    id: 10000002,
                    name: 'Meals',
                    displayOrder: 2,
                  },
                  createdAt: '2026-09-19T05:10:00.000Z',
                  updatedAt: '2026-09-19T05:10:00.000Z',
                },
              ],
              expensesPagination: {
                limit: 20,
                offset: 0,
                totalRecords: 2,
              },
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: ExpensesQueryGraphqlCapsule.create({
                    result: {
                      errors: [
                        {
                          message: '204.Q002.001',
                        },
                      ],
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: 'read-keeps-first-expenseCategories-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: 'read-keeps-first-recordExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: 'read-keeps-first-correctExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: 'read-keeps-first-removeExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: 'read-keeps-first-signOut-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
          params: {
            offset: 0,
          },
          expected: [
            {
              id: 10200011,
              spentOn: '2026-09-20',
              amount: 1200,
              memo: 'Train fare to the client',
              status: 'recorded',
              expenseCategory: {
                id: 10000001,
                name: 'Travel',
                displayOrder: 1,
              },
              createdAt: '2026-09-20T11:30:00.000Z',
              updatedAt: '2026-09-20T11:30:00.000Z',
            },
            {
              id: 10200012,
              spentOn: '2026-09-19',
              amount: 2400,
              memo: null,
              status: 'recorded',
              expenseCategory: {
                id: 10000002,
                name: 'Meals',
                displayOrder: 2,
              },
              createdAt: '2026-09-19T05:10:00.000Z',
              updatedAt: '2026-09-19T05:10:00.000Z',
            },
          ],
        },
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page expenses',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: null,
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [
                {
                  id: 10200013,
                  spentOn: '2026-09-18',
                  amount: 640,
                  memo: 'Printer paper',
                  status: 'recorded',
                  expenseCategory: {
                    id: 10000003,
                    name: 'Supplies',
                    displayOrder: 3,
                  },
                  createdAt: '2026-09-18T02:45:00.000Z',
                  updatedAt: '2026-09-18T02:45:00.000Z',
                },
              ],
              expensesPagination: {
                limit: 20,
                offset: 20,
                totalRecords: 21,
              },
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: ExpensesQueryGraphqlCapsule.create({
                    result: {
                      errors: [
                        {
                          message: '203.Q002.001',
                        },
                      ],
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: 'read-keeps-second-expenseCategories-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: 'read-keeps-second-recordExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: 'read-keeps-second-correctExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: 'read-keeps-second-removeExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: 'read-keeps-second-signOut-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
          params: {
            offset: 20,
          },
          expected: [
            {
              id: 10200013,
              spentOn: '2026-09-18',
              amount: 640,
              memo: 'Printer paper',
              status: 'recorded',
              expenseCategory: {
                id: 10000003,
                name: 'Supplies',
                displayOrder: 3,
              },
              createdAt: '2026-09-18T02:45:00.000Z',
              updatedAt: '2026-09-18T02:45:00.000Z',
            },
          ],
        },
      ]

      test.each(cases)('offset: $params.offset', async ({
        factoryParams,
        params,
        expected,
      }) => {
        const context = ExpensesPageContext.create(factoryParams)

        await context.readExpenses(params)

        expect(factoryParams.responseHashReactive.expenses)
          .toEqual(expected)
      })
    })
  })
})

describe('ExpensesPageContext', () => {
  describe('#readExpenseCategories()', () => {
    describe('should ask the API with no variables of its own', () => {
      const cases = [
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: null,
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: 'categories-asks-first-expenses-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: ExpenseCategoriesQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        expenseCategories: {
                          expenseCategories: [
                            {
                              id: 10000001,
                              name: 'Travel',
                              displayOrder: 1,
                            },
                          ],
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: 'categories-asks-first-recordExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: 'categories-asks-first-correctExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: 'categories-asks-first-removeExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: 'categories-asks-first-signOut-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
          expected: {
            hooks: expect.objectContaining({
              beforeRequest: expect.any(Function),
              afterRequest: expect.any(Function),
            }),
          },
        },
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page expenses',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: null,
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: true,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: 'categories-asks-second-expenses-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: ExpenseCategoriesQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        expenseCategories: {
                          expenseCategories: [
                            {
                              id: 10000002,
                              name: 'Meals',
                              displayOrder: 2,
                            },
                          ],
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: 'categories-asks-second-recordExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: 'categories-asks-second-correctExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: 'categories-asks-second-removeExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: 'categories-asks-second-signOut-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
          expected: {
            hooks: expect.objectContaining({
              beforeRequest: expect.any(Function),
              afterRequest: expect.any(Function),
            }),
          },
        },
      ]

      test.each(cases)('isLoadingExpenseCategories: $factoryParams.statusReactive.isLoadingExpenseCategories', async ({
        factoryParams,
        expected,
      }) => {
        const context = ExpensesPageContext.create(factoryParams)
        const invokeSpy = jest.spyOn(factoryParams.graphqlClientHash.expenseCategories, 'invokeRequestOnEvent')

        await context.readExpenseCategories()

        expect(invokeSpy)
          .toHaveBeenCalledWith(expected)
      })
    })
  })
})

describe('ExpensesPageContext', () => {
  describe('#readExpenseCategories()', () => {
    describe('should hold the categories the answer carried', () => {
      const cases = [
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: null,
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: 'categories-holds-first-expenses-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: ExpenseCategoriesQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        expenseCategories: {
                          expenseCategories: [
                            {
                              id: 10000001,
                              name: 'Travel',
                              displayOrder: 1,
                            },
                            {
                              id: 10000002,
                              name: 'Meals',
                              displayOrder: 2,
                            },
                            {
                              id: 10000003,
                              name: 'Supplies',
                              displayOrder: 3,
                            },
                          ],
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: 'categories-holds-first-recordExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: 'categories-holds-first-correctExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: 'categories-holds-first-removeExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: 'categories-holds-first-signOut-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
          expected: [
            {
              id: 10000001,
              name: 'Travel',
              displayOrder: 1,
            },
            {
              id: 10000002,
              name: 'Meals',
              displayOrder: 2,
            },
            {
              id: 10000003,
              name: 'Supplies',
              displayOrder: 3,
            },
          ],
        },
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page expenses',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: null,
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: true,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: 'categories-holds-second-expenses-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: ExpenseCategoriesQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        expenseCategories: {
                          expenseCategories: [
                            {
                              id: 10000003,
                              name: 'Supplies',
                              displayOrder: 3,
                            },
                          ],
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: 'categories-holds-second-recordExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: 'categories-holds-second-correctExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: 'categories-holds-second-removeExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: 'categories-holds-second-signOut-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
          expected: [
            {
              id: 10000003,
              name: 'Supplies',
              displayOrder: 3,
            },
          ],
        },
      ]

      test.each(cases)('isLoadingExpenseCategories: $factoryParams.statusReactive.isLoadingExpenseCategories', async ({
        factoryParams,
        expected,
      }) => {
        const context = ExpensesPageContext.create(factoryParams)

        await context.readExpenseCategories()

        expect(factoryParams.responseHashReactive.expenseCategories)
          .toEqual(expected)
      })
    })
  })
})

describe('ExpensesPageContext', () => {
  describe('#readExpenseCategories()', () => {
    describe('should report a refused read in the message region the form owns', () => {
      const cases = [
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: null,
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: 'categories-refused-first-expenses-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: ExpenseCategoriesQueryGraphqlCapsule.create({
                    result: {
                      errors: [
                        {
                          message: '102.X000.001',
                        },
                      ],
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: 'categories-refused-first-recordExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: 'categories-refused-first-correctExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: 'categories-refused-first-removeExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: 'categories-refused-first-signOut-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
          expected: 'Your session has ended. Sign in again.',
        },
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page expenses',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: null,
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: true,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: 'categories-refused-second-expenses-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: ExpenseCategoriesQueryGraphqlCapsule.create({
                    result: {
                      errors: [
                        {
                          message: '192.X000.001',
                        },
                      ],
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: 'categories-refused-second-recordExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: 'categories-refused-second-correctExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: 'categories-refused-second-removeExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: 'categories-refused-second-signOut-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
          expected: 'Something went wrong. Try again.',
        },
      ]

      test.each(cases)('isLoadingExpenseCategories: $factoryParams.statusReactive.isLoadingExpenseCategories', async ({
        factoryParams,
        expected,
      }) => {
        const context = ExpensesPageContext.create(factoryParams)

        await context.readExpenseCategories()

        expect(factoryParams.errorMessageHashReactive.submittingExpense)
          .toBe(expected)
      })
    })
  })
})

describe('ExpensesPageContext', () => {
  describe('#submitExpenseForm()', () => {
    describe('should record when no entry is being corrected', () => {
      const cases = [
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: '2026-09-20',
              amount: 1200,
              expenseCategoryId: 10000001,
              memo: 'Train fare to the client',
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: ExpensesQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        expenses: {
                          expenses: [
                            {
                              id: 10200011,
                              spentOn: '2026-09-20',
                              amount: 1200,
                              memo: 'Train fare to the client',
                              status: 'recorded',
                              expenseCategory: {
                                id: 10000001,
                                name: 'Travel',
                                displayOrder: 1,
                              },
                              createdAt: '2026-09-20T11:30:00.000Z',
                              updatedAt: '2026-09-20T11:30:00.000Z',
                            },
                          ],
                          pagination: {
                            limit: 20,
                            offset: 0,
                            totalRecords: 1,
                          },
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: 'submit-records-first-expenseCategories-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: RecordExpenseMutationGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        recordExpense: {
                          expenseId: 10200021,
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: 'submit-records-first-correctExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: 'submit-records-first-removeExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: 'submit-records-first-signOut-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
          expected: {
            variables: {
              input: {
                spentOn: '2026-09-20',
                amount: 1200,
                expenseCategoryId: 10000001,
                memo: 'Train fare to the client',
              },
            },
            hooks: expect.objectContaining({
              beforeRequest: expect.any(Function),
              afterRequest: expect.any(Function),
            }),
          },
        },
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page expenses',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: '2026-09-18',
              amount: 640,
              expenseCategoryId: 10000003,
              memo: 'Printer paper',
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: ExpensesQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        expenses: {
                          expenses: [
                            {
                              id: 10200013,
                              spentOn: '2026-09-18',
                              amount: 640,
                              memo: 'Printer paper',
                              status: 'recorded',
                              expenseCategory: {
                                id: 10000003,
                                name: 'Supplies',
                                displayOrder: 3,
                              },
                              createdAt: '2026-09-18T02:45:00.000Z',
                              updatedAt: '2026-09-18T02:45:00.000Z',
                            },
                          ],
                          pagination: {
                            limit: 20,
                            offset: 0,
                            totalRecords: 1,
                          },
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: 'submit-records-second-expenseCategories-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: RecordExpenseMutationGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        recordExpense: {
                          expenseId: 10200022,
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: 'submit-records-second-correctExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: 'submit-records-second-removeExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: 'submit-records-second-signOut-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
          expected: {
            variables: {
              input: {
                spentOn: '2026-09-18',
                amount: 640,
                expenseCategoryId: 10000003,
                memo: 'Printer paper',
              },
            },
            hooks: expect.objectContaining({
              beforeRequest: expect.any(Function),
              afterRequest: expect.any(Function),
            }),
          },
        },
      ]

      test.each(cases)('spentOn: $factoryParams.formValueHashReactive.spentOn', async ({
        factoryParams,
        expected,
      }) => {
        const context = ExpensesPageContext.create(factoryParams)
        const invokeSpy = jest.spyOn(factoryParams.graphqlClientHash.recordExpense, 'invokeRequestOnEvent')

        await context.submitExpenseForm()

        expect(invokeSpy)
          .toHaveBeenCalledWith(expected)
      })
    })
  })
})

describe('ExpensesPageContext', () => {
  describe('#submitExpenseForm()', () => {
    describe('should correct when the form was opened on an entry', () => {
      const cases = [
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: '2026-09-20',
              amount: 1200,
              expenseCategoryId: 10000001,
              memo: 'Train fare to the client',
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: 10200011,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: ExpensesQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        expenses: {
                          expenses: [
                            {
                              id: 10200011,
                              spentOn: '2026-09-20',
                              amount: 1200,
                              memo: 'Train fare to the client',
                              status: 'recorded',
                              expenseCategory: {
                                id: 10000001,
                                name: 'Travel',
                                displayOrder: 1,
                              },
                              createdAt: '2026-09-20T11:30:00.000Z',
                              updatedAt: '2026-09-20T11:30:00.000Z',
                            },
                          ],
                          pagination: {
                            limit: 20,
                            offset: 0,
                            totalRecords: 1,
                          },
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: 'submit-corrects-first-expenseCategories-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: 'submit-corrects-first-recordExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: CorrectExpenseMutationGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        correctExpense: {
                          expenseId: 10200011,
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: 'submit-corrects-first-removeExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: 'submit-corrects-first-signOut-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
          expected: {
            variables: {
              input: {
                expenseId: 10200011,
                spentOn: '2026-09-20',
                amount: 1200,
                expenseCategoryId: 10000001,
                memo: 'Train fare to the client',
              },
            },
            hooks: expect.objectContaining({
              beforeRequest: expect.any(Function),
              afterRequest: expect.any(Function),
            }),
          },
        },
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page expenses',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: '2026-09-19',
              amount: 2400,
              expenseCategoryId: 10000002,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: 10200012,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: ExpensesQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        expenses: {
                          expenses: [
                            {
                              id: 10200012,
                              spentOn: '2026-09-19',
                              amount: 2400,
                              memo: null,
                              status: 'recorded',
                              expenseCategory: {
                                id: 10000002,
                                name: 'Meals',
                                displayOrder: 2,
                              },
                              createdAt: '2026-09-19T05:10:00.000Z',
                              updatedAt: '2026-09-19T05:10:00.000Z',
                            },
                          ],
                          pagination: {
                            limit: 20,
                            offset: 0,
                            totalRecords: 1,
                          },
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: 'submit-corrects-second-expenseCategories-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: 'submit-corrects-second-recordExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: CorrectExpenseMutationGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        correctExpense: {
                          expenseId: 10200012,
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: 'submit-corrects-second-removeExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: 'submit-corrects-second-signOut-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
          expected: {
            variables: {
              input: {
                expenseId: 10200012,
                spentOn: '2026-09-19',
                amount: 2400,
                expenseCategoryId: 10000002,
                memo: null,
              },
            },
            hooks: expect.objectContaining({
              beforeRequest: expect.any(Function),
              afterRequest: expect.any(Function),
            }),
          },
        },
      ]

      test.each(cases)('spentOn: $factoryParams.formValueHashReactive.spentOn', async ({
        factoryParams,
        expected,
      }) => {
        const context = ExpensesPageContext.create(factoryParams)
        const invokeSpy = jest.spyOn(factoryParams.graphqlClientHash.correctExpense, 'invokeRequestOnEvent')

        await context.submitExpenseForm()

        expect(invokeSpy)
          .toHaveBeenCalledWith(expected)
      })
    })
  })
})

/*
 * Specification section 11: "the memo is optional -- an expense recorded without one is accepted,
 * and reads back with an empty memo rather than failing". The criterion has two halves and this
 * screen owns both of them.
 *
 * The first half is what goes out: an untouched memo travels as `null`, which the contract's
 * nullable `String` allows and which no validator on the far side reads a presence rule against.
 * Sending an empty string instead would record something other than what was typed.
 */
describe('ExpensesPageContext', () => {
  describe('#onSubmitForm()', () => {
    describe('should send an untouched memo as null rather than as an empty string', () => {
      const cases = [
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: '2026-09-19',
              amount: 2400,
              expenseCategoryId: 10000002,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: ExpensesQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        expenses: {
                          expenses: [
                            {
                              id: 10200012,
                              spentOn: '2026-09-19',
                              amount: 2400,
                              memo: null,
                              status: 'recorded',
                              expenseCategory: {
                                id: 10000002,
                                name: 'Meals',
                                displayOrder: 2,
                              },
                              createdAt: '2026-09-19T05:10:00.000Z',
                              updatedAt: '2026-09-19T05:10:00.000Z',
                            },
                          ],
                          pagination: {
                            limit: 20,
                            offset: 0,
                            totalRecords: 1,
                          },
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: 'memo-absent-first-expenseCategories-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: RecordExpenseMutationGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        recordExpense: {
                          expenseId: 10200012,
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: 'memo-absent-first-correctExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: 'memo-absent-first-removeExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: 'memo-absent-first-signOut-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
          expected: {
            variables: {
              input: {
                spentOn: '2026-09-19',
                amount: 2400,
                expenseCategoryId: 10000002,
                memo: null,
              },
            },
            hooks: expect.objectContaining({
              beforeRequest: expect.any(Function),
              afterRequest: expect.any(Function),
            }),
          },
        },
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page expenses',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: '2026-09-17',
              amount: 330,
              expenseCategoryId: 10000003,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: ExpensesQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        expenses: {
                          expenses: [
                            {
                              id: 10200012,
                              spentOn: '2026-09-19',
                              amount: 2400,
                              memo: null,
                              status: 'recorded',
                              expenseCategory: {
                                id: 10000002,
                                name: 'Meals',
                                displayOrder: 2,
                              },
                              createdAt: '2026-09-19T05:10:00.000Z',
                              updatedAt: '2026-09-19T05:10:00.000Z',
                            },
                          ],
                          pagination: {
                            limit: 20,
                            offset: 0,
                            totalRecords: 1,
                          },
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: 'memo-absent-second-expenseCategories-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: RecordExpenseMutationGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        recordExpense: {
                          expenseId: 10200023,
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: 'memo-absent-second-correctExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: 'memo-absent-second-removeExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: 'memo-absent-second-signOut-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
          expected: {
            variables: {
              input: {
                spentOn: '2026-09-17',
                amount: 330,
                expenseCategoryId: 10000003,
                memo: null,
              },
            },
            hooks: expect.objectContaining({
              beforeRequest: expect.any(Function),
              afterRequest: expect.any(Function),
            }),
          },
        },
      ]

      test.each(cases)('spentOn: $factoryParams.formValueHashReactive.spentOn', async ({
        factoryParams,
        expected,
      }) => {
        jest.spyOn(ExpensesPageContext, 'generateTodayDate')
          .mockReturnValue('2026-09-22')

        const context = ExpensesPageContext.create(factoryParams)
        const invokeSpy = jest.spyOn(factoryParams.graphqlClientHash.recordExpense, 'invokeRequestOnEvent')

        await context.onSubmitForm()

        expect(invokeSpy)
          .toHaveBeenCalledWith(expected)
      })
    })
  })
})

describe('ExpensesPageContext', () => {
  describe('#onSubmitForm()', () => {
    describe('should read an entry recorded without a memo back as an empty memo', () => {
      const cases = [
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: '2026-09-19',
              amount: 2400,
              expenseCategoryId: 10000002,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: ExpensesQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        expenses: {
                          expenses: [
                            {
                              id: 10200011,
                              spentOn: '2026-09-20',
                              amount: 1200,
                              memo: 'Train fare to the client',
                              status: 'recorded',
                              expenseCategory: {
                                id: 10000001,
                                name: 'Travel',
                                displayOrder: 1,
                              },
                              createdAt: '2026-09-20T11:30:00.000Z',
                              updatedAt: '2026-09-20T11:30:00.000Z',
                            },
                            {
                              id: 10200012,
                              spentOn: '2026-09-19',
                              amount: 2400,
                              memo: null,
                              status: 'recorded',
                              expenseCategory: {
                                id: 10000002,
                                name: 'Meals',
                                displayOrder: 2,
                              },
                              createdAt: '2026-09-19T05:10:00.000Z',
                              updatedAt: '2026-09-19T05:10:00.000Z',
                            },
                          ],
                          pagination: {
                            limit: 20,
                            offset: 0,
                            totalRecords: 2,
                          },
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: 'memo-reads-back-first-expenseCategories-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: RecordExpenseMutationGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        recordExpense: {
                          expenseId: 10200012,
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: 'memo-reads-back-first-correctExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: 'memo-reads-back-first-removeExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: 'memo-reads-back-first-signOut-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
          expected: [
            {
              id: 10200011,
              spentOn: '2026-09-20',
              spentOnText: '2026-09-20',
              amount: 1200,
              amountText: '¥1,200',
              expenseCategoryId: 10000001,
              expenseCategoryName: 'Travel',
              memo: 'Train fare to the client',
              memoText: 'Train fare to the client',
            },
            {
              id: 10200012,
              spentOn: '2026-09-19',
              spentOnText: '2026-09-19',
              amount: 2400,
              amountText: '¥2,400',
              expenseCategoryId: 10000002,
              expenseCategoryName: 'Meals',
              memo: null,
              memoText: '',
            },
          ],
        },
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page expenses',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: '2026-09-18',
              amount: 640,
              expenseCategoryId: 10000003,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: ExpensesQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        expenses: {
                          expenses: [
                            {
                              id: 10200012,
                              spentOn: '2026-09-19',
                              amount: 2400,
                              memo: null,
                              status: 'recorded',
                              expenseCategory: {
                                id: 10000002,
                                name: 'Meals',
                                displayOrder: 2,
                              },
                              createdAt: '2026-09-19T05:10:00.000Z',
                              updatedAt: '2026-09-19T05:10:00.000Z',
                            },
                            {
                              id: 10200013,
                              spentOn: '2026-09-18',
                              amount: 640,
                              memo: 'Printer paper',
                              status: 'recorded',
                              expenseCategory: {
                                id: 10000003,
                                name: 'Supplies',
                                displayOrder: 3,
                              },
                              createdAt: '2026-09-18T02:45:00.000Z',
                              updatedAt: '2026-09-18T02:45:00.000Z',
                            },
                          ],
                          pagination: {
                            limit: 20,
                            offset: 0,
                            totalRecords: 2,
                          },
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: 'memo-reads-back-second-expenseCategories-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: RecordExpenseMutationGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        recordExpense: {
                          expenseId: 10200024,
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: 'memo-reads-back-second-correctExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: 'memo-reads-back-second-removeExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: 'memo-reads-back-second-signOut-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
          expected: [
            {
              id: 10200012,
              spentOn: '2026-09-19',
              spentOnText: '2026-09-19',
              amount: 2400,
              amountText: '¥2,400',
              expenseCategoryId: 10000002,
              expenseCategoryName: 'Meals',
              memo: null,
              memoText: '',
            },
            {
              id: 10200013,
              spentOn: '2026-09-18',
              spentOnText: '2026-09-18',
              amount: 640,
              amountText: '¥640',
              expenseCategoryId: 10000003,
              expenseCategoryName: 'Supplies',
              memo: 'Printer paper',
              memoText: 'Printer paper',
            },
          ],
        },
      ]

      test.each(cases)('spentOn: $factoryParams.formValueHashReactive.spentOn', async ({
        factoryParams,
        expected,
      }) => {
        jest.spyOn(ExpensesPageContext, 'generateTodayDate')
          .mockReturnValue('2026-09-22')

        const context = ExpensesPageContext.create(factoryParams)

        await context.onSubmitForm()

        expect(context.expenseRows)
          .toEqual(expected)
      })
    })
  })
})

/*
 * Specification section 11: "correcting an entry changes it in place -- the number of entries a
 * member of staff has does not change". Both halves are asserted by one `toEqual` over the rows the
 * table renders after the write: the corrected amount is there, and the array is the same length it
 * was, which is what "in place" means from a member of staff's seat.
 *
 * The correction is sent, the entries are read again because section 11.2's call table says so, and
 * what the screen shows from then on is that second answer -- not a row this context edited for
 * itself. A screen that patched its own copy would agree with the backend right up until it did not.
 */
describe('ExpensesPageContext', () => {
  describe('#onSubmitForm()', () => {
    describe('should change a corrected entry in place, leaving the number of entries alone', () => {
      const cases = [
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: '2026-09-20',
              amount: 1200,
              expenseCategoryId: 10000001,
              memo: 'Train fare to the client',
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: 10200011,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [
                {
                  id: 10200011,
                  spentOn: '2026-09-20',
                  amount: 12000,
                  memo: 'Train fare to the client',
                  status: 'recorded',
                  expenseCategory: {
                    id: 10000001,
                    name: 'Travel',
                    displayOrder: 1,
                  },
                  createdAt: '2026-09-20T11:30:00.000Z',
                  updatedAt: '2026-09-20T11:30:00.000Z',
                },
                {
                  id: 10200012,
                  spentOn: '2026-09-19',
                  amount: 2400,
                  memo: null,
                  status: 'recorded',
                  expenseCategory: {
                    id: 10000002,
                    name: 'Meals',
                    displayOrder: 2,
                  },
                  createdAt: '2026-09-19T05:10:00.000Z',
                  updatedAt: '2026-09-19T05:10:00.000Z',
                },
              ],
              expensesPagination: {
                limit: 20,
                offset: 0,
                totalRecords: 2,
              },
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: ExpensesQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        expenses: {
                          expenses: [
                            {
                              id: 10200011,
                              spentOn: '2026-09-20',
                              amount: 1200,
                              memo: 'Train fare to the client',
                              status: 'recorded',
                              expenseCategory: {
                                id: 10000001,
                                name: 'Travel',
                                displayOrder: 1,
                              },
                              createdAt: '2026-09-20T11:30:00.000Z',
                              updatedAt: '2026-09-20T11:30:00.000Z',
                            },
                            {
                              id: 10200012,
                              spentOn: '2026-09-19',
                              amount: 2400,
                              memo: null,
                              status: 'recorded',
                              expenseCategory: {
                                id: 10000002,
                                name: 'Meals',
                                displayOrder: 2,
                              },
                              createdAt: '2026-09-19T05:10:00.000Z',
                              updatedAt: '2026-09-19T05:10:00.000Z',
                            },
                          ],
                          pagination: {
                            limit: 20,
                            offset: 0,
                            totalRecords: 2,
                          },
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: 'correction-in-place-first-expenseCategories-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: 'correction-in-place-first-recordExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: CorrectExpenseMutationGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        correctExpense: {
                          expenseId: 10200011,
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: 'correction-in-place-first-removeExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: 'correction-in-place-first-signOut-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
          expected: [
            {
              id: 10200011,
              spentOn: '2026-09-20',
              spentOnText: '2026-09-20',
              amount: 1200,
              amountText: '¥1,200',
              expenseCategoryId: 10000001,
              expenseCategoryName: 'Travel',
              memo: 'Train fare to the client',
              memoText: 'Train fare to the client',
            },
            {
              id: 10200012,
              spentOn: '2026-09-19',
              spentOnText: '2026-09-19',
              amount: 2400,
              amountText: '¥2,400',
              expenseCategoryId: 10000002,
              expenseCategoryName: 'Meals',
              memo: null,
              memoText: '',
            },
          ],
        },
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page expenses',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: '2026-09-18',
              amount: 640,
              expenseCategoryId: 10000003,
              memo: 'Printer paper',
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: 10200013,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [
                {
                  id: 10200012,
                  spentOn: '2026-09-19',
                  amount: 2400,
                  memo: null,
                  status: 'recorded',
                  expenseCategory: {
                    id: 10000002,
                    name: 'Meals',
                    displayOrder: 2,
                  },
                  createdAt: '2026-09-19T05:10:00.000Z',
                  updatedAt: '2026-09-19T05:10:00.000Z',
                },
                {
                  id: 10200013,
                  spentOn: '2026-09-18',
                  amount: 640,
                  memo: 'Printer paper',
                  status: 'recorded',
                  expenseCategory: {
                    id: 10000003,
                    name: 'Supplies',
                    displayOrder: 3,
                  },
                  createdAt: '2026-09-18T02:45:00.000Z',
                  updatedAt: '2026-09-18T02:45:00.000Z',
                },
              ],
              expensesPagination: {
                limit: 20,
                offset: 0,
                totalRecords: 2,
              },
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: ExpensesQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        expenses: {
                          expenses: [
                            {
                              id: 10200012,
                              spentOn: '2026-09-19',
                              amount: 2400,
                              memo: null,
                              status: 'recorded',
                              expenseCategory: {
                                id: 10000002,
                                name: 'Meals',
                                displayOrder: 2,
                              },
                              createdAt: '2026-09-19T05:10:00.000Z',
                              updatedAt: '2026-09-19T05:10:00.000Z',
                            },
                            {
                              id: 10200013,
                              spentOn: '2026-09-18',
                              amount: 640,
                              memo: 'Printer paper',
                              status: 'recorded',
                              expenseCategory: {
                                id: 10000003,
                                name: 'Supplies',
                                displayOrder: 3,
                              },
                              createdAt: '2026-09-18T02:45:00.000Z',
                              updatedAt: '2026-09-18T02:45:00.000Z',
                            },
                          ],
                          pagination: {
                            limit: 20,
                            offset: 0,
                            totalRecords: 2,
                          },
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: 'correction-in-place-second-expenseCategories-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: 'correction-in-place-second-recordExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: CorrectExpenseMutationGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        correctExpense: {
                          expenseId: 10200013,
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: 'correction-in-place-second-removeExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: 'correction-in-place-second-signOut-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
          expected: [
            {
              id: 10200012,
              spentOn: '2026-09-19',
              spentOnText: '2026-09-19',
              amount: 2400,
              amountText: '¥2,400',
              expenseCategoryId: 10000002,
              expenseCategoryName: 'Meals',
              memo: null,
              memoText: '',
            },
            {
              id: 10200013,
              spentOn: '2026-09-18',
              spentOnText: '2026-09-18',
              amount: 640,
              amountText: '¥640',
              expenseCategoryId: 10000003,
              expenseCategoryName: 'Supplies',
              memo: 'Printer paper',
              memoText: 'Printer paper',
            },
          ],
        },
      ]

      test.each(cases)('spentOn: $factoryParams.formValueHashReactive.spentOn', async ({
        factoryParams,
        expected,
      }) => {
        jest.spyOn(ExpensesPageContext, 'generateTodayDate')
          .mockReturnValue('2026-09-22')

        const context = ExpensesPageContext.create(factoryParams)

        await context.onSubmitForm()

        expect(context.expenseRows)
          .toEqual(expected)
      })
    })
  })
})

describe('ExpensesPageContext', () => {
  describe('#onSubmitForm()', () => {
    describe('should report a refused submission through the message its code maps to', () => {
      const cases = [
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: '2026-09-20',
              amount: 1200,
              expenseCategoryId: 10000001,
              memo: 'Train fare to the client',
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: 'submit-refused-first-expenses-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: 'submit-refused-first-expenseCategories-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: RecordExpenseMutationGraphqlCapsule.create({
                    result: {
                      errors: [
                        {
                          message: '204.M004.002',
                        },
                      ],
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: 'submit-refused-first-correctExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: 'submit-refused-first-removeExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: 'submit-refused-first-signOut-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
          expected: 'That category is not available. Reload the page and choose again.',
        },
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page expenses',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: '2026-09-19',
              amount: 2400,
              expenseCategoryId: 10000002,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: 10200012,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: 'submit-refused-second-expenses-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: 'submit-refused-second-expenseCategories-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: 'submit-refused-second-recordExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: CorrectExpenseMutationGraphqlCapsule.create({
                    result: {
                      errors: [
                        {
                          message: '204.M005.002',
                        },
                      ],
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: 'submit-refused-second-removeExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: 'submit-refused-second-signOut-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
          expected: 'That entry is not available. Reload the page and try again.',
        },
      ]

      test.each(cases)('spentOn: $factoryParams.formValueHashReactive.spentOn', async ({
        factoryParams,
        expected,
      }) => {
        jest.spyOn(ExpensesPageContext, 'generateTodayDate')
          .mockReturnValue('2026-09-22')

        const context = ExpensesPageContext.create(factoryParams)

        await context.onSubmitForm()

        expect(factoryParams.errorMessageHashReactive.submittingExpense)
          .toBe(expected)
      })
    })
  })
})

/*
 * A refusal a member of staff reads must never be the dotted code itself. Both cases below carry a
 * code this application does not map -- one shaped like a backend refusal, one of furo's own
 * transport codes -- and both must come out as the single unknown-failure sentence.
 *
 * The resolution happens in `BaseAppGraphqlCapsule#extractResolvedErrorMessage()` and nowhere else.
 * That is what keeps a not-found reading identically whatever caused it, and it is why no context
 * on this screen maps a code itself.
 */
describe('ExpensesPageContext', () => {
  describe('#onSubmitForm()', () => {
    describe('should never put a raw error code on the screen', () => {
      const cases = [
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: '2026-09-16',
              amount: 1800,
              expenseCategoryId: 10000001,
              memo: 'Taxi from the station',
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: 'submit-unmapped-first-expenses-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: 'submit-unmapped-first-expenseCategories-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: RecordExpenseMutationGraphqlCapsule.create({
                    result: {
                      errors: [
                        {
                          message: '204.M009.001',
                        },
                      ],
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: 'submit-unmapped-first-correctExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: 'submit-unmapped-first-removeExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: 'submit-unmapped-first-signOut-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
          expected: 'Something went wrong. Try again.',
        },
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page expenses',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: '2026-09-15',
              amount: 980,
              expenseCategoryId: 10000002,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: 'submit-unmapped-second-expenses-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: 'submit-unmapped-second-expenseCategories-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: RecordExpenseMutationGraphqlCapsule.create({
                    result: {
                      errors: [
                        {
                          message: '192.X000.001',
                        },
                      ],
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: 'submit-unmapped-second-correctExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: 'submit-unmapped-second-removeExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: 'submit-unmapped-second-signOut-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
          expected: 'Something went wrong. Try again.',
        },
      ]

      test.each(cases)('spentOn: $factoryParams.formValueHashReactive.spentOn', async ({
        factoryParams,
        expected,
      }) => {
        jest.spyOn(ExpensesPageContext, 'generateTodayDate')
          .mockReturnValue('2026-09-22')

        const context = ExpensesPageContext.create(factoryParams)

        await context.onSubmitForm()

        expect(factoryParams.errorMessageHashReactive.submittingExpense)
          .toBe(expected)
      })
    })
  })
})

/*
 * Section 11.2's call table fires `expenses` "on opening, and after every write", and section 11.1
 * is the reason: every mutation answers the identifier of what it wrote and nothing else, so the
 * re-read is the only thing that can show a correction in place or a removal gone.
 *
 * The offset asked for is the page already on screen, not the first one. Nothing in the
 * specification says a write should move somebody off the page they were reading.
 */
describe('ExpensesPageContext', () => {
  describe('#onSubmitForm()', () => {
    describe('should read the entries again after a write, on the page already on screen', () => {
      const cases = [
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: '2026-09-20',
              amount: 1200,
              expenseCategoryId: 10000001,
              memo: 'Train fare to the client',
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [
                {
                  id: 10200011,
                  spentOn: '2026-09-20',
                  amount: 1200,
                  memo: 'Train fare to the client',
                  status: 'recorded',
                  expenseCategory: {
                    id: 10000001,
                    name: 'Travel',
                    displayOrder: 1,
                  },
                  createdAt: '2026-09-20T11:30:00.000Z',
                  updatedAt: '2026-09-20T11:30:00.000Z',
                },
              ],
              expensesPagination: {
                limit: 20,
                offset: 40,
                totalRecords: 61,
              },
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: ExpensesQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        expenses: {
                          expenses: [
                            {
                              id: 10200011,
                              spentOn: '2026-09-20',
                              amount: 1200,
                              memo: 'Train fare to the client',
                              status: 'recorded',
                              expenseCategory: {
                                id: 10000001,
                                name: 'Travel',
                                displayOrder: 1,
                              },
                              createdAt: '2026-09-20T11:30:00.000Z',
                              updatedAt: '2026-09-20T11:30:00.000Z',
                            },
                          ],
                          pagination: {
                            limit: 20,
                            offset: 40,
                            totalRecords: 62,
                          },
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: 'reread-after-write-first-expenseCategories-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: RecordExpenseMutationGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        recordExpense: {
                          expenseId: 10200025,
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: 'reread-after-write-first-correctExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: 'reread-after-write-first-removeExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: 'reread-after-write-first-signOut-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
          expected: {
            variables: {
              input: {
                pagination: {
                  limit: 20,
                  offset: 40,
                },
              },
            },
            hooks: expect.objectContaining({
              beforeRequest: expect.any(Function),
              afterRequest: expect.any(Function),
            }),
          },
        },
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page expenses',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: '2026-09-18',
              amount: 640,
              expenseCategoryId: 10000003,
              memo: 'Printer paper',
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [
                {
                  id: 10200013,
                  spentOn: '2026-09-18',
                  amount: 640,
                  memo: 'Printer paper',
                  status: 'recorded',
                  expenseCategory: {
                    id: 10000003,
                    name: 'Supplies',
                    displayOrder: 3,
                  },
                  createdAt: '2026-09-18T02:45:00.000Z',
                  updatedAt: '2026-09-18T02:45:00.000Z',
                },
              ],
              expensesPagination: {
                limit: 20,
                offset: 20,
                totalRecords: 33,
              },
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: ExpensesQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        expenses: {
                          expenses: [
                            {
                              id: 10200013,
                              spentOn: '2026-09-18',
                              amount: 640,
                              memo: 'Printer paper',
                              status: 'recorded',
                              expenseCategory: {
                                id: 10000003,
                                name: 'Supplies',
                                displayOrder: 3,
                              },
                              createdAt: '2026-09-18T02:45:00.000Z',
                              updatedAt: '2026-09-18T02:45:00.000Z',
                            },
                          ],
                          pagination: {
                            limit: 20,
                            offset: 20,
                            totalRecords: 34,
                          },
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: 'reread-after-write-second-expenseCategories-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: RecordExpenseMutationGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        recordExpense: {
                          expenseId: 10200026,
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: 'reread-after-write-second-correctExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: 'reread-after-write-second-removeExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: 'reread-after-write-second-signOut-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
          expected: {
            variables: {
              input: {
                pagination: {
                  limit: 20,
                  offset: 20,
                },
              },
            },
            hooks: expect.objectContaining({
              beforeRequest: expect.any(Function),
              afterRequest: expect.any(Function),
            }),
          },
        },
      ]

      test.each(cases)('spentOn: $factoryParams.formValueHashReactive.spentOn', async ({
        factoryParams,
        expected,
      }) => {
        jest.spyOn(ExpensesPageContext, 'generateTodayDate')
          .mockReturnValue('2026-09-22')

        const context = ExpensesPageContext.create(factoryParams)
        const invokeSpy = jest.spyOn(factoryParams.graphqlClientHash.expenses, 'invokeRequestOnEvent')

        await context.onSubmitForm()

        expect(invokeSpy)
          .toHaveBeenCalledWith(expected)
      })
    })
  })
})

/*
 * Specification section 11: "a removed entry is gone from every later read". What a member of staff
 * can check on this screen is the read that follows the removal, and that is what this asserts --
 * the entry the confirmation named is not among the rows the table renders afterwards.
 *
 * That a SECOND removal is answered as not found, and that the answer is the same one somebody
 * else's expense gets, is the backend's criterion and is tested there. A client cannot establish it:
 * it is a statement about what the API refuses to distinguish, not about what a screen draws.
 */
describe('ExpensesPageContext', () => {
  describe('#onConfirmRemoval()', () => {
    describe('should leave a removed entry out of the entries it shows next', () => {
      const cases = [
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: null,
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: 10200012,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [
                {
                  id: 10200011,
                  spentOn: '2026-09-20',
                  amount: 1200,
                  memo: 'Train fare to the client',
                  status: 'recorded',
                  expenseCategory: {
                    id: 10000001,
                    name: 'Travel',
                    displayOrder: 1,
                  },
                  createdAt: '2026-09-20T11:30:00.000Z',
                  updatedAt: '2026-09-20T11:30:00.000Z',
                },
                {
                  id: 10200012,
                  spentOn: '2026-09-19',
                  amount: 2400,
                  memo: null,
                  status: 'recorded',
                  expenseCategory: {
                    id: 10000002,
                    name: 'Meals',
                    displayOrder: 2,
                  },
                  createdAt: '2026-09-19T05:10:00.000Z',
                  updatedAt: '2026-09-19T05:10:00.000Z',
                },
                {
                  id: 10200013,
                  spentOn: '2026-09-18',
                  amount: 640,
                  memo: 'Printer paper',
                  status: 'recorded',
                  expenseCategory: {
                    id: 10000003,
                    name: 'Supplies',
                    displayOrder: 3,
                  },
                  createdAt: '2026-09-18T02:45:00.000Z',
                  updatedAt: '2026-09-18T02:45:00.000Z',
                },
              ],
              expensesPagination: {
                limit: 20,
                offset: 0,
                totalRecords: 3,
              },
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: ExpensesQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        expenses: {
                          expenses: [
                            {
                              id: 10200011,
                              spentOn: '2026-09-20',
                              amount: 1200,
                              memo: 'Train fare to the client',
                              status: 'recorded',
                              expenseCategory: {
                                id: 10000001,
                                name: 'Travel',
                                displayOrder: 1,
                              },
                              createdAt: '2026-09-20T11:30:00.000Z',
                              updatedAt: '2026-09-20T11:30:00.000Z',
                            },
                            {
                              id: 10200013,
                              spentOn: '2026-09-18',
                              amount: 640,
                              memo: 'Printer paper',
                              status: 'recorded',
                              expenseCategory: {
                                id: 10000003,
                                name: 'Supplies',
                                displayOrder: 3,
                              },
                              createdAt: '2026-09-18T02:45:00.000Z',
                              updatedAt: '2026-09-18T02:45:00.000Z',
                            },
                          ],
                          pagination: {
                            limit: 20,
                            offset: 0,
                            totalRecords: 2,
                          },
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: 'removal-gone-first-expenseCategories-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: 'removal-gone-first-recordExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: 'removal-gone-first-correctExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: RemoveExpenseMutationGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        removeExpense: {
                          expenseId: 10200012,
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: 'removal-gone-first-signOut-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
          expected: [
            {
              id: 10200011,
              spentOn: '2026-09-20',
              spentOnText: '2026-09-20',
              amount: 1200,
              amountText: '¥1,200',
              expenseCategoryId: 10000001,
              expenseCategoryName: 'Travel',
              memo: 'Train fare to the client',
              memoText: 'Train fare to the client',
            },
            {
              id: 10200013,
              spentOn: '2026-09-18',
              spentOnText: '2026-09-18',
              amount: 640,
              amountText: '¥640',
              expenseCategoryId: 10000003,
              expenseCategoryName: 'Supplies',
              memo: 'Printer paper',
              memoText: 'Printer paper',
            },
          ],
        },
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page expenses',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: null,
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: 10200011,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [
                {
                  id: 10200011,
                  spentOn: '2026-09-20',
                  amount: 1200,
                  memo: 'Train fare to the client',
                  status: 'recorded',
                  expenseCategory: {
                    id: 10000001,
                    name: 'Travel',
                    displayOrder: 1,
                  },
                  createdAt: '2026-09-20T11:30:00.000Z',
                  updatedAt: '2026-09-20T11:30:00.000Z',
                },
                {
                  id: 10200012,
                  spentOn: '2026-09-19',
                  amount: 2400,
                  memo: null,
                  status: 'recorded',
                  expenseCategory: {
                    id: 10000002,
                    name: 'Meals',
                    displayOrder: 2,
                  },
                  createdAt: '2026-09-19T05:10:00.000Z',
                  updatedAt: '2026-09-19T05:10:00.000Z',
                },
              ],
              expensesPagination: {
                limit: 20,
                offset: 0,
                totalRecords: 2,
              },
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: ExpensesQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        expenses: {
                          expenses: [
                            {
                              id: 10200012,
                              spentOn: '2026-09-19',
                              amount: 2400,
                              memo: null,
                              status: 'recorded',
                              expenseCategory: {
                                id: 10000002,
                                name: 'Meals',
                                displayOrder: 2,
                              },
                              createdAt: '2026-09-19T05:10:00.000Z',
                              updatedAt: '2026-09-19T05:10:00.000Z',
                            },
                          ],
                          pagination: {
                            limit: 20,
                            offset: 0,
                            totalRecords: 1,
                          },
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: 'removal-gone-second-expenseCategories-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: 'removal-gone-second-recordExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: 'removal-gone-second-correctExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: RemoveExpenseMutationGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        removeExpense: {
                          expenseId: 10200011,
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: 'removal-gone-second-signOut-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
          expected: [
            {
              id: 10200012,
              spentOn: '2026-09-19',
              spentOnText: '2026-09-19',
              amount: 2400,
              amountText: '¥2,400',
              expenseCategoryId: 10000002,
              expenseCategoryName: 'Meals',
              memo: null,
              memoText: '',
            },
          ],
        },
      ]

      test.each(cases)('removingExpenseId: $factoryParams.statusReactive.removingExpenseId', async ({
        factoryParams,
        expected,
      }) => {
        const context = ExpensesPageContext.create(factoryParams)

        await context.onConfirmRemoval()

        expect(context.expenseRows)
          .toEqual(expected)
      })
    })
  })
})

describe('ExpensesPageContext', () => {
  describe('#onConfirmRemoval()', () => {
    describe('should ask the API to remove the entry the confirmation named', () => {
      const cases = [
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: null,
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: 10200012,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: ExpensesQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        expenses: {
                          expenses: [],
                          pagination: {
                            limit: 20,
                            offset: 0,
                            totalRecords: 0,
                          },
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: 'removal-asks-first-expenseCategories-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: 'removal-asks-first-recordExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: 'removal-asks-first-correctExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: RemoveExpenseMutationGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        removeExpense: {
                          expenseId: 10200012,
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: 'removal-asks-first-signOut-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
          expected: {
            variables: {
              input: {
                expenseId: 10200012,
              },
            },
            hooks: expect.objectContaining({
              beforeRequest: expect.any(Function),
              afterRequest: expect.any(Function),
            }),
          },
        },
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page expenses',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: null,
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: 10200013,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: ExpensesQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        expenses: {
                          expenses: [],
                          pagination: {
                            limit: 20,
                            offset: 0,
                            totalRecords: 0,
                          },
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: 'removal-asks-second-expenseCategories-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: 'removal-asks-second-recordExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: 'removal-asks-second-correctExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: RemoveExpenseMutationGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        removeExpense: {
                          expenseId: 10200013,
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: 'removal-asks-second-signOut-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
          expected: {
            variables: {
              input: {
                expenseId: 10200013,
              },
            },
            hooks: expect.objectContaining({
              beforeRequest: expect.any(Function),
              afterRequest: expect.any(Function),
            }),
          },
        },
      ]

      test.each(cases)('removingExpenseId: $factoryParams.statusReactive.removingExpenseId', async ({
        factoryParams,
        expected,
      }) => {
        const context = ExpensesPageContext.create(factoryParams)
        const invokeSpy = jest.spyOn(factoryParams.graphqlClientHash.removeExpense, 'invokeRequestOnEvent')

        await context.onConfirmRemoval()

        expect(invokeSpy)
          .toHaveBeenCalledWith(expected)
      })
    })
  })
})

describe('ExpensesPageContext', () => {
  describe('#onConfirmRemoval()', () => {
    describe('should report a refused removal through the message its code maps to', () => {
      const cases = [
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: null,
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: 10200012,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: 'removal-refused-first-expenses-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: 'removal-refused-first-expenseCategories-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: 'removal-refused-first-recordExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: 'removal-refused-first-correctExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: RemoveExpenseMutationGraphqlCapsule.create({
                    result: {
                      errors: [
                        {
                          message: '204.M006.002',
                        },
                      ],
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: 'removal-refused-first-signOut-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
          expected: 'That entry is not available. Reload the page and try again.',
        },
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page expenses',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: null,
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: 10200013,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: 'removal-refused-second-expenses-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: 'removal-refused-second-expenseCategories-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: 'removal-refused-second-recordExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: 'removal-refused-second-correctExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: RemoveExpenseMutationGraphqlCapsule.create({
                    result: {
                      errors: [
                        {
                          message: '204.M006.001',
                        },
                      ],
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: 'removal-refused-second-signOut-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
          expected: 'Your session is no longer valid. Sign in again.',
        },
      ]

      test.each(cases)('removingExpenseId: $factoryParams.statusReactive.removingExpenseId', async ({
        factoryParams,
        expected,
      }) => {
        const context = ExpensesPageContext.create(factoryParams)

        await context.onConfirmRemoval()

        expect(factoryParams.errorMessageHashReactive.removingExpense)
          .toBe(expected)
      })
    })
  })
})

describe('ExpensesPageContext', () => {
  describe('#onConfirmRemoval()', () => {
    describe('should read the entries again after a removal', () => {
      const cases = [
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: null,
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: 10200012,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [
                {
                  id: 10200012,
                  spentOn: '2026-09-19',
                  amount: 2400,
                  memo: null,
                  status: 'recorded',
                  expenseCategory: {
                    id: 10000002,
                    name: 'Meals',
                    displayOrder: 2,
                  },
                  createdAt: '2026-09-19T05:10:00.000Z',
                  updatedAt: '2026-09-19T05:10:00.000Z',
                },
              ],
              expensesPagination: {
                limit: 20,
                offset: 20,
                totalRecords: 21,
              },
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: ExpensesQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        expenses: {
                          expenses: [],
                          pagination: {
                            limit: 20,
                            offset: 20,
                            totalRecords: 20,
                          },
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: 'removal-reread-first-expenseCategories-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: 'removal-reread-first-recordExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: 'removal-reread-first-correctExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: RemoveExpenseMutationGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        removeExpense: {
                          expenseId: 10200012,
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: 'removal-reread-first-signOut-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
          expected: {
            variables: {
              input: {
                pagination: {
                  limit: 20,
                  offset: 20,
                },
              },
            },
            hooks: expect.objectContaining({
              beforeRequest: expect.any(Function),
              afterRequest: expect.any(Function),
            }),
          },
        },
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page expenses',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: null,
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: 10200013,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [
                {
                  id: 10200013,
                  spentOn: '2026-09-18',
                  amount: 640,
                  memo: 'Printer paper',
                  status: 'recorded',
                  expenseCategory: {
                    id: 10000003,
                    name: 'Supplies',
                    displayOrder: 3,
                  },
                  createdAt: '2026-09-18T02:45:00.000Z',
                  updatedAt: '2026-09-18T02:45:00.000Z',
                },
              ],
              expensesPagination: {
                limit: 20,
                offset: 60,
                totalRecords: 61,
              },
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: ExpensesQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        expenses: {
                          expenses: [],
                          pagination: {
                            limit: 20,
                            offset: 60,
                            totalRecords: 60,
                          },
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: 'removal-reread-second-expenseCategories-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: 'removal-reread-second-recordExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: 'removal-reread-second-correctExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: RemoveExpenseMutationGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        removeExpense: {
                          expenseId: 10200013,
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: 'removal-reread-second-signOut-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
          expected: {
            variables: {
              input: {
                pagination: {
                  limit: 20,
                  offset: 60,
                },
              },
            },
            hooks: expect.objectContaining({
              beforeRequest: expect.any(Function),
              afterRequest: expect.any(Function),
            }),
          },
        },
      ]

      test.each(cases)('removingExpenseId: $factoryParams.statusReactive.removingExpenseId', async ({
        factoryParams,
        expected,
      }) => {
        const context = ExpensesPageContext.create(factoryParams)
        const invokeSpy = jest.spyOn(factoryParams.graphqlClientHash.expenses, 'invokeRequestOnEvent')

        await context.onConfirmRemoval()

        expect(invokeSpy)
          .toHaveBeenCalledWith(expected)
      })
    })
  })
})

describe('ExpensesPageContext', () => {
  describe('#signOut()', () => {
    describe('should ask the API to end the session', () => {
      const cases = [
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: null,
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: 'sign-out-asks-first-expenses-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: 'sign-out-asks-first-expenseCategories-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: 'sign-out-asks-first-recordExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: 'sign-out-asks-first-correctExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: 'sign-out-asks-first-removeExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: SignOutMutationGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        signOut: {
                          signedOut: true,
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
          expected: {
            hooks: expect.objectContaining({
              beforeRequest: expect.any(Function),
              afterRequest: expect.any(Function),
            }),
          },
        },
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page expenses',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: null,
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: true,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: 'sign-out-asks-second-expenses-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: 'sign-out-asks-second-expenseCategories-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: 'sign-out-asks-second-recordExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: 'sign-out-asks-second-correctExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: 'sign-out-asks-second-removeExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: SignOutMutationGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        signOut: {
                          signedOut: true,
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
          expected: {
            hooks: expect.objectContaining({
              beforeRequest: expect.any(Function),
              afterRequest: expect.any(Function),
            }),
          },
        },
      ]

      test.each(cases)('isSigningOut: $factoryParams.statusReactive.isSigningOut', async ({
        factoryParams,
        expected,
      }) => {
        const context = ExpensesPageContext.create(factoryParams)
        const invokeSpy = jest.spyOn(factoryParams.graphqlClientHash.signOut, 'invokeRequestOnEvent')

        await context.signOut()

        expect(invokeSpy)
          .toHaveBeenCalledWith(expected)
      })
    })
  })
})

describe('ExpensesPageContext', () => {
  describe('#signOut()', () => {
    describe('should give up the access token and leave for the sign-in screen', () => {
      const cases = [
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: null,
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: 'sign-out-leaves-first-expenses-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: 'sign-out-leaves-first-expenseCategories-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: 'sign-out-leaves-first-recordExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: 'sign-out-leaves-first-correctExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: 'sign-out-leaves-first-removeExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: SignOutMutationGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        signOut: {
                          signedOut: true,
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
          expected: {
            token: null,
          },
        },
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page expenses',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: null,
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: true,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: 'sign-out-leaves-second-expenses-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: 'sign-out-leaves-second-expenseCategories-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: 'sign-out-leaves-second-recordExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: 'sign-out-leaves-second-correctExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: 'sign-out-leaves-second-removeExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: SignOutMutationGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        signOut: {
                          signedOut: true,
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
          expected: {
            token: null,
          },
        },
      ]

      test.each(cases)('isSigningOut: $factoryParams.statusReactive.isSigningOut', async ({
        factoryParams,
        expected,
      }) => {
        const context = ExpensesPageContext.create(factoryParams)
        const saveTokenSpy = jest.spyOn(factoryParams.accessTokenClerk, 'saveToken')
        const replaceSpy = jest.spyOn(factoryParams.router, 'replace')

        await context.signOut()

        expect(saveTokenSpy)
          .toHaveBeenCalledWith(expected)
        expect(replaceSpy)
          .toHaveBeenCalledWith('/sign-in')
      })
    })
  })
})

/*
 * A refused sign-out still ends the session on this device, and that is a decision rather than an
 * oversight. Every way `signOut` can be refused -- a session the backend has already forgotten, a
 * revocation it could not complete -- leaves a member of staff who asked to leave. Holding on to a
 * credential they asked to give up, in order to report a failure they can do nothing about, is the
 * worse of the two, and the screen's design gives the header no message region to report it in.
 */
describe('ExpensesPageContext', () => {
  describe('#signOut()', () => {
    describe('should leave even when the sign-out was refused', () => {
      const cases = [
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: null,
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: 'sign-out-refused-first-expenses-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: 'sign-out-refused-first-expenseCategories-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: 'sign-out-refused-first-recordExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: 'sign-out-refused-first-correctExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: 'sign-out-refused-first-removeExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: SignOutMutationGraphqlCapsule.create({
                    result: {
                      errors: [
                        {
                          message: '204.M002.001',
                        },
                      ],
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
          expected: {
            token: null,
          },
        },
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page expenses',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: null,
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: true,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: 'sign-out-refused-second-expenses-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: 'sign-out-refused-second-expenseCategories-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: 'sign-out-refused-second-recordExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: 'sign-out-refused-second-correctExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: 'sign-out-refused-second-removeExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: SignOutMutationGraphqlCapsule.create({
                    result: {
                      errors: [
                        {
                          message: '204.M002.002',
                        },
                      ],
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
          expected: {
            token: null,
          },
        },
      ]

      test.each(cases)('isSigningOut: $factoryParams.statusReactive.isSigningOut', async ({
        factoryParams,
        expected,
      }) => {
        const context = ExpensesPageContext.create(factoryParams)
        const saveTokenSpy = jest.spyOn(factoryParams.accessTokenClerk, 'saveToken')
        const replaceSpy = jest.spyOn(factoryParams.router, 'replace')

        await context.signOut()

        expect(saveTokenSpy)
          .toHaveBeenCalledWith(expected)
        expect(replaceSpy)
          .toHaveBeenCalledWith('/sign-in')
      })
    })
  })
})

describe('ExpensesPageContext', () => {
  describe('#readScreenOnMounted()', () => {
    describe('should read the first page of entries on opening', () => {
      const cases = [
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: null,
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: ExpensesQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        expenses: {
                          expenses: [
                            {
                              id: 10200011,
                              spentOn: '2026-09-20',
                              amount: 1200,
                              memo: 'Train fare to the client',
                              status: 'recorded',
                              expenseCategory: {
                                id: 10000001,
                                name: 'Travel',
                                displayOrder: 1,
                              },
                              createdAt: '2026-09-20T11:30:00.000Z',
                              updatedAt: '2026-09-20T11:30:00.000Z',
                            },
                          ],
                          pagination: {
                            limit: 20,
                            offset: 0,
                            totalRecords: 1,
                          },
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: ExpenseCategoriesQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        expenseCategories: {
                          expenseCategories: [
                            {
                              id: 10000001,
                              name: 'Travel',
                              displayOrder: 1,
                            },
                          ],
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: 'opening-first-recordExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: 'opening-first-correctExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: 'opening-first-removeExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: 'opening-first-signOut-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
          expected: {
            variables: {
              input: {
                pagination: {
                  limit: 20,
                  offset: 0,
                },
              },
            },
            hooks: expect.objectContaining({
              beforeRequest: expect.any(Function),
              afterRequest: expect.any(Function),
            }),
          },
        },
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page expenses',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: null,
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: ExpensesQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        expenses: {
                          expenses: [
                            {
                              id: 10200013,
                              spentOn: '2026-09-18',
                              amount: 640,
                              memo: 'Printer paper',
                              status: 'recorded',
                              expenseCategory: {
                                id: 10000003,
                                name: 'Supplies',
                                displayOrder: 3,
                              },
                              createdAt: '2026-09-18T02:45:00.000Z',
                              updatedAt: '2026-09-18T02:45:00.000Z',
                            },
                          ],
                          pagination: {
                            limit: 20,
                            offset: 0,
                            totalRecords: 1,
                          },
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: ExpenseCategoriesQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        expenseCategories: {
                          expenseCategories: [
                            {
                              id: 10000003,
                              name: 'Supplies',
                              displayOrder: 3,
                            },
                          ],
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: 'opening-second-recordExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: 'opening-second-correctExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: 'opening-second-removeExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: 'opening-second-signOut-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
          expected: {
            variables: {
              input: {
                pagination: {
                  limit: 20,
                  offset: 0,
                },
              },
            },
            hooks: expect.objectContaining({
              beforeRequest: expect.any(Function),
              afterRequest: expect.any(Function),
            }),
          },
        },
      ]

      test.each(cases)('attrs.class: $factoryParams.componentContext.attrs.class', async ({
        factoryParams,
        expected,
      }) => {
        const context = ExpensesPageContext.create(factoryParams)
        const invokeSpy = jest.spyOn(factoryParams.graphqlClientHash.expenses, 'invokeRequestOnEvent')

        await context.readScreenOnMounted()

        expect(invokeSpy)
          .toHaveBeenCalledWith(expected)
      })
    })
  })
})

describe('ExpensesPageContext', () => {
  describe('#readScreenOnMounted()', () => {
    describe('should read the categories the form offers on opening', () => {
      const cases = [
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: null,
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: ExpensesQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        expenses: {
                          expenses: [
                            {
                              id: 10200011,
                              spentOn: '2026-09-20',
                              amount: 1200,
                              memo: 'Train fare to the client',
                              status: 'recorded',
                              expenseCategory: {
                                id: 10000001,
                                name: 'Travel',
                                displayOrder: 1,
                              },
                              createdAt: '2026-09-20T11:30:00.000Z',
                              updatedAt: '2026-09-20T11:30:00.000Z',
                            },
                          ],
                          pagination: {
                            limit: 20,
                            offset: 0,
                            totalRecords: 1,
                          },
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: ExpenseCategoriesQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        expenseCategories: {
                          expenseCategories: [
                            {
                              id: 10000001,
                              name: 'Travel',
                              displayOrder: 1,
                            },
                            {
                              id: 10000002,
                              name: 'Meals',
                              displayOrder: 2,
                            },
                          ],
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: 'opening-categories-first-recordExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: 'opening-categories-first-correctExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: 'opening-categories-first-removeExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: 'opening-categories-first-signOut-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
          expected: {
            hooks: expect.objectContaining({
              beforeRequest: expect.any(Function),
              afterRequest: expect.any(Function),
            }),
          },
        },
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page expenses',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: null,
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: ExpensesQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        expenses: {
                          expenses: [
                            {
                              id: 10200012,
                              spentOn: '2026-09-19',
                              amount: 2400,
                              memo: null,
                              status: 'recorded',
                              expenseCategory: {
                                id: 10000002,
                                name: 'Meals',
                                displayOrder: 2,
                              },
                              createdAt: '2026-09-19T05:10:00.000Z',
                              updatedAt: '2026-09-19T05:10:00.000Z',
                            },
                          ],
                          pagination: {
                            limit: 20,
                            offset: 0,
                            totalRecords: 1,
                          },
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: ExpenseCategoriesQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        expenseCategories: {
                          expenseCategories: [
                            {
                              id: 10000003,
                              name: 'Supplies',
                              displayOrder: 3,
                            },
                          ],
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: 'opening-categories-second-recordExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: 'opening-categories-second-correctExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: 'opening-categories-second-removeExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: 'opening-categories-second-signOut-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
          expected: {
            hooks: expect.objectContaining({
              beforeRequest: expect.any(Function),
              afterRequest: expect.any(Function),
            }),
          },
        },
      ]

      test.each(cases)('attrs.class: $factoryParams.componentContext.attrs.class', async ({
        factoryParams,
        expected,
      }) => {
        const context = ExpensesPageContext.create(factoryParams)
        const invokeSpy = jest.spyOn(factoryParams.graphqlClientHash.expenseCategories, 'invokeRequestOnEvent')

        await context.readScreenOnMounted()

        expect(invokeSpy)
          .toHaveBeenCalledWith(expected)
      })
    })
  })
})

describe('ExpensesPageContext', () => {
  describe('#setupComponent()', () => {
    describe('should start the reads the screen opens with', () => {
      const cases = [
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: null,
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: ExpensesQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        expenses: {
                          expenses: [
                            {
                              id: 10200011,
                              spentOn: '2026-09-20',
                              amount: 1200,
                              memo: 'Train fare to the client',
                              status: 'recorded',
                              expenseCategory: {
                                id: 10000001,
                                name: 'Travel',
                                displayOrder: 1,
                              },
                              createdAt: '2026-09-20T11:30:00.000Z',
                              updatedAt: '2026-09-20T11:30:00.000Z',
                            },
                          ],
                          pagination: {
                            limit: 20,
                            offset: 0,
                            totalRecords: 1,
                          },
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: ExpenseCategoriesQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        expenseCategories: {
                          expenseCategories: [
                            {
                              id: 10000001,
                              name: 'Travel',
                              displayOrder: 1,
                            },
                          ],
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: 'setup-starts-first-recordExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: 'setup-starts-first-correctExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: 'setup-starts-first-removeExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: 'setup-starts-first-signOut-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
        },
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page expenses',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: null,
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: ExpensesQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        expenses: {
                          expenses: [
                            {
                              id: 10200012,
                              spentOn: '2026-09-19',
                              amount: 2400,
                              memo: null,
                              status: 'recorded',
                              expenseCategory: {
                                id: 10000002,
                                name: 'Meals',
                                displayOrder: 2,
                              },
                              createdAt: '2026-09-19T05:10:00.000Z',
                              updatedAt: '2026-09-19T05:10:00.000Z',
                            },
                          ],
                          pagination: {
                            limit: 20,
                            offset: 0,
                            totalRecords: 1,
                          },
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: ExpenseCategoriesQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        expenseCategories: {
                          expenseCategories: [
                            {
                              id: 10000002,
                              name: 'Meals',
                              displayOrder: 2,
                            },
                          ],
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: 'setup-starts-second-recordExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: 'setup-starts-second-correctExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: 'setup-starts-second-removeExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: 'setup-starts-second-signOut-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
        },
      ]

      test.each(cases)('attrs.class: $factoryParams.componentContext.attrs.class', ({
        factoryParams,
      }) => {
        const context = ExpensesPageContext.create(factoryParams)
        const readScreenSpy = jest.spyOn(context, 'readScreenOnMounted')

        context.setupComponent()

        expect(readScreenSpy)
          .toHaveBeenCalledWith()
      })
    })
  })
})

describe('ExpensesPageContext', () => {
  describe('#setupComponent()', () => {
    describe('should answer this instance, for the page to hold', () => {
      const cases = [
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: null,
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: ExpensesQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        expenses: {
                          expenses: [
                            {
                              id: 10200011,
                              spentOn: '2026-09-20',
                              amount: 1200,
                              memo: 'Train fare to the client',
                              status: 'recorded',
                              expenseCategory: {
                                id: 10000001,
                                name: 'Travel',
                                displayOrder: 1,
                              },
                              createdAt: '2026-09-20T11:30:00.000Z',
                              updatedAt: '2026-09-20T11:30:00.000Z',
                            },
                          ],
                          pagination: {
                            limit: 20,
                            offset: 0,
                            totalRecords: 1,
                          },
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: ExpenseCategoriesQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        expenseCategories: {
                          expenseCategories: [
                            {
                              id: 10000001,
                              name: 'Travel',
                              displayOrder: 1,
                            },
                          ],
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: 'setup-answers-first-recordExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: 'setup-answers-first-correctExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: 'setup-answers-first-removeExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: 'setup-answers-first-signOut-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
        },
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page expenses',
              },
            },
            router: {
              replace: async () => '/sign-in',
            },
            formValueHashReactive: {
              spentOn: null,
              amount: null,
              expenseCategoryId: null,
              memo: null,
            },
            statusReactive: {
              isLoadingExpenses: false,
              isLoadingExpenseCategories: false,
              isRecordingExpense: false,
              isRemovingExpense: false,
              isSigningOut: false,
              correctingExpenseId: null,
              removingExpenseId: null,
            },
            errorMessageHashReactive: {
              submittingExpense: null,
              removingExpense: null,
              readingExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              expensesPagination: null,
              expenseCategories: [],
            },
            graphqlClientHash: {
              expenses: {
                capsuleRef: {
                  value: ExpensesQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        expenses: {
                          expenses: [
                            {
                              id: 10200013,
                              spentOn: '2026-09-18',
                              amount: 640,
                              memo: 'Printer paper',
                              status: 'recorded',
                              expenseCategory: {
                                id: 10000003,
                                name: 'Supplies',
                                displayOrder: 3,
                              },
                              createdAt: '2026-09-18T02:45:00.000Z',
                              updatedAt: '2026-09-18T02:45:00.000Z',
                            },
                          ],
                          pagination: {
                            limit: 20,
                            offset: 0,
                            totalRecords: 1,
                          },
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              expenseCategories: {
                capsuleRef: {
                  value: ExpenseCategoriesQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        expenseCategories: {
                          expenseCategories: [
                            {
                              id: 10000003,
                              name: 'Supplies',
                              displayOrder: 3,
                            },
                          ],
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              recordExpense: {
                capsuleRef: {
                  value: 'setup-answers-second-recordExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              correctExpense: {
                capsuleRef: {
                  value: 'setup-answers-second-correctExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              removeExpense: {
                capsuleRef: {
                  value: 'setup-answers-second-removeExpense-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
              signOut: {
                capsuleRef: {
                  value: 'setup-answers-second-signOut-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
            },
          },
        },
      ]

      test.each(cases)('attrs.class: $factoryParams.componentContext.attrs.class', ({
        factoryParams,
      }) => {
        const context = ExpensesPageContext.create(factoryParams)

        const actual = context.setupComponent()

        expect(actual)
          .toBe(context) // same reference
      })
    })
  })
})
