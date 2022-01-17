import {
  SIGN_IN,
  SIGN_OUT,
  ADD_DATA,
  ADD_DATA_TO_STORAGE,
  CALCULATE_BALANCE,
} from "../actions/types";

const INITIAL_STATE = {
  isSignedIn: false,
  email: "",
  gamedata: [],
  balance: 9.99,
  message: "",
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, email: action.payload };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, email: "" };
    case ADD_DATA:
      return { ...state, gamedata: [...state.gamedata, action.payload] };
    case ADD_DATA_TO_STORAGE:
      return { ...state, message: action.payload };

    case CALCULATE_BALANCE:
      return { ...state, balance: action.payload };
    default:
      return state;
  }
};

export default AuthReducer;
