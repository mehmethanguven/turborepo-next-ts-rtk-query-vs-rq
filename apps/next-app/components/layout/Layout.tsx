import React, { ReactNode } from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className="flex">
      <div className="flex flex-col justify-between w-full h-screen">
        <div className="sticky top-0 z-50">
          <Header />
        </div>

        <main className="max-w-6xl mb-auto text-left md:mx-auto md:p-4 md:px-10">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
