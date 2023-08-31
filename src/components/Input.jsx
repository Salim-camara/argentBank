import React from "react";

const Input = ({ title, setValue, value, type = "email" }) => {
  return (
    <>
      <div class="input-wrapper">
        <label for="password">{title}</label>
        <input
          type={type}
          id="password"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </>
  );
};

export default Input;
