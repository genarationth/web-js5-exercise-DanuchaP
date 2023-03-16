//Part 1
let xValue = 10;

while (xValue > 0) {
  console.log(xValue);
  xValue -= 0.5;
}

//Part 2
let num = 1;

while (num <= 100) {
  if (num % 2 !== 0) {
    console.log(num);
  }
  num++;
}

//Part 3
function printSquareBrackets(n) {
    let num = 1;
    let output = '';
  
    while (num <= n) {
      output += `[${num}] `;
      num++;
    }
  
    console.log(output.trim());
  }
  printSquareBrackets(6);

  //Part 4
  function sumOfFirstN(n) {
    let num = 1;
    let sum = 0;
  
    while (num <= n) {
      sum += num;
      num++;
    }
  
    return sum;
  }
console.log(sumOfFirstN(5)); // Print 15
console.log(sumOfFirstN(19)); // Print 190