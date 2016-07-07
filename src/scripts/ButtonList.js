/* jshint esversion: 6 */

const ButtonList = [
  {display: "AC", type: "clear", action: "CLEAR_ALL"},
  {display: "CE", type: "clear", action: "CLEAR_ENTRY"},
  {display: "%", type: "unary", action: "PERCENT"},
  {display: "/", type: "binary", action: "DIVIDE"},
  {display: "7", type: "digit", action: "DIGIT"},
  {display: "8", type: "digit", action: "DIGIT"},
  {display: "9", type: "digit", action: "DIGIT"},
  {display: "x", type: "binary", action: "MULTIPLY"},
  {display: "4", type: "digit", action: "DIGIT"},
  {display: "5", type: "digit", action: "DIGIT"},
  {display: "6", type: "digit", action: "DIGIT"},
  {display: "-", type: "binary", action: "SUBTRACT"},
  {display: "1", type: "digit", action: "DIGIT"},
  {display: "2", type: "digit", action: "DIGIT"},
  {display: "3", type: "digit", action: "DIGIT"},
  {display: "+", type: "binary", action: "ADD"},
  {display: "0", type: "digit", action: "DIGIT"},
  {display: "+/-", type: "unary", action: "SIGN"},
  {display: ".", type: "digit", action: "DIGIT"},
  {display: "=", type: "equal", action: "EQUAL"}
];

export default ButtonList;
