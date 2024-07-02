import { AccountProvider } from 'account/AccountContext'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

import PageHome from './pages/Home'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <AccountProvider>
        <PageHome />
      </AccountProvider>
    </ThemeProvider>
  )
}

export default App
