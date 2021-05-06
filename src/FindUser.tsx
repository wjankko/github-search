import { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import useFindUser from "./hooks/useFindUser";
import "./utils/App.css";
import { TUser } from "./utils/types";
import { useDebounce } from "use-lodash-debounce";

function FindUser() {
  const history = useHistory();
  const handleOnClick = useCallback(
    (user) => history.push({ pathname: "/UserView", state: { user } }),
    [history]
  );

  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 1000);
  const { users, loading, error } = useFindUser(debouncedQuery);

  function handleSearch(e: React.FormEvent<HTMLInputElement>) {
    setQuery(e.currentTarget.value);
  }
  return (
    <div className="App">
      <div className="center">
        <label htmlFor="findUsers">Search:</label>
        <input
          id="findUsers"
          type="text"
          value={query}
          onChange={(e: React.FormEvent<HTMLInputElement>) => handleSearch(e)}
        ></input>
      </div>
      <table className="center">
        <tbody>
          <tr>
            <th>Id</th>
            <th>Login</th>
          </tr>
          {users.map((user: TUser) => {
            return (
              <tr onClick={() => handleOnClick(user)} key={user.id}>
                <td >{user.id}</td>
                <td >{user.login}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="center">{loading && "Loading users..."}</div>
      <div className="center">{error && error.toString()}</div>
    </div>
  );
}

export default FindUser;
