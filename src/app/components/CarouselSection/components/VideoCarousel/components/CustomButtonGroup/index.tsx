import styles from "./CustomButtonGroup.module.css";

type CustomButtonGroupAsArrowsProps = {
  next?: () => void;
  previous?: () => void;
};

export const CustomButtonGroupAsArrows = ({
  next,
  previous,
}: CustomButtonGroupAsArrowsProps) => {
  return (
    <div className={styles.buttonGroup}>
      <div>Ver mais</div>

      <button className={styles.prevNextButtons} onClick={previous}>
        <i className={`${styles.arrow} ${styles.left}`}></i>
      </button>

      <button className={styles.prevNextButtons} onClick={next}>
        <i className={`${styles.arrow} ${styles.right}`}></i>
      </button>
    </div>
  );
};
