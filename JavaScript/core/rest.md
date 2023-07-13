function average(...numbers) {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum / numbers.length;
}

console.log(average(2, 4, 6)); // 출력: 4
console.log(average(10, 20, 30, 40, 50)); // 출력: 30
