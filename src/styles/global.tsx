import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    scroll-behavior: smooth;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  ${({ theme }) => css`
    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      background: var(--tg-theme-bg-color, #fff);
    }
  `}

  @media (prefers-color-scheme: dark) {
    body {
      background: var(--tg-theme-bg-color,#212121);
    }
  }
`

export default GlobalStyles
