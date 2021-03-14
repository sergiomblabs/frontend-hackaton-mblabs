import React, { useState } from "react";
import { 
  Box,
  Container, 
  CssBaseline,
  Typography,
} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import {
  Copyright,
  Header,
  MenuTab,
} from '../../components'; 

const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      backgroundColor: "#282B30",
    },
  },
  cardStyle: {
    marginLeft: theme.spacing(1),
    width: '95%',
    height: '90%',
    backgroundColor: "#222222",
    borderRadius: "5px",
    marginTop: '30px',
    paddingLeft: '10px',
    paddingRight: '10px',
    position: 'justify',
    overflow: 'auto'
  },
  newsList: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    marginRight: theme.spacing(2),
    width: '100%',
    height: 550,
    backgroundColor: "#C4C4C4",
    borderRadius: "10px",
    overflow: 'auto'
  },
  titleBox: {
    marginLeft: theme.spacing(1),
    color: "#FFF",
    backgroundColor: "#604B89",
    borderRadius: 8,
    width: 155,
    marginTop: 20,
    margin: -60,
    zIndex: '150',
    position: "relative",
    left: "15px"
  },
  dateBox: {
    color: "#FFF",
    backgroundColor: "#604B89",
    borderRadius: 8,
    width: 190,
    marginLeft: theme.spacing(19),
    margin: -55,
    zIndex: '100',
    position: "relative",
    right: "25px"
  },
  text: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  copyright: {
    margin: 100,
  },
}));

export default function NewsInfo() {
  const [view, setView] = useState(0);

  const classes = useStyles();

  return (
    <Container component="main">
      <CssBaseline />
      <Header />
        <Box className={classes.titleBox}>
          <Typography className={classes.text}>
              Título da novidade!
          </Typography>
        </Box>
      <Box className={classes.newsList}>
        <Box className={classes.cardStyle}>
          <Typography align="justify" className="complete-text">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem.
          In porttitor. Donec laoreet nonummy augue. Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy. Fusce aliquet pede non pede. Suspendisse dapibus lorem pellentesque magna. Donec blandit feugiat ligula. Donec hendrerit, felis et imperdiet euismod, purus ipsum pretium metus, in lacinia nulla nisl eget sapien.
        </Typography>
        </Box>
      </Box>
      <Box className={classes.dateBox}>
        <Typography className={classes.text}>
          13/03/2021 às 20:05:34
        </Typography>
      </Box>
      <MenuTab view={view} setView={setView} />
      <Box className={classes.copyright} mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}