import React from "react";
import "./style.css";

const Header: React.FC = () => (
  <header className="navbar">
    <div className="logo">
      <span className="logo-bold">WESLLEY</span>
      <span className="logo-orange"> ALANIZ</span>
    </div>
    <nav>
      <ul>
        <li>
          <a href="#inicio">Início</a>
        </li>
        <li>
          <a href="#sobre">Sobre</a>
        </li>
        <li>
          <a href="#projetos">Projetos</a>
        </li>
        <li>
          <a href="#contato">Contato</a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
