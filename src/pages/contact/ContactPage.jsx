import NavBar from "../../components/navbar/NavBar";
import BtnCta from "../../components/buttons/BtnCta";
import styles from "./ContactPage.module.css";

function ContactPage() {
  const email = "sammah.soufiane@gmail.com";
  return (
    <div className="page_container">
      <NavBar />
      <main className={styles.contactPage}>
        <section className={styles.intro}>
          <h1>Let’s build something great</h1>
          <p>
            I’m open to opportunities, collaborations, and exciting ideas. If
            you have a project in mind or just want to say hi, drop me a line.
          </p>
          <a href={`mailto:${email}`} className={styles.ctaLink}>
            <BtnCta>Say Hello</BtnCta>
          </a>
        </section>
        <section className={styles.details}>
          <div>
            <h2>Email</h2>
            <a href={`mailto:${email}`}>{email}</a>
          </div>
          <div>
            <h2>Social</h2>
            <ul>
              <li>
                <a href="https://github.com/Soufiane-Sammah">GitHub</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/soufiane-sammah/">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://twitter.com/SoufianeSammah">Twitter</a>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ContactPage;
