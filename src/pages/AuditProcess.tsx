import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  useColorModeValue,
  Circle,
  Button,
  Tag,
  TagLabel,
  TagLeftIcon,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
} from '@chakra-ui/react'
import { motion, Variants } from 'framer-motion'
import { 
  FaFileContract, 
  FaMagnifyingGlass, 
  FaBug, 
  FaCode, 
  FaFileLines, 
  FaCircleCheck, 
  FaRocket,
  FaShieldHalved,
  FaChartLine,
  FaUserShield
} from 'react-icons/fa6'
import ParticleBackground from '../components/ParticleBackground'

const MotionBox = motion(Box)
const MotionCircle = motion(Circle)

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

const auditSteps = [
  {
    icon: FaFileContract,
    title: 'Contract Submission',
    description: "Submit your smart contracts and related documentation for initial review. We'll analyze the scope and complexity of your project.",
    details: [
      'Source code submission',
      'Documentation review',
      'Scope definition',
      'Timeline planning'
    ]
  },
  {
    icon: FaMagnifyingGlass,
    title: 'Initial Assessment',
    description: 'Our team performs a preliminary analysis to identify potential risk areas and establish the audit framework.',
    details: [
      'Architecture review',
      'Risk assessment',
      'Testing environment setup',
      'Audit strategy planning'
    ]
  },
  {
    icon: FaBug,
    title: 'Vulnerability Analysis',
    description: 'Comprehensive security assessment combining automated tools and manual review to uncover vulnerabilities.',
    details: [
      'Automated scanning',
      'Manual code review',
      'Security testing',
      'Vulnerability verification'
    ]
  },
  {
    icon: FaCode,
    title: 'Code Review',
    description: 'Detailed examination of code quality, optimization opportunities, and adherence to best practices.',
    details: [
      'Gas optimization',
      'Code quality analysis',
      'Best practices review',
      'Performance testing'
    ]
  },
  {
    icon: FaFileLines,
    title: 'Report Generation',
    description: 'Creation of a detailed audit report with findings, recommendations, and remediation guidance.',
    details: [
      'Vulnerability documentation',
      'Risk classification',
      'Remediation steps',
      'Best practice recommendations'
    ]
  },
  {
    icon: FaCircleCheck,
    title: 'Final Review',
    description: 'Review of implemented fixes and final verification to ensure all identified issues have been properly addressed.',
    details: [
      'Fix verification',
      'Final testing',
      'Report finalization',
      'Certification issuance'
    ]
  }
]

const complementaryContent = [
  {
    stat: { label: 'Average Time', value: '2-3 Days', helpText: 'For initial assessment' },
    tags: ['Documentation', 'Planning', 'Scope Definition']
  },
  {
    stat: { label: 'Success Rate', value: '99.9%', helpText: 'In vulnerability detection' },
    tags: ['Architecture', 'Risk Analysis', 'Testing']
  },
  {
    stat: { label: 'Issues Found', value: '500+', helpText: 'Critical vulnerabilities identified' },
    tags: ['Manual Review', 'Automated Scan', 'Deep Analysis']
  },
  {
    stat: { label: 'Code Coverage', value: '100%', helpText: 'Complete code review' },
    tags: ['Best Practices', 'Optimization', 'Standards']
  },
  {
    stat: { label: 'Report Length', value: '50+ Pages', helpText: 'Detailed documentation' },
    tags: ['Findings', 'Recommendations', 'Guidelines']
  },
  {
    stat: { label: 'Success Rate', value: '100%', helpText: 'In issue resolution' },
    tags: ['Verification', 'Validation', 'Certification']
  }
];

