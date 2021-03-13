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
}));

export default function Channel() {
  const [view, setView] = useState(1);

  useStyles();

  return (
    <Container component="main">
      <CssBaseline />
      <Header />

      {/* TODO - Listagem das canais de comunicação  */}

      <Box>
        <h1>Canais de Comunicação</h1>
      </Box>

      <MenuTab view={view} setView={setView} />
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
