import {
  ADD_DATA,
  SIGN_IN,
  SIGN_OUT,
  ADD_DATA_TO_STORAGE,
  CALCULATE_BALANCE,
} from "./types";

export const SignIn = (email) => {
  //   localStorage.setItem(
  //     "token",
  //     "imthenewtokenfor86199loginauthentication43454"
  //   );

  return {
    type: SIGN_IN,
    payload: email,
  };
};

export const SignOut = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("CasinoGameData");
  //   window.location.reload();
  return {
    type: SIGN_OUT,
  };
};

export const AddData = (id, slot1, slot2, slot3, time) => {
  return {
    type: ADD_DATA,
    payload: { id, slot1, slot2, slot3, time },
  };
};

export const AddDataToStorage = (slotData) => {
  localStorage.setItem("CasinoGameData", JSON.stringify(slotData));
  return {
    type: ADD_DATA_TO_STORAGE,
    payload: "Data saved to local storage",
  };
};

export const CalculateBalance = (balance, first, second, third) => {
  var newBalance;
  if (first === 3 && second === 3 && third === 3) {
    newBalance = balance + 5.0;
  } else {
    if (first === second && first === third) {
      newBalance = balance + 2.0 - 2.0;
    } else if (first === second || second === third || first === third) {
      newBalance = balance + 0.5 - 2.0;
    } else {
      newBalance = balance - 2.0;
    }
  }
  return {
    type: CALCULATE_BALANCE,
    payload: newBalance,
  };
};
