import React, {useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
} from '@material-ui/core'

import logo from "../../../assets/logo.png";

const useStyles = makeStyles((theme) => ({
  box: {
    width: '90%',
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
  logo: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    width: '60%',
  },
  avatar: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(6),
    width: 65,
    heigth: 15,
    borderRadius: '50%',
    right: 0
  }
}));


export default function Home() {
  const classes = useStyles();
  const [user, setUser] = useState({});

  useEffect(() => {
    const localItem = window.localStorage.getItem('user');
    setUser(JSON.parse(localItem));
  }, []);


  return (
    <Box display="flex" className={classes.box}>
      <img alt="Logo Lookout" className={classes.logo} src={logo} />
      <img alt="Avatar" className={classes.avatar} src={user.avatar} />
    </Box>
  );
}