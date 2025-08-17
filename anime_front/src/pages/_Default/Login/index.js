import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export function SignIn() {
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
            <div className={styles.logoSubtitle}>Sistema de Gerenciamento</div>
          </div>
          
          <div className={styles.infoSection}>
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>📺</div>
              <div className={styles.infoText}>
                <h3>Organize seus Animes</h3>
                <p>Gerencie sua lista pessoal de animes e mangás favoritos</p>
              </div>
            </div>
            
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>⭐</div>
              <div className={styles.infoText}>
                <h3>Avalie e Comente</h3>
                <p>Compartilhe suas opiniões e descubra novos títulos</p>
              </div>
            </div>
            
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>🎯</div>
              <div className={styles.infoText}>
                <h3>Acompanhe Progresso</h3>
                <p>Monitore episódios assistidos e capítulos lidos</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Login Form */}
        <div className={styles.rightPanel}>
          <div className={styles.loginContainer}>
            <h2 className={styles.loginTitle}>Entrar</h2>
            
            <Form className={styles.loginForm}>
              <div className={styles.inputGroup}>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  className={styles.input}
                  required
                />
              </div>
              
              <div className={styles.inputGroup}>
                <Form.Control
                  type="password"
                  placeholder="Senha"
                  className={styles.input}
                  required
                />
              </div>
              
              <div className={styles.checkboxGroup}>
                <Form.Check
                  type="checkbox"
                  id="remember"
                  label="Lembrar de mim"
                  className={styles.checkbox}
                />
              </div>
              
              <Button type="submit" className={styles.loginButton}>
                Entrar
              </Button>
              
              <div className={styles.divider}>
                <span>ou</span>
              </div>
              
              <Link to="/register" className={styles.registerLink}>
                Criar nova conta
              </Link>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
