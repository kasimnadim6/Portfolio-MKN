import styles from './About.module.scss';
import profile from '../../assets/images/kasim.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngular,
  faFigma,
  faGithub,
  faHtml5,
  faInstagram,
  faJs,
  faLinkedin,
  faReact,
  faSass,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

const About = () => {
  const showProfileHandler = (e, profile) => {
    e.preventDefault();
    switch (profile) {
      case 'linkedin':
        window.open('https://linkedin.com/in/iamkasimnadim', '_blank');
        break;
      case 'whatsapp':
        window.open('https://wa.me/8861321329', '_blank');
        break;
      case 'github':
        window.open('https://github.com/kasimnadim6', '_blank');
        break;
      case 'instagram':
        window.open('https://www.instagram.com/kasim_nadim/', '_blank');
        break;
      default:
        break;
    }
  };
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
              <span className={styles['javascript']}>
                JavaScript
                <FontAwesomeIcon icon={faJs} />
              </span>
              {/* <span>
                TypeScript
                <FontAwesomeIcon icon={faHome} className={styles['javascript']} />
              </span> */}
              <span className={styles['react']}>
                React
                <FontAwesomeIcon icon={faReact} />
              </span>
              <span className={styles['angular']}>
                Angular
                <FontAwesomeIcon icon={faAngular} />
              </span>
              <span className={styles['html']}>
                HTML5
                <FontAwesomeIcon icon={faHtml5} />
              </span>
              <span className={styles['sass']}>
                SASS
                <FontAwesomeIcon icon={faSass} />
              </span>
              <span className={styles['figma']}>
                Figma
                <FontAwesomeIcon icon={faFigma} />
              </span>
            </div>
          </div>
        </div>
        <div className={styles['profile-container']}>
          <div className={styles.card}>
            <div className={styles['card-image']}>
              <img src={profile} alt="profile" />
            </div>
            <ul className={styles['social-icons']}>
              <li>
                <a
                  href="/"
                  className={styles.linkedin}
                  onClick={(e) => showProfileHandler(e, 'linkedin')}
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className={styles.whatsapp}
                  onClick={(e) => showProfileHandler(e, 'whatsapp')}
                >
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
              </li>
              <li>
                <a
                  href="github.com"
                  className={styles.github}
                  onClick={(e) => showProfileHandler(e, 'github')}
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li>
                <a
                  href="instagram.in"
                  className={styles.instagram}
                  onClick={(e) => showProfileHandler(e, 'instagram')}
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
            </ul>
            <div className={styles['details']}>
              <h2>Mahammad Kasim Nadim</h2>
              <p>UI Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
