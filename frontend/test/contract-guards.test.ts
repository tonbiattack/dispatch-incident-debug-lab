import assert from 'node:assert/strict'
import test from 'node:test'
import { requireCustomerDisplayName } from '../src/lib/contract-guards.js'

test('D09: required customer display name cannot be empty', () => {
  assert.throws(() => requireCustomerDisplayName({ id: 'c-1', displayName: '', recentOrderCount: 0 }))
  assert.equal(requireCustomerDisplayName({ id: 'c-1', displayName: 'Acme', recentOrderCount: 0 }), 'Acme')
})
