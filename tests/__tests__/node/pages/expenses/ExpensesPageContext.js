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
    })
  })
})

describe('ExpensesPageContext', () => {
  describe('#get:pageTitle', () => {
    const cases = [
      {
        params: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
        },
        expected: 'Expenses',
      },
      {
        params: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page expenses',
            },
          },
        },
        expected: 'Expenses',
      },
    ]

    test.each(cases)('attrs.class: $params.componentContext.attrs.class', ({
      params,
      expected,
    }) => {
      const context = ExpensesPageContext.create(params)

      const actual = context.pageTitle

      expect(actual)
        .toBe(expected)
    })
  })
})
