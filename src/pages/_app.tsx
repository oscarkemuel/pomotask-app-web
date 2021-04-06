import React, { useState } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { toast } from 'react-toastify'

import GlobalStyle from '../styles/global'

import { TaskContextProvider } from '../context/TaskContext'

import light from '../styles/themes/light'
import dark from '../styles/themes/dark'

import Header from '../components/Header'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState(light)

  const toggleTheme = (): void => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <TaskContextProvider>
        <Header toggleTheme={toggleTheme} />
        <Component {...pageProps} />
        <GlobalStyle />
      </TaskContextProvider>
    </ThemeProvider>
  )
}

export default MyApp
