import React from 'react';

export const ComponentTitle = (props) => {
  return (
    <div className="ct-container">
      <h6>{props.title}</h6>
      <div className="ct-square"/>
      <i
        className={props.icon}
        style={{ fontSize: props.optionalSize || "40px" }}
      />
    </div>
  );
};
