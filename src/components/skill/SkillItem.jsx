import styles from "./SkillItem.module.css";
function SkillItem({ icon, title, description }) {
  return (
    <div className={styles.skills__item}>
      <i className={styles.icon}>{icon}</i>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default SkillItem;
