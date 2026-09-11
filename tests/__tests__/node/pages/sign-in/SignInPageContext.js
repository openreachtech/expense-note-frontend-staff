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
            formValueHashReactive: {
              email: null,
              password: null,
            },
            statusReactive: {
              isSigningIn: false,
            },
            errorMessageHashReactive: {
              signIn: null,
            },
          },
        },
        {
          params: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            formValueHashReactive: {
              email: 'first.staff@example.com',
              password: 'first-password',
            },
            statusReactive: {
              isSigningIn: true,
            },
            errorMessageHashReactive: {
              signIn: 'That email address and password do not match.',
            },
          },
        },
      ]

      test.each(cases)('email: $params.formValueHashReactive.email', ({
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
            formValueHashReactive: {
              email: null,
              password: null,
            },
            statusReactive: {
              isSigningIn: false,
            },
            errorMessageHashReactive: {
              signIn: null,
            },
          },
        },
        {
          params: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            formValueHashReactive: {
              email: 'second.staff@example.com',
              password: 'second-password',
            },
            statusReactive: {
              isSigningIn: true,
            },
            errorMessageHashReactive: {
              signIn: 'That email address and password do not match.',
            },
          },
        },
      ]

      test.each(cases)('email: $params.formValueHashReactive.email', ({
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
  describe('constructor', () => {
    describe('to keep properties', () => {
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
                email: null,
                password: null,
              },
              statusReactive: {
                isSigningIn: false,
              },
              errorMessageHashReactive: {
                signIn: null,
              },
            },
          },
          {
            params: {
              props: {},
              componentContext: {
                attrs: {
                  class: 'unit-page',
                },
              },
              formValueHashReactive: {
                email: 'first.staff@example.com',
                password: 'first-password',
              },
              statusReactive: {
                isSigningIn: true,
              },
              errorMessageHashReactive: {
                signIn: 'That email address and password do not match.',
              },
            },
          },
        ]

        test.each(cases)('email: $params.formValueHashReactive.email', ({
          params,
        }) => {
          const actual = new SignInPageContext(params)

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
                email: null,
                password: null,
              },
              statusReactive: {
                isSigningIn: false,
              },
              errorMessageHashReactive: {
                signIn: null,
              },
            },
          },
          {
            params: {
              props: {},
              componentContext: {
                attrs: {
                  class: 'unit-page',
                },
              },
              formValueHashReactive: {
                email: 'second.staff@example.com',
                password: 'second-password',
              },
              statusReactive: {
                isSigningIn: true,
              },
              errorMessageHashReactive: {
                signIn: 'That email address and password do not match.',
              },
            },
          },
        ]

        test.each(cases)('email: $params.formValueHashReactive.email', ({
          params,
        }) => {
          const actual = new SignInPageContext(params)

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
                email: null,
                password: null,
              },
              statusReactive: {
                isSigningIn: false,
              },
              errorMessageHashReactive: {
                signIn: null,
              },
            },
          },
          {
            params: {
              props: {},
              componentContext: {
                attrs: {
                  class: 'unit-page',
                },
              },
              formValueHashReactive: {
                email: 'third.staff@example.com',
                password: 'third-password',
              },
              statusReactive: {
                isSigningIn: false,
              },
              errorMessageHashReactive: {
                signIn: 'That email address and password do not match.',
              },
            },
          },
        ]

        test.each(cases)('email: $params.formValueHashReactive.email', ({
          params,
        }) => {
          const actual = new SignInPageContext(params)

          expect(actual)
            .toHaveProperty('errorMessageHashReactive', params.errorMessageHashReactive)
        })
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
            formValueHashReactive: {
              email: null,
              password: null,
            },
            statusReactive: {
              isSigningIn: false,
            },
            errorMessageHashReactive: {
              signIn: null,
            },
          },
          expected: 'Sign in',
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
              email: 'first.staff@example.com',
              password: 'first-password',
            },
            statusReactive: {
              isSigningIn: true,
            },
            errorMessageHashReactive: {
              signIn: 'That email address and password do not match.',
            },
          },
          expected: 'Sign in',
        },
      ]

      test.each(cases)('email: $factoryParams.formValueHashReactive.email', ({
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

describe('SignInPageContext', () => {
  describe('#get:emailFieldId', () => {
    describe('to be the id the label points at', () => {
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
              email: null,
              password: null,
            },
            statusReactive: {
              isSigningIn: false,
            },
            errorMessageHashReactive: {
              signIn: null,
            },
          },
          expected: 'sign-in-email',
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
              email: 'first.staff@example.com',
              password: 'first-password',
            },
            statusReactive: {
              isSigningIn: true,
            },
            errorMessageHashReactive: {
              signIn: 'That email address and password do not match.',
            },
          },
          expected: 'sign-in-email',
        },
      ]

      test.each(cases)('email: $factoryParams.formValueHashReactive.email', ({
        factoryParams,
        expected,
      }) => {
        const context = SignInPageContext.create(factoryParams)

        const actual = context.emailFieldId

        expect(actual)
          .toBe(expected)
      })
    })
  })
})

