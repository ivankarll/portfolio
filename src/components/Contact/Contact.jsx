import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { FiMail, FiGithub, FiLinkedin, FiMapPin, FiSend, FiUser, FiMessageSquare } from 'react-icons/fi';
import { HiOutlineStatusOnline } from 'react-icons/hi';
import styles from './Contact.module.css';

// ─── EmailJS credentials (stored in .env — never committed to git) ──────────
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
// ────────────────────────────────────────────────────────────────────────────

const contactLinks = [
  {
    id: 'email',
    label: 'Email',
    value: 'lobaton.ivankarll@gmail.com',
    href: 'mailto:lobaton.ivankarll@gmail.com',
    icon: <FiMail size={22} />,
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'github.com/ivankarll',
    href: 'https://github.com/ivankarll',
    icon: <FiGithub size={22} />,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/ivankarllobaton',
    href: 'https://linkedin.com/in/ivankarllobaton',
    icon: <FiLinkedin size={22} />,
  },
];

const Contact = () => {
  const { ref, inView } = useScrollAnimation();
  const formRef = useRef(null);

  const [formData, setFormData] = useState({ from_name: '', reply_to: '', title: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!formData.from_name.trim()) e.from_name = 'Name is required.';
    if (!formData.reply_to.trim()) e.reply_to = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(formData.reply_to)) e.reply_to = 'Enter a valid email.';
    if (!formData.message.trim()) e.message = 'Message cannot be empty.';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    setStatus('sending');

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      );
      setStatus('success');
      setFormData({ from_name: '', reply_to: '', title: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className="container" ref={ref}>

        {/* Section Header */}
        <div className={`${styles.header} ${inView ? styles.visible : ''}`}>
          <span className="section-tag">// get in touch</span>
          <h2 className="section-title">Contact Me</h2>
          <p className="section-subtitle">
            Have a question or want to work together? Reach out — I'd love to hear from you!
          </p>
        </div>

        {/* Main grid: profile card | form + links */}
        <div className={`${styles.grid} ${inView ? styles.gridVisible : ''}`}>

          {/* Left — Profile card */}
          <div className={styles.profileCard}>
            <div className={styles.photoWrap}>
              <img
                src={`${import.meta.env.BASE_URL}images/Lobaton-Ivan%20Karl%20L-9198.jpg`}
                alt="Ivan Karl Lobaton"
                className={styles.photo}
              />
            </div>
            <h3 className={styles.profileName}>Ivan Karl Lobaton</h3>
            <p className={styles.profileTitle}>Computer Engineer</p>
            <div className={styles.profileMeta}>
              <span className={styles.metaItem}>
                <FiMapPin size={14} />
                Hinigaran, Negros Occidental, PH
              </span>
              <span className={`${styles.metaItem} ${styles.available}`}>
                <HiOutlineStatusOnline size={15} />
                Open to Opportunities
              </span>
            </div>
            <p className={styles.profileBio}>
              I'm passionate about building intelligent systems and bringing them to life
              through clean, interactive interfaces. Whether it's a quick question or a
              collaboration proposal — my inbox is always open.
            </p>

            {/* Contact links */}
            <div className={styles.links}>
              {contactLinks.map((link, i) => (
                <a
                  key={link.id}
                  href={link.href}
                  target={link.id !== 'email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                  style={{ transitionDelay: `${0.15 + i * 0.1}s` }}
                >
                  <span className={styles.contactIcon}>{link.icon}</span>
                  <div>
                    <p className={styles.contactLabel}>{link.label}</p>
                    <p className={styles.contactValue}>{link.value}</p>
                  </div>
                  <span className={styles.arrow}>→</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right — Contact form */}
          <div className={`${styles.formCard} ${inView ? styles.formVisible : ''}`}>
            <h3 className={styles.formTitle}>
              <FiSend size={18} /> Send a Message
            </h3>

            <form ref={formRef} onSubmit={handleSubmit} className={styles.form} noValidate>
              {/* Name */}
              <div className={`${styles.field} ${errors.from_name ? styles.fieldError : ''}`}>
                <label htmlFor="contact-name" className={styles.label}>
                  <FiUser size={14} /> Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  placeholder="e.g. Juan Dela Cruz"
                  className={styles.input}
                  autoComplete="name"
                />
                {errors.from_name && <span className={styles.errorMsg}>{errors.from_name}</span>}
              </div>

              {/* Email */}
              <div className={`${styles.field} ${errors.reply_to ? styles.fieldError : ''}`}>
                <label htmlFor="contact-email" className={styles.label}>
                  <FiMail size={14} /> Your Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="reply_to"
                  value={formData.reply_to}
                  onChange={handleChange}
                  placeholder="e.g. juandc@example.com"
                  className={styles.input}
                  autoComplete="email"
                />
                {errors.reply_to && <span className={styles.errorMsg}>{errors.reply_to}</span>}
              </div>

              {/* Subject */}
              <div className={styles.field}>
                <label htmlFor="contact-subject" className={styles.label}>
                  Subject <span className={styles.optional}>(optional)</span>
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="e.g. Project Collaboration"
                  className={styles.input}
                />
              </div>

              {/* Message */}
              <div className={`${styles.field} ${errors.message ? styles.fieldError : ''}`}>
                <label htmlFor="contact-message" className={styles.label}>
                  <FiMessageSquare size={14} /> Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or inquiry…"
                  className={`${styles.input} ${styles.textarea}`}
                />
                {errors.message && <span className={styles.errorMsg}>{errors.message}</span>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className={`${styles.submitBtn} ${status === 'sending' ? styles.sending : ''}`}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? (
                  <><span className={styles.spinner} /> Sending…</>
                ) : (
                  <><FiSend size={16} /> Send Message</>
                )}
              </button>

              {/* Feedback banners */}
              {status === 'success' && (
                <div className={`${styles.banner} ${styles.bannerSuccess}`}>
                  ✅ Message sent! I'll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className={`${styles.banner} ${styles.bannerError}`}>
                  ❌ Something went wrong. Please try again or email me directly.
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
