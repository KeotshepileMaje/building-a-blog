import Layout from '@/components/layout/layout'
import '@/styles/globals.css'
import { Fragment } from 'react'

export default function App({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}
