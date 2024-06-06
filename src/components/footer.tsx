import * as React from 'react'
import { Box, Divider, Flex, HStack, Icon, Link, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import { useSocials } from '@/hooks/app'
import Image from 'next/image'

export const Footer: React.FC = () => {
  const socials = useSocials()

  return (
    <Box bg={useColorModeValue('gray.50', 'gray.900')} color={useColorModeValue('gray.700', 'gray.200')}>
      <Box py={10}>
        <Flex
          align={'center'}
          _before={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            ml: 8,
          }}
        >
          <Image src="/lis-logo.jpg" width={50} height={50} alt="lis-logo" />
        </Flex>
        <Text pt={6} fontSize={'sm'} textAlign={'center'}>
          © 2024 Lanao Integrated School. All rights reserved
        </Text>
      </Box>
    </Box>
  )
}
