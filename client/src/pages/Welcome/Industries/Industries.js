import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Card, CardContent, Container} from "@material-ui/core";
import IndustriesData from "./Industries.json"

function Industries() {

   const classes = useStyles();
   
   return (
      <Container className={classes.containerStyle}>
         <Typography variant="h4" className={classes.titleStyle}>
               The industries we help to grow their businesses
         </Typography>
         <Grid container className={classes.gridContainerStyle}>
            {IndustriesData.map(data => {
               return (
                  <Grid item className={classes.gridStyle} xs>
                     <Card className={classes.root} >
                        <CardContent>
                           <Typography className={classes.pos} >
                              {data.industry}
                           </Typography>
                        </CardContent>
                     </Card>
                  </Grid>
               )})}
         </Grid>
      </Container>
   )
};


const useStyles = makeStyles({
   root: {
      backgroundColor: "#F2F2F2",
      boxShadow: "0 0 8px #730217",
      margin: 20,
   },
   containerStyle: {
      backgroundColor: "#D97904",
      width: "100vw",
      margin: "0 auto",
   },
   titleStyle: {
      color: "#F2F2F2",
      width: "90%",
      margin: "0 auto",
      paddingTop: "80px",
      paddingBottom: "50px",
   },
   gridStyle: {
      minWidth: 250,
   },
   gridContainerStyle: {
      padding: "20px",
   },
   iconStyle: {
      color: "#184059",
      fontSize: "40px",      
   },
   pos: {
      textTransform: "uppercase",
      fontWeight: "400",
      margin: "20px 0",
      color: "#730217",
   }
});

export default Industries;