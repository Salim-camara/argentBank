import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CardInfosHome from "../components/CardInfosHome";

const Home = () => {
  const cardInfos = [
    {
      title: "You are our #1 priority",
      description:
        "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes",
      iconUrl: require("./../img/icon-chat.png"),
    },
    {
      title: "More savings means higher rates",
      description:
        "The more you save with us, the higher your interest rate will be!",
      iconUrl: require("./../img/icon-money.png"),
    },
    {
      title: "Security you can trust",
      description:
        "We use top of the line encryption to make sure your data and money is always safe.",
      iconUrl: require("./../img/icon-security.png"),
    },
  ];

  return (
    <>
      <Header />
      <main>
        <div class="hero">
          <section class="hero-content">
            <h2 class="sr-only">Promoted Content</h2>
            <p class="subtitle">No fees.</p>
            <p class="subtitle">No minimum deposit.</p>
            <p class="subtitle">High interest rates.</p>
            <p class="text">Open a savings account with Argent Bank today!</p>
          </section>
        </div>
        <section class="features">
          <h2 class="sr-only">Features</h2>
          {cardInfos.map((el) => {
            return (
              <CardInfosHome
                title={el.title}
                description={el.description}
                iconUrl={el.iconUrl}
              />
            );
          })}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
