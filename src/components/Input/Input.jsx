import React, { useState } from "react";
import "./Input.css";

const Input = (props) => {
  const [input, setInput] = useState({ touched: false, value: "" });
  const boxShadow =
    input.touched && input.value.length <= 0
      ? " 0px 0px 4px 0.1px rgba(255,0,0, 0.8)"
      : "";

  return (
    <div>
      <label>{props.label}</label>
      <input
        className="text-input"
        style={{
          boxShadow,
        }}
        type="text"
        value={input.value}
        onChange={(e) => setInput({ touched: true, value: e.target.value })}
      />
    </div>
  );
};

export default Input;
