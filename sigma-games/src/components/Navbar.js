import React, { useState } from 'react';
import styles from './Navbar.module.css';
import logo from './logo.svg';
import lupa from './lupa.png';

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
                                    <a href="#inicio">Ofertas</a>
                                </li>
                            </div>
                            <li>
                                <a href="#quem">PC</a>
                            </li>
                            <li>
                                <a href="#quem">Xbox</a>
                            </li>
                            <li>
                                <a href="#areas-praticas">Playstation</a>
                            </li>
                            <li>
                                <a href="#areas-praticas">Nintendo</a>
                            </li>
                        </ul>
                    </nav>
                    <div className={styles.passwordContainer}>
                        <input
                                type={'text'}
                                id="busca"
                                placeholder="Buscar"
                                required
                        />
                        <a> <img
                                id="eye-icon"
                                src={lupa}
                                alt="Mostrar/Esconder"
                        /> </a>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Navbar;
