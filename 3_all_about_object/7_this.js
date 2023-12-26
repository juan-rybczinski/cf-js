/**
 * JS의 this는 객체가 생성되는 시점에 바인딩이 결정된다.
 */
const testFunction = function () {
  return this;
};
console.log(testFunction());
console.log(testFunction() === global);

/**
 * 1) 일반 함수를 호출할 때는 this가 최상위 객체(global 또는 window)를 가리킨다.
 * 2) 메서드로 호출할 때는 호출된 객체를 가리킨다.
 * 3) new 키워드를 사용해서 객체를 생성했을 때는 객체를 가리킨다.
 */
/**
 * 1) call -> 아규먼트를 순서대로 넘겨줌
 * 2) apply -> 아규먼트를 리스트로 넘겨줌
 * 3) bind -> this가 바인딩된 함수를 리턴
 */
function multiply(x, y, z) {
  return `${this.name} / 결과값: ${x * y * z}`;
}

const yuJin = {
  name: '안유진',
}

console.log(multiply.call(yuJin, 3, 4, 5));
console.log(multiply.apply(yuJin, [3, 4, 5]));
const bindFunction = multiply.bind(yuJin, 3, 4, 5);
console.log(bindFunction());