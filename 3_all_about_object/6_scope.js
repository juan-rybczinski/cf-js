/**
 * JS -> Lexical Scope
 * 선언된 위치가 상위 스코프를 결정
 *
 * Dynamic Scope
 * 실행된 위치가 상위 스코프를 결정
 */
let number = 3;

function functionOne() {
  let number = 8;
  functionTwo();
}

function functionTwo() {
  console.log(number);
}

functionOne();

/**
 * var는 함수 레벨 스코프만 만들어낸다.
 * let, const는 함수 레벨 스크프와 블록 레벨 스코프를 만들어낸다.
 */