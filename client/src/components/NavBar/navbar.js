import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button, Avatar, Grid } from '@material-ui/core';
import logo from "./logo-horizontal.png";

function Navbar() {
   const classes = useStyles();
   
   return (
      <div className={classes.root}>
         <AppBar className={classes.appBarStyle} color="secondary" position="fixed">
            <Toolbar>
               <Grid xs>
                  <Avatar className={classes.avatarStyle} src={logo} />
               </Grid>
                  <Button className={classes.textButtonStyle}>solutions</Button> 
                  <Button className={classes.textButtonStyle}>industries</Button> 
                  <Button className={classes.textButtonStyle}>pricing</Button> 
                  <Button className={classes.textButtonStyle} variant="text">sign in</Button>
                  <Button className={classes.containedButtonStyle} variant="contained">get started</Button>
            </Toolbar>
         </AppBar>
      </div>
   );
}

const useStyles = makeStyles((theme) => ({
   root: {
   },
   menuButton: {
      marginRight: theme.spacing(2),
      color: "#D97904",
      display: "inline",
   },
   appBarStyle: {
      backgroundColor: "#F2F2F2",
      borderBottom: "1px solid #730217",
      boxShadow: "none",
   },
   avatarStyle: {
      width: "250px",
      height: "auto",
      borderRadius: 0,
      margin: "10px",
   },
   textButtonStyle: {
      backgroundColor: "transparent",
      color: "#730217",
      padding: "10px 20px",
      margin: "0 10px",
      textTransform: "lowercase",
      fontSize: "15px",
      fontWeight: "400",
      "&:hover": {
         backgroundColor: "transparent",
         color: "#BF0426"
      }
   },
   containedButtonStyle: {
      fontSize: "15px",
      fontWeight: "400",
      textTransform: "lowercase",
      backgroundColor: "#730217",
      color: "#F2F2F2",
      padding: "10px 20px",
      boxShadow: "none",
      "&:hover": {
         backgroundColor: "#BF0426",
         boxShadow: "none"
      }
   }

}));

export default Navbar;