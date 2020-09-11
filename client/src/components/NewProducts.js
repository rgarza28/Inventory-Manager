import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Upload from "./Upload";

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
      const newProducts = {
        sku,
        productName,
        currentInventory,
        minInventory,
        cost,
        retail,
      };
      await axios.post("http://localhost:5000/api/products", newProducts, {
        headers: { "x-auth-token": token },
      });
    } catch (err) {
      if (err) throw err;
    }
  };
  const classes = useStyles();

  return (
    <Container maxWidth={false} className={classes.NewProductsStyle}>
      <form className={classes.root} noValidate autoComplete="off">
        <Typography className={classes.titleStyle}>Add New Product</Typography>
        <Grid>
          <TextField
            id="part-number"
            label="Part Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            className={classes.textFieldStyle}
            onChange={(e) => setsku(e.target.value)}
          />
          <TextField
            id="product-name"
            label="Product Name"
            defaultValue=""
            InputLabelProps={{
              shrink: true,
            }}
            className={classes.textFieldStyle}
            onChange={(e) => setproductName(e.target.value)}
          />
          <TextField
            id="current-inventory"
            label="Current Inventory"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            className={classes.textFieldStyle}
            onChange={(e) => setcurrentInventory(e.target.value)}
          />
          <TextField
            id="minimum-inventory"
            label="Minimum Inventory"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            className={classes.textFieldStyle}
            onChange={(e) => setminInventory(e.target.value)}
          />
          <TextField
            id="cost"
            label="Cost"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            className={classes.textFieldStyle}
            onChange={(e) => setcost(e.target.value)}
          />
          <TextField
            id="retail-price"
            label="Retail Price"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            className={classes.textFieldStyle}
            onChange={(e) => setretail(e.target.value)}
          />
          <Grid>
            <Upload />
          </Grid>
          <Grid>
            <Button
              variant="contained"
              className={classes.containedButtonStyle}
              onClick={submit}
            >
              submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },

  NewProductsStyle: {
    backgroundColor: "white",
    padding: "20px",
    boxShadow: "0 1px 3px #184059",
    borderRadius: "8px",

    marginBottom: "20px", // delete later
  },
  titleStyle: {
    fontSize: "20px",
    fontWeight: 500,
    textAlign: "left",
    marginBottom: "20px",
  },
  textFieldStyle: {
    color: "black",
    margin: "10px",
  },
  containedButtonStyle: {
    fontSize: "15px",
    fontWeight: "400",
    textTransform: "lowercase",
    backgroundColor: "#184059",
    color: "#F2F2F2",
    padding: "10px 30px",
    marginTop: "20px",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "#5D8AA6",
      boxShadow: "none",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
    },
  },
}));

export default FormPropsTextFields;
