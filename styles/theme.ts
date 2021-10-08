import { useMemo } from 'react'
import { frFR } from '@mui/material/locale'
import useMediaQuery from '@mui/material/useMediaQuery'
import { responsiveFontSizes, unstable_createMuiStrictModeTheme } from '@mui/material/styles'

export function useTheme() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  return useMemo(
    () =>
      responsiveFontSizes(
        unstable_createMuiStrictModeTheme(
          {
            typography: {
              fontFamily: ['Nexa', 'Helvetica Neue', 'sans-serif'].join(','),
              success: { color: '#4daf7c' },
              warning: { color: '#2980b9' },
              error: { color: '#C91F37' },
            },
            palette: {
              mode: prefersDarkMode ? 'dark' : 'light',
              primary: { main: '#121212' },
              secondary: { main: '#fff' },
              error: { main: '#C91F37' },
              background: {
                paper: prefersDarkMode ? '#121212' : '#fff',
              },
            },
            components: {
              MuiBottomNavigationAction: {
                styleOverrides: {
                  label: {
                    color: prefersDarkMode ? '#fff' : '#121212',
                  },
                },
              },
              MuiUseMediaQuery: {
                defaultProps: {
                  noSsr: true,
                },
              },
            },
          },
          frFR
        )
      ),
    [prefersDarkMode]
  )
}
