import React from "react";
import cx from "classnames";

import styles from "./style.module.scss";

function LazyImage({ src, alt, placeholder, className }) {
  const [isLoaded, setIsLoaded] = React.useState(false);
  return (
    <div>
      <img
        className={cx(className, !isLoaded && styles.invisible)}
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
      />
      {!isLoaded && <img className={className} src={placeholder} alt={alt} />}
    </div>
  );
}

export default LazyImage;
