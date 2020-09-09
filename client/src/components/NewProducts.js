import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
   root: {
      '& .MuiTextField-root': {
         margin: theme.spacing(1),
         width: '25ch',
      },
   },
}));

function FormPropsTextFields() {
   const classes = useStyles();

   return (
      <form className={classes.root} noValidate autoComplete="off">
         <div>
            <TextField
               id="part-number"
               label="Part Number"
               type="number"
               InputLabelProps={{
                  shrink: true,
               }}
            />
            <TextField
               id="product-image"
               label="Product Image"
               defaultValue=""
               InputLabelProps={{
                  shrink: true,
               }}
            >
               <Button>Test</Button>
            </TextField>
            <TextField
               id="product-name"
               label="Product Name"
               defaultValue=""
               InputLabelProps={{
                  shrink: true,
               }}
            />
            <TextField
               id="current-inventory-level"
               label="Current Inventory Level"
               type="number"
               InputLabelProps={{
                  shrink: true,
               }}
            />
            <TextField
               id="minimum-inventory-level"
               label="Minimum Inventory Level"
               type="number"
               InputLabelProps={{
                  shrink: true,
               }}
            />
            <TextField
               id="cost"
               label="Cost"
               type="number"
               InputLabelProps={{
                  shrink: true,
               }}
            />
            <TextField
               id="retail-price"
               label="Retail Price"
               type="number"
               InputLabelProps={{
                  shrink: true,
               }}
            />
            <Button>Submit</Button>
         </div>
      </form>
   );
}

export default FormPropsTextFields;
