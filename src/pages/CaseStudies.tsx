import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Icon,
  useColorModeValue,
  Tag,
  TagLabel,
  Button,
  Avatar,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaShieldHalved, FaLock, FaQuoteLeft } from 'react-icons/fa6'
import ParticleBackground from '../components/ParticleBackground'

const MotionBox = motion(Box)

const caseStudies = [
  {
    title: 'DeFi Protocol Security Audit',
    description: 'Critical vulnerability detection and prevention in a major DeFi lending protocol managing over $500M in TVL.',
    impact: 'Prevented potential loss of $50M+ in user funds',
    category: 'DeFi',
    tags: ['Smart Contracts', 'Lending Protocol', 'High Impact'],
    stats: {
      vulnerabilities: '12',
      criticalIssues: '3',
      savingsInUSD: '$50M+'
    }
  },
  {
    title: 'NFT Marketplace Protection',
    description: 'Comprehensive security assessment of a high-volume NFT marketplace, focusing on transaction security and asset protection.',
    impact: 'Secured daily transactions worth $2M+',
    category: 'NFT',
    tags: ['NFT', 'Marketplace', 'Asset Security'],
    stats: {
      vulnerabilities: '8',
      criticalIssues: '2',
      savingsInUSD: '$10M+'
    }
  },
  {
    title: 'Cross-Chain Bridge Audit',
    description: 'In-depth security analysis of a cross-chain bridge protocol, identifying and fixing critical vulnerabilities before launch.',
    impact: 'Protected cross-chain transactions',
    category: 'Bridge',
    tags: ['Cross-Chain', 'Bridge Protocol', 'Critical Infrastructure'],
    stats: {
      vulnerabilities: '15',
      criticalIssues: '4',
      savingsInUSD: '$100M+'
    }
  },
  {
    title: 'GameFi Protocol Security',
    description: 'Security assessment of a blockchain gaming platform, focusing on smart contract security and in-game economy protection.',
    impact: 'Secured gaming assets worth $20M+',
    category: 'GameFi',
    tags: ['Gaming', 'Asset Security', 'Economy'],
    stats: {
      vulnerabilities: '10',
      criticalIssues: '2',
      savingsInUSD: '$20M+'
    }
  }
]

const testimonials = [
  {
    name: "Alex Thompson",
    role: "CTO at DeFiSecure",
    image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=100",
    text: "ZeroTrace's audit was thorough and professional. They identified critical vulnerabilities that could have cost us millions.",
  },
  {
    name: "Sarah Chen",
    role: "Lead Developer at NFTVault",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100",
    text: "Their expertise in smart contract security is unmatched. The audit process was smooth and their recommendations were invaluable.",
  }
];

export default function CaseStudies() {
  const cardBg = useColorModeValue('whiteAlpha.100', 'whiteAlpha.100')
  const tagBg = useColorModeValue('whiteAlpha.200', 'whiteAlpha.200')

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
              Case Studies
            </Heading>
            <Text
              fontSize={{ base: 'lg', sm: 'xl' }}
              color="gray.400"
              maxW="2xl"
              mx="auto"
            >
              Explore our successful security audits and learn how we've helped protect
              billions in digital assets across various blockchain projects.
            </Text>
          </Box>

          {/* Case Studies Grid */}
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing={8}
            w="full"
          >
            {caseStudies.map((study, index) => (
              <MotionBox
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                bg={cardBg}
                p={8}
                borderRadius="xl"
                border="1px solid"
                borderColor="whiteAlpha.200"
                _hover={{
                  transform: 'translateY(-4px)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                }}
                style={{ transition: 'all 0.3s ease' }}
              >
                <VStack align="flex-start" spacing={6}>
                  <HStack spacing={4}>
                    {study.tags.map((tag) => (
                      <Tag
                        key={tag}
                        size="md"
                        bg={tagBg}
                        color="accent.400"
                      >
                        <TagLabel>{tag}</TagLabel>
                      </Tag>
                    ))}
                  </HStack>

                  <Heading size="lg" color="white">
                    {study.title}
                  </Heading>

                  <Text color="gray.400" fontSize="md">
                    {study.description}
                  </Text>

                  <SimpleGrid columns={3} spacing={4} w="full">
                    <Box>
                      <Text color="gray.500" fontSize="sm">
                        Vulnerabilities Found
                      </Text>
                      <Text
                        fontSize="2xl"
                        fontWeight="bold"
                        color="accent.400"
                      >
                        {study.stats.vulnerabilities}
                      </Text>
                    </Box>
                    <Box>
                      <Text color="gray.500" fontSize="sm">
                        Critical Issues
                      </Text>
                      <Text fontSize="2xl" fontWeight="bold" color="red.400">
                        {study.stats.criticalIssues}
                      </Text>
                    </Box>
                    <Box>
                      <Text color="gray.500" fontSize="sm">
                        Value Protected
                      </Text>
                      <Text fontSize="2xl" fontWeight="bold" color="green.400">
                        {study.stats.savingsInUSD}
                      </Text>
                    </Box>
                  </SimpleGrid>

                  <HStack
                    spacing={2}
                    color="accent.400"
                    cursor="pointer"
                    _hover={{ color: 'accent.300' }}
                    style={{ transition: 'all 0.3s ease' }}
                  >
                    <Text fontWeight="medium">Read Full Case Study</Text>
                    <Icon as={FaLock} w={4} h={4} />
                  </HStack>
                </VStack>
              </MotionBox>
            ))}
          </SimpleGrid>

          {/* Testimonials Section */}
          <Box w="full" py={16}>
            <Heading
              textAlign="center"
              size="xl"
              mb={12}
              bgGradient="linear(to-r, accent.400, accent.200)"
              bgClip="text"
            >
              Client Testimonials
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
              {testimonials.map((testimonial, index) => (
                <MotionBox
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  bg={cardBg}
                  p={8}
                  borderRadius="xl"
                  border="1px solid"
                  borderColor="whiteAlpha.200"
                >
                  <VStack align="start" spacing={6}>
                    <Icon as={FaQuoteLeft} w={8} h={8} color="accent.400" opacity={0.5} />
                    <Text color="gray.300" fontSize="lg" fontStyle="italic">
                      "{testimonial.text}"
                    </Text>
                    <HStack spacing={4}>
                      <Avatar size="md" src={testimonial.image} />
                      <Box>
                        <Text color="white" fontWeight="bold">{testimonial.name}</Text>
                        <Text color="gray.400" fontSize="sm">{testimonial.role}</Text>
                      </Box>
                    </HStack>
                  </VStack>
                </MotionBox>
              ))}
            </SimpleGrid>
          </Box>

          {/* CTA Section */}
          <Box textAlign="center" mt={8}>
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
              leftIcon={<Icon as={FaShieldHalved} />}
            >
              Start Your Security Audit
            </Button>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}
