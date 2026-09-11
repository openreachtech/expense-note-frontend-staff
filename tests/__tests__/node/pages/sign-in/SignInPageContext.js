import {
  StorageClerk,
} from '@openreachtech/furo'

import BaseAppContext from '~/app/vue/contexts/BaseAppContext.js'

import AppAccessTokenClerk from '~/app/tools/storage/AppAccessTokenClerk.js'
import MemoryStorage from '~/app/tools/storage/MemoryStorage.js'

import SignInMutationGraphqlCapsule from '~/app/graphql/client/mutations/signIn/SignInMutationGraphqlCapsule.js'
import RenewAccessTokenMutationGraphqlCapsule from '~/app/graphql/client/mutations/renewAccessToken/RenewAccessTokenMutationGraphqlCapsule.js'
import SignedInStaffMemberQueryGraphqlCapsule from '~/app/graphql/client/queries/signedInStaffMember/SignedInStaffMemberQueryGraphqlCapsule.js'

import SignInPageContext from '~/pages/sign-in/SignInPageContext.js'

/*
 * The key furo reads a response's content from. It is written as a constant because the name furo
 * chose for it is one `@openreachtech/eslint-config` denies as an identifier, and the envelope is
 * furo's to name, not this repository's.
 */
const RESPONSE_CONTENT_FIELD = 'data'

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
            route: {
              query: {},
            },
            router: {
              replace: async () => {},
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
            graphqlClientHash: {
              signIn: {
                capsuleRef: {
                  value: null,
                },
                invokeRequestOnEvent: async () => {},
              },
              renewAccessToken: {
                capsuleRef: {
                  value: null,
                },
                invokeRequestOnEvent: async () => {},
              },
              signedInStaffMember: {
                capsuleRef: {
                  value: null,
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
              existsToken: () => false,
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
            route: {
              query: {
                redirect: '/expenses',
              },
            },
            router: {
              replace: async () => {},
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
            graphqlClientHash: {
              signIn: {
                capsuleRef: {
                  value: null,
                },
                invokeRequestOnEvent: async () => {},
              },
              renewAccessToken: {
                capsuleRef: {
                  value: null,
                },
                invokeRequestOnEvent: async () => {},
              },
              signedInStaffMember: {
                capsuleRef: {
                  value: null,
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
              existsToken: () => true,
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
            route: {
              query: {},
            },
            router: {
              replace: async () => {},
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
            graphqlClientHash: {
              signIn: {
                capsuleRef: {
                  value: null,
                },
                invokeRequestOnEvent: async () => {},
              },
              renewAccessToken: {
                capsuleRef: {
                  value: null,
                },
                invokeRequestOnEvent: async () => {},
              },
              signedInStaffMember: {
                capsuleRef: {
                  value: null,
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
              existsToken: () => false,
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
            route: {
              query: {
                redirect: '/expenses/new',
              },
            },
            router: {
              replace: async () => {},
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
            graphqlClientHash: {
              signIn: {
                capsuleRef: {
                  value: null,
                },
                invokeRequestOnEvent: async () => {},
              },
              renewAccessToken: {
                capsuleRef: {
                  value: null,
                },
                invokeRequestOnEvent: async () => {},
              },
              signedInStaffMember: {
                capsuleRef: {
                  value: null,
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: {
              saveToken: () => true,
              existsToken: () => true,
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

      /*
       * The four dependencies checkpoint 16 adds are isolated: each case carries only the property
       * under test, and every other constructor argument is left out as a neutral value. The
       * constructor assigns and does nothing else, so nothing else can influence the result.
       */
      describe('#route', () => {
        const cases = [
          {
            params: {
              route: {
                query: {},
              },
            },
          },
          {
            params: {
              route: {
                query: {
                  redirect: '/expenses',
                },
              },
            },
          },
        ]

        test.each(cases)('route: $params.route.query.redirect', ({
          params,
        }) => {
          const actual = new SignInPageContext(params)

          expect(actual)
            .toHaveProperty('route', params.route)
        })
      })

      describe('#router', () => {
        const cases = [
          {
            params: {
              router: {
                replace: async () => 'first-router-0001',
              },
            },
          },
          {
            params: {
              router: {
                replace: async () => 'second-router-0002',
              },
            },
          },
        ]

        test.each(cases)('router: $params.router.replace', ({
          params,
        }) => {
          const actual = new SignInPageContext(params)

          expect(actual)
            .toHaveProperty('router', params.router)
        })
      })

      describe('#graphqlClientHash', () => {
        const cases = [
          {
            params: {
              graphqlClientHash: {
                signIn: {
                  capsuleRef: {
                    value: 'first-sign-in-capsule-0001',
                  },
                },
                renewAccessToken: {
                  capsuleRef: {
                    value: 'first-renew-access-token-capsule-0001',
                  },
                },
                signedInStaffMember: {
                  capsuleRef: {
                    value: 'first-signed-in-staff-member-capsule-0001',
                  },
                },
              },
            },
          },
          {
            params: {
              graphqlClientHash: {
                signIn: {
                  capsuleRef: {
                    value: 'second-sign-in-capsule-0002',
                  },
                },
                renewAccessToken: {
                  capsuleRef: {
                    value: 'second-renew-access-token-capsule-0002',
                  },
                },
                signedInStaffMember: {
                  capsuleRef: {
                    value: 'second-signed-in-staff-member-capsule-0002',
                  },
                },
              },
            },
          },
        ]

        test.each(cases)('signIn capsule: $params.graphqlClientHash.signIn.capsuleRef.value', ({
          params,
        }) => {
          const actual = new SignInPageContext(params)

          expect(actual)
            .toHaveProperty('graphqlClientHash', params.graphqlClientHash)
        })
      })

      describe('#accessTokenClerk', () => {
        const cases = [
          {
            params: {
              accessTokenClerk: {
                retrieveToken: () => 'first-access-token-0001',
              },
            },
          },
          {
            params: {
              accessTokenClerk: {
                retrieveToken: () => 'second-access-token-0002',
              },
            },
          },
        ]

        test.each(cases)('accessTokenClerk: $params.accessTokenClerk.retrieveToken', ({
          params,
        }) => {
          const actual = new SignInPageContext(params)

          expect(actual)
            .toHaveProperty('accessTokenClerk', params.accessTokenClerk)
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
  describe('#get:signInCapsule', () => {
    describe('to be the capsule the client is holding', () => {
      const cases = [
        {
          factoryParams: {
            graphqlClientHash: {
              signIn: {
                capsuleRef: {
                  value: SignInMutationGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        signIn: {
                          staffMemberId: 100001,
                          accessToken: 'granted-access-token-0001',
                        },
                      },
                    },
                  }),
                },
              },
            },
          },
          expected: 'granted-access-token-0001',
        },
        {
          factoryParams: {
            graphqlClientHash: {
              signIn: {
                capsuleRef: {
                  value: SignInMutationGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        signIn: {
                          staffMemberId: 100002,
                          accessToken: 'granted-access-token-0002',
                        },
                      },
                    },
                  }),
                },
              },
            },
          },
          expected: 'granted-access-token-0002',
        },
      ]

      test.each(cases)('staffMemberId: $factoryParams.graphqlClientHash.signIn.capsuleRef.value.result.data.signIn.staffMemberId', ({
        factoryParams,
        expected,
      }) => {
        const context = SignInPageContext.create(factoryParams)

        const actual = context.signInCapsule

        expect(actual)
          .toHaveProperty('accessToken', expected)
      })
    })
  })
})

describe('SignInPageContext', () => {
  describe('#get:renewAccessTokenCapsule', () => {
    describe('to be the capsule the client is holding', () => {
      const cases = [
        {
          factoryParams: {
            graphqlClientHash: {
              renewAccessToken: {
                capsuleRef: {
                  value: RenewAccessTokenMutationGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        renewAccessToken: {
                          accessToken: 'renewed-access-token-0001',
                        },
                      },
                    },
                  }),
                },
              },
            },
          },
          expected: 'renewed-access-token-0001',
        },
        {
          factoryParams: {
            graphqlClientHash: {
              renewAccessToken: {
                capsuleRef: {
                  value: RenewAccessTokenMutationGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        renewAccessToken: {
                          accessToken: 'renewed-access-token-0002',
                        },
                      },
                    },
                  }),
                },
              },
            },
          },
          expected: 'renewed-access-token-0002',
        },
      ]

      test.each(cases)('accessToken: $factoryParams.graphqlClientHash.renewAccessToken.capsuleRef.value.result.data.renewAccessToken.accessToken', ({
        factoryParams,
        expected,
      }) => {
        const context = SignInPageContext.create(factoryParams)

        const actual = context.renewAccessTokenCapsule

        expect(actual)
          .toHaveProperty('accessToken', expected)
      })
    })
  })
})

describe('SignInPageContext', () => {
  describe('#get:signedInStaffMemberCapsule', () => {
    describe('to be the capsule the client is holding', () => {
      const cases = [
        {
          factoryParams: {
            graphqlClientHash: {
              signedInStaffMember: {
                capsuleRef: {
                  value: SignedInStaffMemberQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        signedInStaffMember: {
                          staffMemberId: 100003,
                          name: 'Third Staff',
                          email: 'third.staff@example.com',
                        },
                      },
                    },
                  }),
                },
              },
            },
          },
          expected: 100003,
        },
        {
          factoryParams: {
            graphqlClientHash: {
              signedInStaffMember: {
                capsuleRef: {
                  value: SignedInStaffMemberQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        signedInStaffMember: {
                          staffMemberId: 100004,
                          name: 'Fourth Staff',
                          email: 'fourth.staff@example.com',
                        },
                      },
                    },
                  }),
                },
              },
            },
          },
          expected: 100004,
        },
      ]

      test.each(cases)('staffMemberId: $factoryParams.graphqlClientHash.signedInStaffMember.capsuleRef.value.result.data.signedInStaffMember.staffMemberId', ({
        factoryParams,
        expected,
      }) => {
        const context = SignInPageContext.create(factoryParams)

        const actual = context.signedInStaffMemberCapsule

        expect(actual)
          .toHaveProperty('staffMemberId', expected)
      })
    })
  })
})

