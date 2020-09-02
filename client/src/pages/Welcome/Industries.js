import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
   Typography,
   Grid,
   Card,
   CardContent,
   Container,
   CardMedia,
} from '@material-ui/core';

function Industries() {
   const classes = useStyles();

   return (
      <Container
         maxWidth="false"
         className={classes.containerStyle}
         id="industries"
      >
         <Typography variant="h3" className={classes.titleStyle}>
            The businesses we help grow
         </Typography>
         <Grid
            container
            className={classes.gridContainerStyle}
            justify="center"
         >
            {industriesData.map((data) => {
               return (
                  <Grid item className={classes.gridStyle} xs>
                     <Card className={classes.root}>
                        <CardMedia
                           className={classes.media}
                           image={data.photo}
                           title={data.industry}
                        />
                        <CardContent>
                           <Typography className={classes.pos}>
                              {data.industry}
                           </Typography>
                        </CardContent>
                     </Card>
                  </Grid>
               );
            })}
         </Grid>
      </Container>
   );
}

const useStyles = makeStyles((theme) => ({
   root: {
      backgroundColor: '#F2F2F2',
      boxShadow: '0 0 8px #730217',
      margin: 20,
   },
   media: {
      height: 140,
   },
   containerStyle: {
      backgroundColor: '#D97904',
      width: '100vw',
      minHeight: '100vh',
      paddingBottom: '50px',
   },
   titleStyle: {
      color: '#F2F2F2',
      width: '80%',
      margin: '0 auto',
      paddingTop: '80px',
      paddingBottom: '50px',
      [theme.breakpoints.down('xs')]: {
         fontSize: '30px',
      },
   },
   gridContainerStyle: {
      width: '90%',
      margin: '0 auto',
   },
   gridStyle: {
      minWidth: 350,
      maxWidth: 350,
   },
   pos: {
      textTransform: 'uppercase',
      fontWeight: '400',
      margin: 0,
      color: '#730217',
   },
}));

const industriesData = [
   {
      industry: 'Manufacturing',
      photo: '/img/industries/manufacturing.jpg',
   },
   {
      industry: 'Wholesale',
      photo: '/img/industries/wholesale.jpg',
   },
   {
      industry: 'Distribution',
      photo: '/img/industries/distribution.jpg',
   },
   {
      industry: 'Retail',
      photo: '/img/industries/retail.jpg',
   },
   {
      industry: 'Food Manufacturing',
      photo: '/img/industries/food.jpg',
   },
   {
      industry: 'Brewing',
      photo: '/img/industries/brewing.jpg',
   },
   {
      industry: 'Coffee Roasting',
      photo: '/img/industries/coffee.jpg',
   },
   {
      industry: 'Health & Supplements',
      photo: '/img/industries/drugs.jpg',
   },
];

export default Industries;
