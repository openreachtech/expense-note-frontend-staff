import BaseAppContext from '~/app/vue/contexts/BaseAppContext.js'

import ExpensesPageContext from '~/pages/expenses/ExpensesPageContext.js'

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
