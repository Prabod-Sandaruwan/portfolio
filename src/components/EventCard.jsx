import React from 'react'
import { motion } from 'framer-motion'
import './EventCard.css'

const cardVariant = {
  hidden: { opacity: 0, y: 12, scale: 0.99 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.42, ease: 'easeOut' } },
}

function EventCard({ title, date, location, description, link }) {
  return (
    <motion.article
      className="event_card"
      variants={cardVariant}
      whileHover={{ y: -8, scale: 1.02, boxShadow: '0 18px 40px rgba(2,6,23,0.7)' }}
      whileTap={{ scale: 0.995 }}
    >
      <header className="event_card_header">
        <div>
          <h4 className="event_title">{title}</h4>
          <div className="event_location">{location}</div>
        </div>
        <div className="event_date">{date}</div>
      </header>

      <p className="event_description">{description}</p>

      {link && (
        <a href={link} className="event_link" target="_blank" rel="noopener noreferrer">
          Details
        </a>
      )}

    </motion.article>
  )
}

export default EventCard
