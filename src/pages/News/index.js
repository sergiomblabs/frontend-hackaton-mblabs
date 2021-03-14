import React, { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import { Box, Container, CssBaseline } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

import {
  CardNews,
  Copyright,
  Header,
  MenuTab,
} from '../../components'; 

import { getNews } from '../../services/Functions';

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
    borderRadius: "10px",
    overflow: 'auto'
  },
}));

export default function News() {
  const [view, setView] = useState(0);
  const [loadingData, setLoadingData] = useState(true);
  const [news, setNews] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    async function getInfos() {
      const response = await getNews();
      setNews(response);
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
          {news?.map(item => {
            return <CardNews key={item.id} item={item} />
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
