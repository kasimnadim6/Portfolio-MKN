import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  WhatsappLogo,
} from 'phosphor-react';
import styles from './SocialIcons.module.scss';
import ReactDOM from 'react-dom';

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
    <div className={styles['social-icons']}>
      <ul>
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
    </div>,
    document.getElementById('social-icons') as HTMLElement
  );
};

export default SocialIcons;