describe('SignInPageContext', () => {
  describe('#get:passwordFieldId', () => {
    describe('to be the id the label points at', () => {
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
              email: null,
              password: null,
            },
            statusReactive: {
              isSigningIn: false,
            },
            errorMessageHashReactive: {
              signIn: null,
            },
          },
          expected: 'sign-in-password',
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
              email: 'second.staff@example.com',
              password: 'second-password',
            },
            statusReactive: {
              isSigningIn: true,
            },
            errorMessageHashReactive: {
              signIn: 'That email address and password do not match.',
            },
          },
          expected: 'sign-in-password',
        },
      ]

      test.each(cases)('email: $factoryParams.formValueHashReactive.email', ({
        factoryParams,
        expected,
      }) => {
        const context = SignInPageContext.create(factoryParams)

        const actual = context.passwordFieldId

        expect(actual)
          .toBe(expected)
      })
    })
  })
})

describe('SignInPageContext', () => {
  describe('#get:refusalRegionId', () => {
    describe('to be the id both fields are described by', () => {
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
              email: null,
              password: null,
            },
            statusReactive: {
              isSigningIn: false,
            },
            errorMessageHashReactive: {
              signIn: null,
            },
          },
          expected: 'sign-in-refusal',
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
              email: 'third.staff@example.com',
              password: 'third-password',
            },
            statusReactive: {
              isSigningIn: false,
            },
            errorMessageHashReactive: {
              signIn: 'That email address and password do not match.',
            },
          },
          expected: 'sign-in-refusal',
        },
      ]

      test.each(cases)('email: $factoryParams.formValueHashReactive.email', ({
        factoryParams,
        expected,
      }) => {
        const context = SignInPageContext.create(factoryParams)

        const actual = context.refusalRegionId

        expect(actual)
          .toBe(expected)
      })
    })
  })
})

describe('SignInPageContext', () => {
  describe('#get:submitButtonLabel', () => {
    describe('to be the label that also serves as the accessible name', () => {
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
              email: null,
              password: null,
            },
            statusReactive: {
              isSigningIn: false,
            },
            errorMessageHashReactive: {
              signIn: null,
            },
          },
          expected: 'Sign in',
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
              email: 'second.staff@example.com',
              password: 'second-password',
            },
            statusReactive: {
              isSigningIn: true,
            },
            errorMessageHashReactive: {
              signIn: null,
            },
          },
          expected: 'Sign in',
        },
      ]

      test.each(cases)('email: $factoryParams.formValueHashReactive.email', ({
        factoryParams,
        expected,
      }) => {
        const context = SignInPageContext.create(factoryParams)

        const actual = context.submitButtonLabel

        expect(actual)
          .toBe(expected)
      })
    })
  })
})

