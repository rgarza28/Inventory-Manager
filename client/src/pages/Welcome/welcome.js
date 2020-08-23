import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Features from "./Features/Features";
import Jumbotron from "./Jumbotron/Jumbotron";
import Industries from "./Industries/Industries";

function Welcome() { 
   return (
      <header>
         <Navbar />
         <Jumbotron />
         <Features />
         <Industries />
      </header>
   )
};


  
export default Welcome;
