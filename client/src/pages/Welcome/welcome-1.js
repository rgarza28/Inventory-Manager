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
      <div>
         <header>
            <Navbar />
         </header>
         <main>
            <Jumbotron />
            <Features />
            <Tedtalk />
            <Industries />
            <Customers />
            <Pricing />
            <Team />
         </main>
         <footer>
            <Footer />
         </footer>
      </div>
   );
}
export default Welcome;
