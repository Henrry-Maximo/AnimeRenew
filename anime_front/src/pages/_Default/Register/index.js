import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./register.module.css";
import { server } from "../../../http/index.js";

export function Register() {
  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function CreateUser() {
    try {
      const data = {
        usuario,
        email,
        password,
      };
      await server.post("/user", data);
      alert(`Usuário ${usuario} cadastrado com sucesso`);
    } catch (err) {
      alert(`Houve um erro: ${err}`);
    }
  }

  return (
    <div className={styles.container}>
      {/* Video Background */}
      <div className={styles.videoContainer}>
        <video autoPlay loop muted playsInline className={styles.backgroundVideo}>
          <source src="/chinsaw-man.mp4" type="video/mp4" />
        </video>
        <div className={styles.overlay}></div>
      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        {/* Left Panel - Info */}
        <div className={styles.leftPanel}>
          <div className={styles.logo}>
            <h1 className={styles.logoText}>
              <span className={styles.logoHighlight}>MyBest</span>
              <span className={styles.logoSecondary}>Anime</span>
            </h1>
            <div className={styles.logoSubtitle}>Junte-se à Comunidade</div>
          </div>
          
          <div className={styles.infoSection}>
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>🎌</div>
              <div className={styles.infoText}>
                <h3>Conta Gratuita</h3>
                <p>Crie sua conta e tenha acesso completo a todas as funcionalidades</p>
              </div>
            </div>
            
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>👥</div>
              <div className={styles.infoText}>
                <h3>Comunidade Ativa</h3>
                <p>Conecte-se com outros otakus e compartilhe suas experiências</p>
              </div>
            </div>
            
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>🔒</div>
              <div className={styles.infoText}>
                <h3>Dados Seguros</h3>
                <p>Suas informações são protegidas com criptografia avançada</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Register Form */}
        <div className={styles.rightPanel}>
          <div className={styles.registerContainer}>
            <h2 className={styles.registerTitle}>Criar Conta</h2>
            
            <Form className={styles.registerForm}>
              <div className={styles.inputGroup}>
                <Form.Control
                  type="text"
                  placeholder="Nome de usuário"
                  className={styles.input}
                  value={usuario}
                  onChange={(e) => setUsuario(e.target.value)}
                  required
                />
              </div>
              
              <div className={styles.inputGroup}>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  className={styles.input}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <div className={styles.inputGroup}>
                <Form.Control
                  type="password"
                  placeholder="Senha"
                  className={styles.input}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              
              <div className={styles.checkboxGroup}>
                <Form.Check
                  type="checkbox"
                  id="terms"
                  label="Aceito os termos de uso e política de privacidade"
                  className={styles.checkbox}
                  required
                />
              </div>
              
              <Button 
                type="button" 
                className={styles.registerButton}
                onClick={CreateUser}
              >
                Criar Conta
              </Button>
              
              <div className={styles.divider}>
                <span>ou</span>
              </div>
              
              <Link to="/" className={styles.loginLink}>
                Já tenho uma conta
              </Link>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
