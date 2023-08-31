import React from "react";

const ButtonGreen = ({ style, action, title }) => {
  return (
    <>
      <button class="sign-in-button" style={style} onClick={action}>
        {title}
      </button>
    </>
  );
};

export default ButtonGreen;
