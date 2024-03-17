import React from "react";
import { stack as Menu } from "react-burger-menu";
import "./Menu.css";

function NavBar () {
  return (
    <div className="NavBar">
      <div className="menuBurger">
        <Menu>
          <a className="menu-item" href="/">
            🏒 - Accueil
          </a>
          <a className="menu-item" href="/destination">
            📊 - Statistique par équipe
          </a>
          <a className="menu-item" href="/login">
             💹- Classement NHL
          </a>
        </Menu>
      </div>
    </div>
  );
}

export default NavBar