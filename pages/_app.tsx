import React from 'react'
import { Global } from "@emotion/react";
import globalStyle from "../GlobalStyle";
import '../styles/globals.css'
import { ThemeProvider } from 'evergreen-ui'
import theme from '../theme';
import { AuthProvider } from 'context/AuthContext';
import { Provider as StyletronProvider } from 'styletron-react'
import { Styletron } from '../styletron.js'
import { ModalProvider } from 'context/ModalContext';
import { Layout } from 'components/organisms/Layout';

function MyApp({ Component, pageProps }) {
  return (<>
    <StyletronProvider value={Styletron}>
      <ThemeProvider value={theme}>
        <ModalProvider>
          <AuthProvider>
            <Global styles={globalStyle} />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </AuthProvider>
        </ModalProvider>
      </ThemeProvider>
    </StyletronProvider>
  </>)
}

export default MyApp
