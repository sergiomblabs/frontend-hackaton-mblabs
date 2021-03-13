import React from 'react';
import {
  Box,
  Typography,
} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

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
  },
  description: {
    paddingTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
    color: "#FFF"
  },
  titleBox: {
    marginLeft: theme.spacing(1),
    color: "#FFF",
    backgroundColor: "#604B89",
    borderRadius: 15,
    width: 155,
    marginTop: 20
  },
  dateBox: {
    color: "#FFF",
    backgroundColor: "#604B89",
    borderRadius: 15,
    width: 190,
    marginLeft: theme.spacing(19),
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
      <Box className={classes.cardStyle} onClick={() => console.log('teste de clique')}>
        <Typography align="center" className={classes.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Nunc mattis nibh in mauris consectetur iaculis. Nam non lobortis nisl. 
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