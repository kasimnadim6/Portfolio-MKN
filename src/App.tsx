import styles from './App.module.scss';
import Header from './Layouts/Header/Header';
import Email from './Components/UI/Email';
import SocialIcons from './Components/UI/SocialIcons';
import Home from './Pages/Home/Home';
import About from './Components/About/About';
import Experience from './Components/Experience/Experience';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <SocialIcons />
      <Email />
      <main className={styles.main}>
        <Home />
        <About />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;
