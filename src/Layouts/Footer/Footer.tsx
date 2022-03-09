import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.line}></div>
      <span className={styles['build-tag']}>
        Designed & Built by Mahammad Kasim Nadim
      </span>
    </footer>
  );
};
