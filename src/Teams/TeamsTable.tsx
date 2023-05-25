import "./style.css";

export function TeamsTable() {
  return (
    <form id="editForm" action="" method="post">
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
