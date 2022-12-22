import React from "react";
import cx from "classnames";

import styles from "./style.module.scss";

function LazyImage({ src, alt, placeholder, className, id, ...rest }) {
  const [isLoaded, setIsLoaded] = React.useState(null);

  return (
    <span id={id}>
      {(isLoaded === null || isLoaded === true) && (
        <img
          className={cx(className, !isLoaded && styles.invisible)}
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          onError={() => setIsLoaded(false)}
          {...rest}
        />
      )}
      {!isLoaded &&
        !!placeholder && (
          <img className={className} src={placeholder} alt={alt} {...rest} />
        )}
    </span>
  );
}

export default LazyImage;
