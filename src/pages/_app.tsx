import React from 'react'
import { AppProps } from 'next/app'
import '../styles/globals.scss'
import Head from 'next/head'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>João Augusto</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
