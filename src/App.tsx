import logo from "./logo.svg";
import "./App.css";
import selfie from "./Pictures/2.jpg";
import { AppFooter } from "./footer/components";
import MainMenu from "./menu/MainMenu";

function AppHeader() {
  return (
    <header>
      <div id="header-wrapper">
        <div>
          <img src={selfie} />
        </div>
        <div id="header-info">
          <h1>Vaida Aurel Nicolae</h1>
          <h2>
            Student:
            <a target="_blank" href="https://fasttrackit.org/">
              {" "}
              FastTrackIt
            </a>
          </h2>
        </div>
      </div>

      <MainMenu />
    </header>
  );
}

function ContentWrapper() {
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

function SideMenu() {
  return (
    <div id="side-menu">
      <section>
        <h2>Contact Form</h2>
        <form id="sectione-left-menu">
          <div id="Email">
            <label htmlFor="e">Email: </label>
            <input type="email" id="e" name="e," required placeholder="example@yahoo.com" />
          </div>
          <div id="UserName">
            <label htmlFor="n"> Name: </label>
            <input type="text" id="Name" name="na" required placeholder="Full Name" />
          </div>

          <div className="Contact-Us">
            <button>Contact us</button>
          </div>
        </form>
      </section>
    </div>
  );
}

function KnowLanguagesTable() {
  return (
    <table border={1}>
      <tr>
        <th>Language</th>
        <th>Level</th>
      </tr>
      <tr>
        <td>Romana</td>
        <td>Native-Language</td>
      </tr>
      <tr>
        <td>English</td>
        <td>B2</td>
      </tr>
      <tr>
        <td>Deutschland</td>
        <td>B2</td>
      </tr>
    </table>
  );
}

function App() {
  return (
    <>
      <AppHeader />;
      <ContentWrapper />
      <AppFooter />
    </>
  );
}

function OldApp() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
