import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  WhatsappLogo,
} from 'phosphor-react';
import styles from './SocialIcons.module.scss';
import ReactDOM from 'react-dom';

const SocialIcons = () => {
  return ReactDOM.createPortal(
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
    </div>,
    document.getElementById('social-icons')
  );
};

export default SocialIcons;
