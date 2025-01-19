import { styles } from '@/styles';
import {
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
          <Slider />
        </div>
      </main>
    </>
  );
};

export default App;
