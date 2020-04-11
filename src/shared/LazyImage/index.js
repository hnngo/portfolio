import React from "react";
import cx from "classnames";

import styles from "./style.module.scss";

function LazyImage({ src, alt, placeholder, className, ...rest }) {
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    <div>
      <img
        className={cx(className, !isLoaded && styles.invisible)}
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        {...rest}
      />
      {!isLoaded && (
        <img className={className} src={placeholder} alt={alt} {...rest} />
      )}
    </div>
  );
}

export default LazyImage;
