import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import { AccountProvider } from 'account/AccountContext'
import PageHome from './pages/Home'
import { PrivyProvider } from '@privy-io/react-auth'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <PrivyProvider appId="cly3rxcki047913ytblim7bp4">
        <AccountProvider>
          <PageHome />
        </AccountProvider>
      </PrivyProvider>
    </ThemeProvider>
  )
}

export default App
