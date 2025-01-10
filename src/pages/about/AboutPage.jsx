import { SlSocialGithub } from "react-icons/sl";
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
  {
    icon: "design",
    title: "Modern Web Design",
    description:
      "Crafting responsive and visually engaging websites by combining clean layouts, intuitive navigation, and cutting-edge design principles.",
  },
  {
    icon: "code",
    title: "Clean and Optimized Code",
    description:
      "Writing efficient, scalable, and maintainable code to ensure performance and reliability across all devices.",
  },
  {
    icon: "ui",
    title: "Interactive User Interfaces",
    description:
      "Building seamless, dynamic, and accessible user interfaces that provide a delightful experience for users.",
  },
  {
    icon: "problemSolving",
    title: "Problem-Solving Mindset",
    description:
      "Tackling challenges with a logical and creative approach, turning complex requirements into elegant solutions.",
  },
  {
    icon: "performance",
    title: "Performance Optimization",
    description:
      "Enhancing website performance with techniques like code splitting, lazy loading, and image optimization for fast, smooth experiences.",
  },
  {
    icon: "userFocus",
    title: "User-Centered Development",
    description:
      "Designing and developing with the user in mind, focusing on accessibility, usability, and real-world needs.",
  },
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
    <dive className="page_container">
      <NavBar />
      <main className={styles.aboutPage}>
        <section className={styles.story}>
          <div className={styles.story__content}>
            <h2>Who Am I</h2>
            <p>
              Hi, I’m <strong>Soufiane</strong>! My journey with coding began in
              <strong> 2014</strong> when I discovered my <em>love</em> for
              creating websites. Life, however, had its challenges, and I had to
              put my dreams on hold. But my <strong>passion</strong> for coding
              never faded—it stayed with me like a guiding light, reminding me
              of what I truly <em>love</em>.
            </p>
            <p>
              In the couple of years, I’ve worked tirelessly to rebuild my
              career. From brushing up on modern tools like
              <strong> React</strong> and <strong>CSS Modules </strong>
              to focusing on <em>UI/UX design</em> and
              <em>code optimization</em>, I’ve reignited my love for building
              <strong> beautiful</strong>, <strong>functional websites</strong>.
              While I don’t have big projects to showcase yet, my
              <strong> spirit</strong> and <em>determination</em> are deeply
              tied to
              <strong> learning, growing, and creating</strong>.
            </p>
            <p>
              I believe every website tells a <em>story</em>, and my goal is to
              make that story <strong>seamless and engaging</strong> for users.
              Whether it’s crafting <strong>intuitive interfaces</strong> or
              <em>optimizing code</em> for better performance, I pour my heart
              into every line of code.
            </p>
            <p>Let’s connect and bring ideas to life together!</p>
          </div>
        </section>
        <section className={styles.skills}>
          <h2>How I Can Help</h2>
          <div className={styles.skills__container}>
            {skills.map((skill, index) => {
              const Icon = iconMap[skill.icon]; // Resolve the icon dynamically
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
    </dive>
  );
}

export default AboutPage;
