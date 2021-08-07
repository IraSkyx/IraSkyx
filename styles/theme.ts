import { useMemo } from 'react'
import { frFR } from '@material-ui/core/locale'
import { responsiveFontSizes, unstable_createMuiStrictModeTheme, useMediaQuery } from '@material-ui/core'

//@see https://codesandbox.io/s/fontsizetheme-material-demo-forked-l9u05

declare module '@material-ui/core/styles/createTypography' {
  interface Typography {
    success: CSSProperties
    warning: CSSProperties
    error: CSSProperties
  }

  interface TypographyOptions {
    success?: CSSProperties
    warning: CSSProperties
    error: CSSProperties
  }
}

declare module '@material-ui/core/Typography/Typography' {
  interface TypographyPropsVariantOverrides {
    success: true
    warning: true
    error: true
  }
}

export function useTheme() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  return useMemo(
    () =>
      responsiveFontSizes(
        unstable_createMuiStrictModeTheme(
          {
            typography: {
              fontFamily: ['Nexa', 'Helvetica', 'sans-serif'].join(','),
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
