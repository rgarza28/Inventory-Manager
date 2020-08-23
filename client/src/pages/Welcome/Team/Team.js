import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, Typography, Container, Grid, Avatar} from '@material-ui/core';
import TeamData from "./Team.json";

function Team() {
  const classes = useStyles();

  return (
   <Container maxWidth="false" className={classes.containerStyle} >
      <Typography variant="h4" className={classes.titleStyle}>
         Meet the brains behind Chief System
      </Typography>
      <Typography variant="h6" className={classes.subtitleStyle}></Typography>
         <Grid container className={classes.gridContainerStyle}>
            {TeamData.map(data=>{
               return (
               <Grid item className={classes.gridStyle} xs>
                  <Card className={classes.root}>
                     <CardActionArea>
                        <CardContent className={classes.cardContentStyle}>
                           <Typography className={classes.nameStyle} variant="body2">
                              {data.name}
                           </Typography>
                           <Typography variant="body2">
                              {data.specialty}
                           </Typography>
                        </CardContent>
                        <Avatar 
                           className={classes.avatarStyle}
                           src={data.photo}
                           alt={data.name}
                        />
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
      boxShadow: "0 0 10px 2px #184059",
   },
   media: {
      height: 140,
   },
   containerStyle: {
      backgroundColor: "#5D8AA6",
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
   subtitleStyle: {
      fontWeight: 400,
      color: "#184059",
      width: "80%",
      margin: "0 auto",
      paddingBottom: "20px",
   },
   cardContentStyle:{
      padding: "30px",
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
      margin: "0 auto 30px",
      borderRadius: "50%",
      border: "solid 5px #F2F2F2",
      boxShadow: "0 0 15px #184059",
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

 export default Team;