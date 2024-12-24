import { NavLink } from "react-router";
import styles from "./NavBar.module.css";

import Logo from "../../components/logo/Logo";
function NavBar() {
  const activeStyle = ({ isActive }) =>
    styles.navbar__list__link + " " + (isActive ? styles.active : "");

  return (
    <nav className={styles.navbar}>
      <Logo />
      <ul role="list" className={styles.navbar__list}>
        <li>
          <NavLink className={activeStyle} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={activeStyle} to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className={activeStyle} to="/works">
            Work
          </NavLink>
        </li>
        <li>
          <NavLink className={activeStyle} to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
