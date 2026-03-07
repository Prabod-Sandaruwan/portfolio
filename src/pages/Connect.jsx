import React, { useEffect, useRef, useState } from 'react'
import './Connect.css'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Connect() {
  const formRef = useRef(null)
  const [status, setStatus] = useState(null) // 'success' | 'error' | null
  const [sending, setSending] = useState(false)

  // Dynamically load EmailJS CDN if not present
  useEffect(() => {
    if (window.emailjs) {
      try { window.emailjs.init('d-mZyK9wTtMI2PKgq') } catch (e) {}
      return
    }

    const s = document.createElement('script')
    s.src = 'https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js'
    s.onload = () => {
      if (window.emailjs && window.emailjs.init) {
        window.emailjs.init('d-mZyK9wTtMI2PKgq')
      }
    }
    document.body.appendChild(s)

    return () => { document.body.removeChild(s) }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formRef.current) return
    setSending(true)
    setStatus(null)

    // Use EmailJS sendForm: serviceID, templateID, form, publicKey
    const serviceID = 'portfolio'
    const templateID = 'template_39qce9c'
    const publicKey = 'd-mZyK9wTtMI2PKgq'

    // prefer window.emailjs from CDN
    const emailjs = window.emailjs
    if (!emailjs || !emailjs.sendForm) {
      setSending(false)
      setStatus('error')
      return
    }

    emailjs.sendForm(serviceID, templateID, formRef.current, publicKey)
      .then(() => {
        setSending(false)
        setStatus('success')
        formRef.current.reset()
      }, (err) => {
        console.error('EmailJS error', err)
        setSending(false)
        setStatus('error')
      })
  }

  const formVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  }

  return (
    <section className='connect_container'>
      <img src="head-g.svg" alt="" className="connect_gradients" loading="lazy" aria-hidden="true" />
      <div className="connect_inner">
        <div className="connect_head">
          <p className="connect_title">Get in touch</p>
          <p className="connect_subtitle">Have a question or want to work together?</p>
        </div>

        <motion.div className="connect_form" initial="hidden" animate="visible" variants={formVariants}>
          <p className="form_title">New message</p>
          <form ref={formRef} onSubmit={handleSubmit} className="form_grid">
            <label className="field">
              <span className="label">Name</span>
              <input name="user_name" type="text" required />
            </label>

            <label className="field">
              <span className="label">Email</span>
              <input name="user_email" type="email" required />
            </label>

            <label className="field full">
              <span className="label">Subject</span>
              <input name="subject" type="text" />
            </label>

            <label className="field full">
              <span className="label">Message</span>
              <textarea name="message" rows="6" required></textarea>
            </label>

            <div className="actions full">
              <button type="submit" className="btn-primary" disabled={sending}>
                {sending ? 'Sending...' : 'Send Message'}
              </button>
            </div>

            {status === 'success' && <div className="notice success">Your message was sent — thank you!</div>}
            {status === 'error' && <div className="notice error">Failed to send. Please try again later.</div>}
          </form>
        </motion.div>

        <motion.div className="connect_links" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
          <a
            className="social_link"
            href="https://github.com/Prabod-Sandaruwan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open GitHub profile"
          >
            <span className="social_icon github"><FontAwesomeIcon icon={faGithub} /></span>
            <span className="social_label">GitHub</span>
          </a>

          <a
            className="social_link"
            href="mailto:sandaruwanhapudeniya@gmail.com"
            aria-label="Send an email"
          >
            <span className="social_icon email"><FontAwesomeIcon icon={faEnvelope} /></span>
            <span className="social_label">Email</span>
          </a>

          <a
            className="social_link"
            href="https://www.linkedin.com/in/sandaruwan-hapudeniya"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open LinkedIn profile"
          >
            <span className="social_icon linkedin"><FontAwesomeIcon icon={faLinkedin} /></span>
            <span className="social_label">LinkedIn</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
