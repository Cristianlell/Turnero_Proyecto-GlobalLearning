import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles.css";
import logo from "../assets/img/icon-nobg.png";

function Header() {
  // Define el estado para controlar si el menú está abierto o cerrado en pantallas pequeñas
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header id="header" className="fixed-top bg-white shadow-md">
      <div className="container flex items-center justify-center md:justify-around">
        <h1 className="logo text-md font-bold">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </h1>
        {/* Menú para pantallas grandes */}
        <nav id="navbar" className="navbar hidden md:flex justify-center">
          <ul className="flex flex-row space-x-4 text-lg"> {/* Tamaño de fuente aumentado */}
            <li><Link className="text-blue-600 hover:text-blue-800 transition-all duration-200 ease-in-out" to="/">Inicio</Link></li>
            <li><Link className="text-blue-600 hover:text-blue-800 transition-all duration-200 ease-in-out" to="#especialidades">Especialidades</Link></li>
            <li><Link className="text-blue-600 hover:text-blue-800 transition-all duration-200 ease-in-out" to="#studies">Estudios</Link></li>
            <li><Link className="text-blue-600 hover:text-blue-800 transition-all duration-200 ease-in-out" to="#doctors">Staff</Link></li>
            <li><Link className="text-blue-600 hover:text-blue-800 transition-all duration-200 ease-in-out" to="#footer">Contacto</Link></li>
          </ul>
        </nav>
        {/* Botón para pantallas pequeñas */}
        <div className="md:hidden">
          <i className="bi bi-list mobile-nav-toggle cursor-pointer" onClick={() => setMenuOpen(!isMenuOpen)}></i>
        </div>
        {/* Menú para pantallas pequeñas */}
        <nav className={`navbar md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col space-y-4 text-lg"> {/* Tamaño de fuente aumentado */}
            <li><Link className="text-blue-600 hover:text-blue-800 transition-all duration-200 ease-in-out" to="/">Inicio</Link></li>
            <li><Link className="text-blue-600 hover:text-blue-800 transition-all duration-200 ease-in-out" to="#especialidades">Especialidades</Link></li>
            <li><Link className="text-blue-600 hover:text-blue-800 transition-all duration-200 ease-in-out" to="#studies">Estudios</Link></li>
            <li><Link className="text-blue-600 hover:text-blue-800 transition-all duration-200 ease-in-out" to="#doctors">Staff</Link></li>
            <li><Link className="text-blue-600 hover:text-blue-800 transition-all duration-200 ease-in-out" to="#footer">Contacto</Link></li>
          </ul>
        </nav>
        <Link
          to="#appointment"
          className="md:ml-0 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-800 hover:to-blue-600 text-white py-2 px-6 rounded-full whitespace-nowrap transition duration-300 text-sm inline-block"
        >
          TURNOS
        </Link>
      </div>
    </header>
  );
}

export default Header;
