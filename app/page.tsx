import Link from "next/link";
import { sampleLessons, units } from "@/data/sampleLessons";

export default function WelcomePage() {
  return (
    <section className="screen welcome-screen">
      <div className="top-bar glass-bar">
        <Link className="brand-lockup" href="/">
          <span className="logo-badge small-logo" aria-hidden="true">🌱</span>
          <span>
            <strong>Learn Ilokano</strong>
            <small>No basbasaem daytoy, you are the "best"
            </small>
          </span>
        </Link>
        <div className="top-actions">
          <a className="stat-pill" href="#developer">Developer</a>
          <Link className="stat-pill" href="/curriculum">Curriculum Map</Link>
        </div>
      </div>

      <div className="welcome-grid">
        <div className="card hero-card welcome-hero elevated-card">
          <p className="eyebrow">Learn Ilokano</p>
          <h1>Build your Ilokano</h1>
          <p>
            A Duolingo inspired beginner path for greetings, introductions, family, numbers, colors, time, food, directions, and everyday conversation.
          </p>

          <div className="hero-highlight-row" aria-label="Course highlights">
            <span>{units.length} learning units</span>
            <span>{sampleLessons.length} lesson milestones</span>
            <span>Mastery-based unlocking</span>
          </div>

          <div className="button-stack hero-actions">
            <Link className="btn btn-primary" href="/home">Start learning</Link>
            <Link className="btn btn-secondary" href="/login">Admin/Login</Link>
          </div>
        </div>

        <aside className="card elevated-card preview-panel">
          <div className="preview-phone">
            <div className="preview-top"></div>
            <div className="preview-course-card">
              <span>Unit 1</span>
              <strong>Starter Phrases</strong>
            </div>
            <div className="preview-path">
              <span className="preview-node done">✓</span>
              <span className="preview-line"></span>
              <span className="preview-node active">▶</span>
              <span className="preview-line"></span>
              <span className="preview-node locked">🔒</span>
            </div>
            <div className="preview-stats">
              <span>{units.length} units</span>
              <span>{sampleLessons.length} lessons</span>
            </div>
          </div>
          <div className="tip-box">
            <strong>NOTE:</strong>
            <span>Everything here is from my understanding and experience. So some vocab and words may be off and different</span>
          </div>
        </aside>
      </div>

      <section id="developer" className="developer-section elevated-card" aria-labelledby="developer-heading">
        <div className="developer-section-photo-wrap">
          <img className="developer-section-photo" src="/justineA.jpg" alt="Portrait placeholder for Justine Afaga" />
          <div className="developer-name-card">
            <span>Developer</span>
            <strong>Justine Afaga</strong>
            <small>B.S. in Computer Science | B.A. Philippine Language & Culture</small>
          </div>
        </div>

        <div className="developer-section-content">
          <p className="eyebrow">About the developer</p>
          <h2 id="developer-heading">Sasinoak?</h2>
          <p>
            Hello, I’m Justine Afaga. I graduated at the University of Hawaiʻi at Mānoa this past FALL, 2026. A double major student in Computer Science with Philippine Language and Culture studies in Ilokano. I will continue attending UH this upcoming FALL for graduate program. This project brings both sides of my profession together: my experience learning about software engineering, and my learning of keeping my mother tongue language and culture presence in my life.
          </p>
          <p>
            "Learn Ilokano" is designed as a beginner friendly learning path where students can practice everyday words, phrases, and conversations through short milestone lessons. I got inspiration from Duolingo, and so I wanted to create something that resembles my experience with my language and CS skills, and making something out of it utilizing Duolingo. The goal is to make Ilokano feel approachable for new learners while still honoring the traditional value of learning from speakers, teachers, family, and community contributors.
          </p>

          <div className="developer-info-grid">
            <article>
              <span className="info-icon" aria-hidden="true">💻</span>
              <strong>Software focus</strong>
              <p>Next.js, TypeScript, lesson curriculum, progress, keyboard controls, and a learning dashboard.</p>
            </article>
            <article>
              <span className="info-icon" aria-hidden="true">🌾</span>
              <strong>Language focus</strong>
              <p>Beginner Ilokano lessons shaped around useful vocabulary, cultural respect, and natural daily conversation. Also from personal experiences. </p>
            </article>
            <article>
              <span className="info-icon" aria-hidden="true">🤝</span>
              <strong>Community focus</strong>
              <p>If this project is to be continued, this can grow with other contributors who can review, improve, and expand the Ilokano content over time.</p>
            </article>
          </div>
        </div>
      </section>
    </section>
  );
}
