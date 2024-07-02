import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { AppRoot } from '@telegram-apps/telegram-ui'

import '@telegram-apps/telegram-ui/dist/styles.css'

import WebApp from '@twa-dev/sdk'

WebApp.ready()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRoot>
      <App />
    </AppRoot>
  </React.StrictMode>
)
