import React from "react";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../avatar.png";
import Typed from "react-typed";

//Css Style
const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1)
    
  },
  title: {
    color: "tan"
  },
  subtitle: {
    color: "tan",
    marginBottom: "3rem",
  },
  typedContainer:{
      position: 'absolute',
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "100vw",
      textAlign: "center",
      zIndex: 1
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.typedContainer}>
        <Grid container justify="center">
        <Avatar className={classes.avata} src={avatar} alt="Russel Crowe" />
        </Grid>

        <Typography className={classes.title} varient="h4">
          <Typed strings={["Gaurav Bombatkar"]} typeSpeed={40} />
        </Typography>
        <br />
        <Typography className={classes.subtitle} varient="h5">
          <Typed
            strings={["Web Design", "Web Developer", "Java Developer"]}
            typeSpeed={40}
            backSpeed={60}
            loop
          />
        </Typography>
    </Box>
  );
};

export default Header;
