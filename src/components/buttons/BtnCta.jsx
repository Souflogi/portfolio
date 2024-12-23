import Btn from "./btn";
import styles from "./btn.module.css";
function BtnCta({ children, onClick }) {
  return (
    <Btn className={styles.cta} onClick={onClick}>
      {children}
    </Btn>
  );
}

export default BtnCta;
