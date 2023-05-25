import { TeamsTableWrapper } from "../Teams/TeamsTable";
import { SideMenu } from "../menu/SideMenu";
import { KnowLanguagesTable } from "./KnowLanguagesTable";

export function ContentWrapper() {
  return (
    <section id="content">
      <SideMenu />

      <div id="main">
        <div id="home" className="page" style={{ display: "none" }}>
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

        <div id="skills" className="page" style={{ display: "none" }}>
          <h2>Skills</h2>
          <ul id="skills-list"></ul>
        </div>

        <div id="projects" className="page" style={{ display: "block" }}>
          <div>
            <input type="search" name="search" id="search" placeholder="Search" />
          </div>
          <TeamsTableWrapper />
        </div>

        <div id="languages" className="page" style={{ display: "none" }}>
          <h2>Known Language</h2>
          <KnowLanguagesTable />
        </div>
      </div>
    </section>
  );
}
