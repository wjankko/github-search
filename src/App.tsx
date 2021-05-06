import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./utils/App.css";
import SearchUsers from './SearchUsers';
import FindUser from './FindUser';
import UserView from './UserView';


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/SearchUsers">List all users</Link>
            </li>
            <li>
              <Link to="/FindUser">Search for user</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/SearchUsers">
            <SearchUsers />
          </Route>
          <Route path="/FindUser">
            <FindUser />
          </Route>
          <Route path="/UserView">
            <UserView />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
