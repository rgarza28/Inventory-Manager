import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Card, CardContent, Container, Icon} from "@material-ui/core";
import FeaturesData from "./features.json";

function Features() {

   const classes = useStyles();
   
   return (
      <Container maxWidth="lg" >
         <Typography variant="h4" className={classes.titleStyle}>
               Every inventory management feature your manufacturing business needs
         </Typography>
         <Grid container className={classes.gridContainerStyle}>
            {FeaturesData.map(data => {
               return (
                  <Grid item className={classes.gridStyle} xs>
                     <Card  Card className={classes.root} >
                        <CardContent>
                           <Icon className={classes.iconStyle}>{data.icon}</Icon>
                           <Typography className={classes.pos} >
                              {data.title}
                           </Typography>
                           <Typography variant="body2" component="p" align="left">
                              {data.description}
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
      boxShadow: "none",
   },
   titleStyle: {
      color: "#184059",
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
      fontWeight: "400",
      margin: "20px 0",
      color: "#5D8AA6",
   }
});

export default Features;