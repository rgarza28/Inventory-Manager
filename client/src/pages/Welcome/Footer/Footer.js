import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography, Link, Box } from '@material-ui/core';
import logo from './logo-vertical.png';

export default function Footer() {
   const classes = useStyles();

   return (
      <Container maxWidth="md" component="footer" className={classes.footer}>
         <Grid container spacing={4} justify="space-evenly">
            {footers.map((footer) => (
               <Grid item xs={6} sm={3} key={footer.title}>
                  <Typography variant="h6" color="textPrimary" gutterBottom>
                     {footer.title}
                  </Typography>
                  <ul>
                     {footer.description.map((item) => (
                        <li key={item}>
                           <Link
                              href="#"
                              variant="subtitle1"
                              color="textSecondary"
                           >
                              {item}
                           </Link>
                        </li>
                     ))}
                  </ul>
               </Grid>
            ))}
         </Grid>
         <Box mt={5}>
            <Copyright />
         </Box>
      </Container>
   );
}

const useStyles = makeStyles((theme) => ({
   root: {},
   menuButton: {
      marginRight: theme.spacing(2),
      color: '#D97904',
      display: 'inline',
   },
   appBarStyle: {
      backgroundColor: '#F2F2F2',
      borderBottom: '1px solid #730217',
      boxShadow: 'none',
   },
   avatarStyle: {
      width: '250px',
      height: 'auto',
      borderRadius: 0,
      margin: '10px',
   },
   textButtonStyle: {
      backgroundColor: 'transparent',
      color: '#730217',
      padding: '10px 15px',
      margin: '0 10px',
      textTransform: 'lowercase',
      fontSize: '15px',
      fontWeight: '400',
      '&:hover': {
         backgroundColor: 'transparent',
         color: '#BF0426',
      },
   },
   containedButtonStyle: {
      fontSize: '15px',
      fontWeight: '400',
      textTransform: 'lowercase',
      backgroundColor: '#730217',
      color: '#F2F2F2',
      padding: '10px 20px',
      boxShadow: 'none',
      '&:hover': {
         backgroundColor: '#BF0426',
         boxShadow: 'none',
      },
   },
   footer: {
      borderTop: `1px solid ${theme.palette.divider}`,
      marginTop: theme.spacing(8),
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
      [theme.breakpoints.up('sm')]: {
         paddingTop: theme.spacing(6),
         paddingBottom: theme.spacing(6),
      },
   },
}));

function Copyright() {
   return (
      <Typography variant="body2" color="textSecondary" align="center">
         {'Copyright © '}
         <Link color="inherit" href="https://material-ui.com/">
            Your Website
         </Link>{' '}
         {new Date().getFullYear()}
         {'.'}
      </Typography>
   );
}

const footers = [
   {
      title: 'Features',
      description: ['features', 'industries', 'customers', 'pricing', 'team'],
   },
   {
      title: 'Resources',
      description: [
         'Resource',
         'Resource name',
         'Another resource',
         'Final resource',
      ],
   },
   {
      title: 'Social Media',
      description: ['Facebook', 'Instagram', 'LinkedIn', 'Youtube'],
   },
];
