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
            <div style={{ display: "flex", alignItems: "center" }}>
              <i class="fa fa-user-circle"></i>
              <p style={{ margin: 0, marginLeft: 5, marginRight: 20 }}>
                {userInfos && userInfos.firstName}
              </p>
            </div>
          )}
          {token ? (
            <div
              style={{
                fontWeight: "bolder",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
              }}
              onClick={handleSignOut}
            >
              <i class="fa fa-sign-out"></i>
              <p style={{ marginLeft: 5 }}>Sign Out</p>
            </div>
          ) : (
            <div
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
