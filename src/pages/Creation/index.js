import React, { useState } from "react";
import { Box, Container, CssBaseline } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

import {
  MenuTab,
  Header,
  Copyright
} from '../../components'; 

const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      backgroundColor: "#282B30",
    },
  },
  firstBoxStyle: {
    marginTop: theme.spacing(8),
    marginLeft: theme.spacing(1),
    marginBottom: theme.spacing(2),
    backgroundColor: "#222222",
    border: "1px solid",
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 20,
    width: 330,
    height: 140
  },
  boxStyle: {
    marginLeft: theme.spacing(1),
    marginBottom: theme.spacing(2),
    backgroundColor: "#222222",
    border: "1px solid",
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 20,
    width: 330,
    height: 140
  },
  title: {
    marginTop: theme.spacing(6),
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 22,
    fontWeight: 400
  }
}));

export default function Creation() {
  const [view, setView] = useState(3);

  const classes = useStyles();

  return (
    <Container component="main">
      <CssBaseline />
      <Header />

      <Box className={classes.firstBoxStyle} onClick={() => {}}>
        <h1 className={classes.title}>Novidade</h1>
      </Box>

      <Box className={classes.boxStyle} onClick={() => {}}>
        <h1 className={classes.title}>Comunicado</h1>
      </Box>

      <Box className={classes.boxStyle} onClick={() => {}}>
        <h1 className={classes.title}>Canal de Comunicação</h1>
      </Box>

      <MenuTab view={view} setView={setView} />
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
