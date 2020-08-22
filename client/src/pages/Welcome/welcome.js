import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Typography, Grid, Card, CardActions, CardContent, Button } from "@material-ui/core";

function Welcome() {
   return (
      <header>
         <Navbar />
         {/* <Typography variant="h4">
            Every inventory management feature your manufacturing business needs. 
         </Typography>
         <Grid container direction="row">
            <Grid item></Grid>
            <Grid item></Grid>
            <Grid item></Grid>
            <Grid item></Grid>
         </Grid> */}
      </header>
   )
};

export default Welcome;

// const useStyles = makeStyles({
//   root: {
//     minWidth: 275,
//   },
//   bullet: {
//     display: 'inline-block',
//     margin: '0 2px',
//     transform: 'scale(0.8)',
//   },
//   title: {
//     fontSize: 14,
//   },
//   pos: {
//     marginBottom: 12,
//   },
// });


// export default function SimpleCard() {
//   const classes = useStyles();
//   const bull = <span className={classes.bullet}>•</span>;

//   return (
//     <Card className={classes.root}>
//       <CardContent>
//         <Typography className={classes.title} color="textSecondary" gutterBottom>
//           Word of the Day
//         </Typography>
//         <Typography variant="h5" component="h2">
//           be{bull}nev{bull}o{bull}lent
//         </Typography>
//         <Typography className={classes.pos} color="textSecondary">
//           adjective
//         </Typography>
//         <Typography variant="body2" component="p">
//           well meaning and kindly.
//           <br />
//           {'"a benevolent smile"'}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   );
// }
