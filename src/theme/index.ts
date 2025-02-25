import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        background: '#0a0b0d',
        color: 'white',
        lineHeight: 'tall',
        scrollBehavior: 'smooth',
      },
      '::selection': {
        background: 'accent.400',
        color: 'gray.900',
      },
    },
  },
  fonts: {
    heading: '"Space Grotesk", sans-serif',
    body: '"Inter", sans-serif',
  },
  colors: {
    gray: {
      50: '#F7FAFC',
      100: '#EDF2F7',
      200: '#E2E8F0',
      300: '#CBD5E0',
      400: '#A0AEC0',
      500: '#718096',
      600: '#4A5568',
      700: '#2D3748',
      800: '#1A202C',
      900: '#0a0b0d',
    },
    brand: {
      50: '#E5F4FF',
      100: '#B8E1FF',
      200: '#8ACDFF',
      300: '#5CB9FF',
      400: '#2EA5FF',
      500: '#0091FF',
      600: '#0074CC',
      700: '#005799',
      800: '#003A66',
      900: '#001D33',
    },
    accent: {
      50: '#e5f7ff',
      100: '#b8e8ff',
      200: '#8ad8ff',
      300: '#5cc9ff',
      400: '#2ebaff',
      500: '#14abff',
      600: '#0095e6',
      700: '#0074b3',
      800: '#005380',
      900: '#00324d',
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: '600',
        borderRadius: 'xl',
        letterSpacing: '0.025em',
        transition: 'all 0.3s ease',
      },
      variants: {
        solid: {
          bg: 'accent.400',
          color: 'gray.900',
          _hover: {
            bg: 'accent.500',
            transform: 'translateY(-2px)',
            boxShadow: '0 0 20px rgba(0, 245, 212, 0.4)',
          },
          _active: {
            bg: 'accent.600',
            transform: 'translateY(0)',
          },
        },
        outline: {
          borderColor: 'accent.400',
          borderWidth: '2px',
          color: 'accent.400',
          _hover: {
            bg: 'whiteAlpha.100',
            transform: 'translateY(-2px)',
            boxShadow: '0 0 20px rgba(0, 245, 212, 0.2)',
          },
          _active: {
            transform: 'translateY(0)',
          },
        },
        ghost: {
          color: 'white',
          _hover: {
            bg: 'whiteAlpha.100',
            transform: 'translateY(-2px)',
          },
          _active: {
            transform: 'translateY(0)',
          },
        },
      },
    },
    Link: {
      baseStyle: {
        transition: 'all 0.2s',
        _hover: {
          textDecoration: 'none',
          color: 'accent.400',
          transform: 'translateY(-2px)',
        },
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: '600',
        letterSpacing: '-0.02em',
      },
    },
    Text: {
      baseStyle: {
        letterSpacing: '0.015em',
      },
    },
  },
  layerStyles: {
    gradientBg: {
      background: 'linear-gradient(135deg, gray.900 0%, brand.900 100%)',
    },
    card: {
      bg: 'whiteAlpha.50',
      borderRadius: 'xl',
      borderWidth: '1px',
      borderColor: 'whiteAlpha.100',
      backdropFilter: 'blur(10px)',
      transition: 'all 0.3s ease',
      _hover: {
        transform: 'translateY(-4px)',
        boxShadow: 'lg',
        borderColor: 'accent.400',
      },
    },
    glass: {
      bg: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(10px)',
      borderRadius: 'xl',
      borderWidth: '1px',
      borderColor: 'whiteAlpha.100',
    },
  },
  textStyles: {
    gradient: {
      bgGradient: 'linear(to-r, accent.400, brand.400)',
      bgClip: 'text',
      fontWeight: 'bold',
    },
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
})

export default theme
