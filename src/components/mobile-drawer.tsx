import * as React from 'react'

import {
  Box,
  Button,
  Center,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Icon,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  VStack,
  VisuallyHidden,
  useDisclosure,
} from '@chakra-ui/react'
import { FaBars, FaTimes } from 'react-icons/fa'

import Image from 'next/image'
import { useSocials } from '@/hooks/app'
import siteConfig from '~/site-config'

export const MobileDrawer: React.FC = () => {
  const { isOpen, onClose, onToggle } = useDisclosure()
  const btnRef = React.useRef()

  const socials = useSocials()

  return (
    <>
      <Box bottom={0} p={5} pos="fixed" right={0} zIndex={1}>
        <IconButton
          aria-label="Open menu"
          // bgColor={siteConfig.themeColor}
          bgColor={'blue.500'}
          icon={<Icon as={isOpen ? FaTimes : FaBars} />}
          isRound
          onClick={onToggle}
          ref={btnRef}
          size="lg"
          color={'purple.800'}
        />
      </Box>

      <Drawer finalFocusRef={btnRef} isOpen={isOpen} onClose={onClose} placement="right">
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader p={8}>
              <Center>
                <VStack>
                  <Image src="/consuelo-logo.jpg" width={80} height={80} alt="consuelo-logo.jpg" />
                  <Link href="/" onClick={onClose} variant="link">
                    {siteConfig.title}
                  </Link>
                </VStack>
              </Center>
            </DrawerHeader>
            <Divider />
            <DrawerBody>
              <Center>
                <VStack>
                  <p>
                    <Link href="#about-us">About Us</Link>
                  </p>
                  <p>
                    <Link href="#articles">Articles</Link>
                  </p>
                  <p>
                    <Link href="#events">Events</Link>
                  </p>
                  <p>
                    <Link href="#contact-us">Contact Us</Link>
                  </p>
                </VStack>
              </Center>
            </DrawerBody>
            <Divider />
            <DrawerFooter px={4} py={8}>
              {socials.map(([href, SocialIcon]) => (
                <IconButton
                  as="a"
                  aria-label={href}
                  color="currentColor"
                  href={href}
                  icon={<Icon as={SocialIcon} boxSize={6} />}
                  key={href}
                  size="lg"
                  variant="link"
                  target="_blank"
                />
              ))}
            </DrawerFooter>
            <DrawerCloseButton />
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}
