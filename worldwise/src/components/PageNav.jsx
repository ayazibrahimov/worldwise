import { NavLink } from "react-router-dom"
import style from './PageNav.module.css'

function PageNav() {
  return (
    <nav className={style.nav}>
      <p className="text">Salam</p>
        <ul>
            <li><NavLink to='/'>Homepage</NavLink></li>
            <li><NavLink to='/product'>Product</NavLink></li>
            <li><NavLink to='/pricing'>Pricing</NavLink></li>
            <li><NavLink to='/applayout'>AppLayout</NavLink></li>
        </ul>
    </nav>
  )
}

export default PageNav;