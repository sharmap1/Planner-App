import React from "react";

const Alert = ({ type, text }) => {
  return (
    <>
      <div>
        <span className={`alert alert-${type}`}>{text}</span>
      </div>
    </>
  );
};

export default Alert;
