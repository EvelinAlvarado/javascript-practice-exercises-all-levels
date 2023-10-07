/* 
Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7

 */

console.log("******Solucion 1********");

function basicOp(operation, value1, value2) {
  if (operation == "+") {
    return value1 + value2;
  }
  if (operation == "-") {
    return value1 - value2;
  }
  if (operation == "*") {
    return value1 * value2;
  }
  if (operation == "/") {
    return value1 / value2;
  }
}

console.log(basicOp("+", 4, 7));
console.log(basicOp("-", 15, 18));
console.log(basicOp("*", 5, 5));
console.log(basicOp("/", 49, 7));

console.log("******Solucion 2********");

const basicOp2 = (operation, value1, value2) =>
  operation == "+"
    ? value1 + value2
    : operation == "-"
    ? value1 - value2
    : operation == "*"
    ? value1 * value2
    : operation == "/"
    ? value1 / value2
    : "Input invalid";

console.log(basicOp2("+", 4, 7));
console.log(basicOp2("-", 15, 18));
console.log(basicOp2("*", 5, 5));
console.log(basicOp2("/", 49, 7));

console.log("******Solucion 3********");
const basicOp3 = (operation, value1, value2) => {
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
    default:
      throw new Error("Invalid operation");
  }
};

console.log(basicOp3("+", 4, 7));
console.log(basicOp3("-", 15, 18));
console.log(basicOp3("*", 5, 5));
console.log(basicOp3("/", 49, 7));

console.log("******Solucion 4********");

const operators = {
  "+": (value1, value2) => value1 + value2,
  "-": (value1, value2) => value1 - value2,
  "*": (value1, value2) => value1 * value2,
  "/": (value1, value2) => value1 / value2,
};

const basicOp4 = (operation, value1, value2) => {
  if (operation in operators) {
    return operators[operation](value1, value2);
  }
};

console.log(basicOp4("+", 4, 7));
console.log(basicOp4("-", 15, 18));
console.log(basicOp4("*", 5, 5));
console.log(basicOp4("/", 49, 7));

console.log("******Solucion 5********"); //esta es la mejor solucion
const operators2 = {
  "+": (value1, value2) => value1 + value2,
  "-": (value1, value2) => value1 - value2,
  "*": (value1, value2) => value1 * value2,
  "/": (value1, value2) => value1 / value2,
};

const basicOp5 = (operation, value1, value2) =>
  operators2[operation](value1, value2);

console.log(basicOp5("+", 4, 7));
console.log(basicOp5("-", 15, 18));
console.log(basicOp5("*", 5, 5));
console.log(basicOp5("/", 49, 7));

console.log("******Solucion 6********");

const basicOp6 = (operation, value1, value2) =>
  eval(`${value1} ${operation} ${value2}`);

console.log(basicOp6("+", 4, 7));
console.log(basicOp6("-", 15, 18));
console.log(basicOp6("*", 5, 5));
console.log(basicOp6("/", 49, 7));
