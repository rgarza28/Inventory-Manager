import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
   Typography,
   Grid,
   Card,
   CardContent,
   Container,
   Icon,
} from '@material-ui/core';

function Features() {
   const classes = useStyles();

   return (
      <Container
         maxWidth={false}
         className={classes.containerStyle}
         id="features"
      >
         <Typography variant="h3" className={classes.titleStyle}>
            Every inventory management feature your business needs
         </Typography>
         <Grid
            container
            className={classes.gridContainerStyle}
            justify="center"
         >
            {featuresData.map((data, index) => {
               return (
                  <Grid
                     key={index + '-featuresData'}
                     item
                     className={classes.gridStyle}
                     xs
                  >
                     <Card className={classes.root}>
                        <CardContent>
                           <Icon className={classes.iconStyle}>
                              {data.icon}
                           </Icon>
                           <Typography className={classes.pos}>
                              {data.title}
                           </Typography>
                           <Typography
                              variant="body2"
                              component="p"
                              align="left"
                           >
                              {data.description}
                           </Typography>
                        </CardContent>
                     </Card>
                  </Grid>
               );
            })}
         </Grid>
      </Container>
   );
}

const useStyles = makeStyles((theme) => ({
   root: {
      backgroundColor: '#F2F2F2',
      boxShadow: 'none',
   },
   containerStyle: {
      minHeight: '100vh',
      paddingBottom: '50px',
   },
   titleStyle: {
      color: '#184059',
      width: '80%',
      margin: '0 auto',
      paddingTop: '80px',
      paddingBottom: '50px',
      [theme.breakpoints.down('xs')]: {
         fontSize: '30px',
      },
   },
   gridContainerStyle: {
      width: '90%',
      margin: '0 auto',
   },
   gridStyle: {
      minWidth: 350,
      maxWidth: 350,
   },
   iconStyle: {
      color: '#184059',
      fontSize: '40px',
   },
   pos: {
      fontWeight: '400',
      margin: '20px 0',
      color: '#5D8AA6',
   },
}));

const featuresData = [
   {
      icon: 'build',
      title: 'ASSEMBLY (BILL OF MATERIALS)',
      description:
         'Assemble component products in Chief System before processing the sale, saving you time, and ensuring an accurate finished goods cost. Completing kitted orders also enables you to track the value of stock used, and calculate any wastage.',
   },
   {
      icon: 'attach_file',
      title: 'PRODUCTION PLANNING',
      description:
         'Chief System allows you to plan ahead to ensure you can always fulfil orders. Allocate stock to future assemblies, and set minimum quantities for products so you are reminded to reorder before you need them for your next sale.',
   },
   {
      icon: 'trending_up',
      title: 'COMPLETE VISIBILITY',
      description:
         'Get up-to-the-minute stock numbers and sales margins in Chief System, plus instant updates to your accounting system (when integrated). All transactions are processed in real-time, ensuring you have all the information you need to make better business decisions.',
   },
   {
      icon: 'link',
      title: 'MULTI-CHANNEL INTEGRATION',
      description:
         'Chief System integrates with best-of-breed accounting, eCommerce and POS solutions, saving you time and eliminating the need to re-enter data in a separate program. You can also take advantage of Chief System’s reporting tools to learn which channel is performing the best.',
   },
   {
      icon: 'local_convenience_store',
      title: 'MULTI-WAREHOUSE MANAGEMENT',
      description:
         'Easily keep track of stock across multiple warehouses, in multiple locations (different countries, states or cities are managed with ease). Chief System lets you know exactly what stock you have, where, and the ability to segregate stock makes reporting a breeze.',
   },
   {
      icon: 'done_all',
      title: 'BACKORDERING',
      description:
         'Chief System lets you seamlessly split sales into multiple shipments. Get what you do have out the door to the customer, and simultaneously order the balance. Ship the remaining items when you’re ready to complete the sale at a later date.',
   },
   {
      icon: 'attach_money',
      title: 'COSTED PURCHASE ORDERS',
      description:
         'Chief System lets you add additional costs, such as freight and duty, for each purchase order during the receipting process. This means you know exactly what your products cost you, to ensure you’re setting a profitable sell price.',
   },
   {
      icon: 'public',
      title: 'BUY OR SELL IN ANY CURRENCY',
      description:
         'Buy or sell in any currency with all transactions converted back to your base currency for accurate reporting. If you import stock, this multi-currency capability is an absolute must.',
   },
];

export default Features;
