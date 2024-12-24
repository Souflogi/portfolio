import NavBar from "../../components/navbar/NavBar";
import styles from "./AboutPage.module.css";
function AboutPage() {
  return (
    <dive className="page_container">
      <NavBar />
      <main className={styles.aboutPage}>
        <h1 style={{ textAlign: "center" }}>About</h1>
      </main>
    </dive>
  );
}

export default AboutPage;
