import styles from "./PageNotFound.module.css";
import { Link } from "react-router-dom";
function PageNotFound() {
  return (
    <div className={styles.container}>
      <h1>404</h1>
      <p>Page not found</p>
      <Link to="/" className={styles.backLink}>
        Go home
      </Link>
    </div>
  );
}

export default PageNotFound;
