import React from "react";
import "./style.css";

function Button({ children, minWidth }) {
  return (
    <button type="button" style={{ minWidth: minWidth }} className="button">
      {children}
    </button>
  );
}

export default Button;
