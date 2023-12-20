/**
 * 변수 이름을 지을 때
 * 1) 일반적으로 영어(라틴 문자)를 사용하며 문자와 숫자를 모두 사용할 수 있다.
 * 2) 특수기호는 언더스코어와 달러를 사용할 수 있다.
 * 3) 숫자로 이름을 시작할 수 없다. ex) 1Name, 2Hello
 * 4) 키워드는 변수명으로 사용할 수 없다.
 *   var const = 'var';
 */

let codeFactory = '코드팩토리';
var $ive = '아이브';
const _yuJin = '안유진';

console.log(codeFactory);
console.log($ive);
console.log(_yuJin);

// let 1name = 'no';
// let const = 'attention'

/**
 * Naming Convention 2
 *
 * 1) camelCase -> 대부분의 언어에서 많이 사용
 * 2) snake_case -> 파이썬에서 사용
 * 3) PascalCase -> C#같은 마이크로소프트 계열의 언어에서 사용
 */

const anYuJin = '안유진';
console.log(anYuJin);