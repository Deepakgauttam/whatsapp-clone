import React from "react";
import Sidebar from "./Sidebar";
import "./App.css";
import Chat from "./Chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <div className="app_body">
            <Sidebar />
            <Route exact path="/">
              <Chat />
            </Route>
            <Route path="/room/:roomId">
              <Chat />
            </Route>
          </div>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
