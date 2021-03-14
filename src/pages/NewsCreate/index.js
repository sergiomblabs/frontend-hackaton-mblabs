import React, { useState } from "react";
import ReactLoading from "react-loading";
import { toast } from 'react-toastify';
import { 
  Box,
  Button,
  Container,
  CssBaseline,
  Input,
  TextareaAutosize,
} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

import {
  MenuTab,
  Header,
  Copyright
} from '../../components'; 

import history from "../../services/history";
import { createNews } from "../../services/Functions";

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
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
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

    const request = await createNews({
      title, description, file: ''
    });

    if (request) {
      setLoading(false);
      toast.success('Novidade criada com sucesso!');
      history.push("/news");
    } else {
      toast.error('Erro ao tentar criar a novidade. Por favor, tente novamente!');
      setLoading(false);
    }
  };


  return (
    <Container component="main">
      <CssBaseline />
      <Header />

      <form className={classes.form} onSubmit={handleSubmit}>
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
      </form>

      <MenuTab view={view} setView={setView} />
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
