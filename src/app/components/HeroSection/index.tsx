import Link from "next/link";
import styles from "./HeroSection.module.css";

export const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroSectionWrapper}>
        <div>Over the Cast</div>

        <div className={styles.contentTitle}>
          TikTok como inovação na era digital, com Rafael Kiso
        </div>

        <div className={styles.contentSubtitle}>
          Os principais desafios na priorização no desenvolvimento de novos
          produtos.
        </div>

        <Link href="#" className={styles.heroSectionButton}>
          Reproduzir agora
        </Link>
      </div>
    </section>
  );
};
