import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Card, CardContent, Container, CardMedia } from "@material-ui/core";
import IndustriesData from "./Industries.json"

function Industries() {

   const classes = useStyles();
   
   return (
      <Container maxWidth="false" className={classes.containerStyle}>
         <Typography variant="h4" className={classes.titleStyle}>
               The industries we help to grow their businesses
         </Typography>
         <Grid container className={classes.gridContainerStyle}>
            {IndustriesData.map(data => {
               return (
                  <Grid item className={classes.gridStyle} xs>
                     <Card className={classes.root} >
                        <CardMedia 
                           className={classes.media}
                           image={data.photo} 
                           title={data.industry} 
                        />
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
   media: {
      height: 140,
    },
   containerStyle: {
      backgroundColor: "#D97904",
      width: "100vw",
      margin: "0 auto",
      paddingBottom: "50px",
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
   pos: {
      textTransform: "uppercase",
      fontWeight: "400",
      margin: 0,
      color: "#730217",
   }
});

export default Industries;