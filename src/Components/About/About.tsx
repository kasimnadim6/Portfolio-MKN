import styles from './About.module.scss';
import profile from '../../assets/images/profile.jpg';
import Tilt from 'react-tilt';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <h2 className={styles['about-header']}>About Me</h2>
      <div className={styles['about-body']}>
        <div className={styles['info']}>
          <p>
            Hey! My name is Mahammad Kasim Nadim and I enjoy creating things
            that live on the internet. My interest in web development started
            back in 2016 when I decided to learn HTML, CSS, Javascript from{' '}
            <a
              href="https://www.w3schools.com/"
              rel="noreferrer"
              target="_blank"
            >
              w3schools.
            </a>
          </p>
          <p>
            Fast-forward to today, I'am an Ex Mindtree Mind and currently
            working for Cognizant. I’ve had the privilege of working in real
            time project from scratch which gave me a big picture in overall
            development process.
          </p>
          <p>
            I don’t like to define myself by the work I’ve done. I define myself
            by the work I want to do. Skills can be taught, personality is
            inherent. I prefer to keep learning, continue challenging myself,
            and do interesting things that matter.
          </p>
          <div className={styles['known-technologies']}>
            <h3 className={styles['sub-heading']}>
              Here are a few technologies I’ve been working with recently:
            </h3>
            <div className={styles['skills']}>
              <span>JavaScript</span>
              <span>TypeScript</span>
              <span>React</span>
              <span>Angular</span>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>Figma</span>
            </div>
          </div>
        </div>
        <figure className={styles['profile-container']}>
          <Tilt
            className={styles.Tilt}
            options={{ max: 20 }}
            style={{ height: 250, width: 250 }}
          >
            <img className={styles.profile} src={profile} alt="profile" />
          </Tilt>
          <div className={styles['image-border']}></div>
        </figure>
      </div>
    </section>
  );
};

export default About;
