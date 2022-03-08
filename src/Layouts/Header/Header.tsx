import { BaseSyntheticEvent, useState } from 'react';
import styles from './Header.module.scss';
import Resume from '../../assets/Resume.pdf';

const Header = () => {
  let prevScroll = window.scrollY || document.documentElement.scrollTop;
  let curScroll: number;
  let direction = '';
  let prevDirection = '';
  const [hideHeader, setHideHeader] = useState(false);
  const [showShadow, setShowShadow] = useState(false);
  const [mobileNavBarIsActive, setMobileNavBarIsActive] = useState(false);

  const burgerClickHandler = () => {
    const body = document.getElementsByTagName('body')[0];
    setMobileNavBarIsActive((val) => {
      val
        ? (body.style.overflow = 'visible')
        : (body.style.overflow = 'hidden');
      return !val;
    });
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

  const navigationHandler = (e: BaseSyntheticEvent) => {
    const target = e.target.textContent + '';
    e.preventDefault();
    setMobileNavBarIsActive(false);
    document.getElementById(target.toLowerCase())?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });
  };
  return (
    <header
      className={`${hideHeader ? styles.hide : ''} ${
        showShadow ? styles.shadow : ''
      }`}
    >
      <nav
        className={`${styles.nav} ${
          mobileNavBarIsActive ? styles['mobile-nav-bar'] : ''
        }`}
      >
        <div className={styles.logo}>🄺</div>
        <ul className={styles['nav-links']}>
          <li className="about">
            <a onClick={navigationHandler} href="/about">
              About
            </a>
          </li>
          <li className="experience">
            <a href="/Experience" onClick={navigationHandler}>
              Experience
            </a>
          </li>
          <li className="work">
            <a href="/work" onClick={navigationHandler}>
              Work
            </a>
          </li>
          <li className="contact">
            <a href="/Contact" onClick={navigationHandler}>
              Contact
            </a>
          </li>
          <li className={styles.resume}>
            <a href={Resume} className="btn" target="_blank" rel="noreferrer">
              Resume
            </a>
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
