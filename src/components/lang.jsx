import Tool from './tool'
import React from 'react'
import { motion } from 'framer-motion'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
}

const heading = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 16 } },
}

export default function Lang() {
  return (
    <motion.div
      className="tools_container"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
    >
      <motion.p className="tool_title" variants={heading}>
        Tools & Technologies
      </motion.p>

      <motion.p className="tool_sub" variants={heading}>
        I love using so many tools to make my work easier. Here are some of them.
      </motion.p>

      <motion.p className="tools_sub_title" variants={heading}>
        Frontend & Backend
      </motion.p>

      <motion.div className="dev" variants={container}>
        <motion.div variants={item}><Tool img="react-original.svg" name="React" /></motion.div>
        <motion.div variants={item}><Tool img="qt-original.svg" name="Qt" /></motion.div>
        <motion.div variants={item}><Tool img="php-original.svg" name="php" /></motion.div>
        <motion.div variants={item}><Tool img="mysql-original.svg" name="MySQL" /></motion.div>
        <motion.div variants={item}><Tool img="opencv-original.svg" name="OpenCV" /></motion.div>
        <motion.div variants={item}><Tool img="mariadb-original.svg" name="MariaDB" /></motion.div>
        <motion.div variants={item}><Tool img="markdown-original.svg" name="Markdown" /></motion.div>
        <motion.div variants={item}><Tool img="matplotlib-original.svg" name="Matplotlib" /></motion.div>
        <motion.div variants={item}><Tool img="javascript-original.svg" name="JavaScript" /></motion.div>
        <motion.div variants={item}><Tool img="html5-original.svg" name="HTML5" /></motion.div>
        <motion.div variants={item}><Tool img="flask-original.svg" name="Flask" /></motion.div>
        <motion.div variants={item}><Tool img="css3-original.svg" name="CSS3" /></motion.div>
        <motion.div variants={item}><Tool img="framermotion-original.svg" name="Framer Motion" /></motion.div>
        <motion.div variants={item}><Tool img="c-original.svg" name="C" /></motion.div>
        <motion.div variants={item}><Tool img="bootstrap-original.svg" name="Bootstrap" /></motion.div>
        <motion.div variants={item}><Tool img="react-router.svg" name="React Router" /></motion.div>
        <motion.div variants={item}><Tool img="next.svg" name="Next.js" /></motion.div>
      </motion.div>

      <motion.p className="tools_sub_title" variants={heading}>
        Development Tools
      </motion.p>

      <motion.div className="tools" variants={container}>
        <motion.div variants={item}><Tool img="vitejs-original.svg" name="Vite" /></motion.div>
        <motion.div variants={item}><Tool img="vscode-original.svg" name="VS Code" /></motion.div>
        <motion.div variants={item}><Tool img="ubuntu-original.svg" name="Ubuntu" /></motion.div>
        <motion.div variants={item}><Tool img="postman-original.svg" name="Postman" /></motion.div>
        <motion.div variants={item}><Tool img="npm-original.svg" name="npm" /></motion.div>
        <motion.div variants={item}><Tool img="netlify-original.svg" name="Netlify" /></motion.div>
        <motion.div variants={item}><Tool img="jupyter-original.svg" name="Jupyter" /></motion.div>
        <motion.div variants={item}><Tool img="googlecolab-original.svg" name="Google Colab" /></motion.div>
        <motion.div variants={item}><Tool img="github-original.svg" name="GitHub" /></motion.div>
        <motion.div variants={item}><Tool img="firefox-original.svg" name="Firefox" /></motion.div>
        <motion.div variants={item}><Tool img="figma-original.svg" name="Figma" /></motion.div>
        <motion.div variants={item}><Tool img="devicon-original.svg" name="Devicon" /></motion.div>
        <motion.div variants={item}><Tool img="anaconda-original.svg" name="Anaconda" /></motion.div>
        <motion.div variants={item}><Tool img="codex.png" name="Codex" /></motion.div>
        <motion.div variants={item}><Tool img="copilot.png" name="Github Copilot" /></motion.div>
        <motion.div variants={item}><Tool img="intelij.svg" name="IntelliJ IDEA" /></motion.div>
      </motion.div>
    </motion.div>
  )
}