import styles from './Header.module.scss';
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>KasimNadim</div>
      <nav>
        <ul>
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
      </nav>
    </header>
  );
};

export default Header;
