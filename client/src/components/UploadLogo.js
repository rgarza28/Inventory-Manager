import React, { useState } from 'react';
import axios from 'axios';
import { Button, Container, Grid, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Upload from './Upload';

// function FormPropsTextFields() {
//    const [sku, setsku] = useState();
//    const [productName, setproductName] = useState();
//    const [currentInventory, setcurrentInventory] = useState();
//    const [minInventory, setminInventory] = useState();
//    const [cost, setcost] = useState();
//    const [retail, setretail] = useState();

//    const submit = async (e) => {
//       e.preventDefault();
//       try {
//          let token = localStorage.getItem('auth-token');
//          const UploadLogo = {
//             sku,
//             productName,
//             currentInventory,
//             minInventory,
//             cost,
//             retail,
//          };
//          await axios.post('http://localhost:5000/api/products', UploadLogo, {
//             headers: { 'x-auth-token': token },
//          });
//       } catch (err) {
//          if (err) throw err;
//       }
//    };

function UploadLogo() {
	const classes = useStyles();

	return (
		<Container maxWidth={false} className={classes.NewProductsStyle}>
			<Typography className={classes.titleStyle}>Add Company Logo</Typography>
			<Grid>
				<Upload />
			</Grid>
			{/* <Grid>
				<Button variant='contained' className={classes.containedButtonStyle} onClick={submit}>
					submit
				</Button>
			</Grid> */}
		</Container>
	);
}

const useStyles = makeStyles((theme) => ({
	root: {
		'& .MuiTextField-root': {
			margin: theme.spacing(1),
			width: '25ch',
		},
	},
	NewProductsStyle: {
		backgroundColor: 'white',
		padding: '20px',
		boxShadow: '0 1px 3px #184059',
		borderRadius: '8px',

		marginBottom: '20px', // delete later
	},
	titleStyle: {
		fontSize: '20px',
		fontWeight: 500,
		textAlign: 'left',
		marginBottom: '20px',
	},
	textFieldStyle: {
		color: 'black',
		margin: '10px',
	},
	containedButtonStyle: {
		fontSize: '15px',
		fontWeight: '400',
		textTransform: 'lowercase',
		backgroundColor: '#184059',
		color: '#F2F2F2',
		padding: '10px 30px',
		marginTop: '20px',
		boxShadow: 'none',
		'&:hover': {
			backgroundColor: '#5D8AA6',
			boxShadow: 'none',
		},
		[theme.breakpoints.down('sm')]: {
			fontSize: '12px',
		},
	},
}));

export default UploadLogo;
