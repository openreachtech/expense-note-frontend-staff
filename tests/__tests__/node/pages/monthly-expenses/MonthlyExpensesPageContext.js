import BaseAppContext from '~/app/vue/contexts/BaseAppContext.js'

import MonthlyExpensesPageContext from '~/pages/monthly-expenses/MonthlyExpensesPageContext.js'

describe('MonthlyExpensesPageContext', () => {
  describe('super class', () => {
    test('to be derived class of BaseAppContext', () => {
      const actual = MonthlyExpensesPageContext.prototype

      expect(actual)
        .toBeInstanceOf(BaseAppContext)
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  describe('.create()', () => {
    describe('to be instance of MonthlyExpensesPageContext', () => {
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
                class: 'unit-page monthly-expenses',
              },
            },
          },
        },
      ]

      test.each(cases)('attrs.class: $params.componentContext.attrs.class', ({
        params,
      }) => {
        const actual = MonthlyExpensesPageContext.create(params)

        expect(actual)
          .toBeInstanceOf(MonthlyExpensesPageContext)
      })
    })

    describe('to be call by constructor', () => {
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
                class: 'unit-page monthly-expenses',
              },
            },
          },
        },
      ]

      test.each(cases)('attrs.class: $params.componentContext.attrs.class', ({
        params,
      }) => {
        const SpyClass = globalThis.constructorSpy.spyOn(MonthlyExpensesPageContext)

        SpyClass.create(params)

        expect(SpyClass.__spy__)
          .toHaveBeenCalledWith(params)
      })
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
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
              props: {},
              componentContext: {
                attrs: {
                  class: 'unit-page monthly-expenses',
                },
              },
            },
          },
        ]

        test.each(cases)('attrs.class: $params.componentContext.attrs.class', ({
          params,
        }) => {
          const actual = new MonthlyExpensesPageContext(params)

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
                  class: 'unit-page monthly-expenses',
                },
              },
            },
          },
        ]

        test.each(cases)('attrs.class: $params.componentContext.attrs.class', ({
          params,
        }) => {
          const actual = new MonthlyExpensesPageContext(params)

          expect(actual)
            .toHaveProperty('componentContext', params.componentContext)
        })
      })
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  describe('#setupComponent()', () => {
    const cases = [
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
        },
      },
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page monthly-expenses',
            },
          },
        },
      },
    ]

    test.each(cases)('attrs.class: $factoryParams.componentContext.attrs.class', ({
      factoryParams,
    }) => {
      const context = MonthlyExpensesPageContext.create(factoryParams)

      const actual = context.setupComponent()

      expect(actual)
        .toBe(context) // same reference
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
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
        },
        expected: 'Monthly expenses',
      },
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page monthly-expenses',
            },
          },
        },
        expected: 'Monthly expenses',
      },
    ]

    test.each(cases)('attrs.class: $factoryParams.componentContext.attrs.class', ({
      factoryParams,
      expected,
    }) => {
      const context = MonthlyExpensesPageContext.create(factoryParams)

      const actual = context.pageTitle

      expect(actual)
        .toBe(expected)
    })
  })
})
