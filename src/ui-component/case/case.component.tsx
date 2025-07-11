import clsx from "clsx";
import styles from "./case.module.css";
import { Icon } from "../icon/icon.component";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Button } from "../button/button.component";
import type { caseType } from "../../types/case.type";

export function Case({
  image,
  title,
  icon,
  location,
  className,
  overlayTitle,
}: caseType) {
  // ---------------------------------------------------------------------------
  // variables
  // ---------------------------------------------------------------------------
  const navigate = useNavigate();
  const { t: translate } = useTranslation();

  // ---------------------------------------------------------------------------
  // functions
  // ---------------------------------------------------------------------------
  function truncateByChars(text: string, limit: number): string {
    return text.length > limit ? text.slice(0, limit).trim() + "..." : text;
  }
  const truncatedTitle = title ? truncateByChars(title, 31) : "";

  // ---------------------------------------------------------------------------
  return (
    <>
      <div
        className={clsx(className, {
          [styles.default]: true,
        })}
      >
        <img className={styles.cardImage} src={image} alt="Image" />
        <div className={styles.overlay}>
          <h3 className={styles.overlayTitle}>{overlayTitle}</h3>
          <Button
            title={translate("button.more")}
            mode="primary-small"
            onClick={() => navigate("/preview/case")}
          />
        </div>
        <div className={styles.bottom} title={title}>
          {truncatedTitle}
          <div className={styles.iconAndLocation}>
            {icon && <Icon name={icon} size="tiny" />}
            {location && <span className={styles.location}>{location}</span>}
          </div>
        </div>
      </div>
    </>
  );
}
