import styles from './SocialIcons.module.scss';
import ReactDOM from 'react-dom';

const Email = () => {
  const sendEmailHandler = () => {
    window.open('mailto:kasimnadim6@gmail.com');
  };
  return ReactDOM.createPortal(
    <div className={styles.email}>
      <a href="email.com" onClick={sendEmailHandler}>
        kasimnadim6@gmail.com
      </a>
    </div>,
    document.getElementById('email') as HTMLElement
  );
};

export default Email;
