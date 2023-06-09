import 'styled-components'

import theme from 'styles/themes'

type Theme = typeof theme

declare module 'styled-components' {
  interface Colors {
    purple: string
    purpleDark: string
    blue: string
    blueDark: string
    gray700: string
    gray600: string
    gray500: string
    gray400: string
    gray300: string
    gray200: string
    gray100: string
    danger: string
  }

  export interface DefaultTheme extends Theme {
    title: string
    colors: Colors
  }

  export interface CustomTheme {
    title: string
    colors: Colors
  }
}