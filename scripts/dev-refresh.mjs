/** Development-only SSE channel; never part of the exported site. */
export function createDevelopmentRefresh () {
  const clients = new Set()
  function handle (req, res) {
    if (req.url?.split('?')[0] !== '/__uxkm/watch') return false
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-store',
      Connection: 'keep-alive',
      'X-Accel-Buffering': 'no'
    })
    res.write('retry: 500\nevent: ready\ndata: {}\n\n')
    clients.add(res)
    const timer = setInterval(() => res.write(': keepalive\n\n'), 20000)
    timer.unref()
    req.on('close', () => { clearInterval(timer); clients.delete(res) })
    return true
  }
  function refresh (revision) {
    for (const res of clients) res.write(`event: refresh\ndata: ${JSON.stringify({ revision })}\n\n`)
  }
  function close () {
    for (const res of clients) res.end()
    clients.clear()
  }
  return { handle, refresh, close }
}
