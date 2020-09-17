import React, { useState, useContext } from 'react';
import { Avatar, Button, CssBaseline, TextField, Link, Paper, Box, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import logo from './logo-vertical.png';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import UserContext from '../../context/UserContext';
import ErrorNotice from '../../components/ErrorNotice';
import FavoriteIcon from '@material-ui/icons/Favorite';

function SignInSide() {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [error, setError] = useState();

	const { setUserData } = useContext(UserContext);

	const submit = async (e) => {
		e.preventDefault();
		try {
			const loginUser = { email, password };
			const loginRes = await axios.post('http://localhost:5000/api/auth', loginUser);
			setUserData({
				token: loginRes.data.token,
				name: loginRes.data.name,
			});
			localStorage.setItem('auth-token', loginRes.data.token);
			history.push('/home');
		} catch (err) {
			err.response.data.msg && setError(err.response.data.msg);
		}
	};

	const classes = useStyles();
	const history = useHistory();

	const welcome = () => history.push('/');
	const signup = () => history.push('/signup');

	return (
		<Grid container component='main' className={classes.root}>
			<CssBaseline />
			<Grid item xs={false} sm={4} md={7} className={classes.image} />
			<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square className={classes.containerStyle}>
				<div className={classes.paper}>
					<Button className={classes.buttonLogoStyle} onClick={welcome}>
						<Avatar className={classes.avatarStyle} src={logo} justify='center'></Avatar>
					</Button>
					<Typography component='h1' variant='h5' style={{ color: '#730217' }}>
						Sign in
					</Typography>
					<form className={classes.formStyle} noValidate>
						<TextField
							variant='outlined'
							margin='normal'
							required
							fullWidth
							id='email'
							label='Email Address'
							name='email'
							autoComplete='email'
							autoFocus
							onChange={(e) => setEmail(e.target.value)}
							color='secondary'
						/>
						<TextField
							variant='outlined'
							margin='normal'
							required
							fullWidth
							name='password'
							label='Password'
							type='password'
							id='password'
							autoComplete='current-password'
							onChange={(e) => setPassword(e.target.value)}
							color='secondary'
						/>
						<Button
							type='submit'
							fullWidth
							variant='contained'
							className={classes.containedButtonStyle}
							onClick={submit}>
							Sign In
						</Button>
						{error && <ErrorNotice message={error} clearError={() => setError(undefined)} />}
						<Grid container>
							<Grid item xs>
								<Link href='#' variant='body2' style={{ color: '#730217' }}>
									Forgot password?
								</Link>
							</Grid>
							<Grid item xs>
								<Link href='/signup' variant='body2' style={{ color: '#730217' }} onClick={signup}>
									{"Don't have an account? Sign Up"}
								</Link>
							</Grid>
						</Grid>
						<Grid
							style={{
								display: 'flex',
								justifyContent: 'center',
							}}>
							<Box mt={5}>
								<Typography className={classes.madeWithLove} color='textSecondary'>
									Made with{' '}
									<FavoriteIcon
										style={{
											color: 'red',
											padding: '0 8px',
											fontSize: '35px',
										}}
									/>
									by SMU Bootcamp Students
								</Typography>
								<Copyright />
							</Box>
						</Grid>
					</form>
				</div>
			</Grid>
		</Grid>
	);
}

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100vh',
	},
	image: {
		backgroundImage: 'url(https://source.unsplash.com/featured/?logistic,brewery,retailer,manufacturer)',
		backgroundRepeat: 'no-repeat',
		backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	},
	containerStyle: {
		backgroundColor: '#F2F2F2',
	},
	paper: {
		margin: theme.spacing(2),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	buttonLogoStyle: {
		'&:hover': {
			backgroundColor: 'transparent',
		},
	},
	avatarStyle: {
		backgroundColor: '#F2F2F2',
		width: '120px',
		height: 'auto',
		margin: '0 auto 20px',
		padding: '20px',
		borderRadius: '5px',
	},
	formStyle: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	containedButtonStyle: {
		fontSize: '20px',
		fontWeight: '400',
		textTransform: 'lowercase',
		backgroundColor: '#730217',
		color: '#F2F2F2',
		padding: '10px 20px',
		margin: '10px 0',
		boxShadow: 'none',
		'&:hover': {
			backgroundColor: '#BF0426',
			boxShadow: 'none',
		},
	},
	madeWithLove: {
		fontSize: '12px',
		letterSpacing: '1px',
		display: 'flex',
		alignItems: 'center',
		paddingBottom: '10px',
		[theme.breakpoints.down('xs')]: {
			fontSize: '12px',
			letterSpacing: '1px',
		},
	},
}));

function Copyright() {
	return (
		<Typography style={{ fontSize: '12px', letterSpacing: '1px' }} color='textSecondary' align='center'>
			{'Copyright © '}
			<Link color='inherit' href='https://lit-meadow-59526.herokuapp.com'>
				Chief System
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

export default SignInSide;
