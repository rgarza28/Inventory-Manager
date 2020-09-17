import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, ThemeProvider, withStyles } from '@material-ui/core/styles';
import { CssBaseline, Typography, Link, Box, Grid } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Header from './Header';
import { useHistory } from "react-router-dom";

function Paperbase(props) {
   const { classes } = props;
   const [mobileOpen, setMobileOpen] = React.useState(false);
   const history = useHistory();

   useEffect(() => {
      let token = localStorage.getItem('auth-token');
      if(!token){
         console.log(token);
         history.push("/");
      }
   }, []);


	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};


	return (
		<ThemeProvider theme={theme}>
			<div className={classes.root}>
				<CssBaseline />
				<div className={classes.app}>
					<Header onDrawerToggle={handleDrawerToggle} />
					<footer className={classes.footer}>
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
					</footer>
				</div>
			</div>
		</ThemeProvider>
	);

}

Paperbase.propTypes = {
	classes: PropTypes.object.isRequired,
};

let theme = createMuiTheme({
	palette: {
		primary: {
			light: '#63ccff',
			main: '#009be5',
			dark: '#006db3',
		},
	},
	typography: {
		h5: {
			fontWeight: 500,
			fontSize: 26,
			letterSpacing: 0.5,
		},
	},
	shape: {
		borderRadius: 8,
	},
	props: {
		MuiTab: {
			disableRipple: true,
		},
	},
	mixins: {
		toolbar: {
			minHeight: 48,
		},
	},
});

theme = {
	...theme,
	overrides: {
		MuiDrawer: {
			paper: {
				backgroundColor: '#18202c',
			},
		},
		MuiButton: {
			label: {
				textTransform: 'none',
			},
			contained: {
				boxShadow: 'none',
				'&:active': {
					boxShadow: 'none',
				},
			},
		},
		MuiTabs: {
			root: {
				marginLeft: theme.spacing(1),
			},
			indicator: {
				height: 3,
				borderTopLeftRadius: 3,
				borderTopRightRadius: 3,
				backgroundColor: theme.palette.common.white,
			},
		},
		MuiTab: {
			root: {
				textTransform: 'none',
				margin: '0 16px',
				minWidth: 0,
				padding: 0,
				[theme.breakpoints.up('md')]: {
					padding: 0,
					minWidth: 0,
				},
			},
		},
		MuiIconButton: {
			root: {
				padding: theme.spacing(1),
			},
		},
		MuiTooltip: {
			tooltip: {
				borderRadius: 4,
			},
		},
		MuiDivider: {
			root: {
				backgroundColor: '#404854',
			},
		},
		MuiListItemText: {
			primary: {
				fontWeight: theme.typography.fontWeightMedium,
			},
		},
		MuiListItemIcon: {
			root: {
				color: 'inherit',
				marginRight: 0,
				'& svg': {
					fontSize: 20,
				},
			},
		},
		MuiAvatar: {
			root: {
				width: 32,
				height: 32,
			},
		},
	},
};

const drawerWidth = 0;

const styles = {
	root: {
		display: 'flex',
		minHeight: '100vh',
	},
	drawer: {
		[theme.breakpoints.up('sm')]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	app: {
		flex: 1,
		display: 'flex',
		flexDirection: 'column',
	},
	main: {
		flex: 1,
		padding: theme.spacing(6, 4),
		background: '#eaeff1',
		marginTop: '20px',
	},
	footer: {
		padding: theme.spacing(2),
		position: 'inherit',
		bottom: 0,
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
};

function Copyright() {
	return (
		<Typography
			style={{ fontSize: '12px', letterSpacing: '1px' }}
			variant='body2'
			color='textSecondary'
			align='center'>
			{'Copyright © '}
			<Link color='inherit' href='https://lit-meadow-59526.herokuapp.com'>
				Chief System
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

export default withStyles(styles)(Paperbase);
