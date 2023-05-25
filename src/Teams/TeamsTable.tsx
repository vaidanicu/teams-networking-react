import "./style.css";

export function TeamsTable(props) {
  console.log("props", props);
  return (
    <form id="editForm" action="" method="post" className={props.loading ? "loading-mask" : ""}>
      <table id="teams">
        <thead>
          <tr>
            <th>Group</th>
            <th>Members</th>
            <th>Project Name</th>
            <th>Project URL</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.teams.map(({ promotion, members, name, url, id }) => (
            <tr key={id}>
              <td>{promotion}</td>
              <td>{members}</td>
              <td>{name}</td>
              <td>
                <a href={url} target="_blank">
                  {url.replace("https://github.com", "")}
                </a>
              </td>
              <td>
                <a className="removeBtn">&#10006</a>
                <a className="edit-btn">&#9998</a>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>
              <input type="text" placeholder="Enter Group" name="promotion" id="promotion" required />
            </td>
            <td>
              <input type="text" placeholder="Enter Members" name="members" id="members" required />
            </td>
            <td>
              <input type="text" placeholder="Enter Project Name" name="name" id="name" required />
            </td>
            <td>
              <input type="text" placeholder="Project URL" name="url" id="url" required />
            </td>
            <td>
              <button type="submit" title="Save">
                💾
              </button>
              <button type="reset" title="Cancel">
                ✖️
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </form>
  );
}

export function TeamsTableWrapper() {
  const teams = [
    {
      id: "toze8j1610313009673",
      promotion: "html",
      members: "Nicolae Matei, HTML",
      name: "Web Presentation",
      url: "https://github.com/nmatei/web-intro-presentation"
    },
    {
      id: "ezabnf1630345987541",
      promotion: "css",
      members: "Nicolae",
      name: "Names",
      url: "https://github.com/nmatei/nmatei.github.io"
    },
    {
      id: "86mq81630347385708",
      promotion: "js",
      members: "Matei, Andrei",
      name: "JS/HTML/CSS Quiz",
      url: "https://github.com/nmatei/simple-quiz-app"
    },
    {
      id: "w2aal1630347411901",
      promotion: "js",
      members: "FastTrackIT Students, Nicolae",
      name: "Teams Networking",
      url: "https://github.com/nmatei/teams-networking"
    },
    {
      id: "w2aal1630347411902",
      promotion: "react",
      members: "FastTrackIT Students, Nicolae",
      name: "Teams Networking React",
      url: "https://github.com/nmatei/teams-networking-react"
    }
  ];
  return (
    <>
      <TeamsTable teams={[]} loading={true} />
      <hr />
      <TeamsTable teams={[]} loading={false} />
      <hr />
      <TeamsTable teams={teams} loading={true} />
      {TeamsTable({ teams: teams, loading: true })}
      <hr />
      <TeamsTable teams={teams} loading={false} />
    </>
  );
}
