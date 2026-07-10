import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { FiMail, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';
import styles from './Contact.module.css';

const contactLinks = [
  {
    id: 'email',
    label: 'Email',
    value: 'lobaton.ivankarll@gmail.com',
    href: 'mailto:lobaton.ivankarll@gmail.com',
    icon: <FiMail size={20} />,
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'github.com/ivankarll',
    href: 'https://github.com/ivankarll',
    icon: <FiGithub size={20} />,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/ivankarllobaton',
    href: 'https://linkedin.com/in/ivankarllobaton',
    icon: <FiLinkedin size={20} />,
  },
];

const Contact = () => {
  const { ref, inView } = useScrollAnimation();
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      )
      .then(() => {
        setStatus('sent');
        formRef.current?.reset();
      })
      .catch(() => {
        setStatus('error');
      });
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className="container" ref={ref}>

        {/* Section Header */}
        <div className={`${styles.header} ${inView ? styles.visible : ''}`}>
          <span className="section-tag">// get in touch</span>
          <h2 className="section-title">Contact Me</h2>
          <p className="section-subtitle">
            Have a question or want to work together? Drop me a message!
          </p>
        </div>

        {/* Two-column: form + contact links */}
        <div className={`${styles.grid} ${inView ? styles.gridVisible : ''}`}>

          {/* Contact Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className={styles.form}
            noValidate
          >
            <div className={styles.field}>
              <label htmlFor="contact-name" className={styles.label}>Name</label>
              <input
                id="contact-name"
                name="from_name"
                type="text"
                placeholder="Your name"
                className={styles.input}
                required
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="contact-email" className={styles.label}>Email</label>
              <input
                id="contact-email"
                name="reply_to"
                type="email"
                placeholder="your@email.com"
                className={styles.input}
                required
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="contact-message" className={styles.label}>Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                placeholder="What's on your mind?"
                className={styles.textarea}
                required
              />
            </div>
            <button
              id="contact-submit"
              type="submit"
              className={styles.submit}
              disabled={status === 'sending' || status === 'sent'}
            >
              <FiSend size={16} />
              {status === 'sending' ? 'Sending…'
                : status === 'sent' ? '✓ Message Sent!'
                  : status === 'error' ? '✗ Failed — Try Again'
                    : 'Send Message'}
            </button>
            {status === 'error' && (
              <p className={styles.errorMsg}>
                Something went wrong. Please email me directly at{' '}
                <a href="mailto:lobaton.ivankarll@gmail.com">lobaton.ivankarll@gmail.com</a>.
              </p>
            )}
          </form>

          {/* Contact Links */}
          <div className={styles.links}>
            <p className={styles.linksIntro}>
              Prefer to reach out directly? Find me here:
            </p>
            {contactLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target={link.id !== 'email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                <span className={styles.contactIcon}>{link.icon}</span>
                <div>
                  <p className={styles.contactLabel}>{link.label}</p>
                  <p className={styles.contactValue}>{link.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
