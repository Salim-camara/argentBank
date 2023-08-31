import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const userInfos = useSelector((state) => state.UserReducer.infosUser);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("token");
    navigate("/home");
  };
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
          {token && (
            <p style={{ margin: 0, marginRight: 10 }}>
              {userInfos && userInfos.firstName}
            </p>
          )}
          {token ? (
            <div
              class="fa fa-user-circle"
              style={{ fontWeight: "bolder", cursor: "pointer" }}
              onClick={handleSignOut}
            >
              Sign Out
            </div>
          ) : (
            <div
              class="fa fa-user-circle"
              style={{ fontWeight: "bolder", cursor: "pointer" }}
              onClick={() => navigate("/login")}
            >
              Sign In
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
