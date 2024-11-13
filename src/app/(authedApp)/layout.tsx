'use client'

import { Montserrat } from 'next/font/google'

import { AsideMenu, AsideNavMenu, Footer, Header } from 'shared/_ui'
import { ReduxProvider } from 'store/Provider'

import { YMInitializer } from 'react-yandex-metrika';

import '../globals.css'
import 'react-toastify/dist/ReactToastify.css'
import type { ReactNode } from 'react'

import { ToastContainer } from 'react-toastify'
import Head from "next/head";

const MontserratSans = Montserrat({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang='en'
      className={MontserratSans.className}
    >
    <Head><title>PS Plus – подписка для России! 🇷🇺</title>  <script type="text/javascript"> {` (function(m,e,t,r,i,k,a){m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments) }; m[i].l=1*new Date(); for (var j = 0; j < document.scripts.length; j++) { if (document.scripts[j].src === r) { return; } } k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a) })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym"); ym(98887573, "init", { clickmap: true, trackLinks: true, accurateTrackBounce: true }); `} </script> <noscript> <div> <img src="https://mc.yandex.ru/watch/98887573" style={{ position: "absolute", left: "-9999px" }} alt="" /> </div> </noscript> </Head>
      <body
        suppressHydrationWarning={true}
        className='flex min-h-screen flex-col'
      >
        <YMInitializer accounts={[98887573]} />
        <ReduxProvider>
          <Header />
          <AsideMenu>
            <AsideNavMenu />
          </AsideMenu>
          <main className='flex-grow'>{children}</main>
          <Footer />
        </ReduxProvider>
        <ToastContainer />
      </body>
    </html>
  )
}
