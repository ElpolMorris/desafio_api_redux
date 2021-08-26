import UserContainer from "./containers/users/Users";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import UserDelete from "./containers/user-delete/UserDelete";
import UserUpdate from "./containers/user-update/UserUpdate";
function App() {
  return (
    <div className="App container mx-auto">
      <Router>
        <Switch>
        <Route path="/delete/:id">
            <UserDelete />
          </Route>
          <Route path="/update/:id">
            <UserUpdate />
          </Route>
          <Route path="/">
            <UserContainer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
