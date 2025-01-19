import styles from './IntroductionHeader.module.css';

export const IntroductionHeader = () => {
  return (
    <div className={styles.containerText}>
      <header>
        <h1 className={styles.title}>Hi,</h1>
        <h1 className={styles.title}>
          I'm <span className={styles.colored}>Jurek</span>
        </h1>
        <h1 className={styles.title}>Frontend developer</h1>
      </header>
      <p className={styles.text}>
        As a resultant implication, the understanding of the great significance
        of the entity integrity is regularly debated in the light of The Control
        of Adaptive Framework
      </p>
    </div>
  );
};
