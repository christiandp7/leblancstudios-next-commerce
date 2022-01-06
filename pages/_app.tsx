import '@assets/main.css'
import '@assets/chrome-bug.css'
import 'keen-slider/keen-slider.min.css'
import 'swiper/swiper-bundle.css'

import { FC, useEffect } from 'react'
import type { AppProps } from 'next/app'
import { Head } from '@components/common'
import { ManagedUIContext } from '@components/ui/context'
import { ThemeProvider } from 'next-themes'
import NextNprogress from 'nextjs-progressbar'

const Noop: FC = ({ children }) => <>{children}</>

export default function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop

  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])

  return (
    <>
      <Head />
      <ManagedUIContext>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme={(Component as any).theme || null}>
          <Layout pageProps={pageProps}>
            <NextNprogress
              color="#000"
              startPosition={0.3}
              stopDelayMs={500}
              height={2}
            />
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </ManagedUIContext>
    </>
  )
}
