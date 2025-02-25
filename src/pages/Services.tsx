import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Icon,
  VStack,
  Button,
  useColorModeValue,
  Circle,
  HStack,
} from '@chakra-ui/react'
import { motion, Variants } from 'framer-motion'
import { FaShieldAlt, FaSearch, FaCode, FaBug, FaLock, FaRocket } from 'react-icons/fa'
import ParticleBackground from '../components/ParticleBackground'

const MotionBox = motion(Box)

const services = [
  {
    icon: FaShieldAlt,
    title: 'Smart Contract Audit',
    description: 'Comprehensive security assessment of your smart contracts to identify vulnerabilities and ensure robust protection.',
    features: [
      'Manual code review by security experts',
      'Automated vulnerability scanning',
      'Gas optimization analysis',
      'Best practices review'
    ]
  },
  {
    icon: FaSearch,
    title: 'Penetration Testing',
    description: 'In-depth testing of your blockchain applications to uncover potential security weaknesses and attack vectors.',
    features: [
      'DApp security assessment',
      'Frontend vulnerability testing',
      'Backend infrastructure review',
      'API security testing'
    ]
  },
  {
    icon: FaCode,
    title: 'Architecture Review',
    description: 'Expert evaluation of your blockchain architecture to ensure scalability, security, and optimal performance.',
    features: [
      'System design analysis',
      'Scalability assessment',
      'Integration security review',
      'Performance optimization'
    ]
  },
  {
    icon: FaBug,
    title: 'Incident Response',
    description: 'Rapid response and resolution for security incidents, including vulnerability assessment and mitigation strategies.',
    features: [
      '24/7 emergency support',
      'Vulnerability patching',
      'Post-incident analysis',
      'Security hardening'
    ]
  },
  {
    icon: FaLock,
    title: 'Security Consulting',
    description: 'Expert guidance on blockchain security best practices, compliance, and risk management strategies.',
    features: [
      'Security strategy development',
      'Compliance assessment',
      'Risk management planning',
      'Team security training'
    ]
  },
  {
    icon: FaRocket,
    title: 'Launch Preparation',
    description: 'Comprehensive pre-launch security assessment to ensure your blockchain project is ready for deployment.',
    features: [
      'Pre-launch security audit',
      'Deployment strategy review',
      'Emergency response planning',
      'Post-launch monitoring'
    ]
  }
]

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const iconVariants: Variants = {
  hidden: { scale: 0 },
  visible: { 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  }
}

export default function Services() {
  const cardBg = useColorModeValue('whiteAlpha.100', 'whiteAlpha.100')
  const borderColor = useColorModeValue('whiteAlpha.200', 'whiteAlpha.200')

  return (
    <Box minH="100vh" w="100%" bg="gray.900" position="relative" overflow="hidden">
      <ParticleBackground />
      
      <Container maxW="7xl" position="relative" zIndex={1}>
        <VStack spacing={12} py={16}>
          {/* Header Section */}
          <Box textAlign="center" mb={8}>
            <Heading
              as="h1"
              fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
              fontWeight="extrabold"
              mb={4}
              bgGradient="linear(to-r, accent.400, accent.200)"
              bgClip="text"
            >
              Our Security Services
            </Heading>
            <Text
              fontSize={{ base: 'lg', sm: 'xl' }}
              color="gray.400"
              maxW="2xl"
              mx="auto"
            >
              Comprehensive blockchain security solutions to protect your digital assets
              and smart contracts from vulnerabilities and threats.
            </Text>
          </Box>

          {/* Services Grid */}
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            spacing={8}
            w="full"
          >
            {services.map((service, index) => (
              <MotionBox
                key={service.title}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  duration: 0.5,
                  delay: index * 0.1
                }}
                bg={cardBg}
                p={8}
                borderRadius="xl"
                border="1px solid"
                borderColor={borderColor}
                _hover={{
                  transform: 'translateY(-4px)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                }}
              >
                <HStack spacing={6} align="flex-start">
                  <Circle
                    as={motion.div}
                    variants={iconVariants}
                    initial="hidden"
                    animate="visible"
                    size="50px"
                    bg="accent.400"
                    color="white"
                  >
                    <Icon as={service.icon} w={6} h={6} />
                  </Circle>
                  <VStack align="flex-start" spacing={4}>
                    <Heading as="h3" fontSize="xl" color="white">
                      {service.title}
                    </Heading>
                    <Text color="gray.400" fontSize="md">
                      {service.description}
                    </Text>
                    <VStack align="flex-start" spacing={2} mt={2}>
                      {service.features.map((feature) => (
                        <Text
                          key={feature}
                          color="gray.400"
                          fontSize="sm"
                          display="flex"
                          alignItems="center"
                        >
                          <Box
                            w={1}
                            h={1}
                            bg="accent.400"
                            borderRadius="full"
                            mr={2}
                          />
                          {feature}
                        </Text>
                      ))}
                    </VStack>
                  </VStack>
                </HStack>
              </MotionBox>
            ))}
          </SimpleGrid>

          {/* CTA Section */}
          <Box textAlign="center" mt={16}>
            <Button
              as={motion.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
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
              Get Started with Security Audit
            </Button>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}
