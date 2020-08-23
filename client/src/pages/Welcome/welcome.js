import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Features from "./Features/Features";
import Jumbotron from "./Jumbotron/Jumbotron";
import Industries from "./Industries/Industries";
import Customers from "./Customers/Customers";
import Team from "./Team/Team";

function Welcome() { 
   return (
      <header>
         <Navbar />
         <Jumbotron />
         <Features />
         <Industries />
         <Customers />
         <Team />
      </header>
   )
};


  
export default Welcome;
