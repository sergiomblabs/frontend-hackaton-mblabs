import React from 'react';
import {
  Typography,
  Link
} from '@material-ui/core'

export default function Copyright() {

  return (
    <Typography variant="body2" color="secondary" align="center">
      {"Copyright © "}
      <Link color="secondary" href="http://mblabs.com.br/">
        HACKATON MBLABS -
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}