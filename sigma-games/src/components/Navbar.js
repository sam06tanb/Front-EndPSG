import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import styles from "./Navbar.module.css";
import logo from "./img/logo.png";
import lupa from "./img/lupa.png";

function Navbar() {
  useEffect(() => {
    ScrollReveal().reveal(".page-header", {
      origin: "top",
      distance: "100px",
      duration: 1000,
      reset: false,
    });
  }, []);

  return (
    <header className="page-header">
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
                <a href="#Ofertas">Ofertas</a>
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
          
          <input type="text" id="busca" placeholder="Buscar" required />
          
          <a href="https://google.com" target="blank_">
            <img id="eye-icon" src={lupa} alt="Mostrar/Esconder" />
          </a>

        </div>

      </div>
    </header>
  );
}

export default Navbar;
