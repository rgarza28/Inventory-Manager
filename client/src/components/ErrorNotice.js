import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

function ErrorNotice(props) {
   const classes = useStyles();

   return (
      <Grid>
         <Typography className="errorStyle">{props.message}</Typography>
         {/* <button onClick={props.clearError} >
            X
         </button> */}
      </Grid>
   );
}

const useStyles = makeStyles((theme) => ({
   errorStyle: {
      backgroundColor: '#BF0426',
      padding: '0 20px',
      color: 'red',
      border: 'red solid 2px',
   },
}));

export default ErrorNotice;
