import React, { useContext, useRef } from 'react'
import { motion } from 'framer-motion'
import ProjectTool from './ProjectTool'
import './Project.css'
import useMagneticHover from '../hooks/useMagneticHover'
import { CursorContext } from '../context/CursorContext'

function Project({ data, title, description, liveUrl, image, tech }) {
    const project =
        data 
    const exploreButtonRef = useRef(null)
    const magneticButtonMotion = useMagneticHover(exploreButtonRef)
    const { setCursorDefault, setCursorHover } = useContext(CursorContext)

    const containerVariants = {
        hidden: { opacity: 0, y: 18 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.04, when: 'beforeChildren', duration: 0.35 } },
    }

    const itemVariant = { hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.22, ease: 'easeOut' } } }

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.99, y: 10 },
        visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.45, ease: 'circOut' } },
    }

    return (
        <motion.article className="project_container" aria-labelledby="project-title" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }} variants={containerVariants} whileHover={{ scale: 1.002 }}>
            <motion.div className="project_details" variants={itemVariant}>
                <header>
                    <div className="project_status">
                        <span className="dot" aria-hidden="true"></span>
                        <a href={project.live} className="project_link" target="_blank" rel="noopener noreferrer">
                            {project.status}
                        </a>
                    </div>
                    <h3 id="project-title" className="project_title">
                        {project.title}
                    </h3>
                </header>

                <p className="project_description">{project.description}</p>

                <motion.div className="project_tech" variants={itemVariant}>
                    <p className="project_tech_title">Used technologies</p>
                    <motion.ul className="project_tech_list" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.04 } } }}>
                        {(project.tech || []).map((t) => (
                            <motion.li key={t.name} className="project_tech_item" variants={itemVariant}>
                                <ProjectTool img={t.img} name={t.name} />
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>

                <motion.div className="project_actions" variants={itemVariant}>
                    <motion.a
                        ref={exploreButtonRef}
                        style={{ x: magneticButtonMotion.x, y: magneticButtonMotion.y }}
                        whileHover={{ y: -3, transition: { duration: 0.12 } }}
                        href={project.Url}
                        className="btn btn-ghost"
                        aria-label={`Explore ${project.title}`}
                    >
                        Explore
                        <svg className="btn-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </motion.a>
                </motion.div>
            </motion.div>

            <motion.figure
                className="project_image"
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                onMouseEnter={setCursorHover}
                onMouseLeave={setCursorDefault}
            >
                <motion.img src={project.image} alt={`${project.title} screenshot`} loading="lazy" variants={imageVariants} />
            </motion.figure>
        </motion.article>
    )
}

export default Project