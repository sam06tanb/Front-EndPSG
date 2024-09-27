import React, { useState } from 'react';
import styles from './Navbar.module.css';

function Navbar() {
    return (
        <div>
            <header>
                <div className={styles.interface}>
                    <div className={styles.logo}>
                        <a className="logo" href="index.html">
                            <img src=".\logo.png" alt="Logo" />
                        </a>
                    </div>
                    <nav className={styles.menu.desktop}>
                        <ul className={styles.menu}>
                            <div className={styles.homeLine}>
                                <li>
                                    <a href="#inicio">HOME</a>
                                </li>
                            </div>
                            <li>
                                <a href="#quem">NOSSA EQUIPE</a>
                            </li>
                            <li>
                                <a href="#areas-praticas">ÁREAS DE ATUAÇÃO</a>
                            </li>
                        </ul>
                    </nav>
                    <div className={styles.contato}>
                        <a href="contato.html" style={{ textDecoration: 'none' }}>
                            <button>Contato</button>
                        </a>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Navbar;
