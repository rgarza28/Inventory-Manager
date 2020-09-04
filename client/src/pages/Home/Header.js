import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import HelpIcon from '@material-ui/icons/Help';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import logo from './img/logo-white.png';

function Header(props) {
   const { classes, onDrawerToggle } = props;

   return (
      <React.Fragment>
         <AppBar
            position="sticky"
            elevation={0}
            className={classes.appBarStyle}
         >
            <Toolbar>
               <Grid container spacing={1} alignItems="center">
                  <Grid>
                     <Button href="/">
                        <Avatar className={classes.logoStyle} src={logo} />
                     </Button>
                  </Grid>
                  <Hidden smUp>
                     <Grid item>
                        <IconButton
                           color="inherit"
                           aria-label="open drawer"
                           onClick={onDrawerToggle}
                           className={classes.buttonStyle}
                        >
                           <MenuIcon />
                        </IconButton>
                     </Grid>
                  </Hidden>
                  <Grid item xs />
                  <Grid item>
                     <Button
                        className={classes.buttonStyle}
                        href="/"
                        variant="outlined"
                     >
                        HOME
                     </Button>
                  </Grid>
                  <Grid item>
                     <Tooltip title="Alerts • No alerts">
                        <IconButton color="inherit">
                           <NotificationsIcon />
                        </IconButton>
                     </Tooltip>
                  </Grid>
                  <Grid item>
                     <IconButton
                        color="inherit"
                        className={classes.iconButtonAvatar}
                     >
                        <Avatar
                           src="/static/images/avatar/1.jpg"
                           alt="My Avatar"
                        />
                     </IconButton>
                  </Grid>
               </Grid>
            </Toolbar>
         </AppBar>
         <AppBar
            component="div"
            className={classes.secondaryBarStyle}
            position="static"
            elevation={0}
         >
            <Toolbar>
               <Grid container alignItems="center" spacing={1}>
                  <Grid item xs>
                     <Typography color="inherit" variant="h5" component="h1">
                        Welcome to your Inventory
                     </Typography>
                  </Grid>
                  {/* <Grid item>
                     <Button
                        className={classes.button}
                        variant="outlined"
                        color="inherit"
                        size="small"
                     >
                        Web setup
                     </Button>
                  </Grid>
                  <Grid item>
                     <Tooltip title="Help">
                        <IconButton color="inherit">
                           <HelpIcon />
                        </IconButton>
                     </Tooltip>
                  </Grid> */}
               </Grid>
            </Toolbar>
         </AppBar>
         <AppBar
            component="div"
            className={classes.secondaryBarStyle}
            position="static"
            elevation={0}
         >
            <Tabs value={0} textColor="inherit">
               <Tab textColor="inherit" label="Users" />
               <Tab textColor="inherit" label="Sign-in method" />
               <Tab textColor="inherit" label="Templates" />
               <Tab textColor="inherit" label="Usage" />
            </Tabs>
         </AppBar>
      </React.Fragment>
   );
}

Header.propTypes = {
   classes: PropTypes.object.isRequired,
   onDrawerToggle: PropTypes.func.isRequired,
};

const styles = (theme) => ({
   menuButton: {
      marginLeft: -theme.spacing(1),
      border: 'red solid 2px',
   },
   iconButtonAvatar: {
      padding: 4,
   },
   //  Styling additions
   appBarStyle: {
      backgroundColor: '#184059',
   },
   logoStyle: {
      width: '200px',
      height: 'auto',
      borderRadius: 0,
   },
   buttonStyle: {
      color: '#F2F2F2',
      border: '1px solid #F2F2F2',
   },
   secondaryBarStyle: {
      zIndex: 0,
      backgroundColor: '#184059',
   },
});

export default withStyles(styles)(Header);
