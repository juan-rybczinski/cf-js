/**
 * 모든 변수의 선언문이 코드의 최 상단으로 이동되는 것처럼 느껴지는 현상
 */

console.log(name);
var name = '코드팩토리';
console.log(name);

var name1;
console.log(name1);
name1 = '코드팩토리1';
console.log(name1);

console.log(name2);
let name2 = '안유진';

console.log(name3);
const name3 = '장원영';