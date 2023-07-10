const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// 복사
const arrCopy = [...arr1];

// 추가
const arr3 = [1, 2, 3, ...arr2, 7, 8, 9];

// 이어 붙이기
const arr4 = [...arr1, ...arr2];

console.log(arr4);