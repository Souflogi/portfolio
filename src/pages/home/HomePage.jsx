import styles from "./HomePage.module.css";
import picture_mobile from "../../assets/images/home_profile_mobile.jpg";
import picture_desktop from "../../assets/images/home_profile_desktop.jpg";
import NavBar from "../../components/navbar/NavBar";
import {
  SlSocialGithub,
  SlSocialLinkedin,
  SlSocialTwitter,
  SlSocialInstagram,
} from "react-icons/sl";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="page_container">
      <NavBar />
      <main className={styles.homePage}>
        <section className={styles.welcome}>
          <picture className={styles.welcome__img}>
            <source
              srcSet={picture_mobile}
              type="image/jpg"
              media="(max-width: 768px)"
            />
            <img src={picture_desktop} alt="" />
          </picture>
          <div className={styles.welcome__social}>
            <a href="https://github.com/Soufiane-Sammah">
              <SlSocialGithub />
            </a>
            <a href="https://www.linkedin.com/in/soufiane-sammah/">
              <SlSocialLinkedin />
            </a>
            <a href="https://twitter.com/SoufianeSammah">
              <SlSocialTwitter />{" "}
            </a>
            <a href="https://www.instagram.com/soufiane_sammah/">
              <SlSocialInstagram />
            </a>
          </div>
          <div className={styles.welcome__content}>
            <h1>Soufiane Sammah</h1>
            <p>
              Front-end developer passionate about building responsive and
              visually engaging web applications. I specialize in React, CSS,
              and modern JavaScript, with a focus on creating seamless user
              experiences. Check out my projects to see how I can bring your
              ideas to life!<Link to="/about">...more</Link>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
