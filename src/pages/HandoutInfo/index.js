import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import ReactLoading from "react-loading";
import { toast } from 'react-toastify';
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

import { createHandoutComment, getHandoutById } from "../../services/Functions";

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
    height: 46,
    borderRadius: 30,
    zIndex: 999
  },
  submit: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    backgroundColor: "#604B89",
    color: "#FFF",
    width: 15,
    height: 45,
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
    height: 80,
    backgroundColor: "#222222",
    borderRadius: 30,
    zIndex: 9
  }
}));

export default function HandoutInfo() {
  const [view, setView] = useState(2);
  const [loadingData, setLoadingData] = useState(true);
  const [loading, setLoading] = useState(false);
  const [handout, setHandout] = useState();
  const [handoutComments, setHandoutComments] = useState();
  const [comment, setComment] = useState("");
  const { idHandout } = useParams();
  const classes = useStyles();
  let disabled = true;

  if (comment !== "") {
    disabled = false;
  }

  useEffect( () => {
    async function getInfo() {
      const response = await getHandoutById(idHandout);
      setHandout(response[0]);
      setHandoutComments(response[0].comments);
      setLoadingData(false);
    }

    getInfo();
  }, [idHandout]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const request = await createHandoutComment({
      comment, idHandout: handout.id
    });

    if (!request) {
      toast.error('Erro ao tentar criar comentário. Por favor, tente novamente!');
      setLoading(false);
    } else {
      const response = await getHandoutById(idHandout);
      setHandoutComments(response[0].comments);
      setComment("");
      setLoading(false);
      toast.success('Comentário criado com sucesso!');
    }
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
              {handoutComments?.length > 0 ? (
                <>
                  {handoutComments?.map(item => {
                    return <CardHandoutComment key={item.id} item={item} />
                  })}
                </>
              ) : (
                <Typography className={classes.handoutTitle2}>sem comentários no momento</Typography>
              )}
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

      <MenuTab view={view} setView={setView} />
    </Container>
  );
}
