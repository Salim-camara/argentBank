import React from "react";
import ButtonGreen from "./ButtonGreen";

const CardInfosDashboard = ({ title, price, description }) => {
  return (
    <>
      <section class="account">
        <div class="account-content-wrapper">
          <h3 class="account-title">{title}</h3>
          <p class="account-amount">${price}</p>
          <p class="account-amount-description">{description}</p>
        </div>
        <div class="account-content-wrapper cta">
          <ButtonGreen title={"View transactions"} style={{ width: 200 }} />
        </div>
      </section>
    </>
  );
};

export default CardInfosDashboard;
