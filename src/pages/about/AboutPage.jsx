import NavBar from "../../components/navbar/NavBar";
import styles from "./AboutPage.module.css";
import {
  AiOutlineFormatPainter,
  AiOutlineCode,
  AiOutlineDesktop,
  AiOutlineProduct,
  AiOutlineDashboard,
  AiOutlineHeart,
} from "react-icons/ai";
import SkillItem from "../../components/skill/SkillItem";

const skills = [
  { icon: "design", title: "Modern Web Design", description: "Crafting responsive and visually engaging websites by combining clean layouts, intuitive navigation, and cutting-edge design principles." },
  { icon: "code", title: "Clean and Optimized Code", description: "Writing efficient, scalable, and maintainable code to ensure performance and reliability across all devices." },
  { icon: "ui", title: "Interactive User Interfaces", description: "Building seamless, dynamic, and accessible user interfaces that provide a delightful experience for users." },
  { icon: "problemSolving", title: "Problem-Solving Mindset", description: "Tackling challenges with a logical and creative approach, turning complex requirements into elegant solutions." },
  { icon: "performance", title: "Performance Optimization", description: "Enhancing website performance with techniques like code splitting, lazy loading, and image optimization for fast, smooth experiences." },
  { icon: "userFocus", title: "User-Centered Development", description: "Designing and developing with the user in mind, focusing on accessibility, usability, and real-world needs." },
];

const iconMap = {
  design: AiOutlineFormatPainter,
  code: AiOutlineCode,
  ui: AiOutlineDesktop,
  problemSolving: AiOutlineProduct,
  performance: AiOutlineDashboard,
  userFocus: AiOutlineHeart,
};

function AboutPage() {
  return (
    <div className="page_container">
      <NavBar />
      <main className={styles.aboutPage}>
        <section className={styles.story}>
          <div className={styles.story__content}>
            <h2>Who Am I</h2>
            <p>
              Hi, I’m <strong>Soufiane</strong>. I build fast, responsive web
              interfaces with <strong>React</strong> and <strong>CSS Modules</strong>,
              focusing on accessible UX, maintainable code, and reliable delivery.
            </p>
            <p>
              I prioritize performance and modern tooling—code splitting, lazy
              loading, and solid CSS architecture. I’m available for frontend
              roles (full‑time or contract) and ready to contribute from day one.
            </p>
          </div>
        </section>
        <section className={styles.skills}>
          <h2>How I Can Help</h2>
          <div className={styles.skills__container}>
            {skills.map((skill, index) => {
              const Icon = iconMap[skill.icon];
              return (
                <SkillItem
                  key={index}
                  icon={<Icon />}
                  title={skill.title}
                  description={skill.description}
                />
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}

export default AboutPage;
