import React from "react";
import "./styles.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ImageGrid, Nav } from "./components/index";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav></Nav>

        <div className="container">
          <Switch>
            <Route exact path="/">
              <ImageGrid></ImageGrid>
            </Route>
            <Route path="/upload"></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
