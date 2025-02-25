import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  Icon,
} from '@chakra-ui/react'
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa'
import { Link as RouterLink } from 'react-router-dom'

export default function Footer() {
  return (
    <Box bg="gray.900" color="white">
      <Container
        as={Stack}
        maxW={'7xl'}
        py={10}
        spacing={8}
        justify={'center'}
        align={'center'}>
        <Stack direction={'row'} spacing={6}>
          <Link as={RouterLink} to="/">Home</Link>
          <Link as={RouterLink} to="/services">Services</Link>
          <Link as={RouterLink} to="/about">About</Link>
          <Link as={RouterLink} to="/contact">Contact</Link>
        </Stack>
        <Stack direction={'row'} spacing={6}>
          <Link href={'#'} isExternal>
            <Icon as={FaTwitter} w={6} h={6} _hover={{ color: 'accent.400' }} />
          </Link>
          <Link href={'#'} isExternal>
            <Icon as={FaGithub} w={6} h={6} _hover={{ color: 'accent.400' }} />
          </Link>
          <Link href={'#'} isExternal>
            <Icon as={FaLinkedin} w={6} h={6} _hover={{ color: 'accent.400' }} />
          </Link>
        </Stack>
        <Text> {new Date().getFullYear()} ZeroTrace. All rights reserved</Text>
      </Container>
    </Box>
  )
}
