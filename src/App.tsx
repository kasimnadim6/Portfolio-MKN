import styles from './App.module.scss';
import Header from './Layouts/Header/Header';
import Email from './Components/UI/Email';
import SocialIcons from './Components/UI/SocialIcons';
import Home from './Pages/Home/Home';
import About from './Components/About/About';

function App() {
  return (
    <>
      <Header />
      <SocialIcons />
      <Email />
      <main className={styles.main}>
        <Home />
        <About />
      </main>
    </>
  );
}

export default App;
