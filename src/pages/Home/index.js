import React, { useState } from "react";
import {
  MenuTab,
} from '../../components'; 

import { Box, Container, CssBaseline, Link, Typography } from '@material-ui/core';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://valeti.com/">
        HACKATON MBLABS -
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}


export default function SignIn({ match }) {
  return (
    <Container component="main" maxWidth="lg">
      <CssBaseline />

      <MenuTab bgColor="#604B89" />

      <Box mt={8} backgroundColor="#282B30">
        <Copyright />
      </Box>
    </Container>
  );
}
