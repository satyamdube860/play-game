import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../actions/index";

import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange, deepPurple } from "@material-ui/core/colors";

import Button from "@material-ui/core/Button";
import SignInForm from "./signIn";
import "./header.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));

const Header = (props) => {
  const classes = useStyles();
  var balance = props.auth.balance.toFixed(2);
  const handleLogout = () => {
    props.SignOut();
  };

  return (
    <div className="header_main">
      <div className="brand_div">
        <h2 className="brand_name">Poker Buz</h2>
      </div>

      <div className="balance_div">
        <h3 className="balance_name">$ {balance}</h3>
      </div>
      <div className="avatar_div">
        <h1 className="avatar_name">
          {props.auth.isSignedIn ? (
            <Avatar className={classes.purple} size="large">
              {props.auth.email
                ? props.auth.email[0].toUpperCase()
                : props.auth.email[0]}
            </Avatar>
          ) : (
            <Avatar className={classes.purple} size="large">
              G U
            </Avatar>
          )}
        </h1>
      </div>
      <div className="login_div">
        {props.auth.isSignedIn ? (
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={handleLogout}
          >
            Logout
          </Button>
        ) : (
          <SignInForm />
        )}
      </div>
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
      SignOut: actions.SignOut,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
