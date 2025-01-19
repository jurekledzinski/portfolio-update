import { Button, stylesButton } from '@/components/shared';
import { Header } from '@components/page';
import { styles } from '@/styles';
// import { faFile } from '@fortawesome/free-solid-svg-icons';
// import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const App = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.box}>
          <div className={styles.containerText}>
            <header>
              <h1 className={styles.title}>Hi,</h1>
              <h1 className={styles.title}>I'm Jurek</h1>
              <h1 className={styles.title}>Frontend developer</h1>
            </header>
            <p className={styles.text}>
              As a resultant implication, the understanding of the great
              significance of the entity integrity is regularly debated in the
              light of The Control of Adaptive Framework
            </p>
          </div>
          <div className={stylesButton.buttonGroup}>
            <Button className={stylesButton.buttonConfirm}>Cv</Button>
            <Button className={stylesButton.buttonConfirm}>Cv</Button>
            <Button className={stylesButton.buttonConfirm}>Cv</Button>
          </div>
        </div>
        <div className={styles.box}>2</div>
      </main>
    </>
  );
};

export default App;