export default function AuditProcess() {
  const cardBg = useColorModeValue('whiteAlpha.100', 'whiteAlpha.100')
  const borderColor = useColorModeValue('whiteAlpha.200', 'whiteAlpha.200')

  return (
    <Box minH="100vh" w="100%" bg="gray.900" position="relative" overflow="hidden">
      <ParticleBackground />
      
      <Container maxW="6xl" position="relative" zIndex={1}>
        <VStack spacing={20} py={20}>
          {/* Header Section */}
          <Box textAlign="center" maxW="3xl" mx="auto">
            <Heading
              as="h1"
              fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
              fontWeight="extrabold"
              mb={4}
              bgGradient="linear(to-r, accent.400, accent.200)"
              bgClip="text"
            >
              Our Audit Process
            </Heading>
            <Text
              fontSize={{ base: 'lg', sm: 'xl' }}
              color="gray.400"
              maxW="2xl"
              mx="auto"
            >
              A comprehensive six-step approach to ensure the security and reliability
              of your smart contracts.
            </Text>
          </Box>

          {/* Steps Timeline */}
          <Box 
            position="relative" 
            w="full" 
            py={8}
            px={{ base: 4, md: 8 }}
            display={{ base: 'block', lg: 'flex' }}
            flexDir="column"
            alignItems="center"
          >
            {/* Vertical Timeline Line */}
            <Box
              position="absolute"
              left={{ base: '20px', md: '50%' }}
              top={0}
              bottom={0}
              w="2px"
              bg="whiteAlpha.200"
              transform={{ base: 'none', md: 'translateX(-50%)' }}
              _after={{
                content: '""',
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: '-1px',
                right: '-1px',
                bgGradient: 'linear(to-b, transparent, accent.400, transparent)',
              }}
            />

            {/* Timeline Steps */}
            <VStack spacing={16} position="relative" w="full" maxW="5xl">
              {auditSteps.map((step, index) => (
                <Box
                  key={step.title}
                  w="full"
                  display="flex"
                  justifyContent={{ base: 'flex-start', md: index % 2 === 0 ? 'flex-start' : 'flex-end' }}
                  pl={{ base: '40px', md: 4 }}
                  pr={{ base: 0, md: 4 }}
                  position="relative"
                >
                  {/* Timeline Dot */}
                  <Box
                    position="absolute"
                    left={{ base: '18px', md: '50%' }}
                    w={4}
                    h={4}
                    bg="accent.400"
                    borderRadius="full"
                    transform={{ 
                      base: 'translateY(50%)',
                      md: 'translate(-50%, 50%)'
                    }}
                    zIndex={2}
                  />

                  {/* Content Box */}
                  <MotionBox
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1
                    }}
                    maxW={{ base: 'full', md: '500px' }}
                    w="full"
                    bg={cardBg}
                    p={{ base: 6, md: 8 }}
                    borderRadius="2xl"
                    border="1px solid"
                    borderColor={borderColor}
                    _hover={{
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4)',
                    }}
                    ml={{ base: 0, md: index % 2 === 0 ? 0 : 'auto' }}
                    mr={{ base: 0, md: index % 2 === 0 ? 'auto' : 0 }}
                  >
                    <HStack spacing={6} align="flex-start">
                      <VStack spacing={2}>
                        <MotionCircle
                          variants={iconVariants}
                          initial="hidden"
                          animate="visible"
                          size="50px"
                          bg="accent.400"
                          color="white"
                          position="relative"
                          _after={{
                            content: '""',
                            position: 'absolute',
                            top: '-4px',
                            left: '-4px',
                            right: '-4px',
                            bottom: '-4px',
                            border: '2px solid',
                            borderColor: 'accent.400',
                            borderRadius: 'full',
                            opacity: 0.3,
                          }}
                        >
                          <Icon as={step.icon} w={6} h={6} />
                        </MotionCircle>
                        <Text
                          color="accent.400"
                          fontWeight="bold"
                          fontSize="md"
                          fontFamily="mono"
                        >
                          {(index + 1).toString().padStart(2, '0')}
                        </Text>
                      </VStack>

                      <VStack align="flex-start" spacing={4}>
                        <Heading
                          as="h3"
                          fontSize="xl"
                          color="white"
                          bgGradient="linear(to-r, white, whiteAlpha.700)"
                          bgClip="text"
                        >
                          {step.title}
                        </Heading>
                        <Text color="gray.400" fontSize="md">
                          {step.description}
                        </Text>
                        <VStack align="flex-start" spacing={2}>
                          {step.details.map((detail, i) => (
                            <HStack key={i} spacing={3}>
                              <Box
                                w="4px"
                                h="4px"
                                bg="accent.400"
                                borderRadius="full"
                              />
                              <Text color="gray.400" fontSize="sm">
                                {detail}
                              </Text>
                            </HStack>
                          ))}
                        </VStack>
                      </VStack>
                    </HStack>
                  </MotionBox>

                  {/* Complementary Content */}
                  <Box
                    position="absolute"
                    top="50%"
                    transform="translateY(-50%)"
                    right={index % 2 === 0 ? "0" : "auto"}
                    left={index % 2 === 0 ? "auto" : "0"}
                    width="400px"
                    display={{ base: 'none', xl: 'block' }}
                  >
                    <MotionBox
                      variants={cardVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{
                        duration: 0.5,
                        delay: (index * 0.1) + 0.2
                      }}
                      bg={cardBg}
                      p={6}
                      borderRadius="xl"
                      border="1px solid"
                      borderColor={borderColor}
                      opacity={0.9}
                    >
                      <Stat mb={4}>
                        <StatLabel color="gray.400">{complementaryContent[index].stat.label}</StatLabel>
                        <StatNumber 
                          fontSize="3xl" 
                          bgGradient="linear(to-r, accent.400, accent.200)"
                          bgClip="text"
                        >
                          {complementaryContent[index].stat.value}
                        </StatNumber>
                        <StatHelpText color="gray.500">{complementaryContent[index].stat.helpText}</StatHelpText>
                      </Stat>
                      <HStack spacing={2} flexWrap="wrap" gap={2}>
                        {complementaryContent[index].tags.map((tag, i) => (
                          <Tag
                            key={i}
                            size="md"
                            variant="subtle"
                            bg="whiteAlpha.200"
                            color="accent.200"
                          >
                            <TagLeftIcon as={[FaShieldHalved, FaChartLine, FaUserShield][i % 3]} />
                            <TagLabel>{tag}</TagLabel>
                          </Tag>
                        ))}
                      </HStack>
                    </MotionBox>
                  </Box>
                </Box>
              ))}
            </VStack>
          </Box>

          {/* CTA Button */}
          <Box pt={8}>
            <Button
              as={motion.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              size="lg"
              height="60px"
              px={12}
              fontSize="xl"
              colorScheme="accent"
              bg="accent.400"
              _hover={{
                bg: 'accent.500',
              }}
              leftIcon={<Icon as={FaRocket} />}
            >
              Start Your Audit
            </Button>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}
