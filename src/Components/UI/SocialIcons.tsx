import styles from './SocialIcons.module.scss';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faWhatsapp,
  faGithub,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const SocialIcons = () => {
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
  return ReactDOM.createPortal(
    <ul>
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
    </ul>,
    document.getElementById('social-icons') as HTMLElement
  );
};

export default SocialIcons;
