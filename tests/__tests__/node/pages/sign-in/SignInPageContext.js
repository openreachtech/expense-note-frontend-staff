import BaseAppContext from '~/app/vue/contexts/BaseAppContext.js'

import SignInPageContext from '~/pages/sign-in/SignInPageContext.js'

describe('SignInPageContext', () => {
  describe('super class', () => {
    test('to be derived class of BaseAppContext', () => {
      const actual = SignInPageContext.prototype

      expect(actual)
        .toBeInstanceOf(BaseAppContext)
    })
  })
})

describe('SignInPageContext', () => {
  describe('.create()', () => {
    describe('to be instance of SignInPageContext', () => {
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
                class: 'unit-page gateway',
              },
            },
          },
        },
      ]

      test.each(cases)('attrs.class: $params.componentContext.attrs.class', ({
        params,
      }) => {
        const actual = SignInPageContext.create(params)

        expect(actual)
          .toBeInstanceOf(SignInPageContext)
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
                class: 'unit-page gateway',
              },
            },
          },
        },
      ]

      test.each(cases)('attrs.class: $params.componentContext.attrs.class', ({
        params,
      }) => {
        const SpyClass = globalThis.constructorSpy.spyOn(SignInPageContext)

        SpyClass.create(params)

        expect(SpyClass.__spy__)
          .toHaveBeenCalledWith(params)
      })
    })
  })
})

describe('SignInPageContext', () => {
  describe('#get:pageTitle', () => {
    describe('to be title of the sign-in page', () => {
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
          expected: 'Sign in',
        },
        {
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page gateway',
              },
            },
          },
          expected: 'Sign in',
        },
      ]

      test.each(cases)('attrs.class: $factoryParams.componentContext.attrs.class', ({
        factoryParams,
        expected,
      }) => {
        const context = SignInPageContext.create(factoryParams)

        const actual = context.pageTitle

        expect(actual)
          .toBe(expected)
      })
    })
  })
})
