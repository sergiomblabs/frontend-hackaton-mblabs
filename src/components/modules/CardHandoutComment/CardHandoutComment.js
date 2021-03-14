import React from 'react';
import {
  Box,
  Typography,
} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import './cardHandoutComment.css';

const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      backgroundColor: "#282B30",
    },
  },
  cardStyle: {
    marginTop: theme.spacing(5),
    marginLeft: theme.spacing(1),
    width: '95%',
    height: 90,
    backgroundColor: "#222222",
    borderRadius: "5px",
    paddingLeft: '10px',
    paddingRight: '10px',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
  },
  description: {
    paddingTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
    color: "#FFF",
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
  },
  avatar: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    marginRight: theme.spacing(2),
    width: 55,
    heigth: '20px',
    borderRadius: '50%',
    right: 0
  }
}));

export default function CardNews({ item }) {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.cardStyle} display="flex">
        <img alt="Avatar" className={classes.avatar} src={item.user.avatar || "https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-criador-de-avatar-masculino.jpg"} />
        <Typography align="justify" className="line-clamp">
          {item.text}
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