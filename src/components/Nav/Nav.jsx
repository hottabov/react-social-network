import s from "./Nav.module.scss"
import {NavLink} from "react-router-dom";

const Nav = () => {
  return (
  <nav className={s.nav}>
    <ul className={s.list}>
      <li className={s.item}>
        <NavLink to="/profile" className={navData => navData.isActive ? `${s.link} ${s.active}` : s.link}>
          Profile
        </NavLink>
      </li>
      <li className={s.item}>
        <NavLink to="/messages" className={navData => navData.isActive ? `${s.link} ${s.active}` : s.link}>
          Messages
        </NavLink>
      </li>
      <li className={s.item}>
        <NavLink to="/news" className={navData => navData.isActive ? `${s.link} ${s.active}` : s.link}>
          News
        </NavLink>
      </li>
      <li className={s.item}>
        <NavLink to="/music" className={navData => navData.isActive ? `${s.link} ${s.active}` : s.link}>
          Music
        </NavLink>
      </li>
      <li className={s.item}>
        <NavLink to="/settings" className={navData => navData.isActive ? `${s.link} ${s.active}` : s.link}>
          Settings
        </NavLink>
      </li>
    </ul>
  </nav>
  )
}

export default Nav;