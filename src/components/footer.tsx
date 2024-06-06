import * as React from 'react'
import { Box, Center, Divider, Flex, HStack, Icon, Link, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import { useSocials } from '@/hooks/app'
import Image from 'next/image'
import {
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
} from 'next-share'

export const Footer: React.FC = () => {
  const socials = useSocials()

  return (
    <Box bg={useColorModeValue('gray.50', 'gray.900')} color={useColorModeValue('gray.700', 'gray.200')}>
      <Center>
        <Box>
          <Text pt={6} fontSize={'md'} textAlign={'center'}>
            Share this web app to:
          </Text>
        </Box>
      </Center>
      <Center>
        <Box p={2}>
          <FacebookShareButton
            url={'https://lanao-integrated-school.vercel.app'}
            quote={'You can do online enrollment on the Lanao Integrated School Web App'}
            hashtag={'#LanaoIntegratedSchoolWebApp'}
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>
        </Box>
        <Box>
          <LinkedinShareButton url={'https://lanao-integrated-school.vercel.app'}>
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
        </Box>
      </Center>
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
