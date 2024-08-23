// load the utility helper functions
const { build, listen } = require('fastify-cli/helper')

// write a test
const { test } = require('node:test')
const assert = require('node:assert')

test('test my application', async t => {
  const argv = ['app.js']
  const app = await build(argv, {
    extraParam: 'foo',
    skipOverride: true // If you want your application to be registered with fastify-plugin
  })
  t.after(() => app.close())

  // test your application here:
  const res = await app.inject('/')
  assert.deepStrictEqual(res.json(), { hello: 'one' })
})