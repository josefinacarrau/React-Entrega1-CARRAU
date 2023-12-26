import React from "react";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav>
      <img className="logo" src="./public/img/logo.jpeg" alt="Logo" />
      <h1 className="title">Cimarronas</h1>
      <ul>
        <li>Inicio</li>
        <div class="dropdown" className="inline">
          <li
            class="dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Seleccionados
          </li>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">
              Selección Femenina
            </a>
            <a class="dropdown-item" href="#">
              Selección Sub 21
            </a>
            <a class="dropdown-item" href="#">
              Selección Masculina
            </a>
          </div>
        </div>
        <li>Programas</li>
        <li>Precios</li>
        <li>Contacto</li>
        <li>
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
