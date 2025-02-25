import { Box, Link, Text, useColorModeValue } from '@chakra-ui/react'

export default function TickerTape() {
  const bg = useColorModeValue('accent.400', 'accent.400')

  return (
    <Box
      w="100%"
      bg={bg}
      color="gray.900"
      py={1.5}
      textAlign="center"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={2000}
      fontFamily="heading"
      fontSize="sm"
      fontWeight="medium"
    >
      <Text>
        📢 This is a sample website. To get such websites developed faster and cheaper, please contact us on{' '}
        <Link
          href="https://fourslash.com"
          target="_blank"
          rel="noopener noreferrer"
          color="gray.900"
          fontWeight="bold"
          _hover={{ color: 'gray.700' }}
        >
          Fourslash
        </Link>
        {' '}✉️
      </Text>
    </Box>
  )
}
