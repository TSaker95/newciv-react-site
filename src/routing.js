import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Art from "./Artpage";
ReactDOM.render(<App />, document.getElementById("root"));

const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/App">Home</Link>
        </li>
        <li>
          <Link to="/Artpage">Users</Link>
        </li>
      </ul>
      <Route exact path="/App" component={App} />
      <Route path="/Artpage" component={Art} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
