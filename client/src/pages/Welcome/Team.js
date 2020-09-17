import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Container,
  Grid,
  Avatar,
} from "@material-ui/core";

function Team() {
  const classes = useStyles();

  return (
    <Container maxWidth={false} className={classes.containerStyle} id="team">
      <Typography variant="h3" className={classes.titleStyle}>
        Meet the brains behind Chief System
      </Typography>
      <Grid container className={classes.gridContainerStyle} justify="center">
        {teamData.map((data, index) => {
          return (
            <Grid
              key={index + "-teamData"}
              item
              className={classes.gridStyle}
              xs
            >
              <Card className={classes.root}>
                <CardActionArea href={data.link} target="_blank">
                  <CardContent className={classes.cardContentStyle}>
                    <Typography className={classes.nameStyle} variant="body2">
                      {data.name}
                    </Typography>
                    <Typography variant="body2">{data.specialty}</Typography>
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
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "none",
    marginBottom: 30,
    boxShadow: "0 0 10px 2px #184059",
  },
  media: {
    height: 140,
  },
  containerStyle: {
    backgroundColor: "#5D8AA6",
    minHeight: "100vh",
    margin: "0 auto",
    paddingBottom: "50px",
    [theme.breakpoints.down("xs")]: {
      minHeight: "auto",
    },
  },
  titleStyle: {
    color: "#F2F2F2",
    width: "80%",
    margin: "0 auto",
    paddingTop: "80px",
    paddingBottom: "50px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "30px",
    },
  },
  cardContentStyle: {
    padding: "30px",
  },
  gridContainerStyle: {
    width: "90%",
    margin: "0 auto",
  },
  gridStyle: {
    minWidth: 350,
    maxWidth: 350,
    margin: "0 20px",
  },
  descriptionStyle: {
    marginTop: "20px",
    fontStyle: "italic",
  },
  avatarStyle: {
    width: 200,
    height: 200,
    margin: "0 auto 30px",
    borderRadius: "50%",
    border: "solid 5px #F2F2F2",
    boxShadow: "0 0 15px #184059",
  },
  nameStyle: {
    fontWeight: 600,
  },
  pos: {
    fontWeight: "400",
    margin: "20px 0",
    color: "#5D8AA6",
  },
}));

const teamData = [
  {
    photo: "/img/team/Gerardo.png",
    name: "Gerardo Gandara",
    specialty: "Backend Developer",
    // description: '“A bug that accidentally generates money”',
    link: "https://github.com/ggandara8",
  },
  {
    photo: "/img/team/Bobby.png",
    name: "Robert Garza",
    specialty: "Backend Developer",
    // description: "“I don't know how it works, but it works”",
    link: "https://github.com/rgarza28",
  },
  {
    photo: "/img/team/Erick.jpg",
    name: "Erick Adams",
    specialty: "Frontend Developer",
    // description: '“All business in the front, party in the back end”',
    link: "https://github.com/n2deep56",
  },
  {
    photo: "/img/team/Jeuel.png",
    name: "Jeuel Viveros",
    specialty: "Frontend Developer",
    // description: '“What? It works in my computer”',
    link: "https://github.com/vjeuel",
  },
];

export default Team;
