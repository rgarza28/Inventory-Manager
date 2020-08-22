import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { AppBar, Toolbar, Typography, Button, IconButton, Avatar } from '@material-ui/core';
import logo from "./logo-horizontal.png"

function Navbar() {
   const classes = useStyles();
   
   return (
      <div className={classes.root}>
         <AppBar className={classes.appBarStyle} color="secondary" position="static">
            <Toolbar justify="space-between">
               <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                  <MenuIcon />
               </IconButton>
               <Avatar className={classes.avatarStyle} src={logo} />
               <Typography variant="h6" className={classes.h6Style}>solutions</Typography> 
               <Typography variant="h6" className={classes.h6Style}>industries</Typography> 
               <Typography variant="h6" className={classes.h6Style}>pricing</Typography> 
               <Button className={classes.textButtonStyle} variant="text">sign in</Button>
               <Button className={classes.containedButtonStyle} variant="contained">get started</Button>
            </Toolbar>
         </AppBar>
      </div>
   );
}

const useStyles = makeStyles((theme) => ({
   root: {
      flexGrow: 1,
   },
   menuButton: {
      marginRight: theme.spacing(2),
      color: "#D97904"
   },
   appBarStyle: {
      backgroundColor: "#F2F2F2",
      boxShadow: "none",
      border: "1px solid #730217"
   },
   h6Style: {
      color: "#730217",
      fontSize: "15px",
      margin: "5px",
      fontWeight: "400",
   },
   avatarStyle: {
      width: "300px",
      height: "auto",
      borderRadius: 0,
      margin: "10px"
   },
   textButtonStyle: {
      backgroundColor: "transparent",
      color: "#730217",
      padding: "10px 20px",
      textTransform: "lowercase",
      fontSize: "15px",
      fontWeight: "400",
      "&:hover": {
         backgroundColor: "transparent",
         color: "#BF0426"
      }
   },
   containedButtonStyle: {
      backgroundColor: "#730217",
      color: "#F2F2F2",
      padding: "10px 20px",
      boxShadow: "none",
      textTransform: "lowercase",
      fontSize: "15px",
      fontWeight: "400",
      "&:hover": {
         backgroundColor: "#BF0426",
         boxShadow: "none"
      }
   }

}));

export default Navbar;