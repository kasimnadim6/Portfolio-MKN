import styles from './Experience.module.scss';

const Experience = () => {
  return (
    <section id="experience" className={styles['experience']}>
      <h2 className={styles['experience-header']}>Where I've Worked</h2>
      <div className={styles['experience-body']}></div>
    </section>
  );
};

export default Experience;
