import React from "react";

const CardInfosHome = ({ iconUrl, title, description }) => {
  return (
    <>
      <div class="feature-item">
        <img src={iconUrl} alt="Chat Icon" class="feature-icon" />
        <h3 class="feature-item-title">{title}</h3>
        <p>{description}</p>
      </div>
    </>
  );
};

export default CardInfosHome;
