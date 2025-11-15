import styles from "./Btn.module.css";
function Btn({ children, className, onClick }) {
  return (
    <button className={styles.btn + " " + className} onClick={onClick}>
      {children}
    </button>
  );
}

export default Btn;
