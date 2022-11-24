import 'styles/index.css'
import cn from 'classnames'
import { Roboto } from '@next/font/google'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
})

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={cn('', roboto.className)}>
      <Component {...pageProps} />
    </div>
  )
}
