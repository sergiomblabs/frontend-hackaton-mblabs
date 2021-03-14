import React, { useState } from "react";
import ReactLoading from "react-loading";
import { 
  Box,
  Button,
  Container, 
  Checkbox, 
  CssBaseline, 
  FormControlLabel, 
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

export default function HandoutCreate() {
  const [view, setView] = useState(2);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [title, setTitle] = useState("");
  const [fixed, setFixed] = useState(true);
  const [description, setDescription] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu eleifend lectus, in faucibus magna. Proin sollicitudin mi eu sem finibus lobortis. Phasellus nec mi condimentum, mattis odio ut, dignissim ipsum. Cras porttitor fringilla est, vitae convallis erat placerat eu. Cras non neque ullamcorper, eleifend lorem vel, bibendum ipsum. Maecenas viverra vestibulum est vitae porttitor. Donec eu ligula quis nibh hendrerit blandit. Vivamus orci mauris, sagittis vel purus eget, porta interdum arcu. Suspendisse dapibus varius tristique. Sed dignissim lectus vitae mauris semper condimentum. Aenean vitae felis sed nibh vehicula blandit. In hac habitasse platea dictumst. In hac habitasse platea dictumst. Integer quis nisl enim. Nunc varius congue justo, id dignissim lectus. Integer ornare vehicula volutpat. Aenean varius congue purus, et placerat lectus posuere quis. Donec finibus, orci a viverra porta, tortor sem convallis leo, eget rutrum diam neque eu nunc. Vestibulum quis porttitor eros, a gravida augue. Nulla vel maximus magna. Suspendisse gravida, sem efficitur egestas varius, dui leo condimentum ex, at dignissim tellus ante in justo.");
  const classes = useStyles();
  let disabled = true;

  if (
    title !== "" &&
    description !== ""  
  ) {
    disabled = false;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const request = await createHandout({
      title, description
    });

    if (!request) {
      setError(true);
      setLoading(false);
    }

    setLoading(false);
    history.push("/handout");
  };


  return (
    <Container component="main">
      <CssBaseline />
      <Header />

      <form className={classes.form} onSubmit={handleSubmit}>
        <FormControlLabel
          className={classes.input}
          value={fixed}
          control={<Checkbox className={classes.checkBox} />}
          label="Comentário Importante"
          labelPlacement="end"
          onClick={() => { setFixed(!fixed)}}
        />

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
          placeholder="Digite o título do comunicado"
        />

        <TextareaAutosize
          className={classes.textArea}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rowsMax={60}
          aria-label="descrição do comunicado"
          placeholder="Descrição do comunicado"
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
          Criar Comunicado
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

      <MenuTab view={view} setView={setView} />
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
