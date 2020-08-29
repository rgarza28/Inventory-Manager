import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
   Card,
   CardActionArea,
   CardContent,
   Typography,
   Container,
   Grid,
   Avatar,
} from '@material-ui/core';

function Team() {
   const classes = useStyles();

   return (
      <Container maxWidth="false" className={classes.containerStyle} id="team">
         <Container maxWidth="lg">
            <Typography variant="h3" className={classes.titleStyle}>
               Meet the brains behind Chief System
            </Typography>
            <Typography
               variant="h6"
               className={classes.subtitleStyle}
            ></Typography>
            <Grid
               container
               className={classes.gridContainerStyle}
               justify="center"
            >
               {teamData.map((data) => {
                  return (
                     <Grid item className={classes.gridStyle} xs>
                        <Card className={classes.root}>
                           <CardActionArea>
                              <CardContent className={classes.cardContentStyle}>
                                 <Typography
                                    className={classes.nameStyle}
                                    variant="body2"
                                 >
                                    {data.name}
                                 </Typography>
                                 <Typography variant="body2">
                                    {data.specialty}
                                 </Typography>
                                 <Typography
                                    variant="h5"
                                    component="h2"
                                    className={classes.descriptionStyle}
                                 >
                                    {data.description}
                                 </Typography>
                              </CardContent>
                              <Avatar
                                 className={classes.avatarStyle}
                                 src={data.photo}
                                 alt={data.name}
                              />
                           </CardActionArea>
                        </Card>
                     </Grid>
                  );
               })}
            </Grid>
         </Container>
      </Container>
   );
}

const useStyles = makeStyles((theme) => ({
   root: {
      marginTop: 'none',
      marginBottom: 30,
      boxShadow: '0 0 10px 2px #184059',
   },
   media: {
      height: 140,
   },
   containerStyle: {
      backgroundColor: '#5D8AA6',
      width: '100vw',
      minHeight: '100vh',
      margin: '0 auto',
      paddingBottom: '50px',
      [theme.breakpoints.down('xs')]: {
         minHeight: 'auto',
      },
   },
   titleStyle: {
      color: '#F2F2F2',
      width: '90%',
      margin: '0 auto',
      paddingTop: '80px',
      paddingBottom: '20px',
      [theme.breakpoints.down('xs')]: {
         fontSize: '30px',
      },
   },
   cardContentStyle: {
      padding: '30px',
   },
   gridContainerStyle: {
      width: '100%',
      margin: '0 auto',
      padding: '20px',
   },
   gridStyle: {
      minWidth: 250,
      maxWidth: 250,
      margin: '0 20px',
   },
   descriptionStyle: {
      marginTop: '20px',
      fontStyle: 'italic',
   },
   avatarStyle: {
      width: 200,
      height: 'auto',
      margin: '0 auto 30px',
      borderRadius: '50%',
      border: 'solid 5px #F2F2F2',
      boxShadow: '0 0 15px #184059',
   },
   nameStyle: {
      fontWeight: 600,
   },
   pos: {
      fontWeight: '400',
      margin: '20px 0',
      color: '#5D8AA6',
   },
}));

const teamData = [
   {
      photo: '/img/customers/Sidney_Lucas.jpg',
      name: 'Gerardo Gandara',
      specialty: 'Backend Developer',
      description: '“A bug that accidentally generates money”',
   },
   {
      photo: '/img/customers/Sidney_Lucas.jpg',
      name: 'Robert Garza',
      specialty: 'Backend Developer',
      description: "“I don't know how it works, but it works”",
   },
   {
      photo: '/img/customers/Sidney_Lucas.jpg',
      name: 'Erick Adams',
      specialty: 'Frontend Developer',
      description: '“All business in the front, party in the back end”',
   },
   {
      photo: '/img/customers/Sidney_Lucas.jpg',
      name: 'Jeuel Viveros',
      specialty: 'Frontend Developer',
      description: '“What? It works in my computer”',
   },
];

export default Team;
