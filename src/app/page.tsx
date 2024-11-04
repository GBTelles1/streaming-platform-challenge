import styles from "./page.module.css";
import { HeroSection } from "./components/HeroSection";
import { CarouselSection } from "./components/CarouselSection";

export default async function Home() {
  return (
    <div className={styles.page}>
      <HeroSection />

      <div className={styles.carouselSections}>
        <CarouselSection sectionTitle={"Continuar reprodução"} />

        <CarouselSection
          extraClassName={styles.liveSection}
          sectionTitle={"Ao vivo"}
        />

        <CarouselSection sectionTitle={"Minha lista"} />

        <CarouselSection
          sectionTitle={"Flow Experience 2021"}
          videoFilter={"Flow Experience 2021"}
        />

        <CarouselSection sectionTitle={"Playlists"} />
      </div>
    </div>
  );
}
