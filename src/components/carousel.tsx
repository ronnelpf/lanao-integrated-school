import React from 'react'
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Button,
  Card,
  Highlight,
} from '@chakra-ui/react'
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
// And react-slick as our Carousel Lib
import Slider from 'react-slick'

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
}

export const Carousel: React.FC = () => {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null)

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' })
  const side = useBreakpointValue({ base: '30%', md: '40px' })

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: 'Design Projects 1',
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        'https://scontent.fceb1-5.fna.fbcdn.net/v/t39.30808-6/310440645_115505044646290_5460674318116681196_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeHiVTg-pRCHLs-f2XW0fMAyFVq37KE3hmoVWrfsoTeGaiIk1wfExTzEOhFxsaB_k8HfnjfZ7cy7MC2luw5IuqgM&_nc_ohc=dZxX88NTZ5cQ7kNvgFIx6bT&_nc_ht=scontent.fceb1-5.fna&oh=00_AYBg4yBt7SakeQZVE8Tpv73ikjrP8oGk0fZSAFQrJIQo4w&oe=668A943D',
    },
    {
      title: 'Design Projects 2',
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        'https://scontent.fceb1-5.fna.fbcdn.net/v/t39.30808-6/306834404_115331191311681_2382928097961021127_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFmJmAyzygG4qiwF38XAyii3mpplV6iWL7eammVXqJYvlAqtSsvfCS6UettVrwk10LdE3LhI3zAw-X3rRnyaw8S&_nc_ohc=3nopKn5YJBgQ7kNvgGluLe7&_nc_ht=scontent.fceb1-5.fna&oh=00_AYA0-v8GXrV4p7qgCXAYzF48vLCg4fKyw6KpRcRQqFyvSg&oe=668A6813',
    },
    {
      title: 'Design Projects 3',
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        'https://scontent.fceb1-4.fna.fbcdn.net/v/t39.30808-6/314888452_125967710266690_3534555659882295870_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE_IB6nLQpUcNNrkjiRLcQiz-hbTBOVbwrP6FtME5VvCjJPt7zFe_T9hHtlz0VWRmGvTbBvkkzch5u2f1KJzOSS&_nc_ohc=02DrCMKoKxEQ7kNvgFVwG_W&_nc_ht=scontent.fceb1-4.fna&oh=00_AYAVSBTaAMspFv95e-wvgljkYv2SGq0vcZUsWHqCT3JWBw&oe=668A7406',
    },
  ]

  return (
    <Box position={'relative'} height={'600px'} width={'full'} overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={slider => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={'6xl'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}
          >
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height="600px" position="relative">
              <Stack spacing={6} w={'full'} maxW={'lg'} position="absolute" top="50%" transform="translate(0, -50%)">
                <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                  <Highlight
                    query={card.title}
                    styles={{ px: '2', py: '1', rounded: 'sm', bg: 'rgba(255, 255, 255, 0.15)' }}
                  >
                    {card.title}
                  </Highlight>
                </Heading>
                <Text
                  width={{ base: 'xs', md: 'md', lg: 'lg' }}
                  isTruncated
                  fontSize={{ base: 'md', lg: 'lg' }}
                  color="GrayText"
                >
                  <Highlight query={card.text} styles={{ px: '2', py: '1', rounded: 'sm', bg: 'rgba(255, 255, 255, 0.15)' }}>
                    {card.text}
                  </Highlight>
                </Text>
                <Button width={{ base: 'xs', md: 'md', lg: 'lg' }} colorScheme="whiteAlpha">
                  Read more
                </Button>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  )
}
