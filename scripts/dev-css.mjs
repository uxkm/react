/** Compiled-CSS development uses the same lifecycle and source watcher as dev. */
import { startDevelopment } from './dev.mjs'
await startDevelopment({ styleMode: 'css' })
