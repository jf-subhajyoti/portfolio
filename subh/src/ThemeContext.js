import {createContext, useContext, useEffect, useState} from 'react'

const ThemeContext = createContext();

export function useThemeContext() {
  return useContext(ThemeContext);
}

export function ThemeProvider({children}) {
  const [darkTheme, setDarkTheme] = useState(false)
  function toggleTheme() {
    setDarkTheme(prevDarkTheme => !prevDarkTheme);
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkTheme ? 'dark' : 'light');
  }, [darkTheme])
  return (
    <ThemeContext.Provider value={{darkTheme, updateTheme: toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}
