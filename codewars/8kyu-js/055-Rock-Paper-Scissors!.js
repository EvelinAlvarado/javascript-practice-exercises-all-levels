/* 
Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"

 */
console.log("******Solucion 1********");
const rps = (p1, p2) => {
  if (p1 === p2) {
    return "Draw!";
  } else if (
    (p1 === "rock" && p2 === "scissors") ||
    (p1 === "scissors" && p2 === "paper") ||
    (p1 === "paper" && p2 === "rock")
  ) {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  }
};

console.log(rps("scissors", "rock"));
console.log(rps("rock", "rock"));
console.log(rps("paper", "rock"));

console.log("******Solucion 2********");
const rps2 = (p1, p2) => {
  //object
  const rules = {
    scissors: "paper",
    rock: "scissors",
    paper: "rock",
  };
  return rules[p1] === p2
    ? "Player 1 won!"
    : p1 === p2
    ? "Draw!"
    : "Player 2 won!";
};

console.log(rps2("scissors", "rock"));
console.log(rps2("rock", "rock"));
console.log(rps2("paper", "rock"));
