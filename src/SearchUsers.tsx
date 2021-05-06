import { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import useSearchUsers from "./hooks/useSearchUsers";
import "./utils/App.css";
import { TUser } from "./utils/types";
import { useEndlessScroll } from "./utils/utils";

function SearchUsers() {
  const history = useHistory();
  const handleOnClick = useCallback(
    (user) => history.push({ pathname: "/UserView", state: { user } }),
    [history]
  );

  const [sinceId, setSinceId] = useState(0);

  const { users, loading, error } = useSearchUsers(sinceId);
  function onReachBottom() {
    var lastId: number = users[users.length - 1].id;
    setSinceId(lastId);
  }
  const lastElementRef = useEndlessScroll(loading, onReachBottom);

  return (
    <div className="App">
      <table className="center">
        <tbody>
          <tr>
            <th>Id</th>
            <th>Login</th>
          </tr>
          {users.map((user: TUser, i: number) => {
            if (users.length === i + 1) {
              return (
                <tr
                  onClick={() => handleOnClick(user)}
                  ref={lastElementRef}
                  key={user.id}
                >
                  <td >{user.id}</td>
                  <td >{user.login}</td>
                </tr>
              );
            } else {
              return (
                <tr onClick={() => handleOnClick(user)} key={user.id}>
                  <td >{user.id}</td>
                  <td >{user.login}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
      <div className="center">{loading && "Loading users..."}</div>
      <div className="center">{error && error.toString()}</div>
    </div>
  );
}

export default SearchUsers;
