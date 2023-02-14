import MobileMenu from './MobileMenu'
import { DesktopMenu } from './DesktopMenu'

const Header = () => {
  return (
    <header>
      <DesktopMenu />
      <MobileMenu />
    </header>
  )
}
export default Header
