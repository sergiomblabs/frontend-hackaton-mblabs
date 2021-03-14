import React from 'react';
import {
  Box,
  Typography,
} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
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
  text: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  }
}));

export default function CardChannel({ item }) {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.titleBox}>
        <Typography className={classes.text}>
          {item.channels.title}
        </Typography>
      </Box>
      <Box className={classes.cardStyle} onClick={() => { history.push("/news/info"); }}>
        <Typography align="justify" className="line-clamp">
          {item.channels.description}
        </Typography>
      </Box>
    </>
  );
}