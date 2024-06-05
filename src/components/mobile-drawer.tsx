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
  Image,
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

import NextLink from 'next/link'
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
          bgColor={siteConfig.themeColor}
          icon={<Icon as={isOpen ? FaTimes : FaBars} />}
          isRound
          onClick={onToggle}
          ref={btnRef}
          size="lg"
        />
      </Box>

      <Drawer finalFocusRef={btnRef} isOpen={isOpen} onClose={onClose} placement="right">
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader p={8}>
              <Center>
                <VStack>
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
