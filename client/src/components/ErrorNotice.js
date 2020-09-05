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
      padding: '0 20px',
      color: 'red',
   },
}));

export default ErrorNotice;
