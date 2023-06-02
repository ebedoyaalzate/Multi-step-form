import Layout from '@/components/Layout'
import Store from '@/context/Store'
import '@/styles/globals.scss'
import type {AppProps} from 'next/app'
import {StyledEngineProvider} from '@mui/material/styles'

export default function App({Component, pageProps}: AppProps) {
  return (
    <StyledEngineProvider injectFirst>
      <Store>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Store>
    </StyledEngineProvider>
  )
}
