/**
 * 단축평가 (short circuit evaluation)
 *
 * &&: 좌측이 true면 우측값 반환
 *     좌측이 false면 우측값 반환
 * ||: 좌측이 true면 좌측값 반환
 *     좌측이 false면 우측값 반환
 */
console.log(true || '아이브');
console.log(false || '아이브');
console.log(true && '아이브');
console.log(false && '아이브');

console.log(true && true && '아이브');
console.log(true && false && '아이브');

/**
 * null 연산자
 */
let name;
console.log(name);

name = name ?? '코드팩토리';
console.log(name);

name = name ?? '아이브';
console.log(name);

let name2;
name2 ??= '코드팩토리';
console.log(name2);