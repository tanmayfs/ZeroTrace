import { useState, useEffect } from 'react'
import {
  Container,
  Stack,
  Box,
  Heading,
  Text,
  Button,
  SimpleGrid,
  VStack,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
} from '@chakra-ui/react'
import { keyframes } from '@emotion/react'
import { Link as RouterLink } from 'react-router-dom'
import { FaShieldAlt, FaCode, FaBug, FaCheckCircle, FaExternalLinkAlt, FaLock, FaRocket } from 'react-icons/fa'
import { SiBlockchaindotcom, SiHiveBlockchain } from 'react-icons/si'
import { motion } from 'framer-motion'
import Background3D from '../components/Background3D'
import ParticleBackground from '../components/ParticleBackground'

const MotionBox = motion(Box)

const glowKeyframes = keyframes`
  0% { box-shadow: 0 0 10px var(--chakra-colors-accent-400); }
  50% { box-shadow: 0 0 20px var(--chakra-colors-accent-400); }
  100% { box-shadow: 0 0 10px var(--chakra-colors-accent-400); }
`

const floatKeyframes = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`


interface FeatureProps {
  title: string
  text: string
  icon: any
}

function Feature({ title, text, icon }: FeatureProps) {
  return (
    <MotionBox
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Stack
        spacing={4}
        bg="whiteAlpha.100"
        p={8}
        borderRadius="xl"
        position="relative"
        overflow="hidden"
        _before={{
          content: '""',
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          background: 'radial-gradient(circle, var(--chakra-colors-accent-400) 0%, transparent 70%)',
          opacity: 0.1,
          transform: 'rotate(45deg)',
        }}
      >
        <Box
          w={16}
          h={16}
          bg="whiteAlpha.100"
          borderRadius="xl"
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="relative"
          animation={`${glowKeyframes} 3s infinite`}
        >
          {icon({ size: 32, color: 'var(--chakra-colors-accent-400)' })}
        </Box>
        <Heading size="md" color="white" fontWeight="semibold">
          {title}
        </Heading>
        <Text color="gray.400" fontSize="sm">
          {text}
        </Text>
      </Stack>
    </MotionBox>
  )
}

interface StatCardProps {
  label: string
  number: string
  helpText: string
  icon: any
}

function StatCard({ label, number, helpText, icon }: StatCardProps) {
  return (
    <MotionBox
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Box
        p={6}
        bg="whiteAlpha.100"
        borderRadius="xl"
        position="relative"
        overflow="hidden"
      >
        <Box
          position="absolute"
          top={0}
          right={0}
          p={4}
          color="accent.400"
          opacity={0.3}
        >
          {icon({ size: 40 })}
        </Box>
        <Stat>
          <StatLabel color="gray.300" fontSize="sm">{label}</StatLabel>
          <StatNumber 
            color="white" 
            fontSize="4xl"
            bgGradient="linear(to-r, accent.400, accent.300)"
            bgClip="text"
          >
            {number}
          </StatNumber>
          <StatHelpText color="gray.400">{helpText}</StatHelpText>
        </Stat>
      </Box>
    </MotionBox>
  )
}

export default function Home() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <Box as="main" minH="100vh" w="100%" bg="gray.900" position="relative" overflow="hidden">
      <ParticleBackground />
      {!isMobile && <Background3D />}

      {/* Hero Section */}
      <Container maxW="7xl" position="relative" zIndex={1}>
        <Stack
          align="center"
          spacing={{ base: 8, md: 10 }}
          py={{ base: 28, md: 36 }}
          direction={{ base: 'column', md: 'row' }}>
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
                <Text
                  as="span"
                  position="relative"
                  bgGradient="linear(to-r, accent.400, accent.300)"
                  bgClip="text"
                  _after={{
                    content: '""',
                    width: 'full',
                    height: '30%',
                    position: 'absolute',
                    bottom: 1,
                    left: 0,
                    bg: 'accent.400',
                    zIndex: -1,
                    opacity: 0.3,
                  }}>
                  Smart Contract
                </Text>
                <br />
                <Text 
                  as="span" 
                  color="white"
                  position="relative"
                  _after={{
                    content: '""',
                    width: '100%',
                    height: '30%',
                    position: 'absolute',
                    bottom: 1,
                    left: 0,
                    bg: 'whiteAlpha.300',
                    zIndex: -1,
                  }}>
                  Security Auditing
                </Text>
              </Heading>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Text color="gray.400" fontSize="xl">
                Secure your blockchain future with our innovative smart contract
                auditing services. We combine advanced AI analysis with expert
                manual review to identify vulnerabilities before they become
                threats.
              </Text>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={{ base: 'column', sm: 'row' }}>
                <Button
                  as={RouterLink}
                  to="/contact"
                  size="lg"
                  px={8}
                  bg="accent.400"
                  color="white"
                  _hover={{
                    bg: 'accent.500',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                    _after: {
                      transform: 'translateX(100%)',
                    },
                  }}
                  _active={{
                    transform: 'translateY(0)',
                  }}
                  leftIcon={<FaShieldAlt />}
                  position="relative"
                  overflow="hidden"
                  _after={{
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(45deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
                    transform: 'translateX(-100%)',
                    transition: 'transform 0.3s ease',
                  }}>
                  Request Audit
                </Button>
                <Button
                  as={RouterLink}
                  to="/services"
                  size="lg"
                  px={8}
                  bg="transparent"
                  color="white"
                  border="2px solid"
                  borderColor="accent.400"
                  _hover={{
                    bg: 'whiteAlpha.100',
                    transform: 'translateY(-2px)',
                  }}
                  leftIcon={<FaRocket />}>
                  Learn More
                </Button>
              </Stack>
            </MotionBox>
          </Stack>

          <MotionBox
            flex={1}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            display={{ base: 'none', md: 'block' }}
          >
            <Box
              position="relative"
              height="400px"
              rounded="2xl"
              boxShadow="2xl"
              width="full"
              overflow="hidden"
            >
              <Box
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                animation={`${floatKeyframes} 3s infinite ease-in-out`}
              >
                <SiHiveBlockchain size={200} color="var(--chakra-colors-accent-400)" />
              </Box>
              <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                bg="radial-gradient(circle at center, transparent 0%, gray.900 70%)"
              />
            </Box>
          </MotionBox>
        </Stack>

        {/* Stats Section */}
        <Box py={20}>
          <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10}>
            <StatCard
              label="Audits Completed"
              number="500+"
              helpText="Successful audits across platforms"
              icon={FaShieldAlt}
            />
            <StatCard
              label="Vulnerabilities Found"
              number="1000+"
              helpText="Critical issues identified"
              icon={FaBug}
            />
            <StatCard
              label="Client Satisfaction"
              number="99%"
              helpText="Based on client feedback"
              icon={FaCheckCircle}
            />
            <StatCard
              label="Response Time"
              number="<24h"
              helpText="Average audit start time"
              icon={FaRocket}
            />
          </SimpleGrid>
        </Box>

        {/* Features Section */}
        <Box py={20}>
          <VStack spacing={4} mb={16} textAlign="center">
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Heading 
                color="white"
                position="relative"
                display="inline-block"
                _after={{
                  content: '""',
                  width: '60%',
                  height: '4px',
                  position: 'absolute',
                  bottom: '-10px',
                  left: '20%',
                  bg: 'accent.400',
                  borderRadius: 'full',
                }}>
                Why Choose ZeroTrace?
              </Heading>
            </MotionBox>
            <Text color="gray.400" maxW="2xl">
              Our comprehensive security solutions combine cutting-edge technology
              with expert analysis to deliver unmatched results.
            </Text>
          </VStack>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
            <Feature
              icon={SiBlockchaindotcom}
              title="AI-Powered Analysis"
              text="Advanced machine learning algorithms detect complex vulnerabilities and patterns in real-time."
            />
            <Feature
              icon={FaLock}
              title="Security First"
              text="Comprehensive protection against known and emerging smart contract threats."
            />
            <Feature
              icon={FaCode}
              title="Expert Review"
              text="Thorough manual code review by experienced blockchain security experts."
            />
            <Feature
              icon={FaBug}
              title="Continuous Monitoring"
              text="Ongoing vulnerability detection and real-time threat assessment."
            />
          </SimpleGrid>
        </Box>

        {/* CTA Section */}
        <Box py={20}>
          <MotionBox
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Stack
              direction={{ base: 'column', md: 'row' }}
              spacing={10}
              align="center"
              justify="space-between"
              bg="whiteAlpha.100"
              p={10}
              borderRadius="2xl"
              position="relative"
              overflow="hidden"
              _before={{
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                bg: 'accent.400',
                opacity: 0.1,
                borderRadius: '2xl',
              }}>
              <VStack align="start" spacing={4} maxW="xl">
                <Heading color="white" size="lg">
                  Ready to Secure Your Smart Contracts?
                </Heading>
                <Text color="gray.400">
                  Get in touch with our team to schedule your audit and ensure
                  your project's security. Our experts are ready to help.
                </Text>
              </VStack>
              <Button
                as={RouterLink}
                to="/contact"
                size="lg"
                px={8}
                bg="accent.400"
                color="white"
                _hover={{
                  bg: 'accent.500',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                  _after: {
                    transform: 'translateX(100%)',
                  },
                }}
                rightIcon={<FaExternalLinkAlt />}
                position="relative"
                overflow="hidden"
                _after={{
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(45deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
                  transform: 'translateX(-100%)',
                  transition: 'transform 0.3s ease',
                }}>
                Start Your Audit
              </Button>
            </Stack>
          </MotionBox>
        </Box>
      </Container>
    </Box>
  )
}
