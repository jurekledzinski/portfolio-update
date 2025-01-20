import { styles } from '@/styles';
import {
  Footer,
  Header,
  IntroductionButtonGroup,
  IntroductionHeader,
} from '@components/page';
import { Slider } from './components/shared';

const App = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.box}>
          <IntroductionHeader />
          <IntroductionButtonGroup />
        </div>
        <div className={styles.box}>
          <header className={styles.header}>
            <h3 className={styles.subTitle}>Projects</h3>
          </header>
          <Slider />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
