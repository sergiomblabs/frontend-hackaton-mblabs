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
  logo: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    width: 250,
  },
  avatar: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(4),
    width: 85,
    heigth: '20px',
    borderRadius: '50%',
  }
}));

export default function News() {
  const [view, setView] = useState(0);

  useStyles();

  return (
    <Container component="main">
      <CssBaseline />
      <Header />

      {/* TODO - Listagem das novidades  */}

      <Box>
        <h1>Novidades</h1>
      </Box>

      <MenuTab view={view} setView={setView} />
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
