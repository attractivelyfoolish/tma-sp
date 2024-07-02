import React from 'react'
import ReactDOM from 'react-dom/client'

import { PrivyClientConfig, PrivyProvider } from '@privy-io/react-auth'
import { AppRoot } from '@telegram-apps/telegram-ui'
import '@telegram-apps/telegram-ui/dist/styles.css'
import WebApp from '@twa-dev/sdk'

import App from './App.tsx'

WebApp.ready()

const mobileLoginMethods: PrivyClientConfig['loginMethods'] = [
  'sms',
  'email',
  'discord'
]

const desktopLoginMethods: PrivyClientConfig['loginMethods'] = [
  'wallet',
  ...mobileLoginMethods
]

const twaLoginMethods: PrivyClientConfig['loginMethods'] = [
  'google',
  ...mobileLoginMethods
]

ReactDOM.createRoot(document.getElementById('root')!).render(
  <PrivyProvider
    appId="cly3rxcki047913ytblim7bp4"
    config={{
      loginMethods:
        WebApp.platform === 'weba' || WebApp.platform === 'webk'
          ? twaLoginMethods
          : WebApp.platform === 'android' || WebApp.platform === 'ios'
            ? mobileLoginMethods
            : desktopLoginMethods
    }}
  >
    <React.StrictMode>
      <AppRoot>
        <App />
      </AppRoot>
    </React.StrictMode>
  </PrivyProvider>
)
