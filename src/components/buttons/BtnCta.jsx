import Btn from "./Btn";
import styles from "./Btn.module.css";
function BtnCta({ children, onClick }) {
  return (
    <Btn className={styles.cta} onClick={onClick}>
      {children}
    </Btn>
  );
}

export default BtnCta;
