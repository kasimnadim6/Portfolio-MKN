import styles from './Home.module.scss';

const Home = () => {
  return (
    <section className={styles['about-section']}>
      <span className={styles['what-is-my-name']}>Hi, My name is</span>
      <div className={styles.intro}>
        <h1 className={styles.name}>M. Kasim Nadim.</h1>
        <h2 className={`${styles['work-info']} text-background-clip`}>
          I build things for the <span className={styles.web}>Web.</span>
        </h2>
      </div>
      <div className={`${styles.tagline}`}>
        I’m a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I’m focused on
        building accessible, human-centered products at Upstatement.
      </div>
      <button className={styles['contact-me']}>Contact Me</button>
    </section>
  );
};

export default Home;
