import React, { useState } from "react";
import ReactLoading from "react-loading";

import { Button, Box, Container, CssBaseline, Link, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

import { Input } from '../../components';

import history from "../../services/history";
import { login } from "../../services/Functions";

import logo from "../../assets/logo.png";

function Copyright() {
  return (
    <Typography variant="body2" color="secondary" align="center">
      {"Copyright © "}
      <Link color="secondary" href="http://mslabs.com.br/">
        HACKATON MBLABS -
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      backgroundColor: "#282B30",
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#604B89",
    color: "#fff",
  },
  logo: {
    marginBottom: theme.spacing(2),
    width: 350,
  },
  textField: {
    width: "100%",
    "& + & ": {
      marginTop: theme.spacing(2),
    },
    color: "#fff",
  },
}));

export default function SignIn({ match }) {
  const classes = useStyles();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  let disabled = true;

  if (
    password === "" &&
    email === "" 
  ) {
    disabled = false;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const request = await login({
      email, password
    });

    if (!request) {
      setError(true);
      setLoading(false);
    }

    setLoading(false);
    history.push("/home");
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <img alt="Logo Lookout" className={classes.logo} src={logo} />
        <form className={classes.form} onSubmit={handleSubmit}>
          <Input
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Digite seu e-mail cadastrado"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            color="secondary"
          />
          <Input
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="password"
            label="Digite sua senha"
            name="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
            disabled={disabled}
          >
            {loading && (
              <ReactLoading
                type="spin"
                color="#FFF"
                height={20}
                width={20}
              />
            )}
            Confirmar
          </Button>
          {error && (
            <Typography
              component="h6"
              variant="h6"
              style={{ color: "red", fontWeight: "900", fontSize: "12" }}
            >
              Erro ao realizar seu login. Por favor, tente novamente!
            </Typography>
          )}
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
