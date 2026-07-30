import { useEffect } from 'react'
import { useMotionValue, useSpring } from 'framer-motion'
import { useCursor } from '../context/CursorContext'

export default function useMagneticHover(ref) {
  const { setCursorDefault, setCursorMagnetic } = useCursor()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 380, damping: 30, mass: 0.65 })
  const springY = useSpring(y, { stiffness: 380, damping: 30, mass: 0.65 })

  useEffect(() => {
    const element = ref?.current

    if (!element) {
      return undefined
    }

    const moveStrength = 12

    const handleMouseMove = (event) => {
      const rect = element.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const offsetX = ((event.clientX - centerX) / rect.width) * moveStrength
      const offsetY = ((event.clientY - centerY) / rect.height) * moveStrength

      x.set(offsetX)
      y.set(offsetY)
    }

    const handleMouseLeave = () => {
      x.set(0)
      y.set(0)
      setCursorDefault()
    }

    const handleMouseEnter = () => {
      setCursorMagnetic()
    }

    element.addEventListener('mousemove', handleMouseMove)
    element.addEventListener('mouseleave', handleMouseLeave)
    element.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      element.removeEventListener('mousemove', handleMouseMove)
      element.removeEventListener('mouseleave', handleMouseLeave)
      element.removeEventListener('mouseenter', handleMouseEnter)
      setCursorDefault()
      x.set(0)
      y.set(0)
    }
  }, [ref, setCursorDefault, setCursorMagnetic, x, y])

  return {
    x: springX,
    y: springY,
  }
}