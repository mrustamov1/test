import clsx from "clsx"
import styles from "./banner.module.css"
import { useState, useCallback } from "react"
import { Input } from "../input/input.component"
import { Button } from "../button/button.component"
import { Dropdown } from "./dropdown/dropdown.component"
import type { bannerType } from "../../types/banner.type"
import { BannerImage } from "./banner-image/banner-image.component"
import { dropdownCategories } from "./dropdown/dropdown-data.component"
import { SliderControls } from "./slider-controls/slider-controls.component"

export function Banner({ title, sliderImages = [], type }: bannerType) {
  // ---------------------------------------------------------------------------
  // functiions
  // ---------------------------------------------------------------------------
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDropdownOpen, setDropdownOpen] = useState(false)

  // ---------------------------------------------------------------------------
  // functiions
  // ---------------------------------------------------------------------------
  const toggleDropdown = useCallback(() => {
    setDropdownOpen((prev) => !prev)
  }, [])

  const goLeft = useCallback(() => {
    if (sliderImages.length === 0) return
    setCurrentIndex((prev) => (prev === 0 ? sliderImages.length - 1 : prev - 1))
  }, [sliderImages.length])

  const goRight = useCallback(() => {
    if (sliderImages.length === 0) return
    setCurrentIndex((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1))
  }, [sliderImages.length])

  if (type === "product") {
    // ---------------------------------------------------------------------------
    return (
      <section className={styles.banner} aria-label="Product banner">
        <div className={styles.bannerAndText}>
          <BannerImage
            src={sliderImages[currentIndex]}
            alt={`Banner image ${currentIndex + 1}`}
            className={clsx(styles.firstBanner, styles.productFilter)}
          />
          <div className={styles.middleInfo}>
            <span className={styles.title}>{title}</span>
            <div className={styles.searchInput}>
              <Dropdown
                isOpen={isDropdownOpen}
                items={dropdownCategories}
                onToggle={toggleDropdown}
              />
              <Input
                className={styles.input}
                type="text"
                placeholder="Search"
              />
            </div>
            <Button
              className={styles.button}
              title="Search"
              iconName="fa-light fa-search"
              titleSize="medium"
            />
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className={styles.banner} aria-label="Banner">
      <div className={styles.bannerAndText}>
        <BannerImage
          src={sliderImages[currentIndex]}
          alt={`Banner image ${currentIndex + 1}`}
          className={styles.firstBanner}
        />
        <div className={styles.middleInfo}>
          <span className={styles.title}>{title}</span>
        </div>
      </div>
      {sliderImages.length > 1 && (
        <SliderControls onPrev={goLeft} onNext={goRight} />
      )}
    </section>
  )
}
