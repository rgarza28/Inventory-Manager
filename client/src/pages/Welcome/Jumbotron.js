import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, CardMedia } from '@material-ui/core';
import background from './images/globe.jpg';
import { Link } from 'react-router-dom';

function Jumbotron() {
   const classes = useStyles();

   return (
      <CardMedia
         className={classes.imageBackground}
         image={background}
         id="welcome"
      >
         <Typography variant="h3" className={classes.jumbotronTitleStyle}>
            Grow your business with smarter inventory management
         </Typography>
         <Typography variant="h6" className={classes.h6Style}>
            Chief System’s inventory management software is perfectly suited to
            businesses in the manufacturing industry who require an accurate
            finished goods cost. Product assemblies, costed purchase orders,
            multi-currency, and advanced reporting are just a few of Chief
            System’s powerful features which make this possible
         </Typography>
         <Link to="/signup">
            <Button className={classes.containedButtonStyle}>
               Start your free trial now
            </Button>
         </Link>
      </CardMedia>
   );
}

const useStyles = makeStyles((theme) => ({
   root: {},
   imageBackground: {
      backgroundColor: 'rgba(24, 64, 89, 1)',
      height: '100vh',
      padding: '20px',
      [theme.breakpoints.down('sm')]: {
         height: 'auto',
      },
   },
   jumbotronTitleStyle: {
      fontSize: '75px',
      fontWeight: 300,
      color: '#F2F2F2',
      width: '80%',
      margin: '0 auto',
      padding: '10% 0 3%',
      [theme.breakpoints.down('sm')]: {
         fontSize: '60px',
         width: '90%',
      },
      [theme.breakpoints.down('xs')]: {
         fontSize: '35px',
         width: '95%',
      },
   },
   h6Style: {
      letterSpacing: '2px',
      fontWeight: '400',
      backgroundColor: 'rgba(24, 64, 89, 0.6)',
      color: '#F2F2F2',
      width: '80%',
      margin: '0 auto 3%',
      padding: '20px',
      borderRadius: '5px',
      [theme.breakpoints.down('sm')]: {
         fontSize: '18px',
         width: '90%',
      },
      [theme.breakpoints.down('xs')]: {
         fontSize: '14px',
         width: '90%',
      },
   },
   containedButtonStyle: {
      backgroundColor: '#BF0426',
      color: '#F2F2F2',
      padding: '10px 20px',
      boxShadow: 'none',
      textTransform: 'lowercase',
      fontSize: '15px',
      fontWeight: '400',
      '&:hover': {
         backgroundColor: '#D97904',
         boxShadow: 'none',
      },
   },
}));

export default Jumbotron;
