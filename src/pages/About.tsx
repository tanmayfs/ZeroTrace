import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Icon,
  Avatar,
  Button,
  useColorModeValue,
  Link
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'
import { FaShieldHalved, FaUsers, FaCode, FaChartLine } from 'react-icons/fa6'
import ParticleBackground from '../components/ParticleBackground'

const MotionBox = motion(Box)

const stats = [
  { number: '100+', label: 'Audits Completed', icon: FaShieldHalved },
  { number: '50M+', label: 'Assets Secured', icon: FaChartLine },
  { number: '20+', label: 'Team Members', icon: FaUsers },
  { number: '0', label: 'Security Breaches', icon: FaCode },
]

const teamMembers = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Chief Security Officer',
    bio: 'Ph.D. in Cryptography with 15+ years of blockchain security experience. Led security audits for major DeFi protocols.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=250&h=250&fit=crop',
    socials: {
      linkedin: '#',
      github: '#',
      twitter: '#'
    }
  },
  {
    name: 'Alex Rodriguez',
    role: 'Lead Smart Contract Auditor',
    bio: 'Former security researcher at ConsenSys. Specialized in DeFi protocol security and zero-knowledge proofs.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=250&h=250&fit=crop',
    socials: {
      linkedin: '#',
      github: '#',
      twitter: '#'
    }
  },
  {
    name: 'Dr. James Wilson',
    role: 'Blockchain Security Architect',
    bio: 'Security architect with expertise in Layer 1 protocols. Previously secured major NFT and gaming protocols.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=250&h=250&fit=crop',
    socials: {
      linkedin: '#',
      github: '#',
      twitter: '#'
    }
  },
  {
    name: 'Emily Zhang',
    role: 'Senior Security Engineer',
    bio: 'Specialized in automated vulnerability detection and formal verification of smart contracts.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=250&h=250&fit=crop',
    socials: {
      linkedin: '#',
      github: '#',
      twitter: '#'
    }
  }
]

export default function About() {
  const cardBg = useColorModeValue('whiteAlpha.100', 'whiteAlpha.100')
  const borderColor = useColorModeValue('whiteAlpha.200', 'whiteAlpha.200')

  return (
    <Box minH="100vh" w="100%" bg="gray.900" position="relative" overflow="hidden">
      <ParticleBackground />
      
      <Container maxW="7xl" position="relative" zIndex={1}>
        <VStack spacing={20} py={16}>
          {/* Hero Section */}
          <Box textAlign="center">
            <Heading
              as="h1"
              fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
              fontWeight="extrabold"
              mb={4}
              bgGradient="linear(to-r, accent.400, accent.200)"
              bgClip="text"
            >
              About ZeroTrace
            </Heading>
            <Text
              fontSize={{ base: 'lg', sm: 'xl' }}
              color="gray.400"
              maxW="2xl"
              mx="auto"
            >
              Leading the way in blockchain security with cutting-edge audit solutions
              and a team of world-class security experts.
            </Text>
          </Box>

          {/* Stats Section */}
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 4 }}
            spacing={{ base: 8, lg: 12 }}
            w="full"
          >
            {stats.map((stat, index) => (
              <MotionBox
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                bg={cardBg}
                p={8}
                borderRadius="xl"
                textAlign="center"
                border="1px solid"
                borderColor={borderColor}
                position="relative"
                overflow="hidden"
                _after={{
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'radial-gradient(circle at center, accent.400 0%, transparent 70%)',
                  opacity: 0.1,
                }}
              >
                <VStack spacing={4}>
                  <Icon as={stat.icon} w={8} h={8} color="accent.400" />
                  <Text
                    fontSize="4xl"
                    fontWeight="bold"
                    color="white"
                  >
                    {stat.number}
                  </Text>
                  <Text color="gray.400" fontSize="lg">
                    {stat.label}
                  </Text>
                </VStack>
              </MotionBox>
            ))}
          </SimpleGrid>

          {/* Mission Section */}
          <Box textAlign="center" maxW="3xl" mx="auto">
            <Heading
              as="h2"
              fontSize={{ base: '2xl', sm: '3xl' }}
              mb={6}
              color="white"
            >
              Our Mission
            </Heading>
            <Text fontSize="lg" color="gray.400" mb={8}>
              At ZeroTrace, we're committed to securing the future of blockchain technology.
              Our mission is to provide comprehensive security solutions that enable
              innovation while ensuring the highest level of protection for digital assets.
            </Text>
          </Box>

          {/* Team Section */}
          <VStack spacing={12} w="full">
            <Heading
              as="h2"
              fontSize={{ base: '2xl', sm: '3xl' }}
              color="white"
              textAlign="center"
            >
              Meet Our Team
            </Heading>
            <SimpleGrid
              columns={{ base: 1, md: 2 }}
              spacing={8}
              w="full"
            >
              {teamMembers.map((member, index) => (
                <MotionBox
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut",
                    transform: {
                      duration: 0.3,
                      ease: "easeOut"
                    }
                  }}
                  bg={cardBg}
                  p={6}
                  borderRadius="xl"
                  border="1px solid"
                  borderColor={borderColor}
                  _hover={{
                    transform: 'translateY(-4px)',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  <HStack spacing={6} align="flex-start">
                    <Avatar
                      size="xl"
                      src={member.image}
                      name={member.name}
                    />
                    <VStack align="flex-start" spacing={3}>
                      <Box>
                        <Heading
                          as="h3"
                          fontSize="xl"
                          color="white"
                          mb={1}
                        >
                          {member.name}
                        </Heading>
                        <Text
                          color="accent.400"
                          fontSize="sm"
                          fontWeight="medium"
                        >
                          {member.role}
                        </Text>
                      </Box>
                      <Text color="gray.400" fontSize="sm">
                        {member.bio}
                      </Text>
                      <HStack spacing={4}>
                        <Link href={member.socials.linkedin} isExternal>
                          <Icon
                            as={FaLinkedin}
                            w={5}
                            h={5}
                            color="gray.400"
                            _hover={{ color: 'accent.400' }}
                          />
                        </Link>
                        <Link href={member.socials.github} isExternal>
                          <Icon
                            as={FaGithub}
                            w={5}
                            h={5}
                            color="gray.400"
                            _hover={{ color: 'accent.400' }}
                          />
                        </Link>
                        <Link href={member.socials.twitter} isExternal>
                          <Icon
                            as={FaTwitter}
                            w={5}
                            h={5}
                            color="gray.400"
                            _hover={{ color: 'accent.400' }}
                          />
                        </Link>
                      </HStack>
                    </VStack>
                  </HStack>
                </MotionBox>
              ))}
            </SimpleGrid>
          </VStack>

          {/* CTA Section */}
          <Box textAlign="center" mt={8}>
            <Button
              as={motion.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              size="lg"
              colorScheme="accent"
              px={8}
              fontSize="md"
              height="14"
              bg="accent.400"
              _hover={{
                bg: 'accent.500',
              }}
            >
              Join Our Team
            </Button>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}
