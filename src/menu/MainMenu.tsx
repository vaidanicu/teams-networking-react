export default function MainMenu() {
  return (
    <ul id="top-menu-bar">
      <li>
        <a href="#" data-page="home">
          HOME
        </a>
      </li>
      <li>
        <a href="#" data-page="skills">
          Skills
        </a>
      </li>

      <li>
        <a href="#" data-page="teams" className="active">
          Projects
        </a>
      </li>
      <li>
        <a href="#" data-page="languages">
          Known Languages
        </a>
      </li>
    </ul>
  );
}
