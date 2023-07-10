const arr = [1, 2, 3, 4, 5];

//acc = 누적 item = 현재 돌고 있는 요소
const sum = arr.reduce((acc, item) => acc + item, 0);

console.log(sum);