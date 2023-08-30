import React from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const actualRoute = useLocation().pathname;
  return (
    <>
      <nav class="main-nav">
        <a class="main-nav-logo" href="./index.html">
          <img
            class="main-nav-logo-image"
            src={require("./../img/argentBankLogo.png")}
            alt="Argent Bank Logo"
          />
          <h1 class="sr-only">Argent Bank</h1>
        </a>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {actualRoute === "/dashboard" && (
            <p style={{ margin: 0, marginRight: 10 }}>Tony</p>
          )}
          {actualRoute === "/dashboard" ? (
            <a class="main-nav-item" href="./sign-in.html">
              <i class="fa fa-user-circle"></i>
              Sign Out
            </a>
          ) : (
            <a class="main-nav-item" href="./sign-in.html">
              <i class="fa fa-user-circle"></i>
              Sign In
            </a>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
