import { footerNavLinks, socialLinks } from 'data'
import Image from 'next/image'
import NavItem from '../header/NavItem'
import SocialItem from './SocialItem'

const Footer = () => {
  return (
    <footer className="mt-10 shadow-lg bg-slate-900">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <Image
            width={0}
            height={0}
            sizes="100vh"
            src="/images/logo.svg"
            alt=""
            className="w-20 h-auto scale-50 "
          />
          {/* <!-- Container for Menus & Social --> */}
          <div className="flex flex-col items-center justify-between flex-1 mb-10 space-y-6 text-grayishBlue md:mb-0 md:flex-row md:space-y-0">
            {/* <!-- Menus --> */}
            <div className="grid max-w-lg grid-cols-1 space-y-4 md:ml-24 md:grid-cols-4 md:gap-x-12 md:space-y-0">
              {/* <!-- Menu 1 --> */}
              {(footerNavLinks || []).map((item, id) => (
                <div key={id} className="text-white">
                  <NavItem {...item} />
                </div>
              ))}
            </div>

            {/* <!-- Social Icons --> */}
            <div className="flex items-center justify-between w-32 py-1">
              {(socialLinks || []).map((item, id) => (
                <SocialItem key={id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