describe('SignInPageContext', () => {
  describe('#get:emailValue', () => {
    describe('to be the address entered so far', () => {
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
              email: 'first.staff@example.com',
              password: 'first-password',
            },
            statusReactive: {
              isSigningIn: false,
            },
            errorMessageHashReactive: {
              signIn: null,
            },
          },
          expected: 'first.staff@example.com',
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
              email: 'second.staff@example.com',
              password: 'second-password',
            },
            statusReactive: {
              isSigningIn: true,
            },
            errorMessageHashReactive: {
              signIn: null,
            },
          },
          expected: 'second.staff@example.com',
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
              email: '',
              password: '',
            },
            statusReactive: {
              isSigningIn: false,
            },
            errorMessageHashReactive: {
              signIn: null,
            },
          },
          expected: '',
        },
      ]

      test.each(cases)('email: $factoryParams.formValueHashReactive.email', ({
        factoryParams,
        expected,
      }) => {
        const context = SignInPageContext.create(factoryParams)

        const actual = context.emailValue

        expect(actual)
          .toBe(expected)
      })
    })

    describe('when the field has never been touched', () => {
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
              email: null,
              password: null,
            },
            statusReactive: {
              isSigningIn: false,
            },
            errorMessageHashReactive: {
              signIn: null,
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
              email: null,
              password: 'third-password',
            },
            statusReactive: {
              isSigningIn: false,
            },
            errorMessageHashReactive: {
              signIn: null,
            },
          },
        },
      ]

      test.each(cases)('password: $factoryParams.formValueHashReactive.password', ({
        factoryParams,
      }) => {
        const context = SignInPageContext.create(factoryParams)

        const actual = context.emailValue

        expect(actual)
          .toBeNull()
      })
    })
  })
})

describe('SignInPageContext', () => {
  describe('#get:passwordValue', () => {
    describe('to be the password entered so far', () => {
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
              email: 'first.staff@example.com',
              password: 'first-password',
            },
            statusReactive: {
              isSigningIn: false,
            },
            errorMessageHashReactive: {
              signIn: null,
            },
          },
          expected: 'first-password',
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
              email: 'second.staff@example.com',
              password: 'second-password',
            },
            statusReactive: {
              isSigningIn: true,
            },
            errorMessageHashReactive: {
              signIn: null,
            },
          },
          expected: 'second-password',
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
              email: 'third.staff@example.com',
              password: '',
            },
            statusReactive: {
              isSigningIn: false,
            },
            errorMessageHashReactive: {
              signIn: null,
            },
          },
          expected: '',
        },
      ]

      test.each(cases)('email: $factoryParams.formValueHashReactive.email', ({
        factoryParams,
        expected,
      }) => {
        const context = SignInPageContext.create(factoryParams)

        const actual = context.passwordValue

        expect(actual)
          .toBe(expected)
      })
    })

    describe('when the field has never been touched', () => {
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
              email: null,
              password: null,
            },
            statusReactive: {
              isSigningIn: false,
            },
            errorMessageHashReactive: {
              signIn: null,
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
              email: 'first.staff@example.com',
              password: null,
            },
            statusReactive: {
              isSigningIn: false,
            },
            errorMessageHashReactive: {
              signIn: null,
            },
          },
        },
      ]

      test.each(cases)('email: $factoryParams.formValueHashReactive.email', ({
        factoryParams,
      }) => {
        const context = SignInPageContext.create(factoryParams)

        const actual = context.passwordValue

        expect(actual)
          .toBeNull()
      })
    })
  })
})

describe('SignInPageContext', () => {
  describe('#get:refusalMessage', () => {
    describe('to be the one message a refused sign-in shows', () => {
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
              email: 'first.staff@example.com',
              password: 'first-password',
            },
            statusReactive: {
              isSigningIn: false,
            },
            errorMessageHashReactive: {
              signIn: 'That email address and password do not match.',
            },
          },
          expected: 'That email address and password do not match.',
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
              email: 'second.staff@example.com',
              password: 'second-password',
            },
            statusReactive: {
              isSigningIn: false,
            },
            errorMessageHashReactive: {
              signIn: 'Too many sign-in attempts. Wait a few minutes and try again.',
            },
          },
          expected: 'Too many sign-in attempts. Wait a few minutes and try again.',
        },
      ]

      test.each(cases)('email: $factoryParams.formValueHashReactive.email', ({
        factoryParams,
        expected,
      }) => {
        const context = SignInPageContext.create(factoryParams)

        const actual = context.refusalMessage

        expect(actual)
          .toBe(expected)
      })
    })

    describe('when nothing has been refused', () => {
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
              email: null,
              password: null,
            },
            statusReactive: {
              isSigningIn: false,
            },
            errorMessageHashReactive: {
              signIn: null,
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
              email: 'third.staff@example.com',
              password: 'third-password',
            },
            statusReactive: {
              isSigningIn: true,
            },
            errorMessageHashReactive: {
              signIn: null,
            },
          },
        },
      ]

      test.each(cases)('email: $factoryParams.formValueHashReactive.email', ({
        factoryParams,
      }) => {
        const context = SignInPageContext.create(factoryParams)

        const actual = context.refusalMessage

        expect(actual)
          .toBeNull()
      })
    })
  })
})

