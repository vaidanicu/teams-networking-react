import { useState } from "react";
import MainMenu from "../menu/MainMenu";
import selfie from "../Pictures/2.jpg";

export default function AppHeader() {
  const [active, setActive] = useState("teams");

  console.warn("render AppHeader", active);
  return (
    <header>
      <div id="header-wrapper">
        <div>
          <img src={selfie} />
        </div>
        <div id="header-info">
          <h1>Vaida Aurel Nicolae : {active}</h1>
          <h2>
            Student:
            <a target="_blank" href="https://fasttrackit.org/">
              {" "}
              FastTrackIt
            </a>
          </h2>
        </div>
      </div>

      <MainMenu
        active={active}
        setActive={page => {
          console.warn("active", page);
          setActive(page);
        }}
      />
    </header>
  );
}
