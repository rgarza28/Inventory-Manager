import React from "react";
import Navbar from "../../components/NavBar/navbar";
import Features from "./Features/Features";
import Jumbotron from "./Jumbotron/Jumbotron";
import Industries from "./Industries/Industries";
import Customers from "./Customers/Customers";
import Pricing from "./Pricing/Pricing";
import Team from "./Team/Team";
import Footer from "./Footer/Footer";
import Tedtalk from "./Tedtalk/Tedtalk";

function Welcome() {
  return (
    <header>
      <Navbar />
      <Jumbotron />
      <Features />
      <Tedtalk />
      <Industries />
      <Customers />
      <Pricing />
      <Team />
      <Footer />
    </header>
  );
}

export default Welcome1;
