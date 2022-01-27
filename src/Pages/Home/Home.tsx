import About from '../../Components/About/About';
import Header from '../../Layouts/Header/Header';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <About />
      </main>
    </div>
  );
};

export default Home;
