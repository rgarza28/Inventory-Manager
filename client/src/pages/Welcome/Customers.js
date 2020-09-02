import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
   Card,
   CardActionArea,
   CardContent,
   Typography,
   Container,
   Grid,
   Avatar,
} from '@material-ui/core';

function Customers() {
   const classes = useStyles();

   return (
      <Container
         maxWidth="false"
         className={classes.containerStyle}
         id="customers"
      >
         <Typography variant="h3" className={classes.titleStyle}>
            Thousands of happy customers in 80+ countries
         </Typography>
         <Typography variant="h6" className={classes.subtitleStyle}>
            Manufacturing needs an inventory management software that can
            provide an accurate cost for finished goods. Get clear visibility of
            your profits and margins for your manufacturing business today.
         </Typography>
         <Grid
            container
            className={classes.gridContainerStyle}
            justify="center"
         >
            {customersData.map((data) => {
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
                              <Typography
                                 gutterBottom
                                 variant="h5"
                                 component="h2"
                                 className={classes.reviewStyle}
                              >
                                 {data.review}
                              </Typography>
                              <Typography
                                 className={classes.descriptionStyle}
                                 variant="body2"
                              >
                                 {data.description}
                              </Typography>
                              <Typography
                                 className={classes.nameStyle}
                                 variant="body2"
                              >
                                 {data.name}
                              </Typography>
                              <Typography variant="body2">
                                 {data.company}
                              </Typography>
                           </CardContent>
                        </CardActionArea>
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
      flexgrow: 1,
      margin: '20px',
   },
   media: {
      height: 140,
   },
   containerStyle: {
      width: '100vw',
      minHeight: '100vh',
      paddingBottom: '50px',
   },
   titleStyle: {
      color: '#184059',
      width: '90%',
      margin: '0 auto',
      paddingTop: '80px',
      paddingBottom: '20px',
      [theme.breakpoints.down('xs')]: {
         fontSize: '30px',
      },
   },
   subtitleStyle: {
      fontWeight: 400,
      color: '#184059',
      width: '80%',
      margin: '0 auto',
      paddingBottom: '20px',
      [theme.breakpoints.down('xs')]: {
         fontSize: '16px',
      },
   },
   gridContainerStyle: {
      width: '90%',
      margin: '0 auto',
      padding: '20px',
      border: 'red solid 2px',
   },
   cardContentStyle: {
      padding: '30px',
   },
   gridStyle: {
      minWidth: 350,
      maxWidth: 350,
      border: 'orange solid 2px',
   },
   avatarStyle: {
      width: '180px',
      height: 'auto',
      margin: '30px auto 0',
      borderRadius: '50%',
      border: 'solid 5px #F2F2F2',
      boxShadow: '0 0 15px #184059',
   },
   reviewStyle: {
      fontStyle: 'italic',
   },
   descriptionStyle: {
      padding: '20px 0',
   },
   nameStyle: {
      fontWeight: 600,
   },
   pos: {
      fontWeight: '400',
      margin: '20px 0',
      color: '#5D8AA6',
   },
}));

const customersData = [
   {
      photo: '/img/customers/Sidney_Lucas.jpg',
      review:
         '“Chief System ticks all the boxes for our food production inventory management.”',
      description:
         'Processing 1,000+ tonnes of cashews per year and producing 60+ value-added SKUs for the international retail market is a difficult feat, but one made easier with Chief System by our side.',
      name: 'Sidney Lucas',
      company: 'West Mumbai Almonds',
   },
   {
      photo: '/img/customers/Riley_Moore.jpg',
      review:
         '“Chief System is the first thing we turn on and the last thing we turn off each day.”',
      description:
         'With over 20 years of experience in the food business I have to tell that switching to Chief System was the best thing our company ever did.',
      name: 'Riley Moore',
      company: 'Brinker International',
   },
   {
      photo: '/img/customers/Franky_Cunningham.jpg',
      review:
         '“Chief System has proven to be the winner for so many of the things we look for.”',
      description:
         'Coming from a supply chain management background I’ve had a lot of experience working with ERP systems and found that Chief System offers a good balance of ease of use, with enough features that are truly useful to an organization.',
      name: 'Franky Cunningham',
      company: 'Warrior Motorcycle',
   },
];

export default Customers;
