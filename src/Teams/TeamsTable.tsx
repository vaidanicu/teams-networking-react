import React from "react";
import "./style.css";
import { deleteTeamRequest, loadTeamsRequest } from "./middleware";
type Team = {
  id?: string;
  promotion: string;
  members: string;
  name: string;
  url: string;
};

type Props = {
  loading: boolean;
  teams: Team[];
  removeTeam(id: string): void;
};

export function TeamsTable(props: Props) {
  console.log("props", props);
  return (
    <form id="editForm" action="" method="post" className={props.loading ? "loading-mask" : ""}>
      <table border={2} id="teams">
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
          {props.teams.map(({ id, promotion, members, name, url }) => {
            return (
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
                  <a
                    href="#"
                    onClick={() => {
                      console.log("click", id);
                      props.removeTeam(id!);
                    }}
                    className="removeBtn"
                  >
                    ✖️
                  </a>
                  <a className="edit-btn">🖊️</a>
                </td>
              </tr>
            );
          })}
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

export class TeamsTableWrapper extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      teams: []
    };
  }

  componentDidMount() {
    this.loadTeams();
  }
  async loadTeams() {
    const teams = await loadTeamsRequest();
    console.log(teams);
    this.setState({
      loading: false,
      teams
    });
  }

  render() {
    return (
      <TeamsTable
        loading={this.state.loading}
        teams={this.state.teams}
        removeTeam={async id => {
          this.setState({
            loading: true
          });
          await deleteTeamRequest(id);
          // this.loadTeams(); v1

          this.setState(state => {
            const teams = state.teams.filter(team => team.id !== id);
            return {
              loading: false,
              teams
            };
          });
        }}
      />
    );
  }
}
