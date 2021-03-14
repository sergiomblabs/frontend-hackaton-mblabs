/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import ReactLoading from "react-loading";
import { 
  Box,
  Container, 
  CssBaseline,
  Typography,
} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import {
  Copyright,
  Header,
  MenuTab,
} from '../../components'; 

import { getNewsById } from '../../services/Functions';

const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      backgroundColor: "#282B30",
    },
  },
  cardStyle: {
    marginLeft: theme.spacing(1),
    width: '95%',
    height: '90%',
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
    backgroundColor: "#C4C4C4",
    borderRadius: "10px",
    overflow: 'auto'
  },
  titleBox: {
    marginLeft: theme.spacing(1),
    color: "#FFF",
    backgroundColor: "#604B89",
    borderRadius: 8,
    width: 155,
    marginTop: 20,
    margin: -60,
    zIndex: '150',
    position: "relative",
    left: "15px"
  },
  dateBox: {
    color: "#FFF",
    backgroundColor: "#604B89",
    borderRadius: 8,
    width: 190,
    marginLeft: theme.spacing(19),
    margin: -55,
    zIndex: '100',
    position: "relative",
    right: "25px"
  },
  text: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
}));

export default function NewsInfo() {
  const [view, setView] = useState(0);
  const [loadingData, setLoadingData] = useState(true);
  const [news, setNews] = useState([]);
  const { idNews } = useParams();
  const classes = useStyles();

  useEffect(() => {
    async function getInfos() {
      const response = await getNewsById(idNews);
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
        <>
          <Box className={classes.titleBox}>
            <Typography className={classes.text}>
              {news.title}
            </Typography>
          </Box>
          <Box className={classes.newsList}>
            <Box className={classes.cardStyle}>
              <Typography align="justify" className="complete-text">
              {news.description}
            </Typography>
            </Box>
          </Box>
          <Box className={classes.dateBox}>
            <Typography className={classes.text}>
              13/03/2021 às 20:05:34
            </Typography>
          </Box>
        </>
      )}

      <MenuTab view={view} setView={setView} />
      <Box mt={18}>
        <Copyright />
      </Box>
    </Container>
  );
}