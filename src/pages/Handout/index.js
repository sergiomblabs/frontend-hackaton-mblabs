import React, { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import { Box, Container, CssBaseline } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

import {
  MenuTab,
  Header,
  Copyright,
  CardHandout
} from '../../components'; 

import { getHandouts } from '../../services/Functions';

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
    borderRadius: "10px",
    overflow: 'auto'
  },
}));

export default function Handout() {
  const [view, setView] = useState(2);
  const [loadingData, setLoadingData] = useState(true);
  const [handouts, setHandouts] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    async function getInfos() {
      const response = await getHandouts();
      setHandouts(response);
      setLoadingData(false);
    }
    getInfos();
  }, []);

  return (
    <Container component="main">
      <CssBaseline />
      <Header />

      {loadingData ? (
        <ReactLoading
          type="spin"
          color="#FFF"
          height={40}
          width={40}
        />
      ) : (
        <Box className={classes.handoutList}> 
          {handouts.map(item => {
            return <CardHandout key={item.id} item={item} />
          })}
        </Box>
      )}

      <MenuTab view={view} setView={setView} />
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
