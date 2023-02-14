import { headerNavLinks } from 'data'
import Image from 'next/image'
import Link from 'next/link'
import NavItem from './NavItem'

export const DesktopMenu = () => {
  return (
    <div className="hidden bg-white shadow-lg md:block">
      <div className="flex max-w-5xl mx-auto space-x-12">
        <Link href="/">
          {' '}
          <Image
            width={0}
            height={0}
            sizes="100vh"
            src="/images/logo.svg"
            alt=""
            className="w-auto h-16 scale-50"
          />
        </Link>

        <div className="flex flex-row mx-auto">
          <div className="flex items-center justify-between mx-auto ml-24 space-x-12">
            {(headerNavLinks || []).map((item, id) => (
              <NavItem key={id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
