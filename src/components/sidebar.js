import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from "../App.js";
import Art from "../Artpage.js";
import { slide as Menu } from "react-burger-menu";

class Side extends Component {
  render() {
    return (
      <Menu>
        <Router>
          <div>
            <ul className="navbar-nav mr-auto">
              <li>
                <Link to={"../App.js"} className="nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to={"../Artpage.js"} className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>

            <hr />
            <Switch>
              <Route exact path="../App.js" component={App} />
              <Route path="../Artpage.js" component={Art} />
            </Switch>
          </div>
        </Router>
      </Menu>
    );
  }
}

export default Side;

// import React from "react";
// import { slide as Menu } from "react-burger-menu";

// import { Link } from "react-router";

// export default props => {
//   return (
//     <Menu>
//       <a className="menu-item" href="/">
//         Home Page
//       </a>

//       <a className="menu-item" href="/Art">
//         Art and Projects
//       </a>

//       <a className="menu-item" href="/pizzas">
//         The Movement
//       </a>

//       <a className="menu-item" href="/desserts">
//         The Science Union
//       </a>

//       <a className="menu-item" href="/desserts">
//         The Knight Program
//       </a>

//       <a className="menu-item" href="/desserts">
//         The Nation
//       </a>

//       <a className="menu-item" href="/desserts">
//         Command
//       </a>
//     </Menu>
//   );
// };

// const routing = (
//   <Router>
//     <div>
//       <ul>
//         <li>
//           <Link to="../App">Home</Link>
//         </li>
//         <li>
//           <Link to="/Artpage">Users</Link>
//         </li>
//       </ul>
//       <Route exact path="/App" component={App} />
//       <Route path="/Artpage" component={Art} />
//     </div>
//   </Router>
// );

// ReactDOM.render(routing, document.getElementById("root"));