describe('SignInPageContext', () => {
  describe('#hasRefusal()', () => {
    describe('when a sign-in has been refused', () => {
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
              email: 'first.staff@example.com',
              password: 'first-password',
            },
            statusReactive: {
              isSigningIn: false,
            },
            errorMessageHashReactive: {
              signIn: 'That email address and password do not match.',
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
              email: 'second.staff@example.com',
              password: 'second-password',
            },
            statusReactive: {
              isSigningIn: false,
            },
            errorMessageHashReactive: {
              signIn: 'The session could not be started. Try again.',
            },
          },
        },
      ]

      test.each(cases)('email: $factoryParams.formValueHashReactive.email', ({
        factoryParams,
      }) => {
        const context = SignInPageContext.create(factoryParams)

        const actual = context.hasRefusal()

        expect(actual)
          .toBeTruthy()
      })
    })

    describe('when nothing has been refused', () => {
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
              email: null,
              password: null,
            },
            statusReactive: {
              isSigningIn: false,
            },
            errorMessageHashReactive: {
              signIn: null,
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
              email: 'third.staff@example.com',
              password: 'third-password',
            },
            statusReactive: {
              isSigningIn: true,
            },
            errorMessageHashReactive: {
              signIn: null,
            },
          },
        },
      ]

      test.each(cases)('email: $factoryParams.formValueHashReactive.email', ({
        factoryParams,
      }) => {
        const context = SignInPageContext.create(factoryParams)

        const actual = context.hasRefusal()

        expect(actual)
          .toBeFalsy()
      })
    })
  })
})

describe('SignInPageContext', () => {
  describe('#isSigningIn()', () => {
    describe('while the submit is pending', () => {
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
              email: 'first.staff@example.com',
              password: 'first-password',
            },
            statusReactive: {
              isSigningIn: true,
            },
            errorMessageHashReactive: {
              signIn: null,
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
              email: 'second.staff@example.com',
              password: 'second-password',
            },
            statusReactive: {
              isSigningIn: true,
            },
            errorMessageHashReactive: {
              signIn: 'That email address and password do not match.',
            },
          },
        },
      ]

      test.each(cases)('email: $factoryParams.formValueHashReactive.email', ({
        factoryParams,
      }) => {
        const context = SignInPageContext.create(factoryParams)

        const actual = context.isSigningIn()

        expect(actual)
          .toBeTruthy()
      })
    })

    describe('while no submit is pending', () => {
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
              email: null,
              password: null,
            },
            statusReactive: {
              isSigningIn: false,
            },
            errorMessageHashReactive: {
              signIn: null,
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
              email: 'third.staff@example.com',
              password: 'third-password',
            },
            statusReactive: {
              isSigningIn: false,
            },
            errorMessageHashReactive: {
              signIn: 'That email address and password do not match.',
            },
          },
        },
      ]

      test.each(cases)('email: $factoryParams.formValueHashReactive.email', ({
        factoryParams,
      }) => {
        const context = SignInPageContext.create(factoryParams)

        const actual = context.isSigningIn()

        expect(actual)
          .toBeFalsy()
      })
    })
  })
})

