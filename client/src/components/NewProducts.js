import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
   root: {
      '& .MuiTextField-root': {
         margin: theme.spacing(1),
         width: '25ch',
      },
   },
}));

function FormPropsTextFields() {

   const [sku, setsku] = useState();
   const [productName, setproductName] = useState();
   const [currentInventory, setcurrentInventory] = useState();
   const [minInventory, setminInventory] = useState();
   const [cost, setcost] = useState();
   const [retail, setretail] = useState();

   const submit = async (e) => {
      e.preventDefault();
      try {
         let token = localStorage.getItem("auth-token");
         const newProducts = { sku, productName, currentInventory, minInventory, cost, retail };
         await axios.post("http://localhost:5000/api/products", newProducts, {
            headers: { "x-auth-token": token }
         });
      } catch (err) {
         if (err) throw err;
      }
   }
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
               onChange={(e) => setsku(e.target.value)}
            />
            <TextField
               id="product-image"
               label="Product Image"
               defaultValue=""
               InputLabelProps={{
                  shrink: true,
               }}
               // onChange={(e) => set(e.target.value)}
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
               onChange={(e) => setproductName(e.target.value)}
            />
            <TextField
               id="current-inventory-level"
               label="Current Inventory Level"
               type="number"
               InputLabelProps={{
                  shrink: true,
               }}
               onChange={(e) => setcurrentInventory(e.target.value)}
            />
            <TextField
               id="minimum-inventory-level"
               label="Minimum Inventory Level"
               type="number"
               InputLabelProps={{
                  shrink: true,
               }}
               onChange={(e) => setminInventory(e.target.value)}
            />
            <TextField
               id="cost"
               label="Cost"
               type="number"
               InputLabelProps={{
                  shrink: true,
               }}
               onChange={(e) => setcost(e.target.value)}
            />
            <TextField
               id="retail-price"
               label="Retail Price"
               type="number"
               InputLabelProps={{
                  shrink: true,
               }}
               onChange={(e) => setretail(e.target.value)}
            />
            <Button onClick={submit}>Submit</Button>
         </div>
      </form>
   );
}

export default FormPropsTextFields;
