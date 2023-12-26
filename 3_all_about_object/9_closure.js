/**
 * 1) 데이터 캐싱
 */
function cacheFunction() {
  // 아래 계산은 매우 오래 걸린다는 가정을 했을 때
  const number1 = 10 * 10;

  function innerCacheFunction(number2) {
    return number1 * number2;
  }

  return innerCacheFunction;
}

const runner1 = cacheFunction();
console.log(runner1(10));
console.log(runner1(20));

/**
 * 2) 데이터 캐싱 - 반복적으로 특정값을 변환해야 할 때
 */
function transformFunction() {
  let number = 99;

  function increment() {
    number++;
    return number;
  }

  return increment;
}

const runner2 = transformFunction();
console.log(runner2());
console.log(runner2());
console.log(runner2());

/**
 * 3) 정보 은닉
 */
function Idol(name, year) {
  this.name = name;
  const _year = year;
  this.sayNameAndYear = function() {
    return `안녕하세요. 저는 ${this.name}입니다. ${_year}에 태어났습니다.`;
  }
}

const yuJin = new Idol('안유진', 2003);
console.log(yuJin.sayNameAndYear());
console.log(yuJin.name);
console.log(yuJin.year);