describe('SignInPageContext', () => {
  describe('#get:signInLauncherHooks', () => {
    /*
     * The pending state is raised by the request rather than by the handler around it. Taking the
     * hook and calling it is what drives that boundary directly, so a hook that stopped raising the
     * flag fails here rather than only showing up as a button that never locks.
     */
    describe('should raise the pending state before the request goes out', () => {
      const cases = [
        {
          factoryParams: {
            statusReactive: {
              isSigningIn: false,
            },
          },
          expected: {
            isSigningIn: true,
          },
        },
        {
          factoryParams: {
            statusReactive: {
              isSigningIn: true,
            },
          },
          expected: {
            isSigningIn: true,
          },
        },
      ]

      test.each(cases)('isSigningIn: $factoryParams.statusReactive.isSigningIn', async ({
        factoryParams,
        expected,
      }) => {
        const context = SignInPageContext.create(factoryParams)

        await context.signInLauncherHooks.beforeRequest()

        expect(factoryParams.statusReactive)
          .toEqual(expected)
      })
    })
  })
})

describe('SignInPageContext', () => {
  describe('#get:signInLauncherHooks', () => {
    /*
     * Returning true from `beforeRequest` aborts the launch, so answering falsy is what lets the
     * request happen at all.
     */
    describe('should be falsy so the request proceeds', () => {
      const cases = [
        {
          factoryParams: {
            statusReactive: {
              isSigningIn: false,
            },
          },
        },
        {
          factoryParams: {
            statusReactive: {
              isSigningIn: true,
            },
          },
        },
      ]

      test.each(cases)('isSigningIn: $factoryParams.statusReactive.isSigningIn', async ({
        factoryParams,
      }) => {
        const context = SignInPageContext.create(factoryParams)

        const actual = await context.signInLauncherHooks.beforeRequest()

        expect(actual)
          .toBeFalsy()
      })
    })
  })
})

describe('SignInPageContext', () => {
  describe('#get:signInLauncherHooks', () => {
    describe('should lower the pending state once the response is in', () => {
      const cases = [
        {
          factoryParams: {
            statusReactive: {
              isSigningIn: true,
            },
          },
          expected: {
            isSigningIn: false,
          },
        },
        {
          factoryParams: {
            statusReactive: {
              isSigningIn: false,
            },
          },
          expected: {
            isSigningIn: false,
          },
        },
      ]

      test.each(cases)('isSigningIn: $factoryParams.statusReactive.isSigningIn', async ({
        factoryParams,
        expected,
      }) => {
        const context = SignInPageContext.create(factoryParams)

        await context.signInLauncherHooks.afterRequest()

        expect(factoryParams.statusReactive)
          .toEqual(expected)
      })
    })
  })
})

describe('SignInPageContext', () => {
  describe('#startSigningIn()', () => {
    describe('should put the screen into its pending state', () => {
      const cases = [
        {
          factoryParams: {
            statusReactive: {
              isSigningIn: false,
            },
          },
          expected: {
            isSigningIn: true,
          },
        },
        {
          factoryParams: {
            statusReactive: {
              isSigningIn: true,
            },
          },
          expected: {
            isSigningIn: true,
          },
        },
      ]

      test.each(cases)('isSigningIn: $factoryParams.statusReactive.isSigningIn', ({
        factoryParams,
        expected,
      }) => {
        const context = SignInPageContext.create(factoryParams)

        context.startSigningIn()

        expect(factoryParams.statusReactive)
          .toEqual(expected)
      })
    })
  })
})

describe('SignInPageContext', () => {
  describe('#finishSigningIn()', () => {
    describe('should take the screen out of its pending state', () => {
      const cases = [
        {
          factoryParams: {
            statusReactive: {
              isSigningIn: true,
            },
          },
          expected: {
            isSigningIn: false,
          },
        },
        {
          factoryParams: {
            statusReactive: {
              isSigningIn: false,
            },
          },
          expected: {
            isSigningIn: false,
          },
        },
      ]

      test.each(cases)('isSigningIn: $factoryParams.statusReactive.isSigningIn', ({
        factoryParams,
        expected,
      }) => {
        const context = SignInPageContext.create(factoryParams)

        context.finishSigningIn()

        expect(factoryParams.statusReactive)
          .toEqual(expected)
      })
    })
  })
})

describe('SignInPageContext', () => {
  describe('#buildSignInVariables()', () => {
    describe('should be the shape the signIn document declares', () => {
      const cases = [
        {
          factoryParams: {
            formValueHashReactive: {
              email: 'first.staff@example.com',
              password: 'first-password',
            },
          },
          expected: {
            input: {
              email: 'first.staff@example.com',
              password: 'first-password',
            },
          },
        },
        {
          factoryParams: {
            formValueHashReactive: {
              email: 'second.staff@example.com',
              password: 'second-password',
            },
          },
          expected: {
            input: {
              email: 'second.staff@example.com',
              password: 'second-password',
            },
          },
        },
        {
          factoryParams: {
            formValueHashReactive: {
              email: null,
              password: null,
            },
          },
          expected: {
            input: {
              email: null,
              password: null,
            },
          },
        },
      ]

      test.each(cases)('email: $factoryParams.formValueHashReactive.email', ({
        factoryParams,
        expected,
      }) => {
        const context = SignInPageContext.create(factoryParams)

        const actual = context.buildSignInVariables()

        expect(actual)
          .toEqual(expected)
      })
    })
  })
})

describe('SignInPageContext', () => {
  describe('#isInternalPath()', () => {
    describe('should be truthy', () => {
      const cases = [
        {
          params: {
            path: '/',
          },
        },
        {
          params: {
            path: '/expenses',
          },
        },
        {
          params: {
            path: '/expenses/new?category=transport',
          },
        },
      ]

      test.each(cases)('path: $params.path', ({
        params,
      }) => {
        const context = SignInPageContext.create({})

        const actual = context.isInternalPath(params)

        expect(actual)
          .toBeTruthy()
      })
    })
  })
})

describe('SignInPageContext', () => {
  describe('#isInternalPath()', () => {
    /*
     * The query is whatever was in the address bar. A protocol-relative address reads like a path
     * and is not one, which is the case a "starts with a slash" check alone would wave through.
     */
    describe('should be falsy', () => {
      const cases = [
        {
          params: {
            path: '//elsewhere.example/expenses',
          },
        },
        {
          params: {
            path: 'https://elsewhere.example/expenses',
          },
        },
        {
          params: {
            path: 'expenses',
          },
        },
        {
          params: {
            path: '',
          },
        },
      ]

      test.each(cases)('path: $params.path', ({
        params,
      }) => {
        const context = SignInPageContext.create({})

        const actual = context.isInternalPath(params)

        expect(actual)
          .toBeFalsy()
      })
    })
  })
})

describe('SignInPageContext', () => {
  describe('#extractRequestedPath()', () => {
    describe('should be the path the gateway recorded', () => {
      const cases = [
        {
          factoryParams: {
            route: {
              query: {
                redirect: '/expenses',
              },
            },
          },
          expected: '/expenses',
        },
        {
          factoryParams: {
            route: {
              query: {
                redirect: '/expenses/new?category=meals',
              },
            },
          },
          expected: '/expenses/new?category=meals',
        },
      ]

      test.each(cases)('redirect: $factoryParams.route.query.redirect', ({
        factoryParams,
        expected,
      }) => {
        const context = SignInPageContext.create(factoryParams)

        const actual = context.extractRequestedPath()

        expect(actual)
          .toBe(expected)
      })
    })
  })
})

describe('SignInPageContext', () => {
  describe('#extractRequestedPath()', () => {
    describe('should be null when the query carries no path this screen will follow', () => {
      const cases = [
        {
          factoryParams: {
            route: {
              query: {},
            },
          },
          label: 'no redirect key at all',
        },
        {
          factoryParams: {
            route: {
              query: {
                redirect: [
                  '/expenses',
                  '/summary',
                ],
              },
            },
          },
          label: 'the key repeated, so it arrives as an array',
        },
        {
          factoryParams: {
            route: {
              query: {
                redirect: 'https://elsewhere.example/expenses',
              },
            },
          },
          label: 'an address at another origin',
        },
        {
          factoryParams: {
            route: {
              query: {
                redirect: '//elsewhere.example/expenses',
              },
            },
          },
          label: 'a protocol-relative address that reads like a path',
        },
      ]

      test.each(cases)('label: $label', ({
        factoryParams,
      }) => {
        const context = SignInPageContext.create(factoryParams)

        const actual = context.extractRequestedPath()

        expect(actual)
          .toBeNull()
      })
    })
  })
})

