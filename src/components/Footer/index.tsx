import styles from "./styles.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="#">Entenda como funciona a técnica Pomodoro</a>
      <div className={styles.disclaimer}>
        <p>Chronos Pomodoro © {new Date().getFullYear()}</p>
        <p>Feito com ❤️ por Patrik Rufino</p>
      </div>
    </footer>
  );
}
