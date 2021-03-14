import React, { useState } from "react";
import { Box, Container, CssBaseline } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

import {
  CardNews,
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
}));

export default function News() {
  const [view, setView] = useState(0);

  const classes = useStyles();

  return (
    <Container component="main">
      <CssBaseline />
      <Header />

      <Box className={classes.newsList}>
        <CardNews />
        <CardNews />
        <CardNews />
        <CardNews />
        <CardNews />
        <CardNews />
      </Box>

      <MenuTab view={view} setView={setView} />
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
