import styles from './App.module.scss';
import Header from './Layouts/Header/Header';
import Email from './Components/UI/Email';
import SocialIcons from './Components/UI/SocialIcons';
import Home from './Pages/Home/Home';
import About from './Components/About/About';
import Experience from './Components/Experience/Experience';
import Contact from './Components/Contact/Contact';
import { useEffect, useRef } from 'react';
import { Footer } from './Layouts/Footer/Footer';

function App() {
  const sectionRef = useRef<String | null>('');

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav ul li');

    const navigationHandler = () => {
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight) {
          console.log(section.getAttribute('id'));
          sectionRef.current = section.getAttribute('id');
        }
      });
      navLinks.forEach((li) => {
        li.classList.remove(styles.active);
        if (li.classList.contains(sectionRef.current + '')) {
          li.classList.add(styles.active);
        }
      });
    };

    window.addEventListener('scroll', navigationHandler);
  }, []);
  return (
    <>
      <Header />
      <SocialIcons />
      <Email />
      <main className={styles.main}>
        <Home />
        <About />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
