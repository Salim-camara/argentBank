import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { STORE } from "../utils/Variables";
import GetUserInfos from "../actions/GetUserInfos";
import Input from "../components/Input";
import ButtonGreen from "../components/ButtonGreen";
import ChangeUserInfos from "../actions/ChangeUserInfos";
import { useDispatch } from "react-redux";

const Dashboard = () => {
  const [userInfos, setUserInfos] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const tmp = await STORE.dispatch(GetUserInfos());
      setUserInfos(tmp.data.body);
      setFirstName(tmp.data.body.firstName);
      setLastName(tmp.data.body.lastName);
    })();
  }, []);

  const handleChangeName = async () => {
    // await STORE.dispatch();
    dispatch(ChangeUserInfos({ firstName, lastName }));
    setModalVisible(false);
  };

  const handleOpenModal = () => {
    setFirstName(userInfos.firstName);
    setLastName(userInfos.lastName);
    setModalVisible(true);
  };

  return (
    <>
      <div>
        <Header />
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "50%",
            marginLeft: -200,
            width: 400,
            backgroundColor: "#d2d4d9",
            padding: 20,
            border: "2px solid white",
            display: !modalVisible && "none",
          }}
        >
          <h2>Edit your informations</h2>
          <Input value={firstName} setValue={setFirstName} title={"Prénom"} />
          <Input value={lastName} setValue={setLastName} title={"Nom"} />
          <ButtonGreen title={"Send"} action={handleChangeName} />
          <ButtonGreen
            title={"Cancel"}
            style={{ backgroundColor: "red", borderColor: "red" }}
            action={() => setModalVisible(false)}
          />
        </div>
        <main class="main bg-dark">
          <div
            class="header"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1>
              Welcome back
              <br />
              {userInfos.firstName} {userInfos.lastName} !
            </h1>
            <ButtonGreen
              title={"Edit name"}
              action={handleOpenModal}
              style={{ width: 120 }}
            />
          </div>
          <h2 class="sr-only">Accounts</h2>
          <section class="account">
            <div class="account-content-wrapper">
              <h3 class="account-title">Argent Bank Checking (x8349)</h3>
              <p class="account-amount">$2,082.79</p>
              <p class="account-amount-description">Available Balance</p>
            </div>
            <div class="account-content-wrapper cta">
              <button class="transaction-button">View transactions</button>
            </div>
          </section>
          <section class="account">
            <div class="account-content-wrapper">
              <h3 class="account-title">Argent Bank Savings (x6712)</h3>
              <p class="account-amount">$10,928.42</p>
              <p class="account-amount-description">Available Balance</p>
            </div>
            <div class="account-content-wrapper cta">
              <button class="transaction-button">View transactions</button>
            </div>
          </section>
          <section class="account">
            <div class="account-content-wrapper">
              <h3 class="account-title">Argent Bank Credit Card (x8349)</h3>
              <p class="account-amount">$184.30</p>
              <p class="account-amount-description">Current Balance</p>
            </div>
            <div class="account-content-wrapper cta">
              <button class="transaction-button">View transactions</button>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
