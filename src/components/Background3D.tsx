import { Box } from '@chakra-ui/react'

export default function Background3D() {
  return (
    <Box
      position="absolute"
      top={0}
      right={0}
      width="50%"
      height="100%"
      opacity={0.2}
      zIndex={0}
      bgGradient="linear(to-r, transparent, accent.400)"
    />
  )
}
