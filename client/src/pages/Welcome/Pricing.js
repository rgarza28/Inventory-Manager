import React from 'react';
import {
   Button,
   Card,
   CardActions,
   CardContent,
   CardHeader,
   Grid,
   Typography,
   Container,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import StarIcon from '@material-ui/icons/StarBorder';

function Pricing() {
   const classes = useStyles();

   return (
      <React.Fragment>
         <Container
            maxWidth="false"
            className={classes.containerStyle}
            id="pricing"
         >
            <Typography variant="h3" className={classes.titleStyle}>
               Find a plan that’s right for your business
            </Typography>
            <Grid
               container
               spacing={5}
               className={classes.gridContainerStyle}
               alignItems="flex-end"
               justify="center"
            >
               {tiers.map((tier) => (
                  // Enterprise card is full width at sm breakpoint
                  <Grid
                     item
                     key={tier.title}
                     xs={12}
                     sm={tier.title === 'Enterprise' ? 12 : 6}
                     md={4}
                     className={classes.gridStyle}
                  >
                     <Card className={classes.cardStyle}>
                        <CardHeader
                           title={tier.title}
                           // subheader={tier.subheader}
                           titleTypographyProps={{ align: 'center' }}
                           subheaderTypographyProps={{ align: 'center' }}
                           action={tier.title === 'Pro' ? <StarIcon /> : null}
                           className={classes.cardHeader}
                        />
                        <CardContent>
                           <div className={classes.cardPricing}>
                              <Typography variant="h3" color="#730217">
                                 ${tier.price}
                              </Typography>
                              <Typography variant="h6" color="#BF0426">
                                 /mo
                              </Typography>
                           </div>
                           <ul>
                              {tier.description.map((line) => (
                                 <Typography
                                    component="li"
                                    variant="subtitle1"
                                    align="center"
                                    key={line}
                                 >
                                    {line}
                                 </Typography>
                              ))}
                           </ul>
                        </CardContent>

                        <CardActions>
                           <Button
                              fullWidth
                              variant={tier.buttonVariant}
                              className={classes.containedButtonStyle}
                           >
                              {tier.buttonText}
                           </Button>
                        </CardActions>
                     </Card>
                  </Grid>
               ))}
               <ul style={{ width: '100%', marginTop: '10px' }}>
                  <Typography
                     variant="body1"
                     className={classes.disclaimerStyle}
                  >
                     <li>All plans include Unlimited:</li>
                  </Typography>
                  <Typography
                     variant="body2"
                     className={classes.disclaimerStyle}
                  >
                     <li>
                        Products, Customers, Suppliers, Transactions,
                        Integrations, Warehouses and Currencies
                     </li>
                     <li>Sandbox Environment</li>
                     <li>Premium Support</li>
                  </Typography>
               </ul>
            </Grid>
            <Button
               className={classes.containedButtonStyle}
               style={{ backgroundColor: '#BF0426', marginTop: '50px' }}
            >
               Start your free trial now
            </Button>
         </Container>
      </React.Fragment>
   );
}

export default Pricing;

const useStyles = makeStyles((theme) => ({
   '@global': {
      ul: {
         margin: 0,
         padding: 0,
         listStyle: 'none',
      },
   },
   containerStyle: {
      backgroundColor: '#D7D7D9',
      padding: theme.spacing(0, 0, 6),
      minHeight: '100vh',
   },
   titleStyle: {
      color: '#730217',
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
   cardStyle: {
      backgroundColor: '#F2F2F2',
      boxShadow: '0 0 10px #D97904',
   },
   cardHeader: {
      backgroundColor: '#D97904',
      color: '#F2F2F2',
   },
   cardPricing: {
      color: '#730217',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'baseline',
      marginBottom: theme.spacing(2),
   },
   disclaimerStyle: {
      textAlign: 'center',
   },
   textButtonStyle: {
      backgroundColor: 'transparent',
      color: '#730217',
      padding: '10px 15px',
      margin: '0 10px',
      textTransform: 'lowercase',
      fontSize: '15px',
      fontWeight: '400',
      '&:hover': {
         backgroundColor: 'transparent',
         color: '#BF0426',
      },
   },
   containedButtonStyle: {
      backgroundColor: '#730217',
      color: '#F2F2F2',
      marginTop: '10px',
      padding: '10px 20px',
      boxShadow: 'none',
      textTransform: 'lowercase',
      fontSize: '15px',
      fontWeight: '400',
      '&:hover': {
         backgroundColor: '#D97904',
         boxShadow: 'none',
      },
   },
}));

const tiers = [
   {
      title: 'Medium',
      price: '259',
      description: [
         'Per month paid annually or $279 paid monthly',
         '3 users included',
         '125,000 API Access calls',
      ],
      buttonText: 'get started',
      buttonVariant: 'outlined',
   },
   {
      title: 'Large',
      // subheader: 'Most popular',
      price: '499',
      description: [
         'Per month paid annually or $549 paid monthly',
         '8 users included',
         '250,000 API Access calls',
      ],
      buttonText: 'Get started',
      buttonVariant: 'containedButtonStyle',
   },
   {
      title: 'Large (Plus)',
      price: '819',
      description: [
         'Per month paid annually or $899 paid monthly',
         '20 users included',
         '500,000 API Access calls',
      ],
      buttonText: 'get started',
      buttonVariant: 'outlined',
   },
];
