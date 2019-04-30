import React from 'react';

export const ComponentTitle = (props) => {
  return (
    <div
      className="ct-container"
      style={{
        color: props.optionalColor || "",
        borderColor: props.optionalColor || ""
      }}
    >
      <h6>{props.title}</h6>
      <div className="ct-square" />
      <i
        className={props.icon}
        style={{
          fontSize: props.optionalSize || "40px",
          borderColor: props.optionalColor || ""
        }}
      />
    </div>
  );
};
