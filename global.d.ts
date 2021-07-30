import { ReactText, HTMLAttributes } from 'react'

/// <reference types="react/experimental" />
/// <reference types="react-dom/experimental" />

export declare global {
  interface Window {
    gtag: any
  }

  var appName: string
  var website: string
  var version: string
  var description: string
}


type ToReact<T> = {
  [P in keyof T]?: T[P] &
    Omit<HTMLAttributes<Element>, 'className'> & {
      class?: string
      key?: ReactText
    }
}

declare global {
  export namespace JSX {
    interface IntrinsicElements
      extends ToReact<LocalJSX.IntrinsicElements & IoniconsJSX.IntrinsicElements> {
      key?: string
    }
  }
}