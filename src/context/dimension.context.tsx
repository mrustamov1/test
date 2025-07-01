import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react"

type ResizeContextType = {
  isSmall: boolean
  isTablet: boolean
  isPhone: boolean
}

const ResizeContext = createContext<ResizeContextType | undefined>(undefined)
// Create context with default value (optional)

export function ResizeProvider({ children }: { children: ReactNode }) {
  const [isSmall, setIsSmall] = useState(window.innerWidth >= 1024)
  const [isTablet, setIsTablet] = useState(window.innerWidth > 768)
  const [isPhone, setIsPhone] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => {
      setIsSmall(window.innerWidth >= 1024)
    }
    // Initialize on mount
    handleResize()

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth > 768)
    }
    // Initialize on mount
    handleResize()

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setIsPhone(window.innerWidth < 768)
    }
    // Initialize on mount
    handleResize()

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <ResizeContext.Provider value={{ isSmall, isTablet, isPhone }}>
      {children}
    </ResizeContext.Provider>
  )
}

// Custom hook to use context easily in any component
export function useResize() {
  const context = useContext(ResizeContext)
  if (!context) {
    throw new Error("useResize must be used within a ResizeProvider")
  }
  return context
}
