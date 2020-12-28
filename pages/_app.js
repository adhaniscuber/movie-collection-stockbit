import { GlobalStyle, GoodsProvider } from 'goods-core'

function MyApp({ Component, pageProps }) {
  return (
    <GoodsProvider>
      <GlobalStyle>
        <Component {...pageProps} />
      </GlobalStyle>
    </GoodsProvider>
  )
}

export default MyApp
