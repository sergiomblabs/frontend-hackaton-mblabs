import React, { useState } from "react";
import { Box, Container, CssBaseline } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import {
  CardChannel,
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
  cardStyle: {
    marginLeft: theme.spacing(1),
    width: '95%',
    height: '120',
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
    borderRadius: "10px",
    overflow: 'auto'
  },
}));

export default function Channel() {
  const [view, setView] = useState(1);
  const classes = useStyles();

  return (
    <Container component="main">
      <CssBaseline />
      <Header />

      <Box>
        <h1>Canais de Comunicação</h1>
      </Box>
      <Box className={classes.newsList}>
        <CardChannel />
        <CardChannel />
        <CardChannel />
        <CardChannel />
        <CardChannel />
      </Box>



      <MenuTab view={view} setView={setView} />
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
