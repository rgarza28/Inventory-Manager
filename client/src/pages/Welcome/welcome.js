import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import BuildIcon from '@material-ui/icons/Build';
import { Typography, Grid, Card, CardActions, CardContent, Button, Icon } from "@material-ui/core";
import Navbar from "../../components/Navbar/Navbar";
import Features from "./Features/Features";

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
