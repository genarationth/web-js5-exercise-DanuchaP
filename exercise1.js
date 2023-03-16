// Part 1
const queue = ['M', 'Touch', 'Wan'];

// Part 2
queue.push('Bank', 'Vee');
queue.shift();
console.log(queue);

// Part 3
const davidIndex = queue.indexOf('Touch');
queue.splice(davidIndex + 1, 0, 'Kim');
queue.push('Pooh');
console.log(queue);