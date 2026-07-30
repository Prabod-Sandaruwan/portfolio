import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import './CustomCursor.css'

function CustomCursor() {
  const [isCoarsePointer, setIsCoarsePointer] = useState(false)
  const pointerX = useMotionValue(-100)
  const pointerY = useMotionValue(-100)
  const tail1X = useSpring(pointerX, { stiffness: 70, damping: 18, mass: 0.95 })
  const tail1Y = useSpring(pointerY, { stiffness: 70, damping: 18, mass: 0.95 })
  const tail2X = useSpring(pointerX, { stiffness: 48, damping: 17, mass: 1 })
  const tail2Y = useSpring(pointerY, { stiffness: 48, damping: 17, mass: 1 })
  const tail3X = useSpring(pointerX, { stiffness: 34, damping: 16, mass: 1.05 })
  const tail3Y = useSpring(pointerY, { stiffness: 34, damping: 16, mass: 1.05 })
  const tail4X = useSpring(pointerX, { stiffness: 24, damping: 15, mass: 1.1 })
  const tail4Y = useSpring(pointerY, { stiffness: 24, damping: 15, mass: 1.1 })
  const auraX = useSpring(pointerX, { stiffness: 500, damping: 28, mass: 0.5 })
  const auraY = useSpring(pointerY, { stiffness: 500, damping: 28, mass: 0.5 })

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: coarse)')

    const updatePointerMode = () => {
      setIsCoarsePointer(mediaQuery.matches)
    }

    updatePointerMode()
    mediaQuery.addEventListener('change', updatePointerMode)

    return () => {
      mediaQuery.removeEventListener('change', updatePointerMode)
    }
  }, [])

  useEffect(() => {
    if (isCoarsePointer) {
      return undefined
    }

    document.body.classList.add('custom-cursor-active')

    const handlePointerMove = (event) => {
      pointerX.set(event.clientX)
      pointerY.set(event.clientY)
    }

    window.addEventListener('mousemove', handlePointerMove)

    return () => {
      document.body.classList.remove('custom-cursor-active')
      window.removeEventListener('mousemove', handlePointerMove)
    }
  }, [isCoarsePointer, pointerX, pointerY])

  if (isCoarsePointer) {
    return null
  }

  return (
    <div className="custom-cursor" aria-hidden="true">
      <motion.div className="custom-cursor__tail custom-cursor__tail--1" style={{ left: tail1X, top: tail1Y }} />
      <motion.div className="custom-cursor__tail custom-cursor__tail--2" style={{ left: tail2X, top: tail2Y }} />
      <motion.div className="custom-cursor__tail custom-cursor__tail--3" style={{ left: tail3X, top: tail3Y }} />
      <motion.div className="custom-cursor__tail custom-cursor__tail--4" style={{ left: tail4X, top: tail4Y }} />
      <motion.div
        className="custom-cursor__ring"
        style={{ left: auraX, top: auraY }}
        animate={{ scale: [1, 1.12, 1], opacity: [0.7, 1, 0.7] }}
        transition={{
          scale: { duration: 1.8, repeat: Infinity, ease: 'easeInOut' },
          opacity: { duration: 1.8, repeat: Infinity, ease: 'easeInOut' },
        }}
      />

      <motion.div className="custom-cursor__anchor" style={{ left: pointerX, top: pointerY }}>
        <motion.div
          className="custom-cursor__main"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </div>
  )
}

export default CustomCursor