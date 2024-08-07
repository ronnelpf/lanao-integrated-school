import Head from 'next/head'
import '@/stylesheets/html.css'
import React from 'react'
import { Box, ChakraProvider, Stack } from '@chakra-ui/react'
import { DefaultSeo, SocialProfileJsonLd } from 'next-seo'
import NProgress from 'nprogress'
import Router from 'next/router'
import dynamic from 'next/dynamic'

import { Navbar } from '@/components/navbar'
import { Carousel } from '@/components/carousel'
import { Statistics } from '@/components/statistics'
import { FeaturedArticles } from '@/components/featured-articles'
import { CallToAction } from '@/components/call-to-action'
import { Events } from '@/components/events'
import { Testimonials } from '@/components/testimonials'
import { ContactUs } from '@/components/contact-us'
import { Footer } from '@/components/footer'
import { theme } from '@/theme'
import siteConfig from '~/site-config'

import type { AppProps } from 'next/app'

const MobileDrawer = dynamic(() => import('@/components/mobile-drawer').then(C => C.MobileDrawer))

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function App(props: AppProps) {
  const { Component, pageProps, router } = props

  return (
    <>
      <Head>
        <meta property="og:image" content="https://lanao-integrated-school.vercel.app/social.png" />
        <meta property="og:title" content={siteConfig.title} />
        <meta property="og:desciption" content="this is a sample description" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <DefaultSeo
        title="Welcome!"
        titleTemplate={`%s · ${siteConfig.title}`}
        description={siteConfig.description}
        canonical={siteConfig.url + (router.asPath || '')}
        openGraph={{
          title: siteConfig.title,
          description: siteConfig.description,
          type: 'website',
          site_name: siteConfig.title,
          images: [
            {
              url: `${siteConfig.url}/social.png`,
              width: 1024,
              height: 512,
              alt: siteConfig.title,
            },
          ],
        }}
        twitter={{
          cardType: 'summary_large_image',
          handle: siteConfig.twitterUsername,
          site: siteConfig.twitterUsername,
        }}
      />

      <SocialProfileJsonLd
        type="Person"
        name={siteConfig.title}
        url={siteConfig.url}
        sameAs={Object.values(siteConfig.socials)}
      />

      <ChakraProvider resetCSS theme={theme}>
        <>
          <Stack justify="space-between" minH="100vh" spacing={0}>
            <Navbar />
            <Carousel />
            <Box as="main">
              <Component {...pageProps} />
            </Box>
            <Statistics />
            <FeaturedArticles />
            <CallToAction />
            <Events />
            <Testimonials />
            <ContactUs />
            <Footer />
          </Stack>
          <MobileDrawer />
        </>
      </ChakraProvider>
    </>
  )
}

export default App
