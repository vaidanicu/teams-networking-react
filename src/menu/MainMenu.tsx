type Props = {
  active: string;
};

export default function MainMenu(props: Props) {
  return (
    <ul id="top-menu-bar">
      <li>
        <a href="#" data-page="home" className={props.active === "home" ? "active" : ""}>
          HOME
        </a>
      </li>
      <li>
        <a href="#" data-page="skills" className={props.active === "skills" ? "active" : ""}>
          Skills
        </a>
      </li>

      <li>
        <a href="#" data-page="teams" className={props.active === "teams" ? "active" : ""}>
          Projects
        </a>
      </li>
      <li>
        <a href="#" data-page="languages" className={props.active === "languages" ? "active" : ""}>
          Known Languages
        </a>
      </li>
    </ul>
  );
}
