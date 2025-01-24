import { Slider } from './components/shared';
import { styles } from '@/styles';
import { useMutation } from '@tanstack/react-query';
import { ResponseSuccess, sendData } from './actions';
import {
  Footer,
  Header,
  IntroductionButtonGroup,
  IntroductionHeader,
} from '@components/page';

const App = () => {
  const mutation = useMutation<ResponseSuccess, Error, { eventType: string }>({
    mutationFn: async (body) => await sendData(body),
  });

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.box}>
          <IntroductionHeader />
          <IntroductionButtonGroup
            onDownload={() => mutation.mutate({ eventType: 'cv' })}
            onRedirectGithub={() => mutation.mutate({ eventType: 'github' })}
            onRedirectLinkedin={() =>
              mutation.mutate({ eventType: 'linkedin' })
            }
          />
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
