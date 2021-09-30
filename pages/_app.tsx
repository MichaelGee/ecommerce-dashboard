import { Global } from "@emotion/react";
import globalStyle from "../GlobalStyle";
import '../styles/globals.css'
import { ThemeProvider } from 'evergreen-ui'
import theme from '../theme';
import { AuthProvider } from '../context/AuthContext';



function MyApp({ Component, pageProps }) {
  return (<>
    <ThemeProvider value={theme}>
      <AuthProvider>
        <Global styles={globalStyle} />
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  </>)
}

export default MyApp
