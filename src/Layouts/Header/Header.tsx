import { useState } from 'react';
import styles from './Header.module.scss';
const Header = () => {
  const [navBarIsActive, setNavBarIsActive] = useState(false);
  const burgerClickHandler = () => {
    setNavBarIsActive((val) => !val);
  };
  return (
    <nav
      className={`${styles.nav} ${
        navBarIsActive ? styles['nav-bar-active'] : ''
      }`}
    >
      <div className={styles.logo}>KasimNadim</div>
      <ul className={styles['nav-links']}>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Experience</a>
        </li>
        <li>
          <a href="/">Work</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
        <li>
          <a href="/">Resume</a>
        </li>
      </ul>
      <div className={styles.burger} onClick={burgerClickHandler}>
        <span className={styles['line-1']}></span>
        <span className={styles['line-2']}></span>
        <span className={styles['line-3']}></span>
      </div>
    </nav>
  );
};

export default Header;
