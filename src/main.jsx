import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App.jsx'
import { applyDetectClassesToHtml } from './utils/deviceDetect.js'
import { restoreSidebarCollapsedState } from './utils/appInit.js'
import './styles/app.scss'
import './styles/global.css'
import './assets/css/uk_sub.scss'

// Mirror previous `uk_dom_before.js` behaviour: detect the device/OS/browser and
// apply the same class names to <html> before the React tree mounts so SCSS
// rules using `.device`, `.desktop`, `.chrome`, `.macos`, ... keep working.
applyDetectClassesToHtml()
// Restore the previously collapsed sidebar state synchronously so the layout
// does not flicker between "open" and "closed" on first paint.
restoreSidebarCollapsedState()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
