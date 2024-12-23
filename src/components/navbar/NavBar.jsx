import { NavLink } from "react-router";
import styles from "./NavBar.module.css";

import Logo from "../../components/logo/Logo";
import BtnCta from "../buttons/BtnCta";
function NavBar() {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <ul role="list" className={styles.navbar__list}>
        <li>
          <NavLink className={styles.navbar__list__link} to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.navbar__list__link} to="/works">
            Works
          </NavLink>
        </li>
        <li>
          <BtnCta>contact</BtnCta>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
