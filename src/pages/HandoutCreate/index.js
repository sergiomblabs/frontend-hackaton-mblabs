import React, { useState } from "react";
import ReactLoading from "react-loading";
import { toast } from 'react-toastify';
import { 
  Box,
  Button,
  Container, 
  Checkbox, 
  CssBaseline, 
  FormControlLabel, 
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
  const [title, setTitle] = useState("");
  const [fixed, setFixed] = useState(true);
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

    const request = await createHandout({
      title, description, fixed
    });

    if (request) {
      setLoading(false);
      toast.success('Comunicado criado com sucesso!');
      history.push("/handout");
    } else {
      toast.error('Erro ao tentar criar comunicado. Por favor, tente novamente!');
      setLoading(false);
    }
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
      </form>

      <MenuTab view={view} setView={setView} />
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
