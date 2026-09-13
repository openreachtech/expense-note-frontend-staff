import BaseAppGraphqlCapsule from '~/app/graphql/client/BaseAppGraphqlCapsule'

import SignedInStaffMemberQueryGraphqlCapsule from '~/app/graphql/client/queries/signedInStaffMember/SignedInStaffMemberQueryGraphqlCapsule'

/*
 * The key furo reads a response's content from. It is written as a constant because the name furo
 * chose for it is one `@openreachtech/eslint-config` denies as an identifier, and the envelope is
 * furo's to name, not this repository's.
 */
const RESPONSE_CONTENT_FIELD = 'data'

describe('SignedInStaffMemberQueryGraphqlCapsule', () => {
  describe('super class', () => {
    test('to be derived class of BaseAppGraphqlCapsule', () => {
      const actual = SignedInStaffMemberQueryGraphqlCapsule.prototype

      expect(actual)
        .toBeInstanceOf(BaseAppGraphqlCapsule)
    })
  })
})

describe('SignedInStaffMemberQueryGraphqlCapsule', () => {
  describe('#get:signedInStaffMemberValueHash', () => {
    describe('to be the value hash the contract returns', () => {
      const cases = [
        {
          factoryParams: {
            result: {
              [RESPONSE_CONTENT_FIELD]: {
                signedInStaffMember: {
                  staffMemberId: 10001,
                  name: 'First Staff Member',
                  email: 'first.staff.member@example.com',
                },
              },
            },
          },
          expected: {
            staffMemberId: 10001,
            name: 'First Staff Member',
            email: 'first.staff.member@example.com',
          },
        },
        {
          factoryParams: {
            result: {
              [RESPONSE_CONTENT_FIELD]: {
                signedInStaffMember: {
                  staffMemberId: 10002,
                  name: 'Second Staff Member',
                  email: 'second.staff.member@example.com',
                },
              },
            },
          },
          expected: {
            staffMemberId: 10002,
            name: 'Second Staff Member',
            email: 'second.staff.member@example.com',
          },
        },
      ]

      test.each(cases)('staffMemberId: $factoryParams.result.data.signedInStaffMember.staffMemberId', ({
        factoryParams,
        expected,
      }) => {
        const capsule = SignedInStaffMemberQueryGraphqlCapsule.create(factoryParams)

        const actual = capsule.signedInStaffMemberValueHash

        expect(actual)
          .toEqual(expected)
      })
    })
  })
})

describe('SignedInStaffMemberQueryGraphqlCapsule', () => {
  describe('#get:signedInStaffMemberValueHash', () => {
    describe('to be null while there is no content', () => {
      test('with no result', () => {
        const capsule = SignedInStaffMemberQueryGraphqlCapsule.create({
          result: null,
        })

        const actual = capsule.signedInStaffMemberValueHash

        expect(actual)
          .toBeNull()
      })
    })
  })
})

describe('SignedInStaffMemberQueryGraphqlCapsule', () => {
  describe('#get:staffMemberId', () => {
    describe('to be the staff member the caller is', () => {
      const cases = [
        {
          factoryParams: {
            result: {
              [RESPONSE_CONTENT_FIELD]: {
                signedInStaffMember: {
                  staffMemberId: 10001,
                  name: 'First Staff Member',
                  email: 'first.staff.member@example.com',
                },
              },
            },
          },
          expected: 10001,
        },
        {
          factoryParams: {
            result: {
              [RESPONSE_CONTENT_FIELD]: {
                signedInStaffMember: {
                  staffMemberId: 10002,
                  name: 'Second Staff Member',
                  email: 'second.staff.member@example.com',
                },
              },
            },
          },
          expected: 10002,
        },
      ]

      test.each(cases)('staffMemberId: $factoryParams.result.data.signedInStaffMember.staffMemberId', ({
        factoryParams,
        expected,
      }) => {
        const capsule = SignedInStaffMemberQueryGraphqlCapsule.create(factoryParams)

        const actual = capsule.staffMemberId

        expect(actual)
          .toBe(expected)
      })
    })
  })
})

describe('SignedInStaffMemberQueryGraphqlCapsule', () => {
  describe('#get:staffMemberId', () => {
    describe('to be null while there is no content', () => {
      test('with no result', () => {
        const capsule = SignedInStaffMemberQueryGraphqlCapsule.create({
          result: null,
        })

        const actual = capsule.staffMemberId

        expect(actual)
          .toBeNull()
      })
    })
  })
})

describe('SignedInStaffMemberQueryGraphqlCapsule', () => {
  describe('#get:name', () => {
    describe('to be the name the screen greets', () => {
      const cases = [
        {
          factoryParams: {
            result: {
              [RESPONSE_CONTENT_FIELD]: {
                signedInStaffMember: {
                  staffMemberId: 10001,
                  name: 'First Staff Member',
                  email: 'first.staff.member@example.com',
                },
              },
            },
          },
          expected: 'First Staff Member',
        },
        {
          factoryParams: {
            result: {
              [RESPONSE_CONTENT_FIELD]: {
                signedInStaffMember: {
                  staffMemberId: 10002,
                  name: 'Second Staff Member',
                  email: 'second.staff.member@example.com',
                },
              },
            },
          },
          expected: 'Second Staff Member',
        },
      ]

      test.each(cases)('name: $factoryParams.result.data.signedInStaffMember.name', ({
        factoryParams,
        expected,
      }) => {
        const capsule = SignedInStaffMemberQueryGraphqlCapsule.create(factoryParams)

        const actual = capsule.name

        expect(actual)
          .toBe(expected)
      })
    })
  })
})

describe('SignedInStaffMemberQueryGraphqlCapsule', () => {
  describe('#get:name', () => {
    describe('to be null while there is no content', () => {
      test('with no result', () => {
        const capsule = SignedInStaffMemberQueryGraphqlCapsule.create({
          result: null,
        })

        const actual = capsule.name

        expect(actual)
          .toBeNull()
      })
    })
  })
})

describe('SignedInStaffMemberQueryGraphqlCapsule', () => {
  describe('#get:email', () => {
    describe('to be the address the account signs in with', () => {
      const cases = [
        {
          factoryParams: {
            result: {
              [RESPONSE_CONTENT_FIELD]: {
                signedInStaffMember: {
                  staffMemberId: 10001,
                  name: 'First Staff Member',
                  email: 'first.staff.member@example.com',
                },
              },
            },
          },
          expected: 'first.staff.member@example.com',
        },
        {
          factoryParams: {
            result: {
              [RESPONSE_CONTENT_FIELD]: {
                signedInStaffMember: {
                  staffMemberId: 10002,
                  name: 'Second Staff Member',
                  email: 'second.staff.member@example.com',
                },
              },
            },
          },
          expected: 'second.staff.member@example.com',
        },
      ]

      test.each(cases)('email: $factoryParams.result.data.signedInStaffMember.email', ({
        factoryParams,
        expected,
      }) => {
        const capsule = SignedInStaffMemberQueryGraphqlCapsule.create(factoryParams)

        const actual = capsule.email

        expect(actual)
          .toBe(expected)
      })
    })
  })
})

describe('SignedInStaffMemberQueryGraphqlCapsule', () => {
  describe('#get:email', () => {
    describe('to be null while there is no content', () => {
      test('with no result', () => {
        const capsule = SignedInStaffMemberQueryGraphqlCapsule.create({
          result: null,
        })

        const actual = capsule.email

        expect(actual)
          .toBeNull()
      })
    })
  })
})
