import styles from './Contact.module.scss';

const Contact = () => {
  const whatsappMe = () => {
    window.open('https://wa.me/+918861321329', '_blank');
  };
  return (
    <section id="contact" className={styles['contact']}>
      <p className={styles['what-is-next']}>What's next ?</p>
      <h2 className={styles['contact-txt']}>Get In Touch</h2>
      <p className={styles['why-contact']}>
        Dropping a line to say g’day, or you have a question or just want to say
        hi or see if we can build something amazing together? I’d love to hear
        from you!
      </p>
      <button className={styles['contact-me']} onClick={whatsappMe}>
        Whatsapp Me
      </button>
    </section>
  );
};

export default Contact;
