import React, { useEffect, useRef, useState, Suspense } from 'react'
import { motion } from 'framer-motion'
const Spline = React.lazy(() => import('@splinetool/react-spline'))
import Lang from '../components/lang'

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const innerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.10 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 120, damping: 16 },
  },
}

export default function About() {
  const modelRef = useRef(null)
  const [showSpline, setShowSpline] = useState(false)

  useEffect(() => {
    const el = modelRef.current
    if (!el || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowSpline(true)
          } else {
            setShowSpline(false)
          }
        })
      },
      { root: null, rootMargin: '0px', threshold: 0.15 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="main-about">
      <div className="container">
        <img src="head-g.svg" id="about_gradient" alt="" loading="lazy" aria-hidden="true" />
        <div className="about">
          <motion.div
            className="about_text"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.22 }}
          >
            <motion.p className="about_title" variants={itemVariants}>
              A little bit about me
            </motion.p>

            <motion.p className="about_subtitle" variants={itemVariants}>
              Who I am and what I do.
            </motion.p>

            <motion.div className="about_texts" variants={innerVariants}>
              <motion.p className="about_text_title" variants={itemVariants}>
                WHO I AM
              </motion.p>

              <motion.p className="about_text_details" variants={itemVariants}>
                I’m Sandaruwan, a BSc ICT undergraduate based in Colombo, Sri Lanka 🇱🇰, focused on React and modern front-end development. I’m passionate about building clean, minimal, and user-friendly interfaces while continuously improving my technical and design skills.
              </motion.p>

              <motion.p className="about_text_title" variants={itemVariants}>
                WHAT I DO
              </motion.p>

              <motion.p className="about_text_details" variants={itemVariants}>
                I’m a trainee developer and BSc ICT student based in Colombo, Sri Lanka 🇱🇰. I’m currently working on an e-signature platform, strengthening my skills in React, JavaScript (ES6+), and CSS. I’ve built personal projects including a full-stack expense tracker, mini inventory system, weather app, and recipe book. I also have a foundation in C++ and Qt. I focus on writing clean, maintainable code and building simple, user-friendly interfaces.
              </motion.p>

              <motion.p className="about_text_title" variants={itemVariants}>
                WHAT I DID
              </motion.p>

              <motion.p className="about_text_details" variants={itemVariants}>
                Although I’m still learning and growing as a front-end developer, my personal projects have given me hands-on experience in building clean and user-friendly interfaces. This journey has helped me develop a strong sense of design and attention to detail, enabling me to create web applications that are both functional and visually appealing.
              </motion.p>

              <motion.p className="about_text_details" variants={itemVariants}>
                Let’s build something great,
              </motion.p>
            </motion.div>
          </motion.div>
          <div
            className="about_model"
            ref={modelRef}
            style={{ minHeight: 420, height: 420 }}
            aria-hidden={showSpline ? 'false' : 'true'}
          >
            {showSpline ? (
              <Suspense fallback={<div style={{width: '100%', height: '100%', background: 'transparent'}} /> }>
                <Spline scene="https://prod.spline.design/P0NjHBWqqbQ3AlPn/scene.splinecode" />
              </Suspense>
            ) : (
              // placeholder keeps layout stable while Spline is unloaded
              <div style={{ width: '100%', height: '100%' }} />
            )}
          </div>
        </div>
        <div className="signature">
          <img id="sign" src="sign.png" alt="Signature of Prabod Sandaruwan" loading="lazy" />
        </div>
        <div className="horizontal_line_about"></div>
        <Lang />
      </div>
      
    </section>
  )
}
