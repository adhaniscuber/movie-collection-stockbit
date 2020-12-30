import { Provider } from 'react-redux'
import { GoodsProvider } from 'goods-core'

import appTheme from '../styles/theme'
import AppStyle from '../styles/globals'
import store from '../store'

function MyApp({ Component, pageProps }) {
  console.log('process.env.BASE_URL', process.env.BASE_URL)
  return (
    <Provider store={store}>
      <GoodsProvider noGlobalStyle theme={appTheme}>
        <AppStyle />
        <Component {...pageProps} />
      </GoodsProvider>
    </Provider>
  )
}

export default MyApp
