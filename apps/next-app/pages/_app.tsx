import Layout from '@/components/layout/Layout'
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { todoApi } from 'store'
import '../styles/global.css'
import { ReactQueryDevtools } from 'react-query/devtools'

export const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ApiProvider api={todoApi}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApiProvider>
      {/* <ReactQueryDevtools /> */}
    </QueryClientProvider>
  )
}

export default MyApp
