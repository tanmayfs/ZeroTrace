import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Link,
  useDisclosure,
  Button,
  HStack,
  Container,
  Divider,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { Link as RouterLink } from 'react-router-dom'
import { FaShieldAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

const NAV_ITEMS = [
  {
    label: 'Services',
    href: '/services',
  },
  {
    label: 'Audit Process',
    href: '/audit-process',
  },
  {
    label: 'Case Studies',
    href: '/case-studies',
  },
  {
    label: 'Pricing',
    href: '/pricing',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
]

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure()
  
  return (
    <Box 
      position="fixed" 
      w="100%" 
      zIndex={1000} 
      bg="transparent" 
      backdropFilter="blur(10px)"
      borderBottom="1px solid"
      borderColor="whiteAlpha.100"
    >
      <Container maxW="7xl">
        <Flex
          minH={'80px'}
          py={4}
          align={'center'}
          justify="space-between"
        >
          {/* Logo */}
          <Link
            as={RouterLink}
            to="/"
            _hover={{
              textDecoration: 'none',
            }}
          >
            <MotionBox
              display="flex"
              alignItems="center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <HStack spacing={3}>
                <Box position="relative">
                  <Icon 
                    as={FaShieldAlt} 
                    w={10} 
                    h={10} 
                    color="accent.400"
                    filter="drop-shadow(0 0 8px var(--chakra-colors-accent-400))"
                  />
                  <Box
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    width="140%"
                    height="140%"
                    bgGradient="radial(accent.400, transparent 70%)"
                    opacity="0.2"
                    borderRadius="full"
                  />
                </Box>
                <Text
                  fontSize="2xl"
                  fontWeight="bold"
                  letterSpacing="wider"
                  bgGradient="linear(to-r, accent.400, accent.200)"
                  bgClip="text"
                  _hover={{
                    bgGradient: "linear(to-r, accent.300, accent.100)"
                  }}
                >
                  ZeroTrace
                </Text>
              </HStack>
            </MotionBox>
          </Link>

          {/* Desktop Navigation */}
          <HStack
            spacing={8}
            display={{ base: 'none', md: 'flex' }}
            alignItems="center"
          >
            {NAV_ITEMS.map((navItem) => (
              <MotionBox
                key={navItem.label}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  as={RouterLink}
                  to={navItem.href}
                  fontSize="sm"
                  fontWeight="500"
                  color="gray.300"
                  position="relative"
                  _hover={{
                    textDecoration: 'none',
                    color: 'white',
                    _after: {
                      width: '100%',
                    },
                  }}
                  _after={{
                    content: '""',
                    position: 'absolute',
                    bottom: '-4px',
                    left: '0',
                    width: '0%',
                    height: '2px',
                    bgGradient: 'linear(to-r, accent.400, accent.300)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {navItem.label}
                </Link>
              </MotionBox>
            ))}
            <Button
              as={RouterLink}
              to="/contact"
              size="md"
              fontSize="sm"
              px={8}
              bg="transparent"
              color="white"
              borderWidth={1}
              borderColor="accent.400"
              _hover={{
                bg: 'accent.400',
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
              }}
              _active={{
                transform: 'translateY(0)',
              }}
              transition="all 0.3s ease"
            >
              Request Audit
            </Button>
          </HStack>

          {/* Mobile Navigation */}
          <IconButton
            display={{ base: 'flex', md: 'none' }}
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant="ghost"
            color="white"
            aria-label="Toggle Navigation"
            _hover={{
              bg: 'whiteAlpha.100',
            }}
          />
        </Flex>

        {/* Mobile Menu */}
        <Collapse in={isOpen} animateOpacity>
          <Stack
            bg="gray.900"
            p={6}
            spacing={6}
            divider={<Divider borderColor="whiteAlpha.200" />}
            display={{ md: 'none' }}
          >
            {NAV_ITEMS.map((navItem) => (
              <Link
                key={navItem.label}
                as={RouterLink}
                to={navItem.href}
                fontSize="lg"
                fontWeight="medium"
                color="gray.300"
                _hover={{
                  color: 'white',
                  textDecoration: 'none',
                }}
              >
                {navItem.label}
              </Link>
            ))}
            <Button
              as={RouterLink}
              to="/contact"
              w="full"
              size="lg"
              bg="accent.400"
              color="white"
              _hover={{
                bg: 'accent.500',
              }}
            >
              Request Audit
            </Button>
          </Stack>
        </Collapse>
      </Container>
    </Box>
  )
}
