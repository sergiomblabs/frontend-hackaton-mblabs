import React from 'react';
import {
  Box,
  Typography,
} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import './cardHandout.css';

import history from "../../../services/history";

const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      backgroundColor: "#282B30",
    },
  },
  cardStyle: {
    marginTop: theme.spacing(3),
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
  fixed: {
    backgroundColor: "#FFA500",
    borderRadius: '50%',
    width: 15,
    height: 15,
    marginLeft: theme.spacing(40),
    margin: -7,
    zIndex: '100',
  },
  text: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  avatar: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    width: 75,
    heigth: '20px',
    borderRadius: '50%',
    right: 0
  }
}));

export default function CardNews({ item }) {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.cardStyle} display="flex" onClick={() => { history.push(`/handout/info/${item.id}`) }} >
        <img alt="Avatar" className={classes.avatar} src={item.user.avatar || "https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-criador-de-avatar-masculino.jpg"} />
        <Typography align="justify" className="line-clamp">
          {item.description}
        </Typography>
      </Box>
      {item.fixed && (
        <Box className={classes.fixed} />
      )}
    </>
  );
}