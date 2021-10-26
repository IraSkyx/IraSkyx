declare module 'adlenoir' {
  export interface Item {
    name: string
    path: string
    icon: ReactElement
  }

  export interface MessageProps {
    className: string
    content: React.ReactNode
    onClick?: () => void
    color?: string
    xyz?: string
  }

  export type Project = {
    img: StaticImageData
    icon: StaticImageData
    title: string
    url: string
    content: string
    date: Date
  }
}
