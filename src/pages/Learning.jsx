import React from "react";
import { motion } from "framer-motion";
import "./Learning.css";

const courses = [
  {
    title: "Meta React Specialization",
    date: "2026",
    institution: "Meta + Coursera",
    desc: "A comprehensive series covering full-stack React web development.",
    icon: "meta.png",
  },
  {
    title: "Advanced React",
    date: "2026",
    institution: "Meta + Coursera",
    desc: "Mastered custom hooks, context API, performance optimization, and testing.",
    icon: "meta.png",
  },
  {
    title: "React Basics",
    date: "2026",
    institution: "Meta + Coursera",
    desc: "Learned the fundamentals of React, including components, state management, and hooks.",
    icon: "meta.png",
  },
  {
    title: "Javascript alogorithms and data structures",
    date: "2025",
    institution: "FreeCodeCamp",
    desc: "In-depth JavaScript algorithms and data structures course covering essential programming concepts.",
    icon: "ffc.jpg",
  },
  {
    title: "AI/ML Engineer - Stage 1",
    date: "2025",
    institution: "SLIIT",
    desc: "Completed the first stage of the AI/ML Engineer program, covering foundational concepts.",
    icon: "sliit.png",
  },
  {
    title: "Commissioning with APIs",
    date: "2025",
    institution: "CodeSignal",
    desc: "Learned how to effectively use APIs in web development projects.",
    icon: "codesignal.png",
  },
  {
    title: "Introduction to Generative AI",
    date: "2025",
    institution: "Google cloud skills boost",
    desc: "Learned the fundamentals of generative AI, including its applications and ethical considerations.",
    icon: "google.png",
  },
  {
    title: "Postman API Fundamentals Student Expert",
    date: "2025",
    institution: "Postman Academy",
    desc: "Mastered API testing and Postman features through the Student Expert program.",
    icon: "postman-original.svg",
  },
  {
    title: "Mastering the DOM API",
    date: "2025",
    institution: "CodeSignal",
    desc: "In-depth understanding of DOM manipulation and event handling.",
    icon: "codesignal.png",
  },
  {
    title: "Introduction to JavaScript",
    date: "2025",
    institution: "CodeSignal",
    desc: "Learned JavaScript basics, syntax, and programming concepts.",
    icon: "codesignal.png",
  },
  {
    title: "Responsive Web Design",
    date: "2025",
    institution: "FreeCodeCamp",
    desc: "Learned how to create responsive layouts using CSS Flexbox and Grid.",
    icon: "ffc.jpg",
  },
  {
    title: "Postman API 101",
    date: "2025",
    institution: "IEEE Postman 101 Session",
    desc: "Learned the basics of API testing and Postman features.",
    icon: "postman-original.svg",
  },
   {
    title: "Web Design for Beginners",
    date: "2025",
    institution: "University 0f Moratuwa",
    desc: "Learned the fundamentals of web design, including HTML, CSS, and basic JavaScript.",
    icon: "uom.png",
  },
  {
    title: "Python for Beginners",
    date: "2025",
    institution: "University 0f Moratuwa",
    desc: "Learned Python fundamentals through a beginner course at CODL, University of Moratuwa.",
    icon: "uom.png",
  },
];

export default function Learning() {
  return (
    <section className="learning_container">
      <img src="head-g.svg" alt="" className="leaen_head_img" loading="lazy" aria-hidden="true" />
      <h2 className="learning_title">Education</h2>
      <p className="learning_sub">Discover the stages of my academic learning journey.</p>
      <div className="education_div">
        <motion.div
          className="education_item"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="education_image">
            <img src="rusl.png" alt="Rajarata University logo" loading="lazy" />
          </div>
          <div className="education_text">
            <p className="education_topic">BSc in ICT</p>
            <p className="education_instute">Rajarata University Of Sri Lanka</p>
            <p className="education_time">2024 - Current</p>
            <p className="instute_location">Mihintale, Sri Lanka</p>
          </div>
        </motion.div>
        <motion.div
          className="education_item"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="education_image">
            <img src="kv.png" alt="Kegalu Vidyalaya logo" loading="lazy" />
          </div>
          <div className="education_text">
            <p className="education_topic">Secondary Education</p>
            <p className="education_instute">Kegalu Vidyalaya</p>
            <p className="education_time">2014 - 2022</p>
            <p className="instute_location">Kegalle, Sri Lanka</p>
          </div>
        </motion.div>
      </div>
      <p className="learning_title">Courses</p>
      <p className="learning_sub">A curated timeline of courses I've completed during my journey.</p>
      <div className="timeline">

        {courses.map((course, i) => {
          const side = i % 2 === 0 ? "left" : "right";

          return (
            <motion.div
              key={course.title}
              className={`timeline_item ${side}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >

              <div className="timeline_card">

                <div className="timeline_icon">
                  <img src={course.icon} alt={`${course.title} icon`} loading="lazy" />
                </div>

                <h3>{course.title}</h3>

                <p className="meta">
                  {course.institution} • {course.date}
                </p>

                <p className="desc">
                  {course.desc}
                </p>

                <span >
                  <button  className="badge">Completed</button>
                </span>

              </div>

            </motion.div>
          );
        })}

      </div>
      <div className="free"></div>
    </section>
  );
}