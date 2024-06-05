import * as React from 'react'
import Head from 'next/head'
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
  Image,
  Center,
} from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'
import { NextSeo } from 'next-seo'

import siteConfig from '~/site-config'

import type { NextPage } from 'next'

const HomePage: NextPage = () => {
  return (
    <>
      <NextSeo title={siteConfig.title} titleTemplate="%s" />
      {/* <Stack alignItems="center" px={8} spacing={4} textAlign="center" w="full">
        <Heading size="2xl">{siteConfig.title}</Heading>
        <Heading fontWeight="normal" pb={4} size="md">
          {siteConfig.description}
        </Heading>

        <Wrap justify="center" spacing={4}>
          <WrapItem>
            <Button
              as="a"
              bgColor={siteConfig.themeColor}
              target="_blank"
              href={siteConfig.socials.GitHub}
              leftIcon={<Icon as={FaGithub} />}
            >
              View source on GitHub.....
            </Button>
          </WrapItem>
        </Wrap>
      </Stack> */}
      <Container maxW={'3xl'}>
        <Stack as={Box} textAlign={'center'} spacing={{ base: 8, md: 14 }} py={{ base: 10, md: 18 }}>
          <Center>
            {' '}
            <Image
              rounded={'md'}
              alt={'LIS LOGO'}
              src={
                'https://scontent.fceb1-2.fna.fbcdn.net/v/t39.30808-6/337003525_1487142965435916_2176651500174898000_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeH0qFqKNLFK0laZ7wENfU4UyeOYIJ8ShSTJ45ggnxKFJK9BaNpTwIncelk4U-Q6HcnqJy2vhTI4SwsYHhvaF8pN&_nc_ohc=PuM0YODaw5gQ7kNvgGMA7uq&_nc_ht=scontent.fceb1-2.fna&oh=00_AYC3XlaDW6QTSevQ-LgHnjyHt-KdwbFmy9J81JOcgHqJ9g&oe=6665B2C2'
              }
              boxSize="xs"
              objectFit={'cover'}
            />
          </Center>
          <Heading fontWeight={600} fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }} lineHeight={'110%'}>
            Welcome to <br />
            <Text as={'span'} color={'blue.500'}>
              Lanao Integrated School
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            Monetize your content by charging your most loyal readers and reward them loyalty points. Give back to your loyal
            readers by granting them access to your pre-releases and sneak-peaks.
          </Text>
          <Stack direction={'column'} spacing={3} align={'center'} alignSelf={'center'} position={'relative'}>
            <Button variant={'link'} colorScheme={'blue'} size={'lg'}>
              Learn more
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  )
}

export default HomePage
