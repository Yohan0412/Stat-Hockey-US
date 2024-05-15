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
          <a className="menu-item" href="/statjoueursparequipe">
            📊 - Statistique des joueurs par équipes
          </a>
          <a className="menu-item" href="/classement">
             💹- Classement NHL
          </a>
        </Menu>
      </div>
    </div>
  );
}

export default NavBar