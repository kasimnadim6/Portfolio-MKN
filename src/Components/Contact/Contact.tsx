import styles from './Contact.module.scss';

const Contact = () => {
  const sendEmailHandler = () => {
    window.open('https://wa.me/+918861321329', '_blank');
  };
  return (
    <section id="contact" className={styles['contact']}>
      <p className={styles['what-is-next']}>What's next ?</p>
      <h2 className={styles['contact-txt']}>Get In Touch</h2>
      <p className={styles['why-contact']}>
        Although I’m not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you!
      </p>
      <button className={styles['contact-me']} onClick={sendEmailHandler}>
        Say Hello
      </button>
    </section>
  );
};

export default Contact;
