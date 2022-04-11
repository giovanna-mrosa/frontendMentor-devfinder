import GlobalStyle from './styles/global'
import { Home } from './Pages/Home'
import { ThemeProvider } from 'styled-components'
import dark from './styles/themes/dark'
import light from './styles/themes/dark'
import React, { useState } from 'react'

function App() {
  const [theme, setTheme] = useState(dark)

  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? light : dark)
  }

  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle />
      <Home toggleTheme={toggleTheme} />
    </ThemeProvider>
  )
}

export default App
