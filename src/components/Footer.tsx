import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  useColorModeValue,
  Icon,
  HStack,
} from '@chakra-ui/react'
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa6'

export default function Footer() {
  return (
    <Box
      as="footer"
      bg={useColorModeValue('gray.900', 'gray.900')}
      color={useColorModeValue('gray.400', 'gray.400')}
      position="relative"
      zIndex={2}
    >
      <Container
        as={Stack}
        maxW="7xl"
        py={8}
        spacing={4}
        justify="center"
        align="center"
      >
        <Stack direction="row" spacing={6}>
          <Link href="/home">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </Stack>
        <HStack spacing={6}>
          <Link href="https://twitter.com" isExternal>
            <Icon as={FaTwitter} w={5} h={5} />
          </Link>
          <Link href="https://github.com" isExternal>
            <Icon as={FaGithub} w={5} h={5} />
          </Link>
          <Link href="https://linkedin.com" isExternal>
            <Icon as={FaLinkedin} w={5} h={5} />
          </Link>
        </HStack>
        <Text pt={2}> {new Date().getFullYear()} ZeroTrace. All rights reserved</Text>
        <Text fontSize="sm" color="gray.500">
          Developed by{' '}
          <Link
            href="https://fourslash.com"
            isExternal
            color="accent.400"
            _hover={{ color: 'accent.300' }}
          >
            Fourslash
          </Link>
          {' '}co-assisted by AI
        </Text>
      </Container>
    </Box>
  )
}
