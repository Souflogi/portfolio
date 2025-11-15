import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

import Logo from "../../components/logo/Logo";
function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    styles.navlink + " " + (isActive ? styles.active : "");

  const handleLinkClick = () => setIsMobileMenuOpen(false);

  return (
    <nav
      className={`${styles.navbar} ${
        isScrolled ? styles.navbarScrolled : ""
      }`}
    >
      <Logo />
      <button
        className={`${styles.burger} ${
          isMobileMenuOpen ? styles.burgerOpen : ""
        }`}
        type="button"
        aria-expanded={isMobileMenuOpen}
        aria-controls="primary-navigation"
        aria-label="Toggle navigation menu"
        onClick={() => setIsMobileMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>
      <ul
        id="primary-navigation"
        role="list"
        className={`${styles.navbar__list} ${
          isMobileMenuOpen ? styles.navbar__listOpen : ""
        }`}
      >
        <li>
          <NavLink className={linkClass} to="/" onClick={handleLinkClick}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={linkClass} to="/about" onClick={handleLinkClick}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink className={linkClass} to="/works" onClick={handleLinkClick}>
            Work
          </NavLink>
        </li>
        <li>
          <NavLink
            className={linkClass}
            to="/contact"
            onClick={handleLinkClick}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
