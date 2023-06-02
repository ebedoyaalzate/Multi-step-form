import Layout from '@/components/Layout'
import Store from '@/context/Store'
import '@/styles/globals.scss'
import type {AppProps} from 'next/app'

export default function App({Component, pageProps}: AppProps) {
  return (
    <Store>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Store>
  )
}
