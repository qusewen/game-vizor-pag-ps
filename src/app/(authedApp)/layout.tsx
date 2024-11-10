'use client'

import { Montserrat } from 'next/font/google'

import { AsideMenu, AsideNavMenu, Footer, Header } from 'shared/_ui'
import { ReduxProvider } from 'store/Provider'

import '../globals.css'
import 'react-toastify/dist/ReactToastify.css'
import type { ReactNode } from 'react'

import { ToastContainer } from 'react-toastify'

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
      <body
        suppressHydrationWarning={true}
        className='flex min-h-screen flex-col'
      >
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
