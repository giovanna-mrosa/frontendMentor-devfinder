import GlobalStyle from './styles/global'
import { Home } from './Pages/Home'
import { ThemeProvider } from 'styled-components'
import dark from './styles/themes/dark'
import light from './styles/themes/light'
import React from 'react'
import UsePersistedState from './hooks/usePersistedState'

function App() {
  const [theme, setTheme] = UsePersistedState('theme', dark)

  const toggleTheme = () => {
    console.log(theme)
    setTheme(theme.title === 'dark' ? light : dark)
    
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home toggleTheme={toggleTheme} />
    </ThemeProvider>
  )
}

export default App
