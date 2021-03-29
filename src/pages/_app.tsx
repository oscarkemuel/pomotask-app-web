import React, { useState } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'

import light from '../styles/themes/light'
import dark from '../styles/themes/dark'

import Header from '../components/Header';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [ theme, setTheme ] = useState(light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <Header toggleTheme={toggleTheme} />
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
