import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { STORE } from "../utils/Variables";
import GetUserInfos from "../actions/GetUserInfos";
import Input from "../components/Input";
import ButtonGreen from "../components/ButtonGreen";
import ChangeUserInfos from "../actions/ChangeUserInfos";
import { useDispatch, useSelector } from "react-redux";
import CardInfosDashboard from "../components/CardInfosDashboard";

const Dashboard = () => {
  const data = useSelector((state) => state.UserReducer);
  const [modalVisible, setModalVisible] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const tmp = await STORE.dispatch(GetUserInfos());
      setFirstName(tmp.data.body.firstName);
      setLastName(tmp.data.body.lastName);
    })();
  }, []);

  const handleChangeName = async () => {
    dispatch(ChangeUserInfos({ firstName, lastName }));
    setModalVisible(false);
  };

  const handleOpenModal = () => {
    setFirstName(data.infosUser?.firstName);
    setLastName(data.infosUser?.lastName);
    setModalVisible(true);
  };

  const transactions = [
    {
      title: "Argent Bank Checking (x8349)",
      price: "2,082.79",
      description: "Available Balance",
    },
    {
      title: "Argent Bank Savings (x6712)",
      price: "10,928.42",
      description: "Available Balance",
    },
    {
      title: "Argent Bank Credit Card (x8349)",
      price: "184.30",
      description: "Current Balance",
    },
  ];

  return (
    <>
      <div>
        <Header />
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
            </h1>
            {!modalVisible && (
              <p style={{ margin: 0, fontSize: 25 }}>
                {data?.infosUser?.firstName} {data?.infosUser?.lastName} !
              </p>
            )}
            {modalVisible && (
              <div>
                <div>
                  <input
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    style={{ margin: "0 20px 0 20px", height: 30, width: 150 }}
                  />
                  <input
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    style={{ margin: "0 20px 0 20px", height: 30, width: 150 }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 10,
                  }}
                >
                  <ButtonGreen
                    title={"Save"}
                    action={handleChangeName}
                    style={{
                      backgroundColor: "white",
                      border: "1px solid #6519cf",
                      borderRadius: 5,
                      height: 30,
                      width: 100,
                      fontSize: 15,
                      color: "#6519cf",
                      margin: "0 20px 0 20px",
                      cursor: "pointer",
                    }}
                  />
                  <ButtonGreen
                    title={"Cancel"}
                    action={() => setModalVisible(false)}
                    style={{
                      backgroundColor: "white",
                      border: "1px solid #6519cf",
                      borderRadius: 5,
                      height: 30,
                      width: 100,
                      fontSize: 15,
                      color: "#6519cf",
                      margin: "0 20px 0 20px",
                      cursor: "pointer",
                    }}
                  />
                </div>
              </div>
            )}
            {!modalVisible && (
              <ButtonGreen
                title={"Edit name"}
                action={handleOpenModal}
                style={{ width: 120 }}
              />
            )}
          </div>
          <h2 class="sr-only">Accounts</h2>
          {transactions.map((el) => (
            <CardInfosDashboard
              title={el.title}
              price={el.price}
              description={el.description}
            />
          ))}
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
