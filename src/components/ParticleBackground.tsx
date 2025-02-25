import { Box } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'

const floatAnimation = keyframes`
  0% { transform: translateY(0) }
  50% { transform: translateY(-20px) }
  100% { transform: translateY(0) }
`

export default function ParticleBackground() {
  return (
    <Box
      position="absolute"
      top={0}
      left={0}
      right={0}
      bottom={0}
      zIndex={0}
      overflow="hidden">
      {Array.from({ length: 20 }).map((_, i) => (
        <Box
          key={i}
          position="absolute"
          width="4px"
          height="4px"
          borderRadius="full"
          bg="accent.400"
          opacity={0.3}
          left={`${Math.random() * 100}%`}
          top={`${Math.random() * 100}%`}
          animation={`${floatAnimation} ${4 + Math.random() * 2}s infinite`}
        />
      ))}
    </Box>
  )
}
