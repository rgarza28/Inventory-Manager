import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

function ErrorNotice(props) {
   const classes = useStyles();

   return (
      <Grid>
         <Typography className={classes.errorStyle}>{props.message}</Typography>
         {/* <button onClick={props.clearError} >
            X
         </button> */}
      </Grid>
   );
}

const useStyles = makeStyles((theme) => ({
   errorStyle: {
      fontSize: '14px',
      letterSpacing: '1px',
      backgroundColor: 'rgba(191,4,38,0.2)',
      color: 'rgba(191,4,38,1)',
      width: '60%',
      margin: '10px auto 15px',
      padding: '5px 0',
      border: '1px solid rgba(191,4,38,1)',
      borderRadius: '5px',
   },
}));

export default ErrorNotice;
