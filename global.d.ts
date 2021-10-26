import { ReactText, HTMLAttributes, ReactHTMLElement, ReactElement } from 'react'

/// <reference types="react/experimental" />
/// <reference types="react-dom/experimental" />

interface LordIcon extends HTMLAttributes<HTMLDivElement> {
  icon?: string
  src?: string
  delay?: string
  colors?: string
  trigger?: string
  speed?: string
  stroke?: string
  scale?: string
  ['axis-x']?: string
  ['axis-y']?: string
  target?: string
}

export declare global {
  var appName: string
  var website: string
  var version: string
  var description: string

  interface Window {
    gtag: any
  }

  namespace JSX {
    interface IntrinsicElements {
      'lord-icon': LordIcon
    }
  }
}

export declare module 'react' {
  export interface HTMLAttributes<T> {
    xyz?: string
  }
}

declare module '@mui/styles/defaultTheme' {
  interface DefaultTheme extends Theme {}
}

//@see https://codesandbox.io/s/fontsizetheme-material-demo-forked-l9u05

declare module '@mui/material/styles/createTypography' {
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

declare module '@mui/material/Typography/Typography' {
  interface TypographyPropsVariantOverrides {
    success: true
    warning: true
    error: true
  }
}
