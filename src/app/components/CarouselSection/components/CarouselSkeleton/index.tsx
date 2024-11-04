import styles from "./CarouselSkeleton.module.css";

export const CarouselSkeleton = () => {
  return (
    <div className={styles.card}>
      <div className={styles.thumbnail}>Loading...</div>

      <div className={styles.categoryTitle}>Loading...</div>

      <div>Loading...</div>
    </div>
  );
};
