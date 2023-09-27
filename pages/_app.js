import Layout from '@/components/layout/Layout'
import '@/styles/globals.css'
import Head from 'next/head'
import { Fragment } from 'react'

export default function App({ Component, pageProps }) {
    return (
        <Layout>
                <Head>
                    <meta name='viewport' content='width=device-width, initial-scale=1' />
                </Head>
            <Component {...pageProps} />
        </Layout>
    )
}
