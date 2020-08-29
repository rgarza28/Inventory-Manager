import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
   Container,
   Grid,
   Typography,
   Link,
   Box,
   Avatar,
} from '@material-ui/core';
import logo from './images/logo-vertical.png';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';

export default function Footer() {
   const classes = useStyles();

   return (
      <div>
         <Container
            maxWidth="false"
            component="footer"
            className={classes.footer}
         >
            <Container width="lg">
               <Grid container spacing={4} justify="space-evenly">
                  <Grid item xs={6} sm={3}>
                     <Link>
                        <Avatar
                           className={classes.avatarStyle}
                           src={logo}
                           justify="center"
                        ></Avatar>
                     </Link>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                     <Link underline="none">
                        <Typography href="" className={classes.menuStyle}>
                           features
                        </Typography>
                     </Link>
                     <Link underline="none">
                        <Typography href="" className={classes.menuStyle}>
                           customers
                        </Typography>
                     </Link>
                     <Link underline="none">
                        <Typography href="" className={classes.menuStyle}>
                           pricing
                        </Typography>
                     </Link>
                     <Link underline="none">
                        <Typography href="" className={classes.menuStyle}>
                           team
                        </Typography>
                     </Link>
                     <Link underline="none">
                        <Typography href="" className={classes.menuStyle}>
                           contact us
                        </Typography>
                     </Link>
                  </Grid>
                  <Grid item xs={6} sm={3} alignItems="center" mb={0}>
                     <Link href="https://www.facebook.com/" target="_blank">
                        <FacebookIcon className={classes.iconStyle} />
                     </Link>
                     <Link href="https://www.instagram.com/" target="_blank">
                        <InstagramIcon className={classes.iconStyle} />
                     </Link>
                     <Link href="https://www.linkedin.com/" target="_blank">
                        <LinkedInIcon className={classes.iconStyle} />
                     </Link>
                     <Link href="https://www.youtube.com/" target="_blank">
                        <YouTubeIcon className={classes.iconStyle} />
                     </Link>
                  </Grid>
               </Grid>
            </Container>
         </Container>
         <Container maxWidth="false" style={{ padding: '0' }}>
            <Box>
               <Copyright />
            </Box>
         </Container>
      </div>
   );
}

const useStyles = makeStyles((theme) => ({
   root: {},
   footer: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
      [theme.breakpoints.up('sm')]: {
         paddingTop: theme.spacing(6),
         paddingBottom: theme.spacing(6),
      },
      backgroundColor: '#184059',
      color: '#F2F2F2',
   },
   menuStyle: {
      fontSize: '15px',
      color: '#F2F2F2',
      padding: '5px 0',
      textTransform: 'lowercase',
      '&:hover': {
         backgroundColor: 'transparent',
         color: '#D7D7D9',
      },
   },
   avatarStyle: {
      backgroundColor: '#F2F2F2',
      width: '75px',
      height: 'auto',
      margin: '10px auto',
      padding: '30px',
      borderRadius: '5px',
   },
   textButtonStyle: {
      fontWeight: '400',
   },
   iconStyle: {
      fontSize: '30px',
      color: '#F2F2F2',
      margin: '12px auto',
      display: 'block',
   },
}));

function Copyright() {
   return (
      <Typography
         variant="body2"
         color="textSecondary"
         align="center"
         style={{
            backgroundColor: '#5D8AA6',
            color: '#F2F2F2',
            padding: '20px',
         }}
      >
         {'Copyright © '}
         <Link color="inherit" href="https://material-ui.com/">
            Chief System
         </Link>{' '}
         {new Date().getFullYear()}
         {'.'}
      </Typography>
   );
}
