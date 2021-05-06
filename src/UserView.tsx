import { useCallback } from 'react';
import { useLocation, useHistory } from "react-router-dom";
import { LocationState } from "./utils/types";

function UserView() {
  const location = useLocation<LocationState>();
  const state = location.state;
  const history = useHistory();
  const handleOnClick = useCallback(
    () => history.goBack(),
    [history]
  );
  return (
    <div className="App">
    <button type="button" onClick={() => handleOnClick()}>
      Go back
    </button>
      <table className="center">
        <tbody>
          {Object.entries(state.user).map(([_key, _value]) => {
            return (
              <tr key={_key}>
                <th>{[_key]}:</th>
                <td>{[_value]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default UserView;
