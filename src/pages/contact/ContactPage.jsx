import NavBar from "../../components/navbar/NavBar";
import BtnCta from "../../components/buttons/BtnCta";
import styles from "./ContactPage.module.css";

function ContactPage() {
  const email = "sammah.soufiane@gmail.com";
  const socials = [
    { label: "GitHub", url: "https://github.com/Soufiane-Sammah" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/soufiane-sammah/" },
    { label: "Twitter", url: "https://twitter.com/SoufianeSammah" },
  ];

  return (
    <div className="page_container">
      <NavBar />
      <main className={styles.contactPage}>
        <section className={styles.hero}>
          <p className={styles.kicker}>Let&apos;s collaborate</p>
          <h1>Bring your product ideas, I'll bring focused execution.</h1>
          <p className={styles.heroText}>
            From landing pages to full product interfaces, I help founders and teams
            ship polished experiences that feel cohesive with their brand.
          </p>
          <div className={styles.highlight}>
            <span>Preferred channel</span>
            <a href={`mailto:${email}`}>{email}</a>
          </div>
          <a href={`mailto:${email}`} className={styles.ctaLink}>
            <BtnCta>Start a project</BtnCta>
          </a>
        </section>
        <section className={styles.infoGrid}>
          <article className={styles.infoCard}>
            <span className={styles.cardLabel}>Availability</span>
            <h2>Open for Q1 collaborations</h2>
            <p>
              Remote-friendly, async communication, and weekly check-ins. Ideal for
              2-3 month product pushes or ongoing retainers.
            </p>
          </article>
          <article className={styles.infoCard}>
            <span className={styles.cardLabel}>Office hours</span>
            <h2>48h response time</h2>
            <p>
              Drop context about your idea, timeline, and any references. I&apos;ll reply
              with next steps, availability, and a lightweight plan.
            </p>
          </article>
          <article className={styles.infoCard}>
            <span className={styles.cardLabel}>Stay connected</span>
            <h2>Social links</h2>
            <ul className={styles.socialList}>
              {socials.map((item) => (
                <li key={item.label}>
                  <a href={item.url} target="_blank" rel="noreferrer">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </article>
        </section>
      </main>
    </div>
  );
}

export default ContactPage;
