import { Global } from "@emotion/react";
import globalStyle from "../GlobalStyle";
import '../styles/globals.css'
import { ThemeProvider, defaultTheme } from 'evergreen-ui'
import theme from '../theme';




function MyApp({ Component, pageProps }) {
  return (<>
    <ThemeProvider value={defaultTheme}>
      <Global styles={globalStyle} />
      <Component {...pageProps} />
    </ThemeProvider>
  </>)
}

export default MyApp
