import React from "react";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home Page
      </a>

      <a className="menu-item" href="/burgers">
        Art and Projects
      </a>

      <a className="menu-item" href="/pizzas">
        The Movement
      </a>

      <a className="menu-item" href="/desserts">
        The Science Union
      </a>

      <a className="menu-item" href="/desserts">
        The Knight Program
      </a>

      <a className="menu-item" href="/desserts">
        The Nation
      </a>

      <a className="menu-item" href="/desserts">
        Command
      </a>
    </Menu>
  );
};