describe('SignInPageContext', () => {
  describe('#generateDestinationPath()', () => {
    describe('should be the recorded path, and the root when there is none', () => {
      const cases = [
        {
          factoryParams: {
            route: {
              query: {
                redirect: '/expenses',
              },
            },
          },
          expected: '/expenses',
        },
        {
          factoryParams: {
            route: {
              query: {
                redirect: '/summary',
              },
            },
          },
          expected: '/summary',
        },
        {
          factoryParams: {
            route: {
              query: {},
            },
          },
          expected: '/',
        },
        {
          factoryParams: {
            route: {
              query: {
                redirect: 'https://elsewhere.example/expenses',
              },
            },
          },
          expected: '/',
        },
      ]

      test.each(cases)('redirect: $factoryParams.route.query.redirect', ({
        factoryParams,
        expected,
      }) => {
        const context = SignInPageContext.create(factoryParams)

        const actual = context.generateDestinationPath()

        expect(actual)
          .toBe(expected)
      })
    })
  })
})

describe('SignInPageContext', () => {
  describe('#navigateToDestination()', () => {
    describe('should send the person to the destination the query decides', () => {
      const cases = [
        {
          factoryParams: {
            route: {
              query: {
                redirect: '/expenses',
              },
            },
            router: {
              replace: async () => {},
            },
          },
          expected: '/expenses',
        },
        {
          factoryParams: {
            route: {
              query: {},
            },
            router: {
              replace: async () => {},
            },
          },
          expected: '/',
        },
      ]

      test.each(cases)('redirect: $factoryParams.route.query.redirect', async ({
        factoryParams,
        expected,
      }) => {
        const context = SignInPageContext.create(factoryParams)
        const replaceSpy = jest.spyOn(factoryParams.router, 'replace')

        await context.navigateToDestination()

        expect(replaceSpy)
          .toHaveBeenCalledWith(expected)
      })
    })
  })
})

describe('SignInPageContext', () => {
  describe('#hasSignedInStaffMember()', () => {
    describe('should be truthy', () => {
      const cases = [
        {
          factoryParams: {
            graphqlClientHash: {
              signedInStaffMember: {
                capsuleRef: {
                  value: SignedInStaffMemberQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        signedInStaffMember: {
                          staffMemberId: 100005,
                          name: 'Fifth Staff',
                          email: 'fifth.staff@example.com',
                        },
                      },
                    },
                  }),
                },
              },
            },
          },
        },
        {
          factoryParams: {
            graphqlClientHash: {
              signedInStaffMember: {
                capsuleRef: {
                  value: SignedInStaffMemberQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        signedInStaffMember: {
                          staffMemberId: 100006,
                          name: 'Sixth Staff',
                          email: 'sixth.staff@example.com',
                        },
                      },
                    },
                  }),
                },
              },
            },
          },
        },
      ]

      test.each(cases)('staffMemberId: $factoryParams.graphqlClientHash.signedInStaffMember.capsuleRef.value.result.data.signedInStaffMember.staffMemberId', ({
        factoryParams,
      }) => {
        const context = SignInPageContext.create(factoryParams)

        const actual = context.hasSignedInStaffMember()

        expect(actual)
          .toBeTruthy()
      })
    })
  })
})

describe('SignInPageContext', () => {
  describe('#hasSignedInStaffMember()', () => {
    /*
     * Both cases are real responses: the refusal the backend sends when no session was presented,
     * and the capsule the client holds before any request has been made.
     */
    describe('should be falsy', () => {
      const cases = [
        {
          factoryParams: {
            graphqlClientHash: {
              signedInStaffMember: {
                capsuleRef: {
                  value: SignedInStaffMemberQueryGraphqlCapsule.create({
                    result: {
                      errors: [
                        {
                          message: '204.Q001.001',
                        },
                      ],
                    },
                  }),
                },
              },
            },
          },
          label: 'a session the backend no longer honours',
        },
        {
          factoryParams: {
            graphqlClientHash: {
              signedInStaffMember: {
                capsuleRef: {
                  value: SignedInStaffMemberQueryGraphqlCapsule.createAsPending(),
                },
              },
            },
          },
          label: 'nothing asked yet',
        },
      ]

      test.each(cases)('label: $label', ({
        factoryParams,
      }) => {
        const context = SignInPageContext.create(factoryParams)

        const actual = context.hasSignedInStaffMember()

        expect(actual)
          .toBeFalsy()
      })
    })
  })
})

describe('SignInPageContext', () => {
  describe('#clearRefusal()', () => {
    describe('should take the refusal off the screen', () => {
      const cases = [
        {
          factoryParams: {
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
            errorMessageHashReactive: {
              signIn: 'Too many sign-in attempts. Wait a few minutes and try again.',
            },
          },
          expected: {
            signIn: null,
          },
        },
      ]

      test.each(cases)('signIn: $factoryParams.errorMessageHashReactive.signIn', ({
        factoryParams,
        expected,
      }) => {
        const context = SignInPageContext.create(factoryParams)

        context.clearRefusal()

        expect(factoryParams.errorMessageHashReactive)
          .toEqual(expected)
      })
    })
  })
})

describe('SignInPageContext', () => {
  describe('#surfaceRefusal()', () => {
    /*
     * The capsules are built from real refusal envelopes, and the message is never written into the
     * case: it comes out of `extractResolvedErrorMessage()`, which is the one place a code becomes
     * a message. A context that mapped a code itself would be the second place, and section 10's
     * identical refusals would start depending on two files agreeing.
     */
    describe('should be the message the capsule resolves from the code', () => {
      const cases = [
        {
          factoryParams: {
            errorMessageHashReactive: {
              signIn: null,
            },
          },
          params: {
            capsule: SignInMutationGraphqlCapsule.create({
              result: {
                errors: [
                  {
                    message: '204.M001.001',
                  },
                ],
              },
            }),
          },
          expected: {
            signIn: 'That email address and password do not match.',
          },
        },
        {
          factoryParams: {
            errorMessageHashReactive: {
              signIn: null,
            },
          },
          params: {
            capsule: SignInMutationGraphqlCapsule.create({
              result: {
                errors: [
                  {
                    message: '204.M001.002',
                  },
                ],
              },
            }),
          },
          expected: {
            signIn: 'Too many sign-in attempts. Wait a few minutes and try again.',
          },
        },
        {
          factoryParams: {
            errorMessageHashReactive: {
              signIn: null,
            },
          },
          params: {
            capsule: SignInMutationGraphqlCapsule.create({
              result: {
                errors: [
                  {
                    message: '203.M001.003',
                  },
                ],
              },
            }),
          },
          expected: {
            signIn: 'Enter a valid email address.',
          },
        },
      ]

      test.each(cases)('errors[0].message: $params.capsule.result.errors.0.message', ({
        factoryParams,
        params,
        expected,
      }) => {
        const context = SignInPageContext.create(factoryParams)

        context.surfaceRefusal(params)

        expect(factoryParams.errorMessageHashReactive)
          .toEqual(expected)
      })
    })
  })
})

describe('SignInPageContext', () => {
  describe('#holdAccessToken()', () => {
    describe('should be readable by a clerk the request header builds its own way', () => {
      const cases = [
        {
          factoryParams: {
            accessTokenClerk: AppAccessTokenClerk.create({
              storage: StorageClerk.create({
                storage: MemoryStorage.create({
                  valueHash: {},
                }),
              }),
            }),
          },
          params: {
            token: 'held-token-0001',
          },
          expected: 'held-token-0001',
        },
        {
          factoryParams: {
            accessTokenClerk: AppAccessTokenClerk.create({
              storage: StorageClerk.create({
                storage: MemoryStorage.create({
                  valueHash: {},
                }),
              }),
            }),
          },
          params: {
            token: 'held-token-0002',
          },
          expected: 'held-token-0002',
        },
      ]

      test.each(cases)('token: $params.token', ({
        factoryParams,
        params,
        expected,
      }) => {
        const context = SignInPageContext.create(factoryParams)

        context.holdAccessToken(params)

        expect(factoryParams.accessTokenClerk.retrieveToken())
          .toBe(expected)
      })
    })
  })
})

describe('SignInPageContext', () => {
  describe('#holdAccessToken()', () => {
    /*
     * A refused renewal answers no token, and holding that has to clear whatever was held — a
     * session the backend has stopped honouring must not leave a stale credential behind.
     */
    describe('should clear what was held when the response carried no token', () => {
      const cases = [
        {
          factoryParams: {
            accessTokenClerk: AppAccessTokenClerk.create({
              storage: StorageClerk.create({
                storage: MemoryStorage.create({
                  valueHash: {
                    access_token: 'stale-token-0003',
                  },
                }),
              }),
            }),
          },
          params: {
            token: null,
          },
        },
        {
          factoryParams: {
            accessTokenClerk: AppAccessTokenClerk.create({
              storage: StorageClerk.create({
                storage: MemoryStorage.create({
                  valueHash: {
                    access_token: 'stale-token-0004',
                  },
                }),
              }),
            }),
          },
          params: {
            token: null,
          },
        },
      ]

      test.each(cases)('valueHash: $factoryParams.accessTokenClerk.storage.storage.valueHash', ({
        factoryParams,
        params,
      }) => {
        const context = SignInPageContext.create(factoryParams)

        context.holdAccessToken(params)

        expect(factoryParams.accessTokenClerk.retrieveToken())
          .toBeNull()
      })
    })
  })
})

