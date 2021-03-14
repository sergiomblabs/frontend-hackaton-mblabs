import React, { useState } from "react";
import { Box, Container, CssBaseline } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

import {
  MenuTab,
  Header,
  Copyright,
  CardHandout
} from '../../components'; 

const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      backgroundColor: "#282B30",
    },
  },
  handoutList: {
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

export default function Handout() {
  const [view, setView] = useState(2);
  const classes = useStyles();

  return (
    <Container component="main">
      <CssBaseline />
      <Header />

      <Box className={classes.handoutList}>
        <CardHandout item={{ fixed: true }} />
        <CardHandout item={{ fixed: true }} />
        <CardHandout item={{ fixed: false }} />
        <CardHandout item={{ fixed: false }} />
        <CardHandout item={{ fixed: false }} />
        <CardHandout item={{ fixed: false }} />
      </Box>

      <MenuTab view={view} setView={setView} />
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
