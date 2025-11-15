import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

import Logo from "../../components/logo/Logo";
function NavBar() {
  const linkClass = ({ isActive }) =>
    styles.navlink + " " + (isActive ? styles.active : "");

  return (
    <nav className={styles.navbar}>
      <Logo />
      <ul role="list" className={styles.navbar__list}>
        <li>
          <NavLink className={linkClass} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={linkClass} to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className={linkClass} to="/works">
            Work
          </NavLink>
        </li>
        <li>
          <NavLink className={linkClass} to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
