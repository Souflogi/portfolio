import NavBar from "../../components/navbar/NavBar";
import styles from "./WorkPage.module.css";

const projects = [
  {
    title: "Responsive Landing Page",
    role: "Frontend",
    scope: "Design, Build, Optimize",
    summary:
      "Marketing landing with clean IA, responsive layout, and fast LCP.",
    impact: [
      "Improved first contentful paint with image optimization",
      "Reduced CSS by modularizing styles and pruning unused rules",
      "Accessible color contrast and keyboard navigation",
    ],
    stack: ["React", "Vite", "CSS Modules"],
    demo: "#",
    code: "#",
  },
  {
    title: "UI Components Library",
    role: "Frontend",
    scope: "Architecture, Components",
    summary:
      "Reusable, accessible UI kit (buttons, forms, layout) with tokens.",
    impact: [
      "Unified styles via CSS variables and module scoping",
      "Improved DX with composable props and simple theming",
      "A11y-first: focus states, labels, and ARIA where needed",
    ],
    stack: ["React", "CSS"],
    demo: "#",
    code: "#",
  },
  {
    title: "Portfolio Website",
    role: "Frontend",
    scope: "Routing, Layout, Content",
    summary: "Personal site with sidebar nav, responsive pages, and polish.",
    impact: [
      "Clear navigation with active route styling",
      "Mobile-first breakpoints for all sections",
      "Simple, maintainable structure with CSS Modules",
    ],
    stack: ["React Router", "Vite", "CSS Modules"],
    demo: "#",
    code: "#",
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
          {projects.map((p, i) => (
            <article key={i} className={styles.card}>
              <div className={styles.cardHead}>
                <h3>{p.title}</h3>
                <p className={styles.meta}>
                  <span className={styles.badge}>{p.role}</span>
                  <span className={styles.badge}>{p.scope}</span>
                </p>
              </div>
              <p className={styles.desc}>{p.summary}</p>
              <div>
                <div className={styles.sectionLabel}>Impact</div>
                <ul className={styles.impact}>
                  {p.impact.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
              <ul className={styles.tech}>
                {p.stack.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <div className={styles.links}>
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noreferrer">
                    Live
                  </a>
                )}
                {p.code && (
                  <a href={p.code} target="_blank" rel="noreferrer">
                    Code
                  </a>
                )}
              </div>
            </article>
          ))}
        </section>
        <p className={styles.note}>Detailed case studies available on request.</p>
      </main>
    </div>
  );
}

export default WorkPage;
