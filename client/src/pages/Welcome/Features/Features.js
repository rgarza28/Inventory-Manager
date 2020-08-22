import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import BuildIcon from '@material-ui/icons/Build';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import LinkIcon from '@material-ui/icons/Link';
import LocalConvenienceStoreIcon from '@material-ui/icons/LocalConvenienceStore';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import PublicIcon from '@material-ui/icons/Public';
import { Typography, Grid, Card, CardContent, Container} from "@material-ui/core";

function Features() {
   const classes = useStyles();
   
   return (
      <Container maxWidth="md">
         <Typography variant="h4" className={classes.titleStyle}>
               Every inventory management feature your manufacturing business needs. 
         </Typography>
         <Grid container className={classes.gridContainerStyle}>
            <Grid item xs>
               <Card className={classes.root}>
                  <CardContent>
                     <BuildIcon className={classes.iconStyle} />
                  <Typography className={classes.pos} >
                     ASSEMBLY (BILL OF MATERIALS)
                  </Typography>
                  <Typography variant="body2" component="p" align="left">
                     Assemble component products in Chief System before processing the sale, saving you time, and ensuring an accurate finished goods cost. Completing kitted orders also enables you to track the value of stock used, and calculate any wastage.
                  </Typography>
                  </CardContent>
               </Card>
            </Grid>
            <Grid item xs>
               <Card className={classes.root}>
                  <CardContent>
                     <AttachFileIcon className={classes.iconStyle}  />
                  <Typography className={classes.pos} >
                     PRODUCTION PLANNING
                  </Typography>
                  <Typography variant="body2" component="p" align="left">
                     Chief System allows you to plan ahead to ensure you can always fulfil orders. Allocate stock to future assemblies, and set minimum quantities for products so you are reminded to reorder before you need them for your next sale.
                  </Typography>
                  </CardContent>
               </Card>
            </Grid>
            <Grid item xs>
               <Card className={classes.root}>
                  <CardContent>
                     <TrendingUpIcon className={classes.iconStyle}  />
                  <Typography className={classes.pos} >
                     COMPLETE VISIBILITY
                  </Typography>
                  <Typography variant="body2" component="p" align="left">
                     Get up-to-the-minute stock numbers and sales margins in Chief System, plus instant updates to your accounting system (when integrated). All transactions are processed in real-time, ensuring you have all the information you need to make better business decisions.
                  </Typography>
                  </CardContent>
               </Card>
            </Grid>
            <Grid item xs>
               <Card className={classes.root}>
                  <CardContent>
                     <LinkIcon className={classes.iconStyle}  />
                  <Typography className={classes.pos} >
                     MULTI-CHANNEL INTEGRATION
                  </Typography>
                  <Typography variant="body2" component="p" align="left">
                     Chief System integrates with best-of-breed accounting, eCommerce and POS solutions, saving you time and eliminating the need to re-enter data in a separate program. You can also take advantage of Chief System’s reporting tools to learn which channel is performing the best.
                  </Typography>
                  </CardContent>
               </Card>
            </Grid>
            <Grid item xs>
               <Card className={classes.root}>
                  <CardContent>
                     <LocalConvenienceStoreIcon className={classes.iconStyle}  />
                  <Typography className={classes.pos} >
                     MULTI-WAREHOUSE MANAGEMENT
                  </Typography>
                  <Typography variant="body2" component="p" align="left">
                     Easily keep track of stock across multiple warehouses, in multiple locations (different countries, states or cities are managed with ease). Chief System lets you know exactly what stock you have, where, and the ability to segregate stock makes reporting a breeze.
                  </Typography>
                  </CardContent>
               </Card>
            </Grid>
            <Grid item xs>
               <Card className={classes.root}>
                  <CardContent>
                     <DoneAllIcon className={classes.iconStyle} />
                  <Typography className={classes.pos} >
                     BACKORDERING
                  </Typography>
                  <Typography variant="body2" component="p" align="left">
                     Chief System lets you seamlessly split sales into multiple shipments. Get what you do have out the door to the customer, and simultaneously order the balance. Ship the remaining items when you’re ready to complete the sale at a later date.
                  </Typography>
                  </CardContent>
               </Card>
            </Grid>
            <Grid item xs>
               <Card className={classes.root}>
                  <CardContent>
                     <AttachMoneyIcon className={classes.iconStyle} />
                  <Typography className={classes.pos} >
                     COSTED PURCHASE ORDERS
                  </Typography>
                  <Typography variant="body2" component="p" align="left">
                     Chief System lets you add additional costs, such as freight and duty, for each purchase order during the receipting process. This means you know exactly what your products cost you, to ensure you’re setting a profitable sell price.
                  </Typography>
                  </CardContent>
               </Card>
            </Grid>
            <Grid item xs>
               <Card className={classes.root}>
                  <CardContent>
                     <PublicIcon className={classes.iconStyle} />
                  <Typography className={classes.pos} >
                     BUY OR SELL IN ANY CURRENCY
                  </Typography>
                  <Typography variant="body2" component="p" align="left">
                     Buy or sell in any currency with all transactions converted back to your base currency for accurate reporting. If you import stock, this multi-currency capability is an absolute must.
                  </Typography>
                  </CardContent>
               </Card>
            </Grid>
         </Grid>
      </Container>
   )
};

const useStyles = makeStyles({
   root: {
      minWidth: 275,
      backgroundColor: "#F2F2F2",
      boxShadow: "none",
   },
   titleStyle: {
      paddingTop: "50px",
   },
   gridContainerStyle: {
      padding: "20px",
   },
   iconStyle: {
      color: "#5D8AA6",
      fontSize: "30px",      
   },
   pos: {
      margin: "20px 0",
      color: "#184059",
   }
});

export default Features;
