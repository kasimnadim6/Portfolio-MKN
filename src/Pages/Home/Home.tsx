import styles from './Home.module.scss';

const Home = () => {
  const sendEmailHandler = () => {
    window.open('mailto:kasimnadim6@gmail.com');
  };
  return (
    <section id="home" className={styles.home}>
      <span className={styles['what-is-my-name']}>Hey, My name is</span>
      <div className={styles.intro}>
        <h1 className={styles.name}>M. Kasim Nadim.</h1>
        <h2 className={`${styles['work-info']} text-background-clip`}>
          I build things for the <span className={styles.web}>Web.</span>
        </h2>
      </div>
      <div className={`${styles.tagline}`}>
        I’m a Front-End Web developer based in Mangalore specializing in
        building (and occasionally designing) exceptional digital experiences.
        Love to Design and Code.
      </div>
      <button className={styles['contact-me']} onClick={sendEmailHandler}>
        Contact Me
      </button>
      {/* <div className={styles.bubble}>
        <div className={styles['bubble-1']}></div>
        <div className={styles['bubble-2']}></div>
        <div className={styles['bubble-3']}></div>
      </div> */}
    </section>
  );
};

export default Home;
