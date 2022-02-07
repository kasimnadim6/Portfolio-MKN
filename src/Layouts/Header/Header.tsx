import { useState } from 'react';
import styles from './Header.module.scss';

const Header = () => {
  let prevScroll = window.scrollY || document.documentElement.scrollTop;
  let curScroll: number;
  let direction = '';
  let prevDirection = '';
  const [hideHeader, setHideHeader] = useState(false);
  const [showShadow, setShowShadow] = useState(false);
  const [navBarIsActive, setNavBarIsActive] = useState(false);

  const burgerClickHandler = () => {
    setNavBarIsActive((val) => !val);
  };

  const checkScroll = () => {
    curScroll = window.scrollY || document.documentElement.scrollTop;
    curScroll === 0 ? setShowShadow(false) : setShowShadow(true);
    if (curScroll > prevScroll) {
      direction = 'down';
    } else {
      direction = 'up';
    }
    if (direction !== prevDirection) {
      if (direction === 'down' && curScroll > 50) {
        setHideHeader(true);
        prevDirection = direction;
      } else if (direction === 'up') {
        setHideHeader(false);
        prevDirection = direction;
      }
    }
    prevScroll = curScroll;
  };
  window.addEventListener('scroll', checkScroll);
  const navigationHandler = (e: any) => {
    e.preventDefault();
    document.getElementById('about')?.scrollIntoView();
  };
  return (
    <header
      className={`${hideHeader ? styles.hide : ''} ${
        showShadow ? styles.shadow : ''
      }`}
    >
      <nav
        className={`${styles.nav} ${
          navBarIsActive ? styles['nav-bar-active'] : ''
        }`}
      >
        <div className={styles.logo}>KasimNadim</div>
        <ul className={styles['nav-links']}>
          <li>
            <a onClick={navigationHandler} href="/about">
              About
            </a>
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
