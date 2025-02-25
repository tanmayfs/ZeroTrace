import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Icon,
  useColorModeValue,
  Link,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import ParticleBackground from '../components/ParticleBackground'

const MotionBox = motion(Box)

const contactInfo = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'contact@zerotrace.io',
    link: 'mailto:contact@zerotrace.io'
  },
  {
    icon: FaPhone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    link: 'tel:+15551234567'
  },
  {
    icon: FaMapMarkerAlt,
    label: 'Location',
    value: 'San Francisco, CA',
    link: null
  }
]

const socialLinks = [
  {
    icon: FaGithub,
    label: 'GitHub',
    link: 'https://github.com/zerotrace'
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    link: 'https://linkedin.com/company/zerotrace'
  },
  {
    icon: FaTwitter,
    label: 'Twitter',
    link: 'https://twitter.com/zerotrace'
  }
]

export default function Contact() {
  const cardBg = useColorModeValue('whiteAlpha.100', 'whiteAlpha.100')
  const inputBg = useColorModeValue('whiteAlpha.200', 'whiteAlpha.200')
  const borderColor = useColorModeValue('whiteAlpha.300', 'whiteAlpha.300')

  return (
    <Box minH="100vh" w="100%" bg="gray.900" position="relative" overflow="hidden">
      <ParticleBackground />
      
      <Container maxW="7xl" position="relative" zIndex={1}>
        <VStack spacing={16} py={16}>
          {/* Header Section */}
          <Box textAlign="center">
            <Heading
              as="h1"
              fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
              fontWeight="extrabold"
              mb={4}
              bgGradient="linear(to-r, accent.400, accent.200)"
              bgClip="text"
            >
              Get in Touch
            </Heading>
            <Text
              fontSize={{ base: 'lg', sm: 'xl' }}
              color="gray.400"
              maxW="2xl"
              mx="auto"
            >
              Have questions about our security audit services? We're here to help.
              Reach out to our team for personalized assistance.
            </Text>
          </Box>

          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing={8}
            w="full"
          >
            {/* Contact Form */}
            <MotionBox
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              bg={cardBg}
              p={8}
              borderRadius="xl"
              border="1px solid"
              borderColor={borderColor}
            >
              <VStack spacing={6}>
                <Heading
                  as="h2"
                  fontSize="2xl"
                  color="white"
                  mb={2}
                >
                  Send us a Message
                </Heading>
                
                <FormControl isRequired>
                  <FormLabel color="gray.400">Name</FormLabel>
                  <Input
                    bg={inputBg}
                    border="none"
                    _focus={{
                      borderColor: 'accent.400',
                      boxShadow: '0 0 0 1px var(--chakra-colors-accent-400)',
                    }}
                    placeholder="Your name"
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel color="gray.400">Email</FormLabel>
                  <Input
                    bg={inputBg}
                    border="none"
                    _focus={{
                      borderColor: 'accent.400',
                      boxShadow: '0 0 0 1px var(--chakra-colors-accent-400)',
                    }}
                    placeholder="your@email.com"
                    type="email"
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel color="gray.400">Subject</FormLabel>
                  <Input
                    bg={inputBg}
                    border="none"
                    _focus={{
                      borderColor: 'accent.400',
                      boxShadow: '0 0 0 1px var(--chakra-colors-accent-400)',
                    }}
                    placeholder="How can we help?"
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel color="gray.400">Message</FormLabel>
                  <Textarea
                    bg={inputBg}
                    border="none"
                    _focus={{
                      borderColor: 'accent.400',
                      boxShadow: '0 0 0 1px var(--chakra-colors-accent-400)',
                    }}
                    placeholder="Your message..."
                    rows={6}
                  />
                </FormControl>

                <Button
                  as={motion.button}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  size="lg"
                  w="full"
                  colorScheme="accent"
                  bg="accent.400"
                  _hover={{
                    bg: 'accent.500',
                  }}
                >
                  Send Message
                </Button>
              </VStack>
            </MotionBox>

            {/* Contact Information */}
            <MotionBox
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <VStack spacing={8} align="stretch">
                {/* Contact Details */}
                <Box
                  bg={cardBg}
                  p={8}
                  borderRadius="xl"
                  border="1px solid"
                  borderColor={borderColor}
                >
                  <VStack spacing={6} align="stretch">
                    <Heading
                      as="h2"
                      fontSize="2xl"
                      color="white"
                      mb={2}
                    >
                      Contact Information
                    </Heading>
                    
                    {contactInfo.map((info) => (
                      <HStack key={info.label} spacing={4}>
                        <Icon
                          as={info.icon}
                          w={5}
                          h={5}
                          color="accent.400"
                        />
                        <Box>
                          <Text color="gray.400" fontSize="sm">
                            {info.label}
                          </Text>
                          {info.link ? (
                            <Link
                              href={info.link}
                              color="white"
                              _hover={{ color: 'accent.400' }}
                            >
                              {info.value}
                            </Link>
                          ) : (
                            <Text color="white">
                              {info.value}
                            </Text>
                          )}
                        </Box>
                      </HStack>
                    ))}
                  </VStack>
                </Box>

                {/* Social Links */}
                <Box
                  bg={cardBg}
                  p={8}
                  borderRadius="xl"
                  border="1px solid"
                  borderColor={borderColor}
                >
                  <VStack spacing={6} align="stretch">
                    <Heading
                      as="h2"
                      fontSize="2xl"
                      color="white"
                      mb={2}
                    >
                      Follow Us
                    </Heading>
                    
                    <SimpleGrid columns={3} spacing={4}>
                      {socialLinks.map((social) => (
                        <Link
                          key={social.label}
                          href={social.link}
                          isExternal
                        >
                          <VStack
                            bg={inputBg}
                            p={4}
                            borderRadius="lg"
                            spacing={2}
                            _hover={{
                              bg: 'whiteAlpha.300',
                              transform: 'translateY(-2px)',
                            }}
                            transition="all 0.3s ease"
                          >
                            <Icon
                              as={social.icon}
                              w={6}
                              h={6}
                              color="accent.400"
                            />
                            <Text
                              color="gray.400"
                              fontSize="sm"
                            >
                              {social.label}
                            </Text>
                          </VStack>
                        </Link>
                      ))}
                    </SimpleGrid>
                  </VStack>
                </Box>
              </VStack>
            </MotionBox>
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
}
