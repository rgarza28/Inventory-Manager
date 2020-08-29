import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
   AppBar,
   Box,
   Button,
   Avatar,
   Grid,
   Container,
} from '@material-ui/core';
import logo from './logo-horizontal.png';
import { Link } from 'react-router-dom';

function Navbar() {
   const classes = useStyles();

   return (
      <Container className={classes.root} maxWidth="false">
         <AppBar className={classes.appBarStyle}>
            <Grid container alignItems="center" style={{ padding: '0 10px' }}>
               <Grid
                  item
                  xs={12}
                  md={3}
                  style={{
                     justifyContent: 'center',
                     display: 'flex',
                     flexDirection: 'row',
                  }}
               >
                  <Link to="/">
                     <Avatar className={classes.avatarStyle} src={logo} />
                  </Link>
               </Grid>
               <Grid className={classes.menuStyle} item xs={12} md={9}>
                  <Button className={classes.textButtonStyle} href="#features">
                     features
                  </Button>
                  <Button
                     className={classes.textButtonStyle}
                     href="#industries"
                  >
                     industries
                  </Button>
                  <Button className={classes.textButtonStyle} href="#customers">
                     customers
                  </Button>
                  <Button className={classes.textButtonStyle} href="#pricing">
                     pricing
                  </Button>
                  <Button className={classes.textButtonStyle} href="#team">
                     team
                  </Button>
                  <Box className={classes.boxStyle}>
                     <Link to="/signin" style={{ textDecoration: 'none' }}>
                        <Button
                           className={classes.textButtonStyle}
                           variant="text"
                        >
                           sign in
                        </Button>
                     </Link>
                     <Link to="/signup">
                        <Button
                           className={classes.containedButtonStyle}
                           variant="contained"
                        >
                           get started
                        </Button>
                     </Link>
                  </Box>
               </Grid>
            </Grid>
         </AppBar>
      </Container>
   );
}

const useStyles = makeStyles((theme) => ({
   root: {},
   appBarStyle: {
      backgroundColor: '#F2F2F2',
      borderBottom: '1px solid #730217',
      boxShadow: 'none',
      [theme.breakpoints.down('sm')]: {
         position: 'relative',
         borderBottom: 'none',
      },
   },
   avatarStyle: {
      width: '250px',
      height: 'auto',
      borderRadius: 0,
      margin: '10px',
      [theme.breakpoints.down('sm')]: {},
   },
   menuStyle: {
      textAlign: 'right',
      [theme.breakpoints.down('sm')]: {
         textAlign: 'center',
         padding: '10px 0',
      },
   },
   boxStyle: {
      display: 'inline',
      borderLeft: '1px solid #730217',
      padding: '15px 0 15px 15px',
      marginLeft: '15px',
      [theme.breakpoints.down('xs')]: {
         display: 'block',
         borderLeft: 'none',
         marginLeft: '0',
      },
   },
   textButtonStyle: {
      fontSize: '15px',
      fontWeight: '400',
      backgroundColor: 'transparent',
      color: '#730217',
      padding: '10px',
      margin: '0 5px',
      textTransform: 'lowercase',
      '&:hover': {
         backgroundColor: 'transparent',
         color: '#BF0426',
      },
      [theme.breakpoints.down('sm')]: {
         fontSize: '12px',
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
      [theme.breakpoints.down('sm')]: {
         fontSize: '12px',
      },
   },
}));

export default Navbar;
