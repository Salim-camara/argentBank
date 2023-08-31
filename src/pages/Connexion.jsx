import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Input from "../components/Input";
import ButtonGreen from "../components/ButtonGreen";
import { STORE } from "../utils/Variables";
import GetUser, { GET_USER } from "../actions/GetUser";
import { useNavigate } from "react-router-dom";

const Connexion = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await STORE.dispatch(GetUser({ password, email }));
    if (localStorage.getItem("token")) {
      navigate("/dashboard");
    } else {
      alert("Erreur d'authentification, veuillez vérifier vos identifiants");
    }
  };
  return (
    <>
      <div>
        <Header />
        <main class="main bg-dark">
          <section class="sign-in-content">
            <i class="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form>
              <Input title={"Username"} value={email} setValue={setEmail} />
              <Input
                title={"Password"}
                value={password}
                setValue={setPassword}
                type={"password"}
              />
              <div class="input-remember">
                <input type="checkbox" id="remember-me" />
                <label for="remember-me">Remember me</label>
              </div>
              <ButtonGreen title={"Sign In"} action={(e) => handleSubmit(e)} />
              {/* <!-- PLACEHOLDER DUE TO STATIC SITE -->
          <a href="./user.html" class="sign-in-button">Sign In</a>
          <!-- SHOULD BE THE BUTTON BELOW -->
          <!-- <button class="sign-in-button">Sign In</button> -->
          <!--  --> */}
            </form>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Connexion;
