import MainMenu from "../menu/MainMenu";
import selfie from "../Pictures/2.jpg";

export default function AppHeader() {
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

      <MainMenu active="teams" />
    </header>
  );
}
