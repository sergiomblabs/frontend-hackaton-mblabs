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

export default function Handout() {
  const [view, setView] = useState(2);
  useStyles();

  return (
    <Container component="main">
      <CssBaseline />
      <Header />

      {/* TODO - Listagem dos comunicados  */}

      <Box>
        <h1>Comunicados</h1>
      </Box>

      <MenuTab view={view} setView={setView} />
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
