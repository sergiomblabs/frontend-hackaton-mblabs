import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
} from '@material-ui/core'

import logo from "../../../assets/logo.png";

const useStyles = makeStyles((theme) => ({
  logo: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    width: 250,
  },
  avatar: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(4),
    width: 75,
    heigth: '20px',
    borderRadius: '50%',
  }
}));


export default function Home() {
  const classes = useStyles();

  return (
    <Box display="flex">
      <img alt="Logo Lookout" className={classes.logo} src={logo} />
      <img alt="Avatar" className={classes.avatar} src="https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-criador-de-avatar-masculino.jpg" />
    </Box>
  );
}