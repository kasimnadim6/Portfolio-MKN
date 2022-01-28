import About from '../../Components/About/About';
import Header from '../../Layouts/Header/Header';
import styles from './Home.module.scss';
import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  WhatsappLogo,
} from 'phosphor-react';
const Home = () => {
  return (
    <>
      {/* <header className={styles.header}> */}
      <Header />
      {/* </header> */}
      <div className={styles['social-icons']}>
        <ul>
          <li>
            <a href="linkedin.com" className={styles.linkedin}>
              <LinkedinLogo weight="fill" />
            </a>
          </li>
          <li>
            <a href="whatsapp.com" className={styles.whatsapp}>
              <WhatsappLogo weight="fill" />
            </a>
          </li>
          <li>
            <a href="github.com" className={styles.github}>
              <GithubLogo weight="fill" />
            </a>
          </li>
          <li>
            <a href="instagram.in" className={styles.instagram}>
              <InstagramLogo weight="fill" />
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.email}>
        <a href="#">kasimnadim6@gmail.com</a>
      </div>
      <main className={styles.main}>
        <About />
      </main>
    </>
  );
};

export default Home;
