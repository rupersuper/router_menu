import React from "react";
import { NavLink } from "react-router-dom";

const Menu: React.FC = () => {
  return (
    <nav className="menu">
      <NavLink
        className={({ isActive }) =>
          isActive ? "menu__item menu__item-active" : "menu__item"
        }
        to="/"
      >
        Главная
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "menu__item menu__item-active" : "menu__item"
        }
        to="/drift"
      >
        Дрифт-такси
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "menu__item menu__item-active" : "menu__item"
        }
        to="/timeattack"
      >
        Time Attack
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "menu__item menu__item-active" : "menu__item"
        }
        to="/forza"
      >
        Forza Karting
      </NavLink>
    </nav>
  );
};

export default Menu;
