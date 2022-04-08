const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
rl.on('line', function (line) {
  input.push(parseInt(line));
}).on('close', function () {
  const num1 = input[0];
  const num2 = input[1];

  if(num1>0){
    (num2>0 ? console.log(1) : console.log(4))
} else {
    (num2>0 ? console.log(2) : console.log(3))
}
    process.exit();
});
