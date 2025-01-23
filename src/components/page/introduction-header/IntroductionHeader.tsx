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
        With two years of experience in frontend development, I specialize in
        building dynamic, user-focused web applications using React.js,
        TypeScript, and SCSS, while actively expanding my skills in Next.js and
        backend technologies like Node.js and MongoDB.
      </p>
    </div>
  );
};