describe('SignInPageContext', () => {
  describe('#get:emailControlBlockParcel', () => {
    describe('to frame the field and never carry a message of its own', () => {
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
              email: null,
              password: null,
            },
            statusReactive: {
              isSigningIn: false,
            },
            errorMessageHashReactive: {
              signIn: null,
            },
          },
          expected: {
            label: 'Email address',
            controlId: 'sign-in-email',
            required: true,
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
              email: 'first.staff@example.com',
              password: 'first-password',
            },
            statusReactive: {
              isSigningIn: false,
            },
            errorMessageHashReactive: {
              signIn: null,
            },
          },
          expected: {
            label: 'Email address',
            controlId: 'sign-in-email',
            required: true,
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
              email: 'second.staff@example.com',
              password: 'second-password',
            },
            statusReactive: {
              isSigningIn: true,
            },
            errorMessageHashReactive: {
              signIn: null,
            },
          },
          expected: {
            label: 'Email address',
            controlId: 'sign-in-email',
            required: true,
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
              email: 'third.staff@example.com',
              password: 'third-password',
            },
            statusReactive: {
              isSigningIn: false,
            },
            errorMessageHashReactive: {
              signIn: 'That email address and password do not match.',
            },
          },
          expected: {
            label: 'Email address',
            controlId: 'sign-in-email',
            required: true,
          },
        },
      ]

      test.each(cases)('email: $factoryParams.formValueHashReactive.email', ({
        factoryParams,
        expected,
      }) => {
        const context = SignInPageContext.create(factoryParams)

        const actual = context.emailControlBlockParcel

        expect(actual)
          .toEqual(expected)
      })
    })
  })
})

describe('SignInPageContext', () => {
  describe('#get:passwordControlBlockParcel', () => {
    describe('to frame the field and never carry a message of its own', () => {
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
              email: null,
              password: null,
            },
            statusReactive: {
              isSigningIn: false,
            },
            errorMessageHashReactive: {
              signIn: null,
            },
          },
          expected: {
            label: 'Password',
            controlId: 'sign-in-password',
            required: true,
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
              email: 'first.staff@example.com',
              password: 'first-password',
            },
            statusReactive: {
              isSigningIn: false,
            },
            errorMessageHashReactive: {
              signIn: null,
            },
          },
          expected: {
            label: 'Password',
            controlId: 'sign-in-password',
            required: true,
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
              email: 'second.staff@example.com',
              password: 'second-password',
            },
            statusReactive: {
              isSigningIn: true,
            },
            errorMessageHashReactive: {
              signIn: null,
            },
          },
          expected: {
            label: 'Password',
            controlId: 'sign-in-password',
            required: true,
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
              email: 'third.staff@example.com',
              password: 'third-password',
            },
            statusReactive: {
              isSigningIn: false,
            },
            errorMessageHashReactive: {
              signIn: 'That email address and password do not match.',
            },
          },
          expected: {
            label: 'Password',
            controlId: 'sign-in-password',
            required: true,
          },
        },
      ]

      test.each(cases)('email: $factoryParams.formValueHashReactive.email', ({
        factoryParams,
        expected,
      }) => {
        const context = SignInPageContext.create(factoryParams)

        const actual = context.passwordControlBlockParcel

        expect(actual)
          .toEqual(expected)
      })
    })
  })
})

describe('SignInPageContext', () => {
  describe('#get:emailFieldParcel', () => {
    describe('to carry the entered value, and the invalid state of a refused pair', () => {
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
              email: null,
              password: null,
            },
            statusReactive: {
              isSigningIn: false,
            },
            errorMessageHashReactive: {
              signIn: null,
            },
          },
          expected: {
            value: null,
            invalid: false,
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
              email: 'first.staff@example.com',
              password: 'first-password',
            },
            statusReactive: {
              isSigningIn: false,
            },
            errorMessageHashReactive: {
              signIn: null,
            },
          },
          expected: {
            value: 'first.staff@example.com',
            invalid: false,
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
              email: 'second.staff@example.com',
              password: 'second-password',
            },
            statusReactive: {
              isSigningIn: true,
            },
            errorMessageHashReactive: {
              signIn: null,
            },
          },
          expected: {
            value: 'second.staff@example.com',
            invalid: false,
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
              email: 'third.staff@example.com',
              password: 'third-password',
            },
            statusReactive: {
              isSigningIn: false,
            },
            errorMessageHashReactive: {
              signIn: 'That email address and password do not match.',
            },
          },
          expected: {
            value: 'third.staff@example.com',
            invalid: true,
          },
        },
      ]

      test.each(cases)('email: $factoryParams.formValueHashReactive.email', ({
        factoryParams,
        expected,
      }) => {
        const context = SignInPageContext.create(factoryParams)

        const actual = context.emailFieldParcel

        expect(actual)
          .toEqual(expected)
      })
    })
  })
})

