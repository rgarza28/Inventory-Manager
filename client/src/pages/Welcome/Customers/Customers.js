import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, Typography, Container, Grid, Avatar} from '@material-ui/core';
import CustomersData from "./Customers.json";

function Customers() {
  const classes = useStyles();

  return (
   <Container maxWidth="lg" className={classes.containerStyle} id="customers">
      <Typography variant="h4" className={classes.titleStyle}>
         Thousands of happy customers in 80+ countries
      </Typography>
      <Typography variant="h6" className={classes.subtitleStyle}>
         Manufacturing needs an inventory management software that can provide an accurate cost for finished goods. Get clear visibility of your profits and margins for your manufacturing business today.
      </Typography>
         <Grid container className={classes.gridContainerStyle}>
            {CustomersData.map(data=>{
               return (
               <Grid item className={classes.gridStyle} xs>
                  <Card className={classes.root}>
                     <CardActionArea>
                        <Avatar 
                           className={classes.avatarStyle}
                           src={data.photo}
                           alt={data.name}
                        />
                        <CardContent className={classes.cardContentStyle}>
                           <Typography gutterBottom variant="h5" component="h2" className={classes.reviewStyle}>
                              {data.review}
                           </Typography>
                           <Typography className={classes.descriptionStyle} variant="body2">
                              {data.description}
                           </Typography>
                           <Typography className={classes.nameStyle} variant="body2">
                              {data.name}
                           </Typography>
                           <Typography variant="body2">
                              {data.company}
                           </Typography>
                        </CardContent>
                     </CardActionArea>
                  </Card>
               </Grid>
            )})}
         </Grid>
    </Container>
  );
};

const useStyles = makeStyles({
   root: {
      marginTop: "none",
   },
   media: {
      height: 140,
   },
   containerStyle: {
      paddingBottom: "50px",
   },
   titleStyle: {
      color: "#184059",
      width: "90%",
      margin: "0 auto",
      paddingTop: "80px",
      paddingBottom: "50px",
   },
   subtitleStyle: {
      fontWeight: 400,
      color: "#184059",
      width: "80%",
      margin: "0 auto",
      paddingBottom: "20px",
   },
   cardContentStyle:{
      padding: "30px"
   },
   gridContainerStyle: {
      width: "100%",
      margin: "0 auto",
      padding: "20px",
   },
   gridStyle: {
      minWidth: 250,
      margin: "0 20px",
   },
   avatarStyle: {
      width: "180px",
      height: "auto",
      margin: "30px auto 0",
      borderRadius: "50%",
      border: "solid 5px #F2F2F2",
      boxShadow: "0 0 15px #184059",
   },
   reviewStyle: {
      fontStyle: "italic",
   },
   descriptionStyle: {
      padding: "20px 0",
   },
   nameStyle: {
      fontWeight: 600,
   },
   pos: {
      fontWeight: "400",
      margin: "20px 0",
      color: "#5D8AA6",
   }
 });

 export default Customers;