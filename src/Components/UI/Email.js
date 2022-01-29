import styles from './SocialIcons.module.scss';
import ReactDOM from 'react-dom';

const Email = () => {
  return ReactDOM.createPortal(
    <div className={styles.email}>
      <a href="email.com">kasimnadim6@gmail.com</a>
    </div>,
    document.getElementById('email')
  );
};

export default Email;
