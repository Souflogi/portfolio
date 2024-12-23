import { Link } from "react-router";
import styles from "./Logo.module.css";
import logo from "../../assets/images/logo.png";

function Logo() {
  return (
    <Link to={"/"}>
      <img className={styles.logo} src={logo} alt="logo" />
    </Link>
  );
}

export default Logo;
