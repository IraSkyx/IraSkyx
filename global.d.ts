import { ReactText, HTMLAttributes, ReactHTMLElement } from 'react'

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