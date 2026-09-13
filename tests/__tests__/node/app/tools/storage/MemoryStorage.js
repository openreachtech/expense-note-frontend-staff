import MemoryStorage from '~/app/tools/storage/MemoryStorage.js'

describe('MemoryStorage', () => {
  describe('.create()', () => {
    describe('to be instance of MemoryStorage', () => {
      const cases = [
        {
          params: {
            valueHash: {
              'storage-key-0001': 'storage-value-0001',
            },
          },
        },
        {
          params: {
            valueHash: {
              'storage-key-0002': 'storage-value-0002',
            },
          },
        },
      ]

      test.each(cases)('valueHash: $params.valueHash', ({
        params,
      }) => {
        const actual = MemoryStorage.create(params)

        expect(actual)
          .toBeInstanceOf(MemoryStorage)
      })
    })
  })
})

describe('MemoryStorage', () => {
  describe('.create()', () => {
    describe('to be call by constructor', () => {
      const cases = [
        {
          params: {
            valueHash: {
              'storage-key-0003': 'storage-value-0003',
            },
          },
        },
        {
          params: {
            valueHash: {
              'storage-key-0004': 'storage-value-0004',
            },
          },
        },
      ]

      test.each(cases)('valueHash: $params.valueHash', ({
        params,
      }) => {
        const SpyClass = globalThis.constructorSpy.spyOn(MemoryStorage)

        SpyClass.create(params)

        expect(SpyClass.__spy__)
          .toHaveBeenCalledWith(params)
      })
    })
  })
})

describe('MemoryStorage', () => {
  describe('.create()', () => {
    describe('should fill default valueHash', () => {
      test('with no arguments', () => {
        const expected = MemoryStorage.sharedValueHash

        const actual = MemoryStorage.create()

        expect(actual)
          .toHaveProperty('valueHash', expected)
      })
    })
  })
})

describe('MemoryStorage', () => {
  describe('constructor', () => {
    describe('to keep properties', () => {
      describe('#valueHash', () => {
        const cases = [
          {
            params: {
              valueHash: {
                'storage-key-0005': 'storage-value-0005',
              },
            },
          },
          {
            params: {
              valueHash: {
                'storage-key-0006': 'storage-value-0006',
              },
            },
          },
        ]

        test.each(cases)('valueHash: $params.valueHash', ({
          params,
        }) => {
          const actual = MemoryStorage.create(params)

          expect(actual)
            .toHaveProperty('valueHash', params.valueHash)
        })
      })
    })
  })
})

describe('MemoryStorage', () => {
  describe('.get:sharedValueHash', () => {
    describe('when called as is', () => {
      test('to be the same record on every read', () => {
        const expected = MemoryStorage.sharedValueHash

        const actual = MemoryStorage.sharedValueHash

        expect(actual)
          .toBe(expected) // same reference
      })
    })
  })
})

describe('MemoryStorage', () => {
  describe('#getItem()', () => {
    describe('should answer the value stored under the key', () => {
      const cases = [
        {
          factoryParams: {
            valueHash: {
              'storage-key-0007': 'storage-value-0007',
              'storage-key-0008': 'storage-value-0008',
            },
          },
          params: {
            key: 'storage-key-0007',
          },
          expected: 'storage-value-0007',
        },
        {
          factoryParams: {
            valueHash: {
              'storage-key-0007': 'storage-value-0007',
              'storage-key-0008': 'storage-value-0008',
            },
          },
          params: {
            key: 'storage-key-0008',
          },
          expected: 'storage-value-0008',
        },
      ]

      test.each(cases)('key: $params.key', ({
        factoryParams,
        params,
        expected,
      }) => {
        const storage = MemoryStorage.create(factoryParams)

        const actual = storage.getItem(params.key)

        expect(actual)
          .toBe(expected)
      })
    })
  })
})

describe('MemoryStorage', () => {
  describe('#getItem()', () => {
    /*
     * furo's AccessTokenClerk decides whether a session exists with `retrieveToken() !== null`, so
     * an absent key answering undefined would read to it as a token that is there.
     */
    describe('should answer null for a key nothing was stored under', () => {
      const cases = [
        {
          factoryParams: {
            valueHash: {
              'storage-key-0009': 'storage-value-0009',
            },
          },
          params: {
            key: 'storage-key-0010',
          },
        },
        {
          factoryParams: {
            valueHash: {},
          },
          params: {
            key: 'storage-key-0011',
          },
        },
      ]

      test.each(cases)('key: $params.key', ({
        factoryParams,
        params,
      }) => {
        const storage = MemoryStorage.create(factoryParams)

        const actual = storage.getItem(params.key)

        expect(actual)
          .toBeNull()
      })
    })
  })
})

describe('MemoryStorage', () => {
  describe('#setItem()', () => {
    describe('should store a value a later read answers', () => {
      const cases = [
        {
          factoryParams: {
            valueHash: {},
          },
          params: {
            key: 'storage-key-0012',
            value: 'storage-value-0012',
          },
          expected: 'storage-value-0012',
        },
        {
          factoryParams: {
            valueHash: {
              'storage-key-0013': 'storage-value-0013',
            },
          },
          params: {
            key: 'storage-key-0013',
            value: 'storage-value-0014',
          },
          expected: 'storage-value-0014',
        },
      ]

      test.each(cases)('key: $params.key', ({
        factoryParams,
        params,
        expected,
      }) => {
        const storage = MemoryStorage.create(factoryParams)

        storage.setItem(
          params.key,
          params.value
        )

        expect(storage.getItem(params.key))
          .toBe(expected)
      })
    })
  })
})

describe('MemoryStorage', () => {
  describe('#removeItem()', () => {
    describe('should leave nothing a later read answers', () => {
      const cases = [
        {
          factoryParams: {
            valueHash: {
              'storage-key-0015': 'storage-value-0015',
            },
          },
          params: {
            key: 'storage-key-0015',
          },
        },
        {
          factoryParams: {
            valueHash: {
              'storage-key-0016': 'storage-value-0016',
              'storage-key-0017': 'storage-value-0017',
            },
          },
          params: {
            key: 'storage-key-0016',
          },
        },
      ]

      test.each(cases)('key: $params.key', ({
        factoryParams,
        params,
      }) => {
        const storage = MemoryStorage.create(factoryParams)

        storage.removeItem(params.key)

        expect(storage.getItem(params.key))
          .toBeNull()
      })
    })
  })
})

describe('MemoryStorage', () => {
  describe('#setItem()', () => {
    /*
     * The request header is built by a static method on a payload base class, which cannot be
     * handed an instance. So what has to be shared is the record, not the instance: a token written
     * by one instance has to be the token a second, unrelated one reads.
     */
    describe('should be read back by a separately created instance', () => {
      const cases = [
        {
          params: {
            key: 'shared-storage-key-0018',
            value: 'shared-storage-value-0018',
          },
          expected: 'shared-storage-value-0018',
        },
        {
          params: {
            key: 'shared-storage-key-0019',
            value: 'shared-storage-value-0019',
          },
          expected: 'shared-storage-value-0019',
        },
      ]

      test.each(cases)('key: $params.key', ({
        params,
        expected,
      }) => {
        const writingStorage = MemoryStorage.create()
        const readingStorage = MemoryStorage.create()

        writingStorage.setItem(
          params.key,
          params.value
        )

        const actual = readingStorage.getItem(params.key)

        expect(actual)
          .toBe(expected)
      })
    })
  })
})
