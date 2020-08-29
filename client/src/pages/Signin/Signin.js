import React from 'react';
import {
   Avatar,
   Button,
   CssBaseline,
   TextField,
   FormControlLabel,
   Checkbox,
   Link,
   Paper,
   Box,
   Grid,
   Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import logo from './logo-vertical.png';

function SignInSide() {
   const classes = useStyles();

   return (
      <Grid container component="main" className={classes.root}>
         <CssBaseline />
         <Grid item xs={false} sm={4} md={7} className={classes.image} />
         <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
            className={classes.containerStyle}
         >
            <div className={classes.paper}>
               <Link to="/">
                  <Button className={classes.buttonLogoStyle}>
                     <Avatar
                        className={classes.avatarStyle}
                        src={logo}
                        justify="center"
                     ></Avatar>
                  </Button>
               </Link>
               <Typography
                  component="h1"
                  variant="h5"
                  style={{ color: '#730217' }}
               >
                  Sign in
               </Typography>
               <form className={classes.form} noValidate>
                  <TextField
                     variant="outlined"
                     margin="normal"
                     required
                     fullWidth
                     id="email"
                     label="Email Address"
                     name="email"
                     autoComplete="email"
                     autoFocus
                  />
                  <TextField
                     variant="outlined"
                     margin="normal"
                     required
                     fullWidth
                     name="password"
                     label="Password"
                     type="password"
                     id="password"
                     autoComplete="current-password"
                  />
                  <FormControlLabel
                     control={<Checkbox value="remember" color="primary" />}
                     label="Remember me"
                  />
                  <Button
                     type="submit"
                     fullWidth
                     variant="contained"
                     className={classes.containedButtonStyle}
                  >
                     Sign In
                  </Button>
                  <Grid container>
                     <Grid item xs>
                        <Link
                           href="#"
                           variant="body2"
                           style={{ color: '#730217' }}
                        >
                           Forgot password?
                        </Link>
                     </Grid>
                     <Grid item xs>
                        <Link
                           href="#"
                           variant="body2"
                           style={{ color: '#730217' }}
                        >
                           {"Don't have an account? Sign Up"}
                        </Link>
                     </Grid>
                  </Grid>
                  <Box mt={5}>
                     <Copyright />
                  </Box>
               </form>
            </div>
         </Grid>
      </Grid>
   );
}

const useStyles = makeStyles((theme) => ({
   root: {
      height: '100vh',
   },
   image: {
      backgroundImage:
         'url(https://source.unsplash.com/featured/?logistic,brewery,retailer,manufacturer)',
      backgroundRepeat: 'no-repeat',
      backgroundColor:
         theme.palette.type === 'light'
            ? theme.palette.grey[50]
            : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
   },
   containerStyle: {
      backgroundColor: '#F2F2F2',
   },
   paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
   },
   buttonLogoStyle: {
      '&:hover': {
         backgroundColor: 'transparent',
      },
   },
   avatarStyle: {
      backgroundColor: '#F2F2F2',
      width: '120px',
      height: 'auto',
      margin: '0 auto 20px',
      padding: '20px',
      borderRadius: '5px',
   },
   form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
   },
   containedButtonStyle: {
      fontSize: '20px',
      fontWeight: '400',
      textTransform: 'lowercase',
      backgroundColor: '#730217',
      color: '#F2F2F2',
      padding: '10px 20px',
      margin: '10px 0',
      boxShadow: 'none',
      '&:hover': {
         backgroundColor: '#BF0426',
         boxShadow: 'none',
      },
   },
}));

function Copyright() {
   return (
      <Typography variant="body2" color="textSecondary" align="center">
         {'Copyright © '}
         <Link color="inherit" href="https://material-ui.com/">
            Chief System
         </Link>{' '}
         {new Date().getFullYear()}
         {'.'}
      </Typography>
   );
}

export default SignInSide;