describe('SignInPageContext', () => {
  describe('#get:passwordFieldParcel', () => {
    describe('to carry the entered value, and the invalid state of a refused pair', () => {
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
              email: null,
              password: null,
            },
            statusReactive: {
              isSigningIn: false,
            },
            errorMessageHashReactive: {
              signIn: null,
            },
          },
          expected: {
            value: null,
            invalid: false,
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
              email: 'first.staff@example.com',
              password: 'first-password',
            },
            statusReactive: {
              isSigningIn: false,
            },
            errorMessageHashReactive: {
              signIn: null,
            },
          },
          expected: {
            value: 'first-password',
            invalid: false,
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
              email: 'second.staff@example.com',
              password: 'second-password',
            },
            statusReactive: {
              isSigningIn: true,
            },
            errorMessageHashReactive: {
              signIn: null,
            },
          },
          expected: {
            value: 'second-password',
            invalid: false,
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
              email: 'third.staff@example.com',
              password: 'third-password',
            },
            statusReactive: {
              isSigningIn: false,
            },
            errorMessageHashReactive: {
              signIn: 'That email address and password do not match.',
            },
          },
          expected: {
            value: 'third-password',
            invalid: true,
          },
        },
      ]

      test.each(cases)('email: $factoryParams.formValueHashReactive.email', ({
        factoryParams,
        expected,
      }) => {
        const context = SignInPageContext.create(factoryParams)

        const actual = context.passwordFieldParcel

        expect(actual)
          .toEqual(expected)
      })
    })
  })
})

describe('SignInPageContext', () => {
  describe('#get:submitButtonParcel', () => {
    describe('to submit the form, and to lock while a sign-in is pending', () => {
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
              email: null,
              password: null,
            },
            statusReactive: {
              isSigningIn: false,
            },
            errorMessageHashReactive: {
              signIn: null,
            },
          },
          expected: {
            variant: 'default',
            type: 'submit',
            loading: false,
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
              email: 'first.staff@example.com',
              password: 'first-password',
            },
            statusReactive: {
              isSigningIn: false,
            },
            errorMessageHashReactive: {
              signIn: null,
            },
          },
          expected: {
            variant: 'default',
            type: 'submit',
            loading: false,
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
              email: 'second.staff@example.com',
              password: 'second-password',
            },
            statusReactive: {
              isSigningIn: true,
            },
            errorMessageHashReactive: {
              signIn: null,
            },
          },
          expected: {
            variant: 'default',
            type: 'submit',
            loading: true,
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
              email: 'third.staff@example.com',
              password: 'third-password',
            },
            statusReactive: {
              isSigningIn: false,
            },
            errorMessageHashReactive: {
              signIn: 'That email address and password do not match.',
            },
          },
          expected: {
            variant: 'default',
            type: 'submit',
            loading: false,
          },
        },
      ]

      test.each(cases)('email: $factoryParams.formValueHashReactive.email', ({
        factoryParams,
        expected,
      }) => {
        const context = SignInPageContext.create(factoryParams)

        const actual = context.submitButtonParcel

        expect(actual)
          .toEqual(expected)
      })
    })
  })
})

