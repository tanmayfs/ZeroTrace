import { ChakraProvider, Box } from '@chakra-ui/react'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import theme from './theme'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Box 
          minH="100vh" 
          w="100%" 
          display="flex" 
          flexDirection="column" 
          bg="gray.900"
          margin={0}
          padding={0}
          position="relative"
          overflow="hidden">
          <Navbar />
          <Box as="main" flex="1" w="100%" pt="80px">
            <AppRoutes />
          </Box>
          <Footer />
        </Box>
      </Router>
    </ChakraProvider>
  )
}

export default App
