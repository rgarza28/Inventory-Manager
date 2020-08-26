import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Features from "./Features/Features";
import Jumbotron from "./Jumbotron/Jumbotron";
import Industries from "./Industries/Industries";
import Customers from "./Customers/Customers";
import Pricing from "./Pricing/Pricing";
import Team from "./Team/Team";
import Footer from "./Footer/Footer";

function Welcome() {
  return (
    <header>
      <Navbar />
      <Jumbotron />
      <Features />
      <Industries />
      <Customers />
      {/* <Pricing /> */}
      <Team />
      {/* <Footer /> */}
    </header>
  );
}

export default Welcome;
