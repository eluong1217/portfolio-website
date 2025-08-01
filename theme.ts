import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({ 
  config,
  colors: {
    brand: {
      50: '#e6f3ff',
      100: '#b3d9ff',
      500: '#0066cc',
      900: '#003366',
    },
    // You can also override existing colors
    gray: {
      50: '#f9f9f9',
      100: '#ededed',
      900: '#1a1a1a',
    }
  },
  fonts: {
    heading: '"Press Start 2P", "Courier New", "Consolas", monospace',
    body: '"Press Start 2P", "Courier New", "Consolas", monospace',
  },
  fontSizes: {
    xs: "8px",
    sm: "10px", 
    md: "12px",
    lg: "14px",
    xl: "16px",
    "2xl": "18px",
    "3xl": "20px",
    "4xl": "24px",
    "5xl": "28px",
    "6xl": "32px",
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: props.colorMode === 'dark' ? 'gray.900' : 'white',
        color: props.colorMode === 'dark' ? 'white' : 'gray.800',
      }
    })
  }
})

export default theme
