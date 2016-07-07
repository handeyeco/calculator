/* jshint esversion: 6 */

import React from 'react';

function TheFunction(state, actionObj) {
  switch (actionObj.type) {
    case "digit":
      return handleDigit(state.currentNumber, actionObj.display);
    case "unary":
      return handleUnary(state.currentNumber, actionObj.action);
    case "binary":
      return handleBinary(state, actionObj.action);
    case "clear":
      return handleClear(state.currentNumber, actionObj.action);
    case "equal":
      return handleEqual(state);
  }
}

function handleDigit(currentNumber, digit) {
  //Prevent user from inputing too many numbers
  if (currentNumber.length < 9) {

    //Prevent user from adding multiple "."s
    if (digit === "." && currentNumber.indexOf(".") !== -1) {
      return {};
    }

    //Remove leading zeros
    let newNumber = (currentNumber + digit).replace(/^0(\d)/, "$1");
    return {
      currentNumber: newNumber
    };

    //No changes if input is over 9 digits
  } else {
    return {};
  }
}

function handleUnary(currentNumber, action) {
  if (action === "PERCENT") {
    return {
      //Divide by 100 to get percentage
      currentNumber: Math.div(currentNumber, 100) + ""
    };
  } else if (action === "SIGN") {
    return {
      //Multiple by -1 to switch sign
      currentNumber: Math.mul(currentNumber, -1) + ""
    };
  }
}

function handleBinary(state, newAction) {
  let base = state.baseNumber,
    curr = state.currentNumber,
    action = state.lastAction,
    newBase;

  if (base && curr && action) {
    switch (action) {
      case "ADD":
        newBase = Math.add(base, curr);
        break;
      case "SUBTRACT":
        newBase = Math.sub(base, curr);
        break;
      case "MULTIPLY":
        newBase = Math.mul(base, curr);
        break;
      case "DIVIDE":
        newBase = Math.div(base, curr);
        break;
    }

    return {
      currentNumber: "",
      baseNumber: newBase + "",
      lastAction: newAction
    };
  }

  return {
    currentNumber: "",
    baseNumber: curr + "",
    lastAction: newAction
  };
}

function handleEqual(state) {
  let base = state.baseNumber,
    curr = state.currentNumber,
    action = state.lastAction,
    newBase;

  if (base && curr && action) {
    switch (action) {
      case "ADD":
        newBase = Math.add(base, curr);
        break;
      case "SUBTRACT":
        newBase = Math.sub(base, curr);
        break;
      case "MULTIPLY":
        newBase = Math.mul(base, curr);
        break;
      case "DIVIDE":
        newBase = Math.div(base, curr);
        break;
    }

    return {
      currentNumber: newBase + "",
      baseNumber: "",
      lastAction: ""
    };
  }
}

function handleClear(currentNumber, action) {
  if (action === "CLEAR_ALL") {
    return {
      currentNumber: "",
      baseNumber: "",
      lastAction: ""
    };
  } else if (action === "CLEAR_ENTRY") {
    if (currentNumber) {
      return {
        currentNumber: currentNumber.substring(0, currentNumber.length - 1)
      };
    } else {
      return {};
    }
  }
}

export default TheFunction;
