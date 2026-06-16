import React from 'react'
import Project from "../components/Project"
import EventCard from "../components/EventCard"
import { motion } from 'framer-motion'

const eventsContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.06 } },
}

const headerVariant = { hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.36 } } }

function Work() {
  const projects = [
    {
      id: 'road-crack-01',
      status: 'need clone',
      title: 'Image Processing-Based Road Crack Detection System',
      description:
        'A dynamic video processing application built with Python and OpenCV that leverages digital image processing techniques to automate infrastructure defect detection. The system implements a robust spatial filtering pipeline—incorporating Gamma transformation, Laplacian sharpening, and adaptive morphological operations—to accurately isolate and highlight road cracks from video frames.',
      Url: 'https://github.com/Prabod-Sandaruwan/ip-road_crack_detection_system',
      live: "https://github.com/Prabod-Sandaruwan/ip-road_crack_detection_system",
      image: 'road.png',
      tech: [
        { img: 'python-original.svg', name: 'Python' },
        { img: 'opencv-original.svg', name: 'OpenCV' },
        { img: 'matplotlib-original.svg', name: 'Matplotlib' },
      ],
    },
    {
      id: 'premium-recipes-01',
      status: 'need clone',
      title: 'PremiumRecipes',
      description:
        'A dynamic, database-driven web application built with PHP and MySQL for exploring and managing culinary recipes. Features secure user authentication with encrypted password hashing, custom session management, and a functional contact form, all delivered through a responsive Bootstrap user interface.',
      Url: 'https://github.com/Prabod-Sandaruwan/ICT-2204-Recipe-book',
      live: "https://github.com/Prabod-Sandaruwan/ICT-2204-Recipe-book",
      image: 'recipe.png',
      tech: [
        { img: 'php-original.svg', name: 'PHP' },
        { img: 'mysql-original.svg', name: 'MySQL' },
        { img: 'css3-original.svg', name: 'CSS' },
      ],
    },
    {
      id: 'ceylon-01',
      status: 'live',
      title: 'Ceylon',
      description:
        'Ceylon is a modern tourism web application built with React that allows users to explore beautiful destinations in Sri Lanka. The app features smooth page transitions, interactive galleries for each location, and a fully responsive design to provide a fast and engaging browsing experience.',
      Url: 'https://github.com/Prabod-Sandaruwan/Ceylon',
      live: "https://ceylon-ps.netlify.app/",
      image: 'ceylon.png',
      tech: [
        { img: 'react-original.svg', name: 'React' },
        { img: 'react-router.svg', name: 'React Router' },
        { img: 'css3-original.svg', name: 'CSS' },
      ],
    },
    {
      id: 'expensify-01',
      status: 'Need clone',
      title: 'Expensify',
      description:
        'Expensify is a full-stack expense management application built using Spring Boot, React, and MySQL. It enables users to securely log in, add and manage expenses, categorize spending, and view summaries through an interactive dashboard with charts. The application features a responsive user interface and RESTful backend APIs, demonstrating modern full-stack development practices.',
      Url: 'https://github.com/Prabod-Sandaruwan/Expensify',
      live: 'https://github.com/Prabod-Sandaruwan/Expensify',
      image: 'expense.png',
      tech: [
        { img: 'react-original.svg', name: 'React' },
        { img: 'spring-original.svg', name: 'Spring Boot' },
        { img: 'mysql-original.svg', name: 'MySQL' },
      ],
    },
    {
      id: 'tasty-nest-01',
      status: 'live',
      title: 'Tasty Nest',
      description:
        'TastyNest is a responsive web application that helps users discover delicious recipes easily. It allows users to search recipes by name or browse by category while displaying detailed information such as ingredients, instructions, and images. The app uses the MealDB API to fetch real-time recipe data and provides a clean, user-friendly interface for an enjoyable cooking experience.',
      Url: 'https://github.com/Prabod-Sandaruwan/TastyNest',
      live: 'https://prabod-sandaruwan.github.io/TastyNest/',
      image: 'tasty.png',
      tech: [
        { img: 'html5-original.svg', name: 'HTML' },
        { img: 'javascript-original.svg', name: 'JavaScript' },
        { img: 'css3-original.svg', name: 'CSS' },
      ],
    },
    {
      id: 'CrypText-01',
      status: 'Need clone',
      title: 'CrypText',
      description:
        'CrypText is a GUI-based desktop application built with C++ and Qt for encrypting and decrypting text using multiple classical cipher algorithms. The application supports ciphers such as Caesar, Atbash, Vigenère, Simple Substitution, Columnar Transposition, XOR, and ROT9, and provides a user-friendly interface for secure text processing. The project follows object-oriented programming principles including encapsulation, inheritance, and polymorphism with a modular cipher architecture.',
      Url: 'https://github.com/Prabod-Sandaruwan/CrypText',
      live: 'https://github.com/Prabod-Sandaruwan/CrypText',
      image: 'cryptext.png',
      tech: [
        { img: 'cpp.png', name: 'C++' },
        { img: 'qt-original.svg', name: 'Qt' },
        { img: 'css3-original.svg', name: 'CSS' },
      ],
    },
    {
      id: 'inventry-01',
      status: 'need clone',
      title: 'Mini Enventory Management System',
      description:
        'Mini Stock is a lightweight Flask-based inventory management web application built with Python, MySQL, and CSS. It allows users to add, view, update, delete, and search inventory items through a simple and user-friendly interface. The application demonstrates CRUD operations, database integration, and basic backend development using Flask.',
      Url: 'https://github.com/Prabod-Sandaruwan/Mini-Inventory',
      live: 'https://github.com/Prabod-Sandaruwan/Mini-Inventory',
      image: 'stock.png',
      tech: [
        { img: 'flask-original.svg', name: 'Flask' },
        { img: 'mysql-original.svg', name: 'MySQL' },
        { img: 'html5-original.svg', name: 'HTML' },
      ],
    },
    {
      id: 'SkyScope-01',
      status: 'live',
      title: 'SkyScope',
      description:
        'SkyScope is a responsive weather web application that provides real-time weather information for any city. Built using HTML, CSS, and JavaScript, it integrates weather APIs to display data such as temperature, humidity, wind speed, visibility, and air quality. The app features a clean interface, dynamic day/night visuals, and works smoothly across mobile and desktop devices.',
      Url: 'https://github.com/Prabod-Sandaruwan/SkyScope',
      live: "https://prabod-sandaruwan.github.io/SkyScope/",
      image: 'sky.png',
      tech: [
        { img: 'html5-original.svg', name: 'HTML' },
        { img: 'javascript-original.svg', name: 'JavaScript' },
        { img: 'css3-original.svg', name: 'CSS' },
      ],
    },
    // Add more projects here as needed
  ]

  return (
    <div className='work_container'>
      <img src="head-g.svg" alt="" className='work_gradient' loading="lazy" aria-hidden="true" />
      <div className="projects_container">
        <div className="projects_container_head">
          <p className="projects_container_title">Projects</p>
          <p className="projects_container_sub">Projects and ideas I’ve worked on</p>
        </div>
        <div className="projects_container_body">
          {projects.map((p) => (
            <Project key={p.id} data={p} />
          ))}
        </div>
      </div>
      <div className="events">
        <motion.div className="events_head" variants={headerVariant} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          <p  className="projects_container_title">Events</p>
          <p id='p_container' className="projects_container_sub">Workshops and meetups I’ve attended</p>
        </motion.div>
        <motion.div className="events_list" variants={eventsContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <EventCard
            title="Postman 101"
            date="2025 May"
            location="Rajarata University of Sri Lanka"
            description="I participated as a moderator in the organizing committee for the Postman 101 session, helping manage the session while learning the basics of API testing."
          />
          <EventCard
            title="IEEE AGM"
            date="2026 Feb"
            location="Rajarata University of Sri Lanka"
            description="I participated in the IEEE AGM as part of the logistics team, helping organize and manage event arrangements smoothly."
          />
        </motion.div>
      </div>

    </div>
  )
}

export default Work