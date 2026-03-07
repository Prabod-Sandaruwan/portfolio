import React from 'react'
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion'
import './pages.css'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const childUp = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
}

const childFade = {
  hidden: { y: 8, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
}

const buttonVariant = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 20 } },
}

const imageEntry = {
  hidden: { x: 80, opacity: 0, scale: 0.98 },
  visible: { x: 0, opacity: 1, scale: 1, transition: { duration: 0.9, ease: 'easeOut' } },
}

export default function Home() {
    return (
        <section id='home-main-container'>
          <img src="/head-g.svg" alt="" id="head-gradient-image" loading="lazy" aria-hidden="true" />
            <motion.div id="home-hero"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
                <div className="home-hero-text">
                    <motion.h1 className="home-hero-title" variants={childUp}>
                      Hi, I'm <span className="home-hero-name">Prabod Sandaruwan</span>
                    </motion.h1>

                    <motion.p className="type-text" variants={childFade}>
                        I'm a{' '}
                        <motion.span className="home-hero-typewriter" style={{display:'inline-block'}}>
                            <Typewriter
                                words={['Front-End Developer', 'BSc Undergraduate', 'React Developer']}
                                loop={true}
                                cursor
                                cursorStyle="|"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                                cursorColor="white"
                            />
                        </motion.span>
                    </motion.p>

                    <motion.p className="home-hero-subtitle" variants={childFade}>
                        I’m a Front-End Developer in training, building modern and responsive web applications while learning and growing my skills.
                    </motion.p>

                    <motion.a
                        className="home-hero-button"
                        variants={buttonVariant}
                        whileHover={{ scale: 1.05, boxShadow: '0 12px 30px rgba(96,165,250,0.18)' }}
                        whileTap={{ scale: 0.98 }}
                        aria-label="See my resume"
                        href='https://drive.google.com/file/d/1TmLO9bC5hpCD4k7FovIjoUaFLteH45Eq/view?usp=drive_link'
                        target="_blank"
                    >
                        See my resume
                    </motion.a>
                </div>

                <motion.div className="home-hero-image-container" variants={imageEntry}>
                <motion.img
                  src="/profile.webp"
                  alt="Profile photo of Prabod Sandaruwan"
                  loading="eager"
                  className="home-hero-img"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  whileHover={{ rotateX: 6, rotateY: -6, scale: 1.03, transition: { type: 'spring', stiffness: 200 } }}
                />
              </motion.div>
            </motion.div>
        </section>
    )
}
