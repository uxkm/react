/** Windows cannot deliver SIGTERM gracefully; use IPC before the forced fallback. */
export async function stopChild (child, timeout = 8000) {
  if (!child || child.exitCode !== null || child.signalCode !== null) return
  await new Promise((resolve) => {
    const timer = setTimeout(() => child.kill('SIGKILL'), timeout)
    child.once('exit', () => { clearTimeout(timer); resolve() })
    if (child.connected) {
      child.send({ type: 'shutdown' }, (error) => {
        if (error && child.exitCode === null && child.signalCode === null) child.kill('SIGTERM')
      })
    } else {
      child.kill('SIGTERM')
    }
  })
}
