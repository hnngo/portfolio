import React from "react";

// Utils
import cx from "classnames";

import styles from "./style.module.scss";

export default function SectionTitle({ title, icon, isDarkTheme }) {
  return (
    <div
      className={cx(
        styles.container,
        isDarkTheme && styles.lightColorContainer,
        "animated fadeIn slow"
      )}
    >
      <h6 className={styles.title}>{title}</h6>
      <div className={styles.square} />
      <i className={cx(icon, styles.icon, isDarkTheme && styles.lightIcon)} />
    </div>
  );
}
