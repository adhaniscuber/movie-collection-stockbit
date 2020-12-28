import { GoodsProvider } from 'goods-core'
import appTheme from '../styles/theme'
import AppStyle from '../styles/globals'

function MyApp({ Component, pageProps }) {
  return (
    <GoodsProvider noGlobalStyle theme={appTheme}>
      <AppStyle />
      <Component {...pageProps} />
    </GoodsProvider>
  )
}

export default MyApp
