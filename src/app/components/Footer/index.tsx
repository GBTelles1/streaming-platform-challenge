import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.rights}>
        <span>© Flow 2023</span>
        <a href="#" className={styles.termsAndPrivacy}>
          Política de Privacidade
        </a>
        <a href="#" className={styles.termsAndPrivacy}>
          Termos de uso
        </a>
      </div>

      <div className={styles.developedBy}>
        <span>
          Desenvolvido por <strong>Netshow.me</strong>
        </span>
        <div className={styles.betaBadge}>BETA</div>
      </div>
    </footer>
  );
};
