import assert from 'node:assert/strict'
import test from 'node:test'
import { pathToFileURL } from 'node:url'
import path from 'node:path'

process.env.NODE_ENV = 'test'
const root = path.resolve(import.meta.dirname, '..')
const moduleUrl = pathToFileURL(path.join(root, 'lib', 'inquiry-captcha.ts')).href

test('refresh invalidates the previous challenge and the latest challenge is single-use', async () => {
  const { issueCaptchaChallenge, verifyCaptchaSubmission } = await import(moduleUrl)
  const current = new Map()
  const store = {
    async issue(record) {
      current.set(record.formScopeHash, { ...record, consumed: false })
    },
    async consume(record) {
      const saved = current.get(record.formScopeHash)
      if (!saved || saved.consumed || !record.tokenHash || saved.tokenHash !== record.tokenHash) return false
      saved.consumed = true
      return true
    },
  }
  const context = {
    secret: 'tianyu-captcha-test-secret-1234567890',
    tenantId: '11111111-1111-4111-8111-111111111111',
    siteScope: 'shouyaoglobal.com',
    scope: 'captcha_11111111111111111111111111111111',
    store,
  }
  const first = await issueCaptchaChallenge({ ...context, now: 1000 })
  const second = await issueCaptchaChallenge({ ...context, now: 1010 })

  assert.deepEqual(await verifyCaptchaSubmission({ ...context, now: 1011, token: first.token, answer: first.testAnswer }), { ok: false, code: 'invalid' })
  assert.deepEqual(await verifyCaptchaSubmission({ ...context, now: 1011, token: second.token, answer: second.testAnswer }), { ok: true })
  assert.deepEqual(await verifyCaptchaSubmission({ ...context, now: 1011, token: second.token, answer: second.testAnswer }), { ok: false, code: 'invalid' })
})
