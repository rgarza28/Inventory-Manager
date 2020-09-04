import React, { useState, useContext } from 'react';
import {
   Avatar,
   Button,
   CssBaseline,
   TextField,
   FormControlLabel,
   Checkbox,
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

function SignUp() {
   const [ email, setEmail ] = useState();
   const [ password, setPassword ] = useState();
   const [ name, setName ] = useState();

   const { setUserData } = useContext(UserContext);

   const history = useHistory();

   const submit = async (e) => {
     e.preventDefault();
     const newUser = { name, email, password };
     await axios.post("http://localhost:5000/api/users", newUser); 
     const loginRes = await axios.post("http://localhost:5000/api/auth", {
      email, password
     });
     setUserData({
        token: loginRes.data.token,
        name: loginRes.data.name
     });
     localStorage.setItem("auth-token", loginRes.data.token);
     history.push("/home"); 
   }

   const classes = useStyles();

   const welcome = () => history.push("/");

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
                        />
                     </Grid>
                     <Grid item xs={12}>
                        <FormControlLabel
                           control={
                              <Checkbox
                                 value="allowExtraEmails"
                                 color="primary"
                              />
                           }
                           label="I want to receive inspiration, marketing promotions and updates via email."
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
                  <Grid container justify="flex-end">
                     <Grid item xs>
                        <Link
                           href="#"
                           variant="body2"
                           style={{ color: '#730217' }}
                        >
                           Already have an account? Sign in
                        </Link>
                     </Grid>
                  </Grid>
               </form>
            </div>
            <Box mt={5}>
               <Copyright />
            </Box>
         </Container>
      </Container>
   );
}

const useStyles = makeStyles((theme) => ({
   paper: {
      marginTop: theme.spacing(8),
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

export default SignUp;
