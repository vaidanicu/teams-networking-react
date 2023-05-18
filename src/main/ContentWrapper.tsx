import { SideMenu } from "../menu/SideMenu";
import { KnowLanguagesTable } from "./KnowLanguagesTable";

export function ContentWrapper() {
  return (
    <section id="content">
      <SideMenu />

      <div id="main">
        <div id="home" className="page">
          <h2>Home</h2>
          <p>
            <u>This page is about me.</u>
          </p>

          <p>My Name is Vaida Aurel Nicolae and i have 29 year old, I am married and have two sons.</p>
          <p>Life is to short and for this reason i like to make people happy.</p>
          <p>My first language ist Romanian. I am also speaking German and English.</p>
          <p>
            <u>My Hobbys are:</u> Piano, Saxophon and Accordion.
          </p>
          <p>My Wish: I want to have a job as a web developer.</p>

          <p>I like to go to church and in my free time i love to spend time with my family.</p>
        </div>

        <div id="skills" className="page">
          <h2>Skills</h2>
          <ul id="skills-list"></ul>
        </div>

        <div id="projects" className="page">
          <h2>Projects</h2>
          <li>
            <a target="_blank" href="https://vaidanicu.github.io/e-sport.github.io/">
              E-Sport
            </a>
          </li>
          <li>
            <a target="_blank" href="https://elenazaharia1.github.io/quiz-game/">
              Quiz-Game
            </a>
          </li>
        </div>

        <div id="languages" className="page">
          <h2>Known Language</h2>
          <KnowLanguagesTable />
        </div>
      </div>
    </section>
  );
}
