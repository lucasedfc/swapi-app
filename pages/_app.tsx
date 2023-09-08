import '@/styles/globals.css'
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppsPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppsPropsWithLayout) {

  const getLayout = Component.getLayout ?? (page => page);

  return (
  // <>
  // <Component {...pageProps} />)
  // </>
  getLayout(
    <Component {...pageProps} />
  )
  )
}
