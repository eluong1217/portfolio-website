import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Head from 'next/head';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import PageContent from '../components/PageContent';
import theme from '../theme';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
    </Head>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <PageContent component={Component} page={pageProps} />
      <SpeedInsights />
    </ChakraProvider>
    </>
  )
}
