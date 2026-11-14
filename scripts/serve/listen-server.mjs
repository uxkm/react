/** Share one port across IPv4 and IPv6; ignore the OS-provided HOSTNAME. */
export async function listenServer (server, port, host = process.env.BIND_HOST) {
  const explicitHost = host?.trim()
  function listen (address) {
    return new Promise((resolve, reject) => {
      const onError = (error) => { server.off('listening', onListening); reject(error) }
      const onListening = () => { server.off('error', onError); resolve() }
      server.once('error', onError)
      server.once('listening', onListening)
      server.listen({ port, host: address, ipv6Only: false })
    })
  }
  try {
    await listen(explicitHost || '::')
  } catch (error) {
    if (explicitHost || !['EAFNOSUPPORT', 'EPROTONOSUPPORT', 'EADDRNOTAVAIL'].includes(error.code)) throw error
    await listen('0.0.0.0')
  }
}
