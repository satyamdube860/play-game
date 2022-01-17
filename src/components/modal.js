import React, { useState } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../actions/index";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";

import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";

import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import CardSlot from "./cardSlot";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import daimonds from "../static/images/daimonds.png";
import clubs from "../static/images/clubs.png";
import hearts from "../static/images/hearts.png";
import spades from "../static/images/spades.png";
import "./modal.css";
import "./cardSlot.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Modal = (props) => {
  const DIAMONDS = daimonds;
  const CLUBS = clubs;
  const HEARTS = hearts;
  const SPADES = spades;

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [err, setErr] = useState("");
  const [slot_1, setSlot_1] = useState(SPADES);
  const [slot_2, setSlot_2] = useState(SPADES);
  const [slot_3, setSlot_3] = useState(SPADES);

  var balance = props.auth.balance.toFixed(2);
  // const [slotData, setSlotData] = useState([]);

  var slotData = [];

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addDataToStorage = (id, slot_1_data, slot_2_data, slot_3_data) => {
    slotData.push({
      id: id,
      slot1: slot_1_data,
      slot2: slot_2_data,
      slot3: slot_3_data,
      time: new Date().toLocaleString(),
    });
    localStorage.setItem("CasinoGameData", JSON.stringify(slotData));
  };

  const deckSymbols = [DIAMONDS, CLUBS, HEARTS, SPADES];

  const handlePlay = () => {
    if (props.auth.balance > 2) {
      var randomSelect_1 = Math.floor(Math.random() * deckSymbols.length);
      var randomName_1 = deckSymbols[randomSelect_1];

      var randomSelect_2 = Math.floor(Math.random() * deckSymbols.length);
      var randomName_2 = deckSymbols[randomSelect_2];

      var randomSelect_3 = Math.floor(Math.random() * deckSymbols.length);
      var randomName_3 = deckSymbols[randomSelect_3];

      setSlot_1(randomName_1);
      setSlot_2(randomName_2);
      setSlot_3(randomName_3);

      var ID = Math.floor(Math.random() * 10000);
      var date = new Date().toLocaleString();
      props.AddData(ID, randomName_1, randomName_2, randomName_3, date);

      // props.AddDataToStorage(props.auth.gameData);
      addDataToStorage(ID, slot_1, slot_2, slot_3, date);

      setIsFlipped(!isFlipped);

      props.CalculateBalance(
        props.auth.balance,
        randomSelect_1,
        randomSelect_2,
        randomSelect_3
      );
    } else {
      setErr(
        "GAME OVER. You don't have sufficient balance to continue playing."
      );
    }
  };

  const handleDebug = () => {
    setSlot_1(SPADES);
    setSlot_2(SPADES);
    setSlot_3(SPADES);
    setErr("");

    props.CalculateBalance(props.auth.balance, 3, 3, 3);
    setIsFlipped(true);
  };

  setTimeout(() => {
    setIsFlipped(false);
  }, 2000);

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={handleClickOpen}
      >
        Start Game
      </Button>

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              BALANCE = $ {balance}
            </Typography>
          </Toolbar>
        </AppBar>

        <Divider />

        <Grid container spacing={0}>
          <Grid item xs={4} sm={4}>
            <Paper className={classes.paper}>
              <CardSlot isFlipped={isFlipped} src={slot_1} />
            </Paper>
          </Grid>
          <Grid item xs={4} sm={4}>
            <Paper className={classes.paper}>
              <CardSlot isFlipped={isFlipped} src={slot_2} />
            </Paper>
          </Grid>
          <Grid item xs={4} sm={4}>
            <Paper className={classes.paper}>
              <CardSlot isFlipped={isFlipped} src={slot_3} />
            </Paper>
          </Grid>
        </Grid>

        <div className="button_group">
          <div className="btn_play">
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={handlePlay}
            >
              PLAY
            </Button>
          </div>
          <div className="btn">
            <Button
              variant="contained"
              color="green"
              size="large"
              onClick={handleDebug}
            >
              DEBUG
            </Button>
          </div>
          <div className="btn">
            <Button
              variant="contained"
              color="secondary"
              size="large"
              onClick={handleClose}
            >
              CLOSE
            </Button>
          </div>
        </div>
        <div className="error_div">{err} </div>
      </Dialog>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      AddData: actions.AddData,
      AddDataToStorage: actions.AddDataToStorage,
      CalculateBalance: actions.CalculateBalance,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
