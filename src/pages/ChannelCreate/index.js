import React, { useState } from "react";
import ReactLoading from "react-loading";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  Input,
  TextareaAutosize,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  Chip
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
  selectInput: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3),
    color: "#FFF",
    width: "100%"
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

const arrayUsers = [
  {
    id: "qweasdzxc",
    name: "Cirão da Massa"
  },
  {
    id: "sdasdasd",
    name: "Lohanzão"
  },
  {
    id: "gfdgdfgf",
    name: "Fer RH"
  },
  {
    id: "cvbvcbcvb",
    name: "Thaís RH"
  },
  {
    id: "hfdgdf",
    name: "Sérgio Lindo"
  },
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function ChannelCreate() {
  const [view, setView] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [title, setTitle] = useState("");
  const [users, setUsers] = useState([]);
  const [description, setDescription] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu eleifend lectus, in faucibus magna. Proin sollicitudin mi eu sem finibus lobortis. Phasellus nec mi condimentum, mattis odio ut, dignissim ipsum. Cras porttitor fringilla est, vitae convallis erat placerat eu. Cras non neque ullamcorper, eleifend lorem vel, bibendum ipsum. Maecenas viverra vestibulum est vitae porttitor. Donec eu ligula quis nibh hendrerit blandit. Vivamus orci mauris, sagittis vel purus eget, porta interdum arcu. Suspendisse dapibus varius tristique. Sed dignissim lectus vitae mauris semper condimentum. Aenean vitae felis sed nibh vehicula blandit. In hac habitasse platea dictumst. In hac habitasse platea dictumst. Integer quis nisl enim.");
  const classes = useStyles();
  const selectedUsers = [];
  let disabled = true;

  if (
    title !== "" &&
    description !== ""  &&
    users.length > 1
  ) {
    disabled = false;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const request = await createHandout({
      title, description, selectedUsers
    });

    if (!request) {
      setError(true);
      setLoading(false);
    }

    setLoading(false);
    history.push("/handout");
  };

  const handleChange = (event) => {
    setUsers(event.target.value);
  };


  return (
    <Container component="main">
      <CssBaseline />
      <Header />

      <form className={classes.form} onSubmit={handleSubmit}>
        <InputLabel className={classes.checkBox}>Adicione membros ao canal</InputLabel>
        <Select
          className={classes.selectInput}
          multiple
          value={users}
          onChange={handleChange}
          input={<Input id="select-multiple-chip" />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected.map((value) => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {arrayUsers.map((item) => (
            <MenuItem key={item.id} value={item.name}>
              {item.name}
            </MenuItem>
          ))}
        </Select>

        <Input
          className={classes.input}
          variant="outlined"
          margin="dense"
          required
          fullWidth
          id="email"
          name="email"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder="Digite o título do canal de comunicação"
        />

        <TextareaAutosize
          className={classes.textArea}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rowsMax={60}
          aria-label="descrição do canal de comunicação"
          placeholder="Descrição do canal de comunicação"
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
          Criar Canal de Comunicação
        </Button>

        {error && (
          <Typography
            component="h6"
            variant="h6"
            style={{ color: "red", fontWeight: "900", fontSize: "12" }}
          >
            Erro ao tentar criar canal. Por favor, tente novamente!
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
