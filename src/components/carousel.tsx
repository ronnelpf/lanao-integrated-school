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
        'https://scontent.fceb1-3.fna.fbcdn.net/v/t39.30808-6/359784891_183581491362544_3517783001639202466_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFsLQ74jCxaQne1leHjc98iPF1ka5-XywE8XWRrn5fLAWbH-7jJWzHxbTzyXKDgNwj7IwP40oS-op0V-yIh-O3q&_nc_ohc=ChAQwtQfgpEQ7kNvgGcwZOr&_nc_ht=scontent.fceb1-3.fna&oh=00_AYA2Uou2aNY7UGtVdEZYFpw4pfXiS2LLsvkXDjiG4F2e9w&oe=66663719',
    },
    {
      title: 'Design Projects 2',
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        'https://scontent.fceb1-5.fna.fbcdn.net/v/t39.30808-6/406801200_264431963277496_7416103855624405052_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHx_yzmJ_FQSE210FJc6ujne7_3Rs6Ewvl7v_dGzoTC-XNXqiVw7BQvWEVzJUnjEWd7GKMynrOl_em7XdqFAXKf&_nc_ohc=O_oj2zAak70Q7kNvgFGDUAj&_nc_ht=scontent.fceb1-5.fna&oh=00_AYBCDMM9oYHbel9f37MRa0a3PKMKk1d1yY-Gfm7Cxd98hg&oe=666638E6',
    },
    {
      title: 'Design Projects 3',
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        'https://scontent.fceb1-4.fna.fbcdn.net/v/t39.30808-6/359766959_183546598032700_7550839420482962834_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE8FeA54J8s9hJBBrX16G7lePIVjLizh0N48hWMuLOHQwUyuEs7YO29qW08UTj7qHcEV5WporjW_enYN3i84BNx&_nc_ohc=6btRngq69NkQ7kNvgG8kIx-&_nc_ht=scontent.fceb1-4.fna&oh=00_AYDOl6Ilhx9agGsxRTmGD9vQyOvTKIPWFK_H4qzhgOrNSw&oe=6666414E',
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
                <Text isTruncated fontSize={{ base: 'md', lg: 'lg' }} color="GrayText">
                  <Highlight query={card.text} styles={{ px: '2', py: '1', rounded: 'sm', bg: 'rgba(255, 255, 255, 0.15)' }}>
                    {card.text}
                  </Highlight>
                </Text>
                <Button colorScheme="whiteAlpha">Read more</Button>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  )
}
