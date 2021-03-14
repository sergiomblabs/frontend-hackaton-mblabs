import React from 'react';
import {
  Box,
  Typography,
} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import './cardNews.css';
import history from '../../../services/history'

const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      backgroundColor: "#282B30",
    },
  },
  cardStyle: {
    marginLeft: theme.spacing(1),
    width: '95%',
    height: 120,
    backgroundColor: "#222222",
    borderRadius: "5px",
    paddingLeft: '10px',
    paddingRight: '10px',
  },
  description: {
    paddingTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
    color: "#FFF",
    // whiteSpace: "nowrap",
    // overflow: "hidden",
    // textOverflow: "ellipsis"
  },
  titleBox: {
    marginLeft: theme.spacing(1),
    color: "#FFF",
    backgroundColor: "#604B89",
    borderRadius: 8,
    width: 155,
    marginTop: 20,
    margin: -7,
    zIndex: '100',
    position: "relative",
    left: "7px"
  },
  dateBox: {
    color: "#FFF",
    backgroundColor: "#604B89",
    borderRadius: 8,
    width: 190,
    marginLeft: theme.spacing(19),
    margin: -7,
    zIndex: '100',
    position: "relative",
    right: "25px"
  },
  text: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  }
}));

export default function CardNews({ item }) {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.titleBox}>
        <Typography className={classes.text}>
          Título da novidade!
        </Typography>
      </Box>
      <Box className={classes.cardStyle} onClick={() => { history.push("/news/info"); }}>
        <Typography align="justify" className="line-clamp">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </Typography>
      </Box>
      <Box className={classes.dateBox}>
        <Typography className={classes.text}>
          13/03/2021 às 20:05:34
        </Typography>
      </Box>
    </>
  );
}