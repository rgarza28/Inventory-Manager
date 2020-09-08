import React, { useState, useContext } from 'react';
import {
   Avatar,
   Button,
   CssBaseline,
   TextField,
   Link,
   Grid,
   Box,
   Typography,
   Container,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import logo from './logo-vertical.png';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import UserContext from '../../context/UserContext';
import ErrorNotice from '../../components/ErrorNotice';
import FavoriteIcon from '@material-ui/icons/Favorite';

function SignUp() {
   const [email, setEmail] = useState();
   const [password, setPassword] = useState();
   const [name, setName] = useState();
   const [error, setError] = useState();

   const { setUserData } = useContext(UserContext);

   const history = useHistory();

   const submit = async (e) => {
      e.preventDefault();
      try {
         const newUser = { name, email, password };
         await axios.post('http://localhost:5000/api/users', newUser);
         const loginRes = await axios.post('http://localhost:5000/api/auth', {
            email,
            password,
         });
         setUserData({
            token: loginRes.data.token,
            name: loginRes.data.name,
         });
         localStorage.setItem('auth-token', loginRes.data.token);
         history.push('/home');
      } catch (err) {
         err.response.data.msg && setError(err.response.data.msg);
      }
   };

   const classes = useStyles();

   const welcome = () => history.push('/');
   const signin = () => history.push('/signin');

   return (
      <Container maxWidth="false" className={classes.containerStyle}>
         <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
               <Button className={classes.buttonLogoStyle} onClick={welcome}>
                  <Avatar
                     className={classes.avatarStyle}
                     src={logo}
                     justify="center"
                  ></Avatar>
               </Button>
               <Typography
                  component="h1"
                  variant="h5"
                  style={{ color: '#730217' }}
               >
                  Sign up
               </Typography>
               <form className={classes.form} noValidate>
                  <Grid container spacing={2}>
                     <Grid item xs={12}>
                        <TextField
                           autoComplete="uname"
                           name="userName"
                           variant="outlined"
                           required
                           fullWidth
                           id="userName"
                           label="Username"
                           autoFocus
                           onChange={(e) => setName(e.target.value)}
                           color="secondary"
                        />
                     </Grid>
                     <Grid item xs={12}>
                        <TextField
                           variant="outlined"
                           required
                           fullWidth
                           id="email"
                           label="Email Address"
                           name="email"
                           autoComplete="email"
                           onChange={(e) => setEmail(e.target.value)}
                           color="secondary"
                        />
                     </Grid>
                     <Grid item xs={12}>
                        <TextField
                           variant="outlined"
                           required
                           fullWidth
                           name="password"
                           label="Password"
                           type="password"
                           id="password"
                           autoComplete="current-password"
                           onChange={(e) => setPassword(e.target.value)}
                           color="secondary"
                        />
                     </Grid>
                  </Grid>
                  <Button
                     type="submit"
                     fullWidth
                     variant="contained"
                     color="primary"
                     className={classes.containedButtonStyle}
                     onClick={submit}
                  >
                     Sign Up
                  </Button>
                  {error && (
                     <ErrorNotice
                        message={error}
                        clearError={() => setError(undefined)}
                     />
                  )}
                  <Grid container justify="flex-end">
                     <Grid item xs>
                        <Link
                           href="/signin"
                           variant="body2"
                           style={{ color: '#730217' }}
                           onClick={signin}
                        >
                           Already have an account? Sign in
                        </Link>
                     </Grid>
                  </Grid>
               </form>
            </div>
            <Grid
               style={{
                  display: 'flex',
                  justifyContent: 'center',
               }}
            >
               <Box mt={5}>
                  <Typography
                     className={classes.madeWithLove}
                     color="textSecondary"
                  >
                     Made with{' '}
                     <FavoriteIcon
                        style={{
                           color: 'red',
                           padding: '0 8px',
                           fontSize: '35px',
                        }}
                     />
                     by SMU Bootcamp Students
                  </Typography>
                  <Copyright />
               </Box>
            </Grid>
         </Container>
      </Container>
   );
}

const useStyles = makeStyles((theme) => ({
   paper: {
      marginTop: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
   },
   containerStyle: {
      backgroundColor: '#F2F2F2',
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
      marginTop: theme.spacing(3),
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
   madeWithLove: {
      fontSize: '12px',
      letterSpacing: '1px',
      display: 'flex',
      alignItems: 'center',
      paddingBottom: '10px',
      [theme.breakpoints.down('xs')]: {
         fontSize: '12px',
         letterSpacing: '1px',
      },
   },
}));

function Copyright() {
   return (
      <Typography
         style={{ fontSize: '12px', letterSpacing: '1px' }}
         color="textSecondary"
         align="center"
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

export default SignUp;
