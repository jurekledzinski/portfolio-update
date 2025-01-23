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
        With 2 years of experience in React.js, Javascript, TypeScript, CSS and
        SCSS, focused on creating user-friendly interfaces and exploring
        Next.js, Node.js, and MongoDB.
      </p>
    </div>
  );
};
