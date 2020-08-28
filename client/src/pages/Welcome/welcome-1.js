import React from 'react';
import Navbar from '../../components/NavBar/navbar';
import Features from './Features';
import Jumbotron from './Jumbotron';
import Industries from './Industries';
import Customers from './Customers';
import Pricing from './Pricing';
import Team from './Team';
import Footer from './Footer';
import Tedtalk from './Tedtalk';

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
export default Welcome;
