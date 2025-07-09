import styles from "./scroll.module.css"
import { useRef, type ReactNode } from "react"
import { Button } from "../button/button.component"
import { useResize } from "../../context/dimension.context"
import { Container } from "../container/container.component"

export function Scroll({ children }: { children?: ReactNode }) {
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const { isTablet, isPhone } = useResize()

  function scroll(direction: "left" | "right") {
    const { current } = scrollRef
    if (current && current.children.length > 0) {
      const card = current.children[0] as HTMLElement
      const cardWidth = card.offsetWidth + 20
      current.scrollBy({
        left: direction === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
      })
    }
  }

  return (
    <div>
      <Container className={styles.main}>
        {isTablet && (
          <Button
            style={{ padding: 0 }}
            onClick={() => scroll("left")}
            iconName="fa-solid fa-chevron-left"
          />
        )}
        <div ref={scrollRef} className={styles.scrollContainer}>
          {children}
        </div>
        {isTablet && (
          <Button
            style={{ padding: 0 }}
            onClick={() => scroll("right")}
            iconName="fa-solid fa-chevron-right"
          />
        )}
      </Container>
      {isPhone && (
        <div className={styles.phoneScroll}>
          <Button
            style={{ padding: 0 }}
            onClick={() => scroll("left")}
            iconName="fa-solid fa-chevron-left"
          />
          <Button
            style={{ padding: 0 }}
            onClick={() => scroll("right")}
            iconName="fa-solid fa-chevron-right"
          />
        </div>
      )}
    </div>
  )
}
