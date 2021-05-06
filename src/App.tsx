import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./utils/App.css";
import SearchUsers from './views/SearchUsers';
import FindUser from './views/FindUser';
import UserView from './views/UserView';


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
