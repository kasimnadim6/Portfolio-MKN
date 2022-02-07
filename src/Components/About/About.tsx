import styles from './About.module.scss';
import profile from '../../assets/images/profile.jpg';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <h2 className={styles['about-header']}>About Me</h2>
      <div className={styles['about-body']}>
        <div className={styles['info']}>
          <p>
            Hello! My name is Mahammad Kasim Nadim and I enjoy creating things
            that live on the internet. My interest in web development started
            back in 2018 when I decided to try editing custom Tumblr themes —
            turns out hacking together a custom reblog button taught me a lot
            about HTML & CSS!
          </p>
          <p>
            Fast-forward to today, and I’ve had the privilege of working at an
            advertising agency, a start-up, a huge corporation, and a
            student-led design studio. My main focus these days is building
            accessible, inclusive products and digital experiences at Mindtree
            for a variety of clients.
          </p>
          <p>
            I also recently launched a course that covers everything you need to
            build a web app with the Spotify API using Node & React.
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
            </div>
          </div>
        </div>
        <figure className={styles['profile-container']}>
          <img className={styles.profile} src={profile} alt="profile" />
          <div className={styles['image-border']}></div>
        </figure>
      </div>
    </section>
  );
};

export default About;
