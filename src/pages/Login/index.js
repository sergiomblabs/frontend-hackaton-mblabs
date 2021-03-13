import React, { useState } from "react";
import ReactLoading from "react-loading";

import { Button, Box, Container, CssBaseline, Link, TextField, Typography } from '@material-ui/core';
import { makeStyles, withStyles } from "@material-ui/core/styles";

import history from "../../services/history";
import { login } from "../../services/Functions";

import logo from "../../assets/logo.png";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://valeti.com/">
        HACKATON MBLABS -
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#604B89",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "grey",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "grey",
      },
      "&:hover fieldset": {
        borderColor: "#604B89",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#604B89",
      },
    },
  },
})(TextField);

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
    width: 150,
  },
  textField: {
    width: "100%",
    "& + & ": {
      marginTop: theme.spacing(2),
    },
    color: theme.palette.text.white,
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
        <img alt="Logo Valeti" className={classes.logo} src={logo} />
        <Typography component="h1" variant="h5">
          Login Challenge Hackaton MBLABS
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <CssTextField
            className={classes.margin}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Digite seu e-mail cadastrado"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <CssTextField
            className={classes.margin}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="passwotd"
            label="Digite sua senha"
            name="passwotd"
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
                color="#604B89"
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
      <Box mt={8} backgroundColor="#282B30">
        <Copyright />
      </Box>
    </Container>
  );
}
