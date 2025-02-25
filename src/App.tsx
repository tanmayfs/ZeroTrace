import { ChakraProvider, Box } from '@chakra-ui/react'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import TickerTape from './components/TickerTape'
import theme from './theme'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Box>
          <TickerTape />
          <Box 
            minH="100vh" 
            w="100%" 
            display="flex" 
            flexDirection="column" 
            bg="gray.900"
            margin={0}
            padding={0}
            position="relative"
            overflow="hidden"
            pt="32px"
          >
            <Navbar />
            <Box as="main" flex="1" w="100%" pt="80px">
              <AppRoutes />
            </Box>
            <Footer />
          </Box>
        </Box>
      </Router>
    </ChakraProvider>
  )
}

export default App
