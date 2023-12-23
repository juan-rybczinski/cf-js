// 함수를 반환하는 함수
const multiply1 = x => y => z => `x: ${x} y: ${y} z: ${z}`;
console.log(multiply1(3)(4)(5));

function multiply2 (x) {
  return function (y) {
    return function (z) {
      return `x: ${x} y: ${y} z: ${z}`
    };
  };
}
console.log(multiply2(3)(4)(5));

function multiplyAll(...args) {
  return Object.values(arguments).reduce((prev, curr) => prev * curr, 1);
}
console.log(multiplyAll(1, 2, 3, 4, 5));

(function (x, y) {
  console.log(x, y)
})(3, 4);

console.log(typeof multiplyAll);
console.log(multiplyAll instanceof Object);