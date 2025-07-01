import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react"

type SkeletonContextType = {
  isLoading: boolean
}

const SkeletonContext = createContext<SkeletonContextType | undefined>(
  undefined,
)

export function SkeletonProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <SkeletonContext.Provider value={{ isLoading }}>
      {children}
    </SkeletonContext.Provider>
  )
}

export function useSkeleton() {
  const context = useContext(SkeletonContext)
  if (!context) {
    throw new Error("useSkeleton must be used within a Skeletonprovider")
  }
  return context
}
