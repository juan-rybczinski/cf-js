/**
 * 타입 변환
 * Type Conversion
 *
 * 1) 명시적
 * 2) 암묵적
 */
let age = 32;

// 명시적
let stringAge = age.toString();
console.log(typeof stringAge, stringAge);

// 암묵적
let anotherStringAge = age + '';
console.log(typeof anotherStringAge, anotherStringAge);

console.log('98' + 2);
console.log('98' * 2);
console.log('98' - 2);

/**
 * Boolean 타입으로 변환
 * 아래의 경우 모두 false를 반환한다.
 * 1) 아무 글자도 없는 String
 * 2) 값이 없는 경우
 * 3) 0
 */
console.log(!!'');
console.log(!!0);
console.log(!!'0');
console.log(!!undefined);
console.log(!!null);
console.log(!!NaN);
console.log(!!{});
console.log(!![]);