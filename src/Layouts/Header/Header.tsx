import { useState } from 'react';
import styles from './Header.module.scss';
const Header = () => {
  let prevScroll = window.scrollY || document.documentElement.scrollTop;
  let curScroll: number;
  let direction = '';
  let prevDirection = '';
  const [hideHeader, setHideHeader] = useState(false);
  const [navBarIsActive, setNavBarIsActive] = useState(false);

  const burgerClickHandler = () => {
    setNavBarIsActive((val) => !val);
  };

  const toggleHeader = () => {
    if (direction === 'down' && curScroll > 60) {
      setHideHeader(true);
      prevDirection = direction;
    } else if (direction === 'up') {
      setHideHeader(false);
      prevDirection = direction;
    }
  };
  const checkScroll = () => {
    curScroll = window.scrollY || document.documentElement.scrollTop;
    if (curScroll > prevScroll) {
      direction = 'down';
    } else {
      direction = 'up';
    }
    if (direction !== prevDirection) {
      toggleHeader();
    }
    prevScroll = curScroll;
  };
  window.addEventListener('scroll', checkScroll);
  return (
    <header className={`${hideHeader ? styles.hide : ''}`}>
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
    </header>
  );
};

export default Header;
