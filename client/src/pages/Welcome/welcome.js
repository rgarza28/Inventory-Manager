import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Navbar from "../../components/Navbar/Navbar";
import Features2 from "./Features/Features";
import Features from "./Features-delete/Features";

function Welcome() {
   const classes = useStyles();
   
   return (
      <header>
         <Navbar />
         <Features />
      </header>
   )
};

const useStyles = makeStyles({
   root: {
   },
});


  
export default Welcome;
