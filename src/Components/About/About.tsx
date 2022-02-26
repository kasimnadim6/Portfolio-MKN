import styles from './About.module.scss';
import profile from '../../assets/images/profile.jpg';
import SocialIcons from '../UI/SocialIcons';
import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  WhatsappLogo,
} from 'phosphor-react';
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
              <span>JavaScript</span>
              <span>TypeScript</span>
              <span>React</span>
              <span>Angular</span>
              <span>HTML5</span>
              <span>SASS</span>
              <span>Figma</span>
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
                  <LinkedinLogo weight="fill" />
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className={styles.whatsapp}
                  onClick={(e) => showProfileHandler(e, 'whatsapp')}
                >
                  <WhatsappLogo weight="fill" />
                </a>
              </li>
              <li>
                <a
                  href="github.com"
                  className={styles.github}
                  onClick={(e) => showProfileHandler(e, 'github')}
                >
                  <GithubLogo weight="fill" />
                </a>
              </li>
              <li>
                <a
                  href="instagram.in"
                  className={styles.instagram}
                  onClick={(e) => showProfileHandler(e, 'instagram')}
                >
                  <InstagramLogo weight="fill" />
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
