import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  BottomNavigation,
  BottomNavigationAction
} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import CastIcon from '@material-ui/icons/Cast';
import CommentIcon from '@material-ui/icons/Comment';
import QueueIcon from '@material-ui/icons/Queue';

import history from "../../../services/history";

const useStyles = makeStyles({
  root: {
    width: 360,
    backgroundColor: '#604B89',
    borderRadius: '30px'
  },
  icons: {
    color: '#fff'
  }
});


export default function Menu({ view, setView }) {
  const classes = useStyles();

  return (
    <BottomNavigation
      value={view}
      onChange={(event, newValue) => {
        setView(newValue);
        switch (newValue) {
          case 0:
            history.push("/news");
            break;
        
          case 1:
            history.push("/channel");
            break;

          case 2:
            history.push("/handout");
            break;

          case 3:
            history.push("/creation");
            break;


          default:
            history.push("/news");
            break;
        }
      }}
      showLabels
      className={classes.root}
      color="secondary"
    >
      <BottomNavigationAction className={classes.icons} label="Novidades" icon={<QueueIcon />} />
      <BottomNavigationAction className={classes.icons} label="Canais" icon={<CastIcon />} />
      <BottomNavigationAction className={classes.icons} label="Comunicados" icon={<CommentIcon />} />
      <BottomNavigationAction className={classes.icons} label="Criação" icon={<AddIcon />} />
    </BottomNavigation>
  );
}