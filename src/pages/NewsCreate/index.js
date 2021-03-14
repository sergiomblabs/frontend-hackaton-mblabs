import React, { useState, useRef } from "react";
import ReactLoading from "react-loading";
import { 
  Box,
  Button,
  Container,
  CssBaseline,
  Input,
  TextareaAutosize,
  Typography
} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

import {
  MenuTab,
  Header,
  Copyright
} from '../../components'; 

import history from "../../services/history";
import { createHandout } from "../../services/Functions";

const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      backgroundColor: "#282B30",
    },
  },
  form: {
    marginBottom: theme.spacing(2),
  },
  input: {
    marginTop: theme.spacing(2),
    color: "#FFF",
  },
  textArea: {
    marginTop: theme.spacing(4),
    backgroundColor: "#CDCDCD",
    height: 200,
    width: 350,
    borderRadius: 5
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#604B89",
    color: "#fff",
  },
  checkBox: {
    color: "#FFF",
  }
}));

export default function NewsCreate() {
  const [view, setView] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [title, setTitle] = useState("");
  const file = useRef();
  const [description, setDescription] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu eleifend lectus, in faucibus magna. Proin sollicitudin mi eu sem finibus lobortis. Phasellus nec mi condimentum, mattis odio ut, dignissim ipsum. Cras porttitor fringilla est, vitae convallis erat placerat eu. Cras non neque ullamcorper, eleifend lorem vel, bibendum ipsum. Maecenas viverra vestibulum est vitae porttitor. Donec eu ligula quis nibh hendrerit blandit. Vivamus orci mauris, sagittis vel purus eget, porta interdum arcu. Suspendisse dapibus varius tristique. Sed dignissim lectus vitae mauris semper condimentum. Aenean vitae felis sed nibh vehicula blandit. In hac habitasse platea dictumst. In hac habitasse platea dictumst. Integer quis nisl enim. Nunc varius congue justo, id dignissim lectus. Integer ornare vehicula volutpat. Aenean varius congue purus, et placerat lectus posuere quis. Donec finibus, orci a viverra porta, tortor sem convallis leo, eget rutrum diam neque eu nunc. Vestibulum quis porttitor eros, a gravida augue. Nulla vel maximus magna. Suspendisse gravida, sem efficitur egestas varius, dui leo condimentum ex, at dignissim tellus ante in justo.");
  const classes = useStyles();
  let disabled = true;

  if (
    title !== "" &&
    description !== "" &&
    file.current.files[0].name !== "" 
  ) {
    disabled = false;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const request = await createHandout({
      title, description, file: file.current.files[0].name
    });

    if (!request) {
      setError(true);
      setLoading(false);
    }

    setLoading(false);
    history.push("/news");
  };


  return (
    <Container component="main">
      <CssBaseline />
      <Header />

      <form className={classes.form} onSubmit={handleSubmit}>
        <input style={{ color: '#FFF' }} type="file" ref={file} />

        <Input
          className={classes.input}
          variant="outlined"
          margin="dense"
          required
          fullWidth
          id="email"
          name="email"
          onChange={(e) => setTitle(e.target.value)}
          color="secondary"
          value={title}
          placeholder="Digite o título da Novidade!"
        />

        <TextareaAutosize
          className={classes.textArea}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rowsMax={60}
          aria-label="descrição da novidade"
          placeholder="Descrição da novidade"
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
          Criar Novidade
        </Button>

        {error && (
          <Typography
            component="h6"
            variant="h6"
            style={{ color: "red", fontWeight: "900", fontSize: "12" }}
          >
            Erro ao tentar criar a novidade. Por favor, tente novamente!
          </Typography>
        )}
      </form>

      <MenuTab view={view} setView={setView} />
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
