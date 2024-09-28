import React, { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "./logo.png";
import lupa from "./lupa.png";

function Navbar() {
  return (
    <div>
      <header>
        <div className={styles.interface}>
          <div className={styles.logo}>
            <a className="logo" href="index.html">
              <img src={logo} alt="Logo" />
            </a>
          </div>
          <nav className={styles.menu.desktop}>
            <ul className={styles.menu}>
              <div className={styles.homeLine}>
                <li>
                  <a href="#ofertas">Ofertas</a>
                </li>
              </div>
              <li>
                <a href="#PC">PC</a>
              </li>
              <li>
                <a href="#XBOX">Xbox</a>
              </li>
              <li>
                <a href="#Playstation">Playstation</a>
              </li>
              <li>
                <a href="#Nintendo">Nintendo</a>
              </li>
            </ul>
          </nav>
          <div className={styles.passwordContainer}>
            <input type={"text"} id="busca" placeholder="Buscar" required />
            <a href="https://google.com" target="blank_">
              <img id="eye-icon" src={lupa} alt="Mostrar/Esconder" />{" "}
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
