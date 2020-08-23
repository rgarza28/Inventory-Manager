import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Card, CardContent, Container} from "@material-ui/core";

function Jumbotron() {
   const classes = useStyles();
   
   return (
      <Container maxWidth="md" >

      </Container>
   )
};

const useStyles = makeStyles({
   root: {
      minWidth: 275,
      backgroundColor: "#F2F2F2",
      boxShadow: "none",
   },
});

export default Jumbotron;