describe('SignInPageContext', () => {
  describe('#onChangeEmail()', () => {
    describe('to keep the address the field reports', () => {
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
              email: null,
              password: null,
            },
            statusReactive: {
              isSigningIn: false,
            },
            errorMessageHashReactive: {
              signIn: null,
            },
          },
          params: {
            payload: {
              value: 'first.staff@example.com',
            },
          },
          expected: {
            email: 'first.staff@example.com',
            password: null,
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
              email: 'second.staff@example.com',
              password: 'second-password',
            },
            statusReactive: {
              isSigningIn: false,
            },
            errorMessageHashReactive: {
              signIn: null,
            },
          },
          params: {
            payload: {
              value: 'third.staff@example.com',
            },
          },
          expected: {
            email: 'third.staff@example.com',
            password: 'second-password',
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
              email: 'fourth.staff@example.com',
              password: 'fourth-password',
            },
            statusReactive: {
              isSigningIn: false,
            },
            errorMessageHashReactive: {
              signIn: null,
            },
          },
          params: {
            payload: {
              value: '',
            },
          },
          expected: {
            email: '',
            password: 'fourth-password',
          },
        },
      ]

      test.each(cases)('payload.value: $params.payload.value', ({
        factoryParams,
        params,
        expected,
      }) => {
        const context = SignInPageContext.create(factoryParams)

        context.onChangeEmail(params)

        expect(factoryParams.formValueHashReactive)
          .toEqual(expected)
      })
    })
  })
})

describe('SignInPageContext', () => {
  describe('#onChangePassword()', () => {
    describe('to keep the password the field reports', () => {
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
              email: null,
              password: null,
            },
            statusReactive: {
              isSigningIn: false,
            },
            errorMessageHashReactive: {
              signIn: null,
            },
          },
          params: {
            payload: {
              value: 'first-password',
            },
          },
          expected: {
            email: null,
            password: 'first-password',
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
              email: 'second.staff@example.com',
              password: 'second-password',
            },
            statusReactive: {
              isSigningIn: false,
            },
            errorMessageHashReactive: {
              signIn: null,
            },
          },
          params: {
            payload: {
              value: 'third-password',
            },
          },
          expected: {
            email: 'second.staff@example.com',
            password: 'third-password',
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
              email: 'fourth.staff@example.com',
              password: 'fourth-password',
            },
            statusReactive: {
              isSigningIn: false,
            },
            errorMessageHashReactive: {
              signIn: null,
            },
          },
          params: {
            payload: {
              value: '',
            },
          },
          expected: {
            email: 'fourth.staff@example.com',
            password: '',
          },
        },
      ]

      test.each(cases)('payload.value: $params.payload.value', ({
        factoryParams,
        params,
        expected,
      }) => {
        const context = SignInPageContext.create(factoryParams)

        context.onChangePassword(params)

        expect(factoryParams.formValueHashReactive)
          .toEqual(expected)
      })
    })
  })
})

describe('SignInPageContext', () => {
  describe('#onSubmitForm()', () => {
    describe('to clear the refusal a previous attempt left', () => {
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
              email: 'first.staff@example.com',
              password: 'first-password',
            },
            statusReactive: {
              isSigningIn: false,
            },
            errorMessageHashReactive: {
              signIn: 'That email address and password do not match.',
            },
          },
          expected: {
            signIn: null,
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
              email: 'second.staff@example.com',
              password: 'second-password',
            },
            statusReactive: {
              isSigningIn: false,
            },
            errorMessageHashReactive: {
              signIn: null,
            },
          },
          expected: {
            signIn: null,
          },
        },
      ]

      test.each(cases)('email: $factoryParams.formValueHashReactive.email', ({
        factoryParams,
        expected,
      }) => {
        const context = SignInPageContext.create(factoryParams)

        context.onSubmitForm()

        expect(factoryParams.errorMessageHashReactive)
          .toEqual(expected)
      })
    })

    describe('to enter the pending state, which is what locks the submit', () => {
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
              email: 'third.staff@example.com',
              password: 'third-password',
            },
            statusReactive: {
              isSigningIn: false,
            },
            errorMessageHashReactive: {
              signIn: null,
            },
          },
          expected: {
            isSigningIn: true,
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
              email: 'fourth.staff@example.com',
              password: 'fourth-password',
            },
            statusReactive: {
              isSigningIn: false,
            },
            errorMessageHashReactive: {
              signIn: 'That email address and password do not match.',
            },
          },
          expected: {
            isSigningIn: true,
          },
        },
      ]

      test.each(cases)('email: $factoryParams.formValueHashReactive.email', ({
        factoryParams,
        expected,
      }) => {
        const context = SignInPageContext.create(factoryParams)

        context.onSubmitForm()

        expect(factoryParams.statusReactive)
          .toEqual(expected)
      })
    })
  })
})
