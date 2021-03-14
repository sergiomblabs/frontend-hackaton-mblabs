import React, { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import { Box, Container, CssBaseline } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import {
  CardChannel,
  MenuTab,
  Header,
  Copyright
} from '../../components'; 

import { getChannels } from '../../services/Functions';

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
  const [loadingData, setLoadingData] = useState(true);
  const [channels, setChannels] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    async function getInfos() {
      const response = await getChannels();
      console.log(response);
      setChannels(response);
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
        <Box className={classes.newsList}>
          {channels?.map(item => {
            return <CardChannel item={item} />
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
