import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {
   AppBar,
   Avatar,
   Container,
   Button,
   Grid,
   Hidden,
   IconButton,
   Tab,
   Tabs,
   Toolbar,
   Tooltip,
   Box,
   Typography,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import logoLevel from './img/logo-level.png';
import UserContext from '../../context/UserContext';
import Table from '../../components/Table';
import NewProducts from '../../components/NewProducts';

function TabPanel(props) {
   const { children, value, index, ...other } = props;

   return (
      <div
         role="tabpanel"
         hidden={value !== index}
         id={`simple-tabpanel-${index}`}
         aria-labelledby={`simple-tab-${index}`}
         {...other}
      >
         {value === index && (
            <Box p={3}>
               <Typography>{children}</Typography>
            </Box>
         )}
      </div>
   );
}

TabPanel.propTypes = {
   children: PropTypes.node,
   index: PropTypes.any.isRequired,
   value: PropTypes.any.isRequired,
};

function a11yProps(index) {
   return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
   };
}

function Header(props) {
   const { classes, onDrawerToggle } = props;
   const { setUserData } = useContext(UserContext);
   const logout = () => {
      setUserData({
         token: undefined,
         user: undefined,
      });
      localStorage.setItem('auth-token', '');
   };

   const [value, setValue] = useState(0);
   const handleChange = (event, newValue) => {
      setValue(newValue);
   };

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
                        <Avatar className={classes.logoStyle} src={logoLevel} />
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
                  <Grid item xs>
                     <Typography color="inherit" variant="h5" component="h1">
                        Welcome to your Inventory
                     </Typography>
                  </Grid>
                  <Grid item>
                     <Button
                        className={classes.buttonStyle}
                        href="/"
                        variant="outlined"
                        onClick={logout}
                     >
                        sign out
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
         <AppBar position="fixed" className={classes.menuStyle}>
            <Tabs
               value={value}
               onChange={handleChange}
               aria-label="simple tabs example"
            >
               <Tab label="INVENTORY" {...a11yProps(0)} />
               <Tab label="ADD NEW PRODUCT" {...a11yProps(1)} />
            </Tabs>
         </AppBar>
         <Container maxWidth={false} style={{ marginTop: '50px' }}>
            <TabPanel value={value} index={0}>
               <Table />
            </TabPanel>
            <TabPanel value={value} index={1}>
               <NewProducts />
            </TabPanel>
         </Container>
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
   },
   iconButtonAvatar: {
      padding: 4,
   },
   //  Styling additions
   appBarStyle: {
      backgroundColor: '#184059',
   },
   logoStyle: {
      backgroundColor: '#F2F2F2',
      width: '150px',
      height: 'auto',
      padding: '10px',
      borderRadius: '5px',
   },
   buttonStyle: {
      color: '#F2F2F2',
      border: '1px solid #F2F2F2',
   },
   menuStyle: {
      position: 'fixed',
      top: '90px',
      backgroundColor: '#184059',
   },
   // secondaryBarStyle: {
   //    position: 'fixed',
   //    top: '90px',
   //    backgroundColor: '#184059',
   // },

   // Form styling
   root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
   },
});

export default withStyles(styles)(Header);
