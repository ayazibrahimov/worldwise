import Logo from './Logo'
import { NavLink } from "react-router-dom"
import style from './PageNav.module.css'

function PageNav() {
  return (
    <nav className={style.nav}>
         <Logo />
        <ul>
            <li><NavLink to='/product'>Product</NavLink></li>
            <li><NavLink to='/pricing'>Pricing</NavLink></li>
            <li><NavLink to='/login'>Login</NavLink></li>
        </ul>
    </nav>
  )
}

export default PageNav;