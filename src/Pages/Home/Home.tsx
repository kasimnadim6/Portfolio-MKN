import About from '../../Components/About/About';
import Header from '../../Layouts/Header/Header';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <>
      {/* <header className={styles.header}> */}
      <Header />
      {/* </header> */}
      <main className={styles.main}>
        <About />
      </main>
    </>
  );
};

export default Home;
