import React, { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import { 
  Box,
  Button,
  Container,
  CssBaseline,
  TextareaAutosize,
  Typography
} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

import SendIcon from '@material-ui/icons/Send';

import {
  MenuTab,
  Header,
  CardHandout,
  CardHandoutComment,
} from '../../components'; 

import { createHandoutComment } from "../../services/Functions";

const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      backgroundColor: "#282B30",
    },
  },
  form: {
    marginBottom: theme.spacing(2),
    backgroundColor: "#222222",
    width: '100%',
    height: 500,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  },
  textArea: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
    backgroundColor: "#CDCDCD",
    width: '75%',
    height: 26,
    borderRadius: 30,
    zIndex: 999
  },
  submit: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(1),
    backgroundColor: "#604B89",
    color: "#FFF",
    width: 15,
    height: 30,
    borderRadius: '50%' 
  },
  handoutTitle: {
    textAlign: "center",
    color: "#FFF",
    fontSize: 18,
    fontWeight: '700'
  },
  handoutTitle2: {
    marginTop: theme.spacing(1),
    textAlign: "center",
    color: "#FFF",
    fontSize: 18,
    fontWeight: '600'
  },
  handoutCommentList: {
    width: '100%',
    overflow: 'auto',
    height: 300
  },
  textAreaBox: {
    marginTop: theme.spacing(3),
    width: '100%',
    height: 50,
    backgroundColor: "#222222",
    borderRadius: 30,
    zIndex: 9
  }
}));

export default function HandoutInfo() {
  const [view, setView] = useState(2);
  const [loadingData, setLoadingData] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [handout, setHandout] = useState();
  const [handoutComments, setHandoutComments] = useState();
  const [comment, setComment] = useState("");
  const classes = useStyles();
  let disabled = false;

  if (comment !== "") {
    disabled = false;
  }

  useEffect( () => {
    async function getInfo() {
      setHandout({
        id: '1231231231231',
        title: 'Título do comunicado',
        description: 'Descrição do comunicado, que vai ser algúem falando algo!',
        fixed: false
      });

      setHandoutComments([
      {
          userName: 'Sérgio',
          userAvatar: '',
          comment: 'Comentando algo nesse comunicado'
        },
        {
          userName: 'Lohan',
          userAvatar: '',
          comment: 'Comentando algo nesse comunicado'
        },
        {
          userName: 'Ciro',
          userAvatar: '',
          comment: 'Comentando algo nesse comunicado'
        },
        {
          userName: 'Porta',
          userAvatar: '',
          comment: 'Comentando algo nesse comunicado'
        }
      ]);
      setLoadingData(false);
    }

    getInfo();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const request = await createHandoutComment({
      comment, idHandout: handout.id
    });

    if (!request) {
      setError(true);
      setLoading(false);
    }

    setLoading(false);
    window.location.reload();
  };


  return (
    <Container component="main">
      <CssBaseline />
      <Header />

      {loadingData ? (
        <ReactLoading
          type="spin"
          color="#FFF"
          height={40}
          width={40}
        />
      ) : (
        <>
          <div className={classes.div}>
            <Typography className={classes.handoutTitle}>{handout.title}</Typography>

            <Box>
              <CardHandout item={handout} />
            </Box>

            <Typography className={classes.handoutTitle2}>Comentários</Typography>
            <Box className={classes.handoutCommentList}>
              {handoutComments.map(item => {
                return <CardHandoutComment />
              })}
            </Box>
          </div>

          <Box className={classes.textAreaBox} display="flex">
            <TextareaAutosize
              className={classes.textArea}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rowsMax={8}
              aria-label="Comentário do comunicado"
              placeholder="Digite seu comentário"
            />
            <Button
              type="button"
              onClick={handleSubmit}
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
              <SendIcon fontSize="small" />
            </Button>
          </Box>
        </>
      )}
      
      {error && (
        <Typography
          component="h6"
          variant="h6"
          style={{ color: "red", fontWeight: "900", fontSize: "12" }}
        >
          Erro ao criar comentário. Por favor, tente novamente!
        </Typography>
      )}

      <MenuTab view={view} setView={setView} />
    </Container>
  );
}
