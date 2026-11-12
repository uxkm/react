import assert from 'node:assert/strict'
import { test } from 'node:test'
import { EventEmitter } from 'node:events'
import { createServer, get } from 'node:http'
import { listenServer } from '../scripts/listen-server.mjs'
import { createDevelopmentRefresh } from '../scripts/development-refresh.mjs'

function request (host, port, pathname = '/') {
  return new Promise((resolve, reject) => {
    const req = get({ hostname: host, port, path: pathname }, (res) => {
      res.once('data', (chunk) => {
        resolve({ status: res.statusCode, body: chunk.toString() })
        res.destroy()
      })
    })
    req.setTimeout(5000, () => req.destroy(new Error('Request timed out')))
    req.on('error', reject)
  })
}

test('IPv4, IPv6 and localhost serve HTTP and the development watch channel', async (t) => {
  const refresh = createDevelopmentRefresh()
  const server = createServer((req, res) => {
    if (!refresh.handle(req, res)) res.end('ok')
  })
  t.after(() => { refresh.close(); server.closeAllConnections(); return new Promise((resolve) => server.close(resolve)) })
  await listenServer(server, 0, '')
  const { port } = server.address()
  for (const host of ['127.0.0.1', 'localhost', '::1']) {
    assert.deepEqual(await request(host, port), { status: 200, body: 'ok' })
    const stream = await request(host, port, '/__uxkm/watch')
    assert.equal(stream.status, 200)
    assert.match(stream.body, /event: ready/)
  }
})

function simulatedServer (code) {
  const server = new EventEmitter()
  server.calls = []
  server.listen = (options) => {
    server.calls.push(options)
    queueMicrotask(() => {
      if (server.calls.length === 1) server.emit('error', Object.assign(new Error(code), { code }))
      else server.emit('listening')
    })
  }
  return server
}

test('IPv6 unavailable falls back to IPv4', async () => {
  const server = simulatedServer('EAFNOSUPPORT')
  await listenServer(server, 8090, '')
  assert.deepEqual(server.calls.map(({ host }) => host), ['::', '0.0.0.0'])
  assert.equal(server.listenerCount('error'), 0)
  assert.equal(server.listenerCount('listening'), 0)
})

test('port conflicts and explicit bind addresses do not silently fall back', async () => {
  for (const [code, host] of [['EADDRINUSE', ''], ['EADDRNOTAVAIL', '127.0.0.1']]) {
    const server = simulatedServer(code)
    await assert.rejects(listenServer(server, 8090, host), { code })
    assert.equal(server.calls.length, 1)
  }
})
