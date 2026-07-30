import { createContext, useContext, useMemo, useState } from 'react'

export const CursorContext = createContext(null)

export function CursorProvider({ children }) {
  const [cursorType, setCursorType] = useState('default')

  const value = useMemo(() => {
    const setCursorDefault = () => setCursorType('default')
    const setCursorHover = () => setCursorType('hover')
    const setCursorMagnetic = () => setCursorType('magnetic')

    return {
      cursorType,
      setCursorType,
      setCursorDefault,
      setCursorHover,
      setCursorMagnetic,
    }
  }, [cursorType])

  return <CursorContext.Provider value={value}>{children}</CursorContext.Provider>
}

export function useCursor() {
  const context = useContext(CursorContext)

  if (!context) {
    throw new Error('useCursor must be used within a CursorProvider')
  }

  return context
}
