import NavBar from "../../components/navbar/NavBar";
import styles from "./WorkPage.module.css";
import healthiestoImg from "../../assets/images/works/healthiesto.png";
import innerPeaceImg from "../../assets/images/works/Inner-Peace.png";
import usepopcorn from "../../assets/images/works/usepopcorn.png";
import portfolio from "../../assets/images/works/portfolio.png";
import bankist from "../../assets/images/works/bankist.png";
import cityscoper from "../../assets/images/works/cityscoper.png";
import quiz from "../../assets/images/works/quiz.png";
import manage from "../../assets/images/works/manage.png";
import score from "../../assets/images/works/score.png";
import simplebank from "../../assets/images/works/simplebank.png";
import pizzaro from "../../assets/images/works/pizzaro.png";

const projects = [
  {
    title: "Pizzaro",
    summary:
      "A fully functional pizza ordering app built with React Router, Redux Toolkit, and async data loading. Features menu browsing, cart management, order creation, real-time order status updates, and robust state architecture using slices, thunks, and reducers.",
    category: "React App / Redux",
    year: "2024",
    stack: ["React", "Redux Toolkit", "React Router", "Tailwind CSS"],
    demo: "https://your-github-username.github.io/pizzaro",
    repo: "https://github.com/your-github-username/pizzaro",
    image: pizzaro,
    imgAlt:
      "Pizzaro app interface showing pizza menu, cart summary, and order workflow",
  },
  {
    title: "Healthiesto Landing Page",
    summary:
      "Responsive landing page for Healthiesto's healthy meal subscription",
    category: "Marketing site",
    year: "2024",
    stack: ["HTML", "CSS", "JavaScript"],
    demo: "https://healthiesto.netlify.app/",
    repo: "https://github.com/Souflogi/Healthiesto.git",
    image: healthiestoImg,
    imgAlt: "Screenshot of Healthiesto hero section",
  },
  {
    title: "Inner Peace Website",
    summary:
      "A serene landing experience built to express presence and clarity through minimal visuals, mindful typography, and soft UI motion. Each section flows like breath — introducing a calm digital space for reflection and balance.",
    category: "Well-being / Brand Experience",
    year: "2025",
    stack: ["CSS", "HTML", "JavaScript"],
    demo: "https://souflogi.github.io/InnerPeace/",
    repo: "https://github.com/Souflogi/InnerPeace.git",
    image: innerPeaceImg,
    imgAlt: "Inner Peace landing page with calm visuals and mindful layout",
  },
  {
    title: "WorldWise",
    summary:
      "A travel mapping app that lets users pin cities, record visit dates, and write personal notes. Built with dynamic routing, interactive Leaflet maps, and a clean form-driven UI for tracking places you've explored.",
    category: "React App / Mapping",
    year: "2024",
    stack: ["React", "Leaflet", "React Router", "Context API"],
    demo: "https://cityscoper.netlify.app/",
    repo: "https://github.com/Souflogi/worldwise.git",
    image: cityscoper,
    imgAlt: "WorldWise map view with selected city details",
  },

  {
    title: "Personal Portfolio",
    summary:
      "Simple, fast portfolio with routed pages, case-study hooks, and refined typography.",
    category: "Personal",
    year: "2022",
    stack: ["Vite", "React", "React Router"],
    demo: "#",
    repo: "https://github.com/Souflogi/portfolio.git",
    image: portfolio,
    imgAlt: "Portfolio layout glimpse",
  },
  {
    title: "Bankist Landing Page",
    summary:
      "A modern banking landing page built with vanilla JavaScript. Features smooth scrolling, tabbed components, sticky navigation, lazy-loading images, reveal-on-scroll animations, and modular DOM interactions for a seamless user experience.",
    category: "Frontend / DOM Manipulation",
    year: "2023",
    stack: ["HTML", "CSS", "JavaScript (ES6+)", "Intersection Observer"],
    demo: "https://souflogi.github.io/DOM-Project-Banky/",
    repo: "https://github.com/Souflogi/DOM-Project-Banky.git",
    image: bankist,
    imgAlt: "Bankist landing page with green gradient hero section",
  },
  {
    title: "usePopcorn",
    summary:
      "A responsive movie finder built with modern React patterns. Features real-time search, interactive movie details, persistent watchlist storage, and a clean, card-based UI.",
    category: "React App",
    year: "2024",
    stack: ["React", "Custom Hooks", "LocalStorage API"],
    demo: "https://souflogi.github.io/usepopcorn/",
    repo: "https://github.com/Souflogi/usepopcorn.git",
    image: usepopcorn,
    imgAlt: "usePopcorn movie search interface with card grid",
  },
  {
    title: "React Quiz",
    summary:
      "A timed multiple-choice quiz app built with React. Features dynamic question loading, a reducer-based state flow, progress tracking, scoring logic, and a countdown timer for a more interactive experience.",
    category: "React App",
    year: "2024",
    stack: ["React", "useReducer", "Custom Hooks"],
    demo: "https://your-github-username.github.io/react-quiz",
    repo: "https://github.com/your-github-username/react-quiz",
    image: quiz,
    imgAlt: "React Quiz interface with timer and question display",
  },
  {
    title: "Manage Landing Page",
    summary:
      "A modern marketing landing page built with clean typography, reusable layout components, and responsive design patterns. Includes a hero section, feature blocks, call-to-action buttons, and structured content modeled after real product websites.",
    category: "Frontend / Landing Page",
    year: "2023",
    stack: ["HTML", "CSS", "JavaScript"],
    demo: "https://your-github-username.github.io/manage-landing-page",
    repo: "https://github.com/your-github-username/manage-landing-page",
    image: manage,
    imgAlt: "Manage landing page with hero content and feature cards",
  },
  {
    title: "Level-Up XP Tracker",
    summary:
      "A gamified experience tracker where users add points to fill an animated progress bar and level up. Features dynamic UI updates, glowing visual effects, input validation, and a clean interactive layout inspired by game HUD design.",
    category: "Frontend / Gamified UI",
    year: "2023",
    stack: ["React", "CSS"],
    demo: "https://souflogi.github.io/UI_ANIMATION_TEST/",
    repo: "https://github.com/Souflogi/UI_ANIMATION_TEST.git",
    image: score,
    imgAlt:
      "Gamified XP level tracker with glowing progress bar and score input",
  },
  {
    title: "Bankist App",
    summary:
      "A functional banking interface built with modern JavaScript. Includes user authentication, money transfers, loan requests, account closure, live balances, transaction sorting, and an auto-logout security timer — all rendered with dynamic DOM updates.",
    category: "Frontend / Web App",
    year: "2023",
    stack: ["HTML", "CSS", "JavaScript (ES6+)"],
    demo: "https://souflogi.github.io/Banky/",
    repo: "https://github.com/Souflogi/Banky.git",
    image: simplebank,
    imgAlt:
      "Bankist dashboard showing balance, transactions, and money transfer form",
  },
];

function WorkPage() {
  return (
    <div className="page_container">
      <NavBar />
      <main className={styles.workPage}>
        <header className={styles.header}>
          <h1 className={styles.title}>Selected Projects</h1>
          <p className={styles.subtitle}>
            Practical, maintainable front‑end work focused on UX, performance,
            and clean implementation.
          </p>
        </header>
        <section className={styles.grid}>
          {projects.map((project, index) => (
            <article key={project.title + index} className={styles.card}>
              <div className={styles.media}>
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.imgAlt || project.title}
                  />
                ) : (
                  <div className={styles.mediaPlaceholder}>
                    <span>Preview coming soon</span>
                  </div>
                )}
              </div>
              <div className={styles.cardMeta}>
                <span>{project.category}</span>
                <span>{project.year}</span>
              </div>
              <h3>{project.title}</h3>
              <p className={styles.desc}>{project.summary}</p>
              <ul className={styles.tags}>
                {project.stack.map(item => (
                  <li key={project.title + item}>{item}</li>
                ))}
              </ul>
              <div className={styles.cardActions}>
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    Live Site
                  </a>
                )}
                {project.repo && (
                  <a href={project.repo} target="_blank" rel="noreferrer">
                    Repo
                  </a>
                )}
              </div>
            </article>
          ))}
        </section>
        <p className={styles.note}>
          More recent work and case studies available on request.
        </p>
      </main>
    </div>
  );
}

export default WorkPage;
