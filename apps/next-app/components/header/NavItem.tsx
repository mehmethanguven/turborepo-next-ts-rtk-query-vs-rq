import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

type Props = {
  title: string
  url: string
  close?: () => void
}

const NavItem = ({ title, url, close }: Props) => {
  const router = useRouter()
  return (
    <div
      className={clsx(
        'flex flex-col space-y-4 text-center md:text-left',
        router.asPath === url && 'text-green-600',
      )}
    >
      <Link
        href={url}
        onClick={close}
        className="hover:text-strongCyan "
        scroll={true}
      >
        {title}
      </Link>
    </div>
  )
}

export default NavItem
