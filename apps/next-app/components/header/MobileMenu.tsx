import clsx from 'clsx'
import { headerNavLinks } from 'data'
import Image from 'next/image'
import React, { useState } from 'react'
import NavItem from './NavItem'

const MobileMenu = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div
        className={clsx(
          'mx-auto flex items-center justify-between space-y-4 bg-white px-4 shadow-lg md:hidden',
        )}
      >
        {/* <!-- Menu 1 --> */}
        <Image
          width={0}
          height={0}
          sizes="100vh"
          src="/images/logo.svg"
          alt=""
          className="w-auto h-16 scale-50 "
        />
        <div className="md:hidden">
          <button
            id="menu-btn"
            type="button"
            onClick={() => setOpen(!open)}
            className={clsx(
              'hamburger z-40 block focus:outline-none md:hidden',
              open ? 'open' : '',
            )}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
      </div>
      <div
        className={clsx(
          'mx-auto flex flex-col items-center justify-center space-y-4 bg-white px-4  pb-4 shadow-lg',
          open ? '' : 'hidden',
        )}
      >
        {(headerNavLinks || []).map((item, id) => (
          <NavItem key={id} {...item} close={() => setOpen(false)} />
        ))}
      </div>
    </>
  )
}

export default MobileMenu
