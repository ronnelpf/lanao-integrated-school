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
  Center,
  SimpleGrid,
  Flex,
  Image,
} from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'
import { NextSeo } from 'next-seo'

import siteConfig from '~/site-config'

import type { NextPage } from 'next'
import image from 'next/image'

const HomePage: NextPage = () => {
  return (
    <>
      <NextSeo title={siteConfig.title} titleTemplate="%s" />
      <Stack as={Box} textAlign={'center'} spacing={{ base: 8, md: 14 }} pb={8} pt={10}>
        <Heading fontWeight={600} fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }} lineHeight={'110%'}>
          Welcome to <br />
          <Text as={'span'} color={'blue.500'}>
            Consuelo Water Refilling Station
          </Text>
        </Heading>
        <Center>
          <Container maxW={'5xl'} py={12}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              <Stack spacing={4}>
                <Image
                  rounded={'md'}
                  alt={'feature image'}
                  src={'https://naturespring.com.ph/wp-content/uploads/2021/10/header-bottle7.png'}
                  objectFit={'cover'}
                />
              </Stack>
              <Flex>
                <Image
                  rounded={'md'}
                  alt={'feature image'}
                  src={
                    'https://scontent.fceb1-2.fna.fbcdn.net/v/t39.30808-6/304971055_109913178520149_5575880717413655440_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFJqc7S4KyF-C5hgz5dd43fWhPj23WBU49aE-PbdYFTj-Wo07vtGDPCBOzcuhPA5EGUqwu7NQsc5GZ2j_mnNn3R&_nc_ohc=vcNj3j2UOMoQ7kNvgH7YFWF&_nc_ht=scontent.fceb1-2.fna&gid=AKPJ1FRIEMVLpyy4cq-z_bg&oh=00_AYBCVx0QCXmuHYrqaZSf94NDbkfefx2khj0CMw-svbSPJA&oe=668A845A'
                  }
                  objectFit={'cover'}
                />
              </Flex>
            </SimpleGrid>
          </Container>
        </Center>
        <Text color={'gray.500'} pr={4} pl={4}>
          Create your content by charging your most loyal readers and reward them loyalty points. Give back to your loyal
          readers by granting them access to your pre-releases and sneak-peaks.
        </Text>
        <Stack direction={'column'} spacing={3} align={'center'} alignSelf={'center'} position={'relative'}>
          <Button variant={'link'} colorScheme={'blue'} size={'lg'}>
            Learn more
          </Button>
        </Stack>
      </Stack>
      {/* </Container> */}
    </>
  )
}

export default HomePage
