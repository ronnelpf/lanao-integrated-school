import * as React from 'react'
import { Box, Divider, Flex, HStack, Icon, Image, Link, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import { useSocials } from '@/hooks/app'

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
          <Image
            rounded={'xl'}
            alt={'LIS LOGO'}
            src={
              'https://scontent.fceb1-2.fna.fbcdn.net/v/t39.30808-6/337003525_1487142965435916_2176651500174898000_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeH0qFqKNLFK0laZ7wENfU4UyeOYIJ8ShSTJ45ggnxKFJK9BaNpTwIncelk4U-Q6HcnqJy2vhTI4SwsYHhvaF8pN&_nc_ohc=PuM0YODaw5gQ7kNvgGMA7uq&_nc_ht=scontent.fceb1-2.fna&oh=00_AYC3XlaDW6QTSevQ-LgHnjyHt-KdwbFmy9J81JOcgHqJ9g&oe=6665B2C2'
            }
            boxSize="xs"
            objectFit={'cover'}
            height={20}
            width={20}
          />
        </Flex>
        <Text pt={6} fontSize={'sm'} textAlign={'center'}>
          © 2024 Lanao Integrated School. All rights reserved
        </Text>
      </Box>
    </Box>
  )
}
