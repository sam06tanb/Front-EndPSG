import React, { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";
import styles from "./Home.module.css";
import olhoFechado from "./imgHome/olho_fechado.png";
import olho from "./imgHome/olho.png";

function Home() {

  useEffect(() => {
    ScrollReveal().reveal("#home", {
      origin: "top",
      distance: "0px",
      duration: 1000,
      reset: false,
    });

  }, []);

  const [pagina, setPagina] = useState("login");
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const alterarPagina = (novaPagina) => {
    setPagina(novaPagina);
  };

  const togglePasswordVisibility = () => {
    setMostrarSenha((prevMostrar) => !prevMostrar);
  };

  return (
      <div id="home" className={styles.home}>
        <div id="form-header" className={styles.header}>
          <button id="loginBtn" className={`${styles.botaoDiv} ${pagina === "login" ? styles.botaoDivOn : ""} ${styles.botaoUnderline}`} onClick={() => alterarPagina("login")}>
            {" "}Login{" "}
          </button>
          <button id="cadastroBtn" className={`${styles.botaoDiv} ${pagina === "cadastro" ? styles.botaoDivOn : ""}`} onClick={() => alterarPagina("cadastro")}>
            <u>Cadastro</u>
          </button>
        </div>


        <div id="form-container" className={styles.box}>
          {pagina === "login" ? (

            <section className={styles.sessaoLogin} id="login">
              <input type="email" id="email" placeholder="Email" required />{" "}
              <br/> <br/>

              <div className={styles.passwordContainer}>
                <input type={mostrarSenha ? "text" : "password"} id="senha" placeholder="Senha" required/>
                <span className={styles.togglePassword} onClick={togglePasswordVisibility}>
                  <img id="eye-icon" src={mostrarSenha ? olhoFechado : olho} alt="Mostrar/Esconder"/>
                </span>
              </div>

              <br/>

              <button type="button" className={styles.botao}>
                Entrar
              </button>

              <br/> <br/>

              <div className={styles.esqueceuasenha}>
              <a href="#esqueceu"> Esqueceu a Senha? </a>
              </div>

            </section>

          ) : (

            <section className={styles.sessaoCadastro} id="cadastro">

              <input type="text" id="nome" placeholder="Nome" required /> <br />{" "}

              <br/>

              <input type="email" id="email" placeholder="Email" required/>{" "}

              <br/> <br/>

              <div className={styles.passwordContainer}>
                <input type={mostrarSenha ? "text" : "password"} id="senha" placeholder="Senha" required/>
                <span className={styles.togglePassword} onClick={togglePasswordVisibility}>
                  <img id="eye-icon" src={mostrarSenha ? olhoFechado : olho} alt="Mostrar/Esconder" />
                </span>
              </div>

              <br/>

              <button type="button" className={styles.botao}>
                Cadastrar
              </button>

              <br/>
            </section>
          )}
        </div>
      </div>
  );
} 

export default Home;
