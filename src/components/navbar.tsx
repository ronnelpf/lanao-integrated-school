import * as React from 'react'

import { HStack, Icon, IconButton, Link, useColorMode, Button, ButtonProps } from '@chakra-ui/react'

import { FaMoon } from 'react-icons/fa'
import NextLink from 'next/link'
import { useSocials } from '@/hooks/app'
import siteConfig from '~/site-config'

export const Navbar: React.FC = () => {
  const { toggleColorMode } = useColorMode()
  const socials = useSocials()

  return (
    <div className="navBar">
      <HStack className="chakra-container css-f1f7ew" as="nav" fontSize="md" spacing={0}>
        <Link fontWeight="bold" href="/" p={4} variant="link">
          {siteConfig.title}
        </Link>

        <HStack flexGrow={1} justify="flex-end" spacing={{ base: 0, sm: 2 }}>
          {/* {socials.map(([href, SocialIcon]) => (
          <IconButton
            as="a"
            aria-label={href}
            color="currentColor"
            href={href}
            icon={<Icon as={SocialIcon} boxSize={5} />}
            key={href}
            variant="link"
          />
        ))} */}
          <EnrollButtonShadow />
          <IconButton
            aria-label="toggle dark mode"
            color="currentColor"
            icon={<Icon as={FaMoon} boxSize={5} />}
            onClick={toggleColorMode}
            variant="link"
          />
        </HStack>
      </HStack>
    </div>
  )
}

export default function EnrollButtonShadow(props: ButtonProps) {
  return (
    <Button
      {...props}
      /* flex={1} */
      px={4}
      fontSize={'sm'}
      rounded={'full'}
      bg={'blue.400'}
      color={'white'}
      boxShadow={'0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'}
      _hover={{
        bg: 'blue.500',
      }}
      _focus={{
        bg: 'blue.500',
      }}
    >
      Enroll Now
    </Button>
  )
}