describe('SignInPageContext', () => {
  describe('#onSubmitForm()', () => {
    describe('should ask the API with what was typed, and with its own hooks', () => {
      const cases = [
        {
          factoryParams: {
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
            route: {
              query: {},
            },
            router: {
              replace: async () => {},
            },
            graphqlClientHash: {
              signIn: {
                capsuleRef: {
                  value: SignInMutationGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        signIn: {
                          staffMemberId: 100011,
                          accessToken: 'submitted-access-token-0011',
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: AppAccessTokenClerk.create({
              storage: StorageClerk.create({
                storage: MemoryStorage.create({
                  valueHash: {},
                }),
              }),
            }),
          },
          expected: {
            variables: {
              input: {
                email: 'first.staff@example.com',
                password: 'first-password',
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
            route: {
              query: {},
            },
            router: {
              replace: async () => {},
            },
            graphqlClientHash: {
              signIn: {
                capsuleRef: {
                  value: SignInMutationGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        signIn: {
                          staffMemberId: 100012,
                          accessToken: 'submitted-access-token-0012',
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: AppAccessTokenClerk.create({
              storage: StorageClerk.create({
                storage: MemoryStorage.create({
                  valueHash: {},
                }),
              }),
            }),
          },
          expected: {
            variables: {
              input: {
                email: 'second.staff@example.com',
                password: 'second-password',
              },
            },
            hooks: expect.objectContaining({
              beforeRequest: expect.any(Function),
              afterRequest: expect.any(Function),
            }),
          },
        },
      ]

      test.each(cases)('email: $factoryParams.formValueHashReactive.email', async ({
        factoryParams,
        expected,
      }) => {
        const context = SignInPageContext.create(factoryParams)
        const invokeSpy = jest.spyOn(factoryParams.graphqlClientHash.signIn, 'invokeRequestOnEvent')

        await context.onSubmitForm()

        expect(invokeSpy)
          .toHaveBeenCalledWith(expected)
      })
    })
  })
})

describe('SignInPageContext', () => {
  describe('#onSubmitForm()', () => {
    /*
     * Section 10: an address with no account and a correct address with the wrong password are
     * refused identically, and neither refusal says which of the two it was. The backend gives both
     * one code, so both cases below carry the same refusal envelope with different credentials, and
     * the message they produce has to be the same one — naming neither the address nor the password.
     */
    describe('should refuse an unknown address and a wrong password identically', () => {
      const cases = [
        {
          factoryParams: {
            formValueHashReactive: {
              email: 'nobody.here@example.com',
              password: 'third-password',
            },
            statusReactive: {
              isSigningIn: false,
            },
            errorMessageHashReactive: {
              signIn: null,
            },
            route: {
              query: {},
            },
            router: {
              replace: async () => {},
            },
            graphqlClientHash: {
              signIn: {
                capsuleRef: {
                  value: SignInMutationGraphqlCapsule.create({
                    result: {
                      errors: [
                        {
                          message: '204.M001.001',
                        },
                      ],
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: AppAccessTokenClerk.create({
              storage: StorageClerk.create({
                storage: MemoryStorage.create({
                  valueHash: {},
                }),
              }),
            }),
          },
          expected: {
            signIn: 'That email address and password do not match.',
          },
        },
        {
          factoryParams: {
            formValueHashReactive: {
              email: 'fourth.staff@example.com',
              password: 'the-wrong-password',
            },
            statusReactive: {
              isSigningIn: false,
            },
            errorMessageHashReactive: {
              signIn: null,
            },
            route: {
              query: {},
            },
            router: {
              replace: async () => {},
            },
            graphqlClientHash: {
              signIn: {
                capsuleRef: {
                  value: SignInMutationGraphqlCapsule.create({
                    result: {
                      errors: [
                        {
                          message: '204.M001.001',
                        },
                      ],
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: AppAccessTokenClerk.create({
              storage: StorageClerk.create({
                storage: MemoryStorage.create({
                  valueHash: {},
                }),
              }),
            }),
          },
          expected: {
            signIn: 'That email address and password do not match.',
          },
        },
      ]

      test.each(cases)('email: $factoryParams.formValueHashReactive.email', async ({
        factoryParams,
        expected,
      }) => {
        const context = SignInPageContext.create(factoryParams)

        await context.onSubmitForm()

        expect(factoryParams.errorMessageHashReactive)
          .toEqual(expected)
      })
    })
  })
})

describe('SignInPageContext', () => {
  describe('#onSubmitForm()', () => {
    /*
     * Each capsule is built from a real refusal envelope, and no case writes the message it expects
     * to see next to the code that produces it by hand — the text comes back out of
     * `extractResolvedErrorMessage()`, the single point where a code becomes a message. The last
     * case is a real transport failure rather than a refusal, and reaches the same place.
     */
    describe('should surface the message resolved from a real refused response', () => {
      const cases = [
        {
          factoryParams: {
            formValueHashReactive: {
              email: 'fifth.staff@example.com',
              password: 'fifth-password',
            },
            statusReactive: {
              isSigningIn: false,
            },
            errorMessageHashReactive: {
              signIn: null,
            },
            route: {
              query: {},
            },
            router: {
              replace: async () => {},
            },
            graphqlClientHash: {
              signIn: {
                capsuleRef: {
                  value: SignInMutationGraphqlCapsule.create({
                    result: {
                      errors: [
                        {
                          message: '204.M001.002',
                        },
                      ],
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: AppAccessTokenClerk.create({
              storage: StorageClerk.create({
                storage: MemoryStorage.create({
                  valueHash: {},
                }),
              }),
            }),
          },
          expected: {
            signIn: 'Too many sign-in attempts. Wait a few minutes and try again.',
          },
        },
        {
          factoryParams: {
            formValueHashReactive: {
              email: 'sixth.staff@example.com',
              password: 'sixth-password',
            },
            statusReactive: {
              isSigningIn: false,
            },
            errorMessageHashReactive: {
              signIn: null,
            },
            route: {
              query: {},
            },
            router: {
              replace: async () => {},
            },
            graphqlClientHash: {
              signIn: {
                capsuleRef: {
                  value: SignInMutationGraphqlCapsule.create({
                    result: {
                      errors: [
                        {
                          message: '204.M001.003',
                        },
                      ],
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: AppAccessTokenClerk.create({
              storage: StorageClerk.create({
                storage: MemoryStorage.create({
                  valueHash: {},
                }),
              }),
            }),
          },
          expected: {
            signIn: 'The session could not be started. Try again.',
          },
        },
        {
          factoryParams: {
            formValueHashReactive: {
              email: 'seventh.staff@example.com',
              password: 'seventh-password',
            },
            statusReactive: {
              isSigningIn: false,
            },
            errorMessageHashReactive: {
              signIn: null,
            },
            route: {
              query: {},
            },
            router: {
              replace: async () => {},
            },
            graphqlClientHash: {
              signIn: {
                capsuleRef: {
                  value: SignInMutationGraphqlCapsule.create({
                    rawResponse: null,
                    result: null,
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: AppAccessTokenClerk.create({
              storage: StorageClerk.create({
                storage: MemoryStorage.create({
                  valueHash: {},
                }),
              }),
            }),
          },
          expected: {
            signIn: 'Something went wrong. Try again.',
          },
        },
      ]

      test.each(cases)('email: $factoryParams.formValueHashReactive.email', async ({
        factoryParams,
        expected,
      }) => {
        const context = SignInPageContext.create(factoryParams)

        await context.onSubmitForm()

        expect(factoryParams.errorMessageHashReactive)
          .toEqual(expected)
      })
    })
  })
})

describe('SignInPageContext', () => {
  describe('#onSubmitForm()', () => {
    describe('should take the previous attempt\'s refusal off the screen first', () => {
      const cases = [
        {
          factoryParams: {
            formValueHashReactive: {
              email: 'eighth.staff@example.com',
              password: 'eighth-password',
            },
            statusReactive: {
              isSigningIn: false,
            },
            errorMessageHashReactive: {
              signIn: 'That email address and password do not match.',
            },
            route: {
              query: {},
            },
            router: {
              replace: async () => {},
            },
            graphqlClientHash: {
              signIn: {
                capsuleRef: {
                  value: SignInMutationGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        signIn: {
                          staffMemberId: 100018,
                          accessToken: 'submitted-access-token-0018',
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: AppAccessTokenClerk.create({
              storage: StorageClerk.create({
                storage: MemoryStorage.create({
                  valueHash: {},
                }),
              }),
            }),
          },
          expected: {
            signIn: null,
          },
        },
        {
          factoryParams: {
            formValueHashReactive: {
              email: 'ninth.staff@example.com',
              password: 'ninth-password',
            },
            statusReactive: {
              isSigningIn: false,
            },
            errorMessageHashReactive: {
              signIn: 'Too many sign-in attempts. Wait a few minutes and try again.',
            },
            route: {
              query: {},
            },
            router: {
              replace: async () => {},
            },
            graphqlClientHash: {
              signIn: {
                capsuleRef: {
                  value: SignInMutationGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        signIn: {
                          staffMemberId: 100019,
                          accessToken: 'submitted-access-token-0019',
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: AppAccessTokenClerk.create({
              storage: StorageClerk.create({
                storage: MemoryStorage.create({
                  valueHash: {},
                }),
              }),
            }),
          },
          expected: {
            signIn: null,
          },
        },
      ]

      test.each(cases)('email: $factoryParams.formValueHashReactive.email', async ({
        factoryParams,
        expected,
      }) => {
        const context = SignInPageContext.create(factoryParams)

        await context.onSubmitForm()

        expect(factoryParams.errorMessageHashReactive)
          .toEqual(expected)
      })
    })
  })
})

describe('SignInPageContext', () => {
  describe('#onSubmitForm()', () => {
    /*
     * The clerk is a real one over a record of its own, so what is asserted is the token a later
     * request header would actually read — not that a setter was called.
     */
    describe('should hold the access token the answer returned', () => {
      const cases = [
        {
          factoryParams: {
            formValueHashReactive: {
              email: 'tenth.staff@example.com',
              password: 'tenth-password',
            },
            statusReactive: {
              isSigningIn: false,
            },
            errorMessageHashReactive: {
              signIn: null,
            },
            route: {
              query: {},
            },
            router: {
              replace: async () => {},
            },
            graphqlClientHash: {
              signIn: {
                capsuleRef: {
                  value: SignInMutationGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        signIn: {
                          staffMemberId: 100020,
                          accessToken: 'submitted-access-token-0020',
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: AppAccessTokenClerk.create({
              storage: StorageClerk.create({
                storage: MemoryStorage.create({
                  valueHash: {},
                }),
              }),
            }),
          },
          expected: 'submitted-access-token-0020',
        },
        {
          factoryParams: {
            formValueHashReactive: {
              email: 'eleventh.staff@example.com',
              password: 'eleventh-password',
            },
            statusReactive: {
              isSigningIn: false,
            },
            errorMessageHashReactive: {
              signIn: null,
            },
            route: {
              query: {},
            },
            router: {
              replace: async () => {},
            },
            graphqlClientHash: {
              signIn: {
                capsuleRef: {
                  value: SignInMutationGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        signIn: {
                          staffMemberId: 100021,
                          accessToken: 'submitted-access-token-0021',
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: AppAccessTokenClerk.create({
              storage: StorageClerk.create({
                storage: MemoryStorage.create({
                  valueHash: {},
                }),
              }),
            }),
          },
          expected: 'submitted-access-token-0021',
        },
      ]

      test.each(cases)('email: $factoryParams.formValueHashReactive.email', async ({
        factoryParams,
        expected,
      }) => {
        const context = SignInPageContext.create(factoryParams)

        await context.onSubmitForm()

        expect(factoryParams.accessTokenClerk.retrieveToken())
          .toBe(expected)
      })
    })
  })
})

describe('SignInPageContext', () => {
  describe('#onSubmitForm()', () => {
    describe('should send the person on to where they were going', () => {
      const cases = [
        {
          factoryParams: {
            formValueHashReactive: {
              email: 'twelfth.staff@example.com',
              password: 'twelfth-password',
            },
            statusReactive: {
              isSigningIn: false,
            },
            errorMessageHashReactive: {
              signIn: null,
            },
            route: {
              query: {
                redirect: '/expenses',
              },
            },
            router: {
              replace: async () => {},
            },
            graphqlClientHash: {
              signIn: {
                capsuleRef: {
                  value: SignInMutationGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        signIn: {
                          staffMemberId: 100022,
                          accessToken: 'submitted-access-token-0022',
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: AppAccessTokenClerk.create({
              storage: StorageClerk.create({
                storage: MemoryStorage.create({
                  valueHash: {},
                }),
              }),
            }),
          },
          expected: '/expenses',
        },
        {
          factoryParams: {
            formValueHashReactive: {
              email: 'thirteenth.staff@example.com',
              password: 'thirteenth-password',
            },
            statusReactive: {
              isSigningIn: false,
            },
            errorMessageHashReactive: {
              signIn: null,
            },
            route: {
              query: {},
            },
            router: {
              replace: async () => {},
            },
            graphqlClientHash: {
              signIn: {
                capsuleRef: {
                  value: SignInMutationGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        signIn: {
                          staffMemberId: 100023,
                          accessToken: 'submitted-access-token-0023',
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: AppAccessTokenClerk.create({
              storage: StorageClerk.create({
                storage: MemoryStorage.create({
                  valueHash: {},
                }),
              }),
            }),
          },
          expected: '/',
        },
      ]

      test.each(cases)('email: $factoryParams.formValueHashReactive.email', async ({
        factoryParams,
        expected,
      }) => {
        const context = SignInPageContext.create(factoryParams)
        const replaceSpy = jest.spyOn(factoryParams.router, 'replace')

        await context.onSubmitForm()

        expect(replaceSpy)
          .toHaveBeenCalledWith(expected)
      })
    })
  })
})

describe('SignInPageContext', () => {
  describe('#onSubmitForm()', () => {
    describe('should leave a refused person where they are', () => {
      const cases = [
        {
          factoryParams: {
            formValueHashReactive: {
              email: 'fourteenth.staff@example.com',
              password: 'fourteenth-password',
            },
            statusReactive: {
              isSigningIn: false,
            },
            errorMessageHashReactive: {
              signIn: null,
            },
            route: {
              query: {
                redirect: '/expenses',
              },
            },
            router: {
              replace: async () => {},
            },
            graphqlClientHash: {
              signIn: {
                capsuleRef: {
                  value: SignInMutationGraphqlCapsule.create({
                    result: {
                      errors: [
                        {
                          message: '204.M001.001',
                        },
                      ],
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: AppAccessTokenClerk.create({
              storage: StorageClerk.create({
                storage: MemoryStorage.create({
                  valueHash: {},
                }),
              }),
            }),
          },
        },
        {
          factoryParams: {
            formValueHashReactive: {
              email: 'fifteenth.staff@example.com',
              password: 'fifteenth-password',
            },
            statusReactive: {
              isSigningIn: false,
            },
            errorMessageHashReactive: {
              signIn: null,
            },
            route: {
              query: {},
            },
            router: {
              replace: async () => {},
            },
            graphqlClientHash: {
              signIn: {
                capsuleRef: {
                  value: SignInMutationGraphqlCapsule.create({
                    result: {
                      errors: [
                        {
                          message: '203.M001.001',
                        },
                      ],
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: AppAccessTokenClerk.create({
              storage: StorageClerk.create({
                storage: MemoryStorage.create({
                  valueHash: {},
                }),
              }),
            }),
          },
        },
      ]

      test.each(cases)('email: $factoryParams.formValueHashReactive.email', async ({
        factoryParams,
      }) => {
        const context = SignInPageContext.create(factoryParams)
        const replaceSpy = jest.spyOn(factoryParams.router, 'replace')

        await context.onSubmitForm()

        expect(replaceSpy)
          .not
          .toHaveBeenCalled()
      })
    })
  })
})

describe('SignInPageContext', () => {
  describe('#onSubmitForm()', () => {
    describe('should hold no token when the attempt was refused', () => {
      const cases = [
        {
          factoryParams: {
            formValueHashReactive: {
              email: 'sixteenth.staff@example.com',
              password: 'sixteenth-password',
            },
            statusReactive: {
              isSigningIn: false,
            },
            errorMessageHashReactive: {
              signIn: null,
            },
            route: {
              query: {},
            },
            router: {
              replace: async () => {},
            },
            graphqlClientHash: {
              signIn: {
                capsuleRef: {
                  value: SignInMutationGraphqlCapsule.create({
                    result: {
                      errors: [
                        {
                          message: '204.M001.001',
                        },
                      ],
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: AppAccessTokenClerk.create({
              storage: StorageClerk.create({
                storage: MemoryStorage.create({
                  valueHash: {},
                }),
              }),
            }),
          },
        },
        {
          factoryParams: {
            formValueHashReactive: {
              email: 'seventeenth.staff@example.com',
              password: 'seventeenth-password',
            },
            statusReactive: {
              isSigningIn: false,
            },
            errorMessageHashReactive: {
              signIn: null,
            },
            route: {
              query: {},
            },
            router: {
              replace: async () => {},
            },
            graphqlClientHash: {
              signIn: {
                capsuleRef: {
                  value: SignInMutationGraphqlCapsule.create({
                    result: {
                      errors: [
                        {
                          message: '204.M001.002',
                        },
                      ],
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: AppAccessTokenClerk.create({
              storage: StorageClerk.create({
                storage: MemoryStorage.create({
                  valueHash: {},
                }),
              }),
            }),
          },
        },
      ]

      test.each(cases)('email: $factoryParams.formValueHashReactive.email', async ({
        factoryParams,
      }) => {
        const context = SignInPageContext.create(factoryParams)

        await context.onSubmitForm()

        expect(factoryParams.accessTokenClerk.retrieveToken())
          .toBeNull()
      })
    })
  })
})

describe('SignInPageContext', () => {
  describe('#onSubmitForm()', () => {
    /*
     * Section 7: a member of staff's name and email address, and a memo, are never written to a log
     * line. The whole submit runs here — an address, a password and a refused response all pass
     * through it — and every console channel has to stay silent.
     */
    describe('should write nothing to any log channel', () => {
      const cases = [
        {
          factoryParams: {
            formValueHashReactive: {
              email: 'eighteenth.staff@example.com',
              password: 'eighteenth-password',
            },
            statusReactive: {
              isSigningIn: false,
            },
            errorMessageHashReactive: {
              signIn: null,
            },
            route: {
              query: {},
            },
            router: {
              replace: async () => {},
            },
            graphqlClientHash: {
              signIn: {
                capsuleRef: {
                  value: SignInMutationGraphqlCapsule.create({
                    result: {
                      errors: [
                        {
                          message: '204.M001.001',
                        },
                      ],
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: AppAccessTokenClerk.create({
              storage: StorageClerk.create({
                storage: MemoryStorage.create({
                  valueHash: {},
                }),
              }),
            }),
          },
          params: {
            channel: 'log',
          },
        },
        {
          factoryParams: {
            formValueHashReactive: {
              email: 'nineteenth.staff@example.com',
              password: 'nineteenth-password',
            },
            statusReactive: {
              isSigningIn: false,
            },
            errorMessageHashReactive: {
              signIn: null,
            },
            route: {
              query: {},
            },
            router: {
              replace: async () => {},
            },
            graphqlClientHash: {
              signIn: {
                capsuleRef: {
                  value: SignInMutationGraphqlCapsule.create({
                    result: {
                      errors: [
                        {
                          message: '204.M001.001',
                        },
                      ],
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: AppAccessTokenClerk.create({
              storage: StorageClerk.create({
                storage: MemoryStorage.create({
                  valueHash: {},
                }),
              }),
            }),
          },
          params: {
            channel: 'info',
          },
        },
        {
          factoryParams: {
            formValueHashReactive: {
              email: 'twentieth.staff@example.com',
              password: 'twentieth-password',
            },
            statusReactive: {
              isSigningIn: false,
            },
            errorMessageHashReactive: {
              signIn: null,
            },
            route: {
              query: {},
            },
            router: {
              replace: async () => {},
            },
            graphqlClientHash: {
              signIn: {
                capsuleRef: {
                  value: SignInMutationGraphqlCapsule.create({
                    result: {
                      errors: [
                        {
                          message: '204.M001.001',
                        },
                      ],
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: AppAccessTokenClerk.create({
              storage: StorageClerk.create({
                storage: MemoryStorage.create({
                  valueHash: {},
                }),
              }),
            }),
          },
          params: {
            channel: 'warn',
          },
        },
        {
          factoryParams: {
            formValueHashReactive: {
              email: 'twenty.first.staff@example.com',
              password: 'twenty-first-password',
            },
            statusReactive: {
              isSigningIn: false,
            },
            errorMessageHashReactive: {
              signIn: null,
            },
            route: {
              query: {},
            },
            router: {
              replace: async () => {},
            },
            graphqlClientHash: {
              signIn: {
                capsuleRef: {
                  value: SignInMutationGraphqlCapsule.create({
                    result: {
                      errors: [
                        {
                          message: '204.M001.001',
                        },
                      ],
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: AppAccessTokenClerk.create({
              storage: StorageClerk.create({
                storage: MemoryStorage.create({
                  valueHash: {},
                }),
              }),
            }),
          },
          params: {
            channel: 'error',
          },
        },
        {
          factoryParams: {
            formValueHashReactive: {
              email: 'twenty.second.staff@example.com',
              password: 'twenty-second-password',
            },
            statusReactive: {
              isSigningIn: false,
            },
            errorMessageHashReactive: {
              signIn: null,
            },
            route: {
              query: {},
            },
            router: {
              replace: async () => {},
            },
            graphqlClientHash: {
              signIn: {
                capsuleRef: {
                  value: SignInMutationGraphqlCapsule.create({
                    result: {
                      errors: [
                        {
                          message: '204.M001.001',
                        },
                      ],
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: AppAccessTokenClerk.create({
              storage: StorageClerk.create({
                storage: MemoryStorage.create({
                  valueHash: {},
                }),
              }),
            }),
          },
          params: {
            channel: 'debug',
          },
        },
      ]

      test.each(cases)('channel: $params.channel', async ({
        factoryParams,
        params,
      }) => {
        const context = SignInPageContext.create(factoryParams)
        const channelSpy = jest.spyOn(console, params.channel)
          .mockImplementation(() => {})

        await context.onSubmitForm()

        expect(channelSpy)
          .not
          .toHaveBeenCalled()
      })
    })
  })
})

describe('SignInPageContext', () => {
  describe('#fetchSignedInStaffMember()', () => {
    describe('should ask the API who is signed in', () => {
      const cases = [
        {
          factoryParams: {
            graphqlClientHash: {
              signedInStaffMember: {
                capsuleRef: {
                  value: SignedInStaffMemberQueryGraphqlCapsule.createAsPending(),
                },
                invokeRequestOnEvent: async () => 'first-invocation-0001',
              },
            },
          },
        },
        {
          factoryParams: {
            graphqlClientHash: {
              signedInStaffMember: {
                capsuleRef: {
                  value: SignedInStaffMemberQueryGraphqlCapsule.createAsPending(),
                },
                invokeRequestOnEvent: async () => 'second-invocation-0002',
              },
            },
          },
        },
      ]

      test.each(cases)('invokeRequestOnEvent: $factoryParams.graphqlClientHash.signedInStaffMember.invokeRequestOnEvent', async ({
        factoryParams,
      }) => {
        const context = SignInPageContext.create(factoryParams)
        const invokeSpy = jest.spyOn(factoryParams.graphqlClientHash.signedInStaffMember, 'invokeRequestOnEvent')

        await context.fetchSignedInStaffMember()

        expect(invokeSpy)
          .toHaveBeenCalledWith()
      })
    })
  })
})

describe('SignInPageContext', () => {
  describe('#renewAccessToken()', () => {
    /*
     * The renewal is what makes section 10.2's "on opening" row able to do anything at all: the
     * access token is held in memory, so a page reload starts with none, and the refresh-token
     * cookie is the only thing left to establish a session from.
     */
    describe('should hold the token the renewal answered', () => {
      const cases = [
        {
          factoryParams: {
            graphqlClientHash: {
              renewAccessToken: {
                capsuleRef: {
                  value: RenewAccessTokenMutationGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        renewAccessToken: {
                          accessToken: 'renewed-access-token-0031',
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: AppAccessTokenClerk.create({
              storage: StorageClerk.create({
                storage: MemoryStorage.create({
                  valueHash: {},
                }),
              }),
            }),
          },
          expected: 'renewed-access-token-0031',
        },
        {
          factoryParams: {
            graphqlClientHash: {
              renewAccessToken: {
                capsuleRef: {
                  value: RenewAccessTokenMutationGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        renewAccessToken: {
                          accessToken: 'renewed-access-token-0032',
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: AppAccessTokenClerk.create({
              storage: StorageClerk.create({
                storage: MemoryStorage.create({
                  valueHash: {},
                }),
              }),
            }),
          },
          expected: 'renewed-access-token-0032',
        },
      ]

      test.each(cases)('accessToken: $factoryParams.graphqlClientHash.renewAccessToken.capsuleRef.value.result.data.renewAccessToken.accessToken', async ({
        factoryParams,
        expected,
      }) => {
        const context = SignInPageContext.create(factoryParams)

        await context.renewAccessToken()

        expect(factoryParams.accessTokenClerk.retrieveToken())
          .toBe(expected)
      })
    })
  })
})

describe('SignInPageContext', () => {
  describe('#renewAccessToken()', () => {
    /*
     * Section 10's criterion refuses an expired, a revoked and an already-spent refresh token
     * identically, so all three arrive as the same envelope. Whichever it was, nothing is held
     * afterwards.
     */
    describe('should hold nothing when the renewal was refused', () => {
      const cases = [
        {
          factoryParams: {
            graphqlClientHash: {
              renewAccessToken: {
                capsuleRef: {
                  value: RenewAccessTokenMutationGraphqlCapsule.create({
                    result: {
                      errors: [
                        {
                          message: '204.M003.001',
                        },
                      ],
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: AppAccessTokenClerk.create({
              storage: StorageClerk.create({
                storage: MemoryStorage.create({
                  valueHash: {
                    access_token: 'stale-access-token-0033',
                  },
                }),
              }),
            }),
          },
        },
        {
          factoryParams: {
            graphqlClientHash: {
              renewAccessToken: {
                capsuleRef: {
                  value: RenewAccessTokenMutationGraphqlCapsule.create({
                    result: {
                      errors: [
                        {
                          message: '204.M003.002',
                        },
                      ],
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: AppAccessTokenClerk.create({
              storage: StorageClerk.create({
                storage: MemoryStorage.create({
                  valueHash: {
                    access_token: 'stale-access-token-0034',
                  },
                }),
              }),
            }),
          },
        },
      ]

      test.each(cases)('errors[0].message: $factoryParams.graphqlClientHash.renewAccessToken.capsuleRef.value.result.errors.0.message', async ({
        factoryParams,
      }) => {
        const context = SignInPageContext.create(factoryParams)

        await context.renewAccessToken()

        expect(factoryParams.accessTokenClerk.retrieveToken())
          .toBeNull()
      })
    })
  })
})

describe('SignInPageContext', () => {
  describe('#establishAccessToken()', () => {
    describe('should renew when nothing is held', () => {
      const cases = [
        {
          factoryParams: {
            graphqlClientHash: {
              renewAccessToken: {
                capsuleRef: {
                  value: RenewAccessTokenMutationGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        renewAccessToken: {
                          accessToken: 'renewed-access-token-0035',
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: AppAccessTokenClerk.create({
              storage: StorageClerk.create({
                storage: MemoryStorage.create({
                  valueHash: {},
                }),
              }),
            }),
          },
        },
        {
          factoryParams: {
            graphqlClientHash: {
              renewAccessToken: {
                capsuleRef: {
                  value: RenewAccessTokenMutationGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        renewAccessToken: {
                          accessToken: 'renewed-access-token-0036',
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: AppAccessTokenClerk.create({
              storage: StorageClerk.create({
                storage: MemoryStorage.create({
                  valueHash: {},
                }),
              }),
            }),
          },
        },
      ]

      test.each(cases)('accessToken: $factoryParams.graphqlClientHash.renewAccessToken.capsuleRef.value.result.data.renewAccessToken.accessToken', async ({
        factoryParams,
      }) => {
        const context = SignInPageContext.create(factoryParams)
        const invokeSpy = jest.spyOn(factoryParams.graphqlClientHash.renewAccessToken, 'invokeRequestOnEvent')

        await context.establishAccessToken()

        expect(invokeSpy)
          .toHaveBeenCalledWith()
      })
    })
  })
})

describe('SignInPageContext', () => {
  describe('#establishAccessToken()', () => {
    /*
     * A renewal spends the refresh token it is presented with and rotates the series, so asking for
     * one while the session is already usable would burn a credential for nothing.
     */
    describe('should not renew while a token is already held', () => {
      const cases = [
        {
          factoryParams: {
            graphqlClientHash: {
              renewAccessToken: {
                capsuleRef: {
                  value: RenewAccessTokenMutationGraphqlCapsule.createAsPending(),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: AppAccessTokenClerk.create({
              storage: StorageClerk.create({
                storage: MemoryStorage.create({
                  valueHash: {
                    access_token: 'living-access-token-0037',
                  },
                }),
              }),
            }),
          },
        },
        {
          factoryParams: {
            graphqlClientHash: {
              renewAccessToken: {
                capsuleRef: {
                  value: RenewAccessTokenMutationGraphqlCapsule.createAsPending(),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: AppAccessTokenClerk.create({
              storage: StorageClerk.create({
                storage: MemoryStorage.create({
                  valueHash: {
                    access_token: 'living-access-token-0038',
                  },
                }),
              }),
            }),
          },
        },
      ]

      test.each(cases)('valueHash: $factoryParams.accessTokenClerk.storage.storage.valueHash', async ({
        factoryParams,
      }) => {
        const context = SignInPageContext.create(factoryParams)
        const invokeSpy = jest.spyOn(factoryParams.graphqlClientHash.renewAccessToken, 'invokeRequestOnEvent')

        await context.establishAccessToken()

        expect(invokeSpy)
          .not
          .toHaveBeenCalled()
      })
    })
  })
})

describe('SignInPageContext', () => {
  describe('#restoreSessionOnMounted()', () => {
    /*
     * Section 10.2: `signedInStaffMember` is called on opening "to send an already-signed-in person
     * on rather than asking twice". Both responses here are real ones — a renewal that answers a
     * token, then a query that answers a member of staff.
     */
    describe('should send an already-signed-in person on', () => {
      const cases = [
        {
          factoryParams: {
            route: {
              query: {
                redirect: '/expenses',
              },
            },
            router: {
              replace: async () => {},
            },
            errorMessageHashReactive: {
              signIn: null,
            },
            graphqlClientHash: {
              renewAccessToken: {
                capsuleRef: {
                  value: RenewAccessTokenMutationGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        renewAccessToken: {
                          accessToken: 'renewed-access-token-0041',
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              signedInStaffMember: {
                capsuleRef: {
                  value: SignedInStaffMemberQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        signedInStaffMember: {
                          staffMemberId: 100041,
                          name: 'Forty First Staff',
                          email: 'forty.first.staff@example.com',
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: AppAccessTokenClerk.create({
              storage: StorageClerk.create({
                storage: MemoryStorage.create({
                  valueHash: {},
                }),
              }),
            }),
          },
          expected: '/expenses',
        },
        {
          factoryParams: {
            route: {
              query: {},
            },
            router: {
              replace: async () => {},
            },
            errorMessageHashReactive: {
              signIn: null,
            },
            graphqlClientHash: {
              renewAccessToken: {
                capsuleRef: {
                  value: RenewAccessTokenMutationGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        renewAccessToken: {
                          accessToken: 'renewed-access-token-0042',
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              signedInStaffMember: {
                capsuleRef: {
                  value: SignedInStaffMemberQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        signedInStaffMember: {
                          staffMemberId: 100042,
                          name: 'Forty Second Staff',
                          email: 'forty.second.staff@example.com',
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: AppAccessTokenClerk.create({
              storage: StorageClerk.create({
                storage: MemoryStorage.create({
                  valueHash: {},
                }),
              }),
            }),
          },
          expected: '/',
        },
      ]

      test.each(cases)('redirect: $factoryParams.route.query.redirect', async ({
        factoryParams,
        expected,
      }) => {
        const context = SignInPageContext.create(factoryParams)
        const replaceSpy = jest.spyOn(factoryParams.router, 'replace')

        await context.restoreSessionOnMounted()

        expect(replaceSpy)
          .toHaveBeenCalledWith(expected)
      })
    })
  })
})

describe('SignInPageContext', () => {
  describe('#restoreSessionOnMounted()', () => {
    /*
     * With no session to renew there is nothing to authenticate the query with, so asking it would
     * be a request that can only come back refused.
     */
    describe('should not ask who is signed in when the renewal answered nothing', () => {
      const cases = [
        {
          factoryParams: {
            route: {
              query: {},
            },
            router: {
              replace: async () => {},
            },
            errorMessageHashReactive: {
              signIn: null,
            },
            graphqlClientHash: {
              renewAccessToken: {
                capsuleRef: {
                  value: RenewAccessTokenMutationGraphqlCapsule.create({
                    result: {
                      errors: [
                        {
                          message: '204.M003.001',
                        },
                      ],
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              signedInStaffMember: {
                capsuleRef: {
                  value: SignedInStaffMemberQueryGraphqlCapsule.createAsPending(),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: AppAccessTokenClerk.create({
              storage: StorageClerk.create({
                storage: MemoryStorage.create({
                  valueHash: {},
                }),
              }),
            }),
          },
        },
        {
          factoryParams: {
            route: {
              query: {},
            },
            router: {
              replace: async () => {},
            },
            errorMessageHashReactive: {
              signIn: null,
            },
            graphqlClientHash: {
              renewAccessToken: {
                capsuleRef: {
                  value: RenewAccessTokenMutationGraphqlCapsule.create({
                    rawResponse: null,
                    result: null,
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              signedInStaffMember: {
                capsuleRef: {
                  value: SignedInStaffMemberQueryGraphqlCapsule.createAsPending(),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: AppAccessTokenClerk.create({
              storage: StorageClerk.create({
                storage: MemoryStorage.create({
                  valueHash: {},
                }),
              }),
            }),
          },
        },
      ]

      test.each(cases)('renewAccessToken result: $factoryParams.graphqlClientHash.renewAccessToken.capsuleRef.value.result', async ({
        factoryParams,
      }) => {
        const context = SignInPageContext.create(factoryParams)
        const invokeSpy = jest.spyOn(factoryParams.graphqlClientHash.signedInStaffMember, 'invokeRequestOnEvent')

        await context.restoreSessionOnMounted()

        expect(invokeSpy)
          .not
          .toHaveBeenCalled()
      })
    })
  })
})

describe('SignInPageContext', () => {
  describe('#restoreSessionOnMounted()', () => {
    describe('should leave a person who is not signed in on the form', () => {
      const cases = [
        {
          factoryParams: {
            route: {
              query: {
                redirect: '/expenses',
              },
            },
            router: {
              replace: async () => {},
            },
            errorMessageHashReactive: {
              signIn: null,
            },
            graphqlClientHash: {
              renewAccessToken: {
                capsuleRef: {
                  value: RenewAccessTokenMutationGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        renewAccessToken: {
                          accessToken: 'renewed-access-token-0045',
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              signedInStaffMember: {
                capsuleRef: {
                  value: SignedInStaffMemberQueryGraphqlCapsule.create({
                    result: {
                      errors: [
                        {
                          message: '204.Q001.001',
                        },
                      ],
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: AppAccessTokenClerk.create({
              storage: StorageClerk.create({
                storage: MemoryStorage.create({
                  valueHash: {},
                }),
              }),
            }),
          },
        },
        {
          factoryParams: {
            route: {
              query: {},
            },
            router: {
              replace: async () => {},
            },
            errorMessageHashReactive: {
              signIn: null,
            },
            graphqlClientHash: {
              renewAccessToken: {
                capsuleRef: {
                  value: RenewAccessTokenMutationGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        renewAccessToken: {
                          accessToken: 'renewed-access-token-0046',
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              signedInStaffMember: {
                capsuleRef: {
                  value: SignedInStaffMemberQueryGraphqlCapsule.create({
                    result: {
                      errors: [
                        {
                          message: '204.Q001.002',
                        },
                      ],
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: AppAccessTokenClerk.create({
              storage: StorageClerk.create({
                storage: MemoryStorage.create({
                  valueHash: {},
                }),
              }),
            }),
          },
        },
      ]

      test.each(cases)('signedInStaffMember errors[0].message: $factoryParams.graphqlClientHash.signedInStaffMember.capsuleRef.value.result.errors.0.message', async ({
        factoryParams,
      }) => {
        const context = SignInPageContext.create(factoryParams)
        const replaceSpy = jest.spyOn(factoryParams.router, 'replace')

        await context.restoreSessionOnMounted()

        expect(replaceSpy)
          .not
          .toHaveBeenCalled()
      })
    })
  })
})

describe('SignInPageContext', () => {
  describe('#restoreSessionOnMounted()', () => {
    /*
     * Every way the opening sequence can end early means the same thing: this person is not signed
     * in, which is the state the screen is already showing. Telling somebody their session has
     * ended when all they did was open a sign-in page would be wrong, and the form-level message
     * belongs to the submit alone.
     */
    describe('should put no refusal on the screen', () => {
      const cases = [
        {
          factoryParams: {
            route: {
              query: {},
            },
            router: {
              replace: async () => {},
            },
            errorMessageHashReactive: {
              signIn: null,
            },
            graphqlClientHash: {
              renewAccessToken: {
                capsuleRef: {
                  value: RenewAccessTokenMutationGraphqlCapsule.create({
                    result: {
                      errors: [
                        {
                          message: '204.M003.001',
                        },
                      ],
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              signedInStaffMember: {
                capsuleRef: {
                  value: SignedInStaffMemberQueryGraphqlCapsule.createAsPending(),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: AppAccessTokenClerk.create({
              storage: StorageClerk.create({
                storage: MemoryStorage.create({
                  valueHash: {},
                }),
              }),
            }),
          },
          expected: {
            signIn: null,
          },
        },
        {
          factoryParams: {
            route: {
              query: {},
            },
            router: {
              replace: async () => {},
            },
            errorMessageHashReactive: {
              signIn: null,
            },
            graphqlClientHash: {
              renewAccessToken: {
                capsuleRef: {
                  value: RenewAccessTokenMutationGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        renewAccessToken: {
                          accessToken: 'renewed-access-token-0048',
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              signedInStaffMember: {
                capsuleRef: {
                  value: SignedInStaffMemberQueryGraphqlCapsule.create({
                    result: {
                      errors: [
                        {
                          message: '204.Q001.001',
                        },
                      ],
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: AppAccessTokenClerk.create({
              storage: StorageClerk.create({
                storage: MemoryStorage.create({
                  valueHash: {},
                }),
              }),
            }),
          },
          expected: {
            signIn: null,
          },
        },
      ]

      test.each(cases)('renewAccessToken result: $factoryParams.graphqlClientHash.renewAccessToken.capsuleRef.value.result', async ({
        factoryParams,
        expected,
      }) => {
        const context = SignInPageContext.create(factoryParams)

        await context.restoreSessionOnMounted()

        expect(factoryParams.errorMessageHashReactive)
          .toEqual(expected)
      })
    })
  })
})

describe('SignInPageContext', () => {
  describe('#restoreSessionOnMounted()', () => {
    /*
     * Section 7: a member of staff's name and email address are never written to a log line. The
     * query this sequence makes returns both, so the whole opening path is run against each console
     * channel.
     */
    describe('should write nothing to any log channel', () => {
      const cases = [
        {
          factoryParams: {
            route: {
              query: {},
            },
            router: {
              replace: async () => {},
            },
            errorMessageHashReactive: {
              signIn: null,
            },
            graphqlClientHash: {
              renewAccessToken: {
                capsuleRef: {
                  value: RenewAccessTokenMutationGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        renewAccessToken: {
                          accessToken: 'renewed-access-token-0061',
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              signedInStaffMember: {
                capsuleRef: {
                  value: SignedInStaffMemberQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        signedInStaffMember: {
                          staffMemberId: 100061,
                          name: 'Sixty First Staff',
                          email: 'sixty.first.staff@example.com',
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: AppAccessTokenClerk.create({
              storage: StorageClerk.create({
                storage: MemoryStorage.create({
                  valueHash: {},
                }),
              }),
            }),
          },
          params: {
            channel: 'log',
          },
        },
        {
          factoryParams: {
            route: {
              query: {},
            },
            router: {
              replace: async () => {},
            },
            errorMessageHashReactive: {
              signIn: null,
            },
            graphqlClientHash: {
              renewAccessToken: {
                capsuleRef: {
                  value: RenewAccessTokenMutationGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        renewAccessToken: {
                          accessToken: 'renewed-access-token-0062',
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              signedInStaffMember: {
                capsuleRef: {
                  value: SignedInStaffMemberQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        signedInStaffMember: {
                          staffMemberId: 100062,
                          name: 'Sixty Second Staff',
                          email: 'sixty.second.staff@example.com',
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: AppAccessTokenClerk.create({
              storage: StorageClerk.create({
                storage: MemoryStorage.create({
                  valueHash: {},
                }),
              }),
            }),
          },
          params: {
            channel: 'info',
          },
        },
        {
          factoryParams: {
            route: {
              query: {},
            },
            router: {
              replace: async () => {},
            },
            errorMessageHashReactive: {
              signIn: null,
            },
            graphqlClientHash: {
              renewAccessToken: {
                capsuleRef: {
                  value: RenewAccessTokenMutationGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        renewAccessToken: {
                          accessToken: 'renewed-access-token-0063',
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              signedInStaffMember: {
                capsuleRef: {
                  value: SignedInStaffMemberQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        signedInStaffMember: {
                          staffMemberId: 100063,
                          name: 'Sixty Third Staff',
                          email: 'sixty.third.staff@example.com',
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: AppAccessTokenClerk.create({
              storage: StorageClerk.create({
                storage: MemoryStorage.create({
                  valueHash: {},
                }),
              }),
            }),
          },
          params: {
            channel: 'warn',
          },
        },
        {
          factoryParams: {
            route: {
              query: {},
            },
            router: {
              replace: async () => {},
            },
            errorMessageHashReactive: {
              signIn: null,
            },
            graphqlClientHash: {
              renewAccessToken: {
                capsuleRef: {
                  value: RenewAccessTokenMutationGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        renewAccessToken: {
                          accessToken: 'renewed-access-token-0064',
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              signedInStaffMember: {
                capsuleRef: {
                  value: SignedInStaffMemberQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        signedInStaffMember: {
                          staffMemberId: 100064,
                          name: 'Sixty Fourth Staff',
                          email: 'sixty.fourth.staff@example.com',
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: AppAccessTokenClerk.create({
              storage: StorageClerk.create({
                storage: MemoryStorage.create({
                  valueHash: {},
                }),
              }),
            }),
          },
          params: {
            channel: 'error',
          },
        },
        {
          factoryParams: {
            route: {
              query: {},
            },
            router: {
              replace: async () => {},
            },
            errorMessageHashReactive: {
              signIn: null,
            },
            graphqlClientHash: {
              renewAccessToken: {
                capsuleRef: {
                  value: RenewAccessTokenMutationGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        renewAccessToken: {
                          accessToken: 'renewed-access-token-0065',
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
              signedInStaffMember: {
                capsuleRef: {
                  value: SignedInStaffMemberQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        signedInStaffMember: {
                          staffMemberId: 100065,
                          name: 'Sixty Fifth Staff',
                          email: 'sixty.fifth.staff@example.com',
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
            accessTokenClerk: AppAccessTokenClerk.create({
              storage: StorageClerk.create({
                storage: MemoryStorage.create({
                  valueHash: {},
                }),
              }),
            }),
          },
          params: {
            channel: 'debug',
          },
        },
      ]

      test.each(cases)('channel: $params.channel', async ({
        factoryParams,
        params,
      }) => {
        const context = SignInPageContext.create(factoryParams)
        const channelSpy = jest.spyOn(console, params.channel)
          .mockImplementation(() => {})

        await context.restoreSessionOnMounted()

        expect(channelSpy)
          .not
          .toHaveBeenCalled()
      })
    })
  })
})

describe('SignInPageContext', () => {
  describe('#setupComponent()', () => {
    describe('should answer this instance', () => {
      const cases = [
        {
          factoryParams: {
            accessTokenClerk: AppAccessTokenClerk.create({
              storage: StorageClerk.create({
                storage: MemoryStorage.create({
                  valueHash: {
                    access_token: 'living-access-token-0051',
                  },
                }),
              }),
            }),
            graphqlClientHash: {
              signedInStaffMember: {
                capsuleRef: {
                  value: SignedInStaffMemberQueryGraphqlCapsule.createAsPending(),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
          },
        },
        {
          factoryParams: {
            accessTokenClerk: AppAccessTokenClerk.create({
              storage: StorageClerk.create({
                storage: MemoryStorage.create({
                  valueHash: {
                    access_token: 'living-access-token-0052',
                  },
                }),
              }),
            }),
            graphqlClientHash: {
              signedInStaffMember: {
                capsuleRef: {
                  value: SignedInStaffMemberQueryGraphqlCapsule.createAsPending(),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
          },
        },
      ]

      test.each(cases)('valueHash: $factoryParams.accessTokenClerk.storage.storage.valueHash', ({
        factoryParams,
      }) => {
        const context = SignInPageContext.create(factoryParams)

        const actual = context.setupComponent()

        expect(actual)
          .toBe(context) // same reference
      })
    })
  })
})

describe('SignInPageContext', () => {
  describe('#setupComponent()', () => {
    describe('should start the attempt to restore a session', () => {
      const cases = [
        {
          factoryParams: {
            accessTokenClerk: AppAccessTokenClerk.create({
              storage: StorageClerk.create({
                storage: MemoryStorage.create({
                  valueHash: {
                    access_token: 'living-access-token-0053',
                  },
                }),
              }),
            }),
          },
        },
        {
          factoryParams: {
            accessTokenClerk: AppAccessTokenClerk.create({
              storage: StorageClerk.create({
                storage: MemoryStorage.create({
                  valueHash: {
                    access_token: 'living-access-token-0054',
                  },
                }),
              }),
            }),
          },
        },
      ]

      test.each(cases)('valueHash: $factoryParams.accessTokenClerk.storage.storage.valueHash', ({
        factoryParams,
      }) => {
        const context = SignInPageContext.create(factoryParams)
        const restoreSpy = jest.spyOn(context, 'restoreSessionOnMounted')
          .mockResolvedValue()

        context.setupComponent()

        expect(restoreSpy)
          .toHaveBeenCalledWith()
      })
    })
  })
})
