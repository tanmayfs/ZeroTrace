import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Icon,
  Button,
  List,
  ListItem,
  ListIcon,
  useColorModeValue,
  Badge,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaCheck, FaShieldHalved } from 'react-icons/fa6'
import ParticleBackground from '../components/ParticleBackground'

const MotionBox = motion(Box)

const plans = [
  {
    name: 'Basic',
    price: '999',
    description: 'Essential smart contract audit for small to medium-sized projects',
    features: [
      'Basic smart contract audit',
      'Automated vulnerability scanning',
      'Basic security report',
      'Email support',
      'Post-audit consultation',
      '14-day free trial',
    ],
    highlighted: false,
    cta: 'Start Trial',
  },
  {
    name: 'Professional',
    price: '2499',
    description: 'Comprehensive security audit with advanced analysis and support',
    features: [
      'Advanced smart contract audit',
      'Manual + Automated scanning',
      'Detailed security report',
      'Priority support',
      'Post-audit consultation',
      'Code optimization review',
      'Security best practices guide',
      'Continuous monitoring',
    ],
    highlighted: true,
    cta: 'Get Started',
    badge: 'Most Popular',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Full-scale security solutions for large-scale blockchain projects',
    features: [
      'Custom audit solutions',
      'Comprehensive security review',
      '24/7 dedicated support',
      'Custom integration options',
      'Advanced threat modeling',
      'Continuous monitoring',
      'Emergency response team',
      'Custom security workshops',
    ],
    highlighted: false,
    cta: 'Contact Us',
  },
]

export default function Pricing() {
  const cardBg = useColorModeValue('whiteAlpha.100', 'whiteAlpha.100')
  const highlightedCardBg = useColorModeValue('whiteAlpha.200', 'whiteAlpha.200')
  const borderColor = useColorModeValue('whiteAlpha.200', 'whiteAlpha.200')

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
              Transparent Pricing
            </Heading>
            <Text
              fontSize={{ base: 'lg', sm: 'xl' }}
              color="gray.400"
              maxW="2xl"
              mx="auto"
            >
              Choose the perfect security audit package for your blockchain project.
              All plans include our core security features.
            </Text>
          </Box>

          {/* Pricing Grid */}
          <SimpleGrid
            columns={{ base: 1, lg: 3 }}
            spacing={8}
            w="full"
            py={8}
          >
            {plans.map((plan, index) => (
              <MotionBox
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                bg={plan.highlighted ? highlightedCardBg : cardBg}
                p={8}
                borderRadius="xl"
                border="1px solid"
                borderColor={borderColor}
                position="relative"
                _hover={{
                  transform: 'translateY(-4px)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                }}
                style={{ transition: 'all 0.3s ease' }}
              >
                {plan.badge && (
                  <Badge
                    colorScheme="accent"
                    position="absolute"
                    top={4}
                    right={4}
                    px={3}
                    py={1}
                    borderRadius="full"
                    fontSize="sm"
                  >
                    {plan.badge}
                  </Badge>
                )}
                
                <VStack align="flex-start" spacing={6}>
                  <Box>
                    <Text
                      color="accent.400"
                      fontSize="xl"
                      fontWeight="semibold"
                      mb={2}
                    >
                      {plan.name}
                    </Text>
                    <HStack align="flex-start" spacing={1}>
                      <Text fontSize="sm" color="gray.400" mt={1}>
                        $
                      </Text>
                      <Text
                        fontSize="5xl"
                        fontWeight="bold"
                        color="white"
                        lineHeight="1"
                      >
                        {plan.price}
                      </Text>
                      {plan.price !== 'Custom' && (
                        <Text fontSize="sm" color="gray.400" mt={4}>
                          /audit
                        </Text>
                      )}
                    </HStack>
                  </Box>

                  <Text color="gray.400">
                    {plan.description}
                  </Text>

                  <List spacing={3} flex="1">
                    {plan.features.map((feature) => (
                      <ListItem
                        key={feature}
                        color="gray.400"
                        display="flex"
                        alignItems="center"
                      >
                        <ListIcon
                          as={FaCheck}
                          color="accent.400"
                          mr={2}
                        />
                        {feature}
                      </ListItem>
                    ))}
                  </List>

                  <Button
                    as={motion.button}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    size="lg"
                    w="full"
                    colorScheme="accent"
                    bg={plan.highlighted ? 'accent.400' : 'transparent'}
                    border="1px solid"
                    borderColor={plan.highlighted ? 'accent.400' : 'accent.400'}
                    color={plan.highlighted ? 'white' : 'accent.400'}
                    _hover={{
                      bg: plan.highlighted ? 'accent.500' : 'accent.400',
                      color: 'white',
                    }}
                    leftIcon={<Icon as={FaShieldHalved} />}
                  >
                    {plan.cta}
                  </Button>
                </VStack>
              </MotionBox>
            ))}
          </SimpleGrid>

          {/* FAQ Note */}
          <Box textAlign="center" maxW="2xl">
            <Text color="gray.400">
              Need a custom solution? Contact our team for enterprise-grade security
              audits tailored to your specific requirements.
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}
