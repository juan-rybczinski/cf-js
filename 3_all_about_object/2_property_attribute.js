/**
 *  1) 데이터 프로퍼티 - 키와 값으로 형성된 실질적 값을 갖고 있는 프로퍼티
 *  2) 엑세서 프로퍼티 - 자체적으로 값을 갖고 있지 않지만 다른 값을 가져오거나 설정할 때 호출되는 함수로 구성된 프로퍼티
 *                       ex) getter, setter
 */
/**
 *  1) value - 실제 프로퍼티의 값
 *  2) writable - 값을 수정할 수 있는지 여부. false로 설정하면 프로퍼티 값을 수정할 수 없다.
 *  3) enumerable - 열거가 가능한지 여부.  값출력이나 for ... in 등에 사용할 수 있으면 true를 반환한다.
 *  4) configurable - 프로퍼티 어트리뷰트의 재정의가 가능한 지 여부를 판단한다.
 *                    false인 경우 프로퍼티 삭제나 어트리뷰트 변경이 금지된다.
 *                    단, writable이 true인 경우 값 변경 writable을 false로 변경하는 것은 가능하다.
 */
const yuJin = {
  name: '안유진',
  year: 2003,
  get age() {
    return new Date().getFullYear() - this.year;
  },
  set age(age) {
    this.year = new Date().getFullYear() - age;
  },
}

console.log(yuJin);
console.log(yuJin.age);
console.log(Object.getOwnPropertyDescriptor(yuJin, 'name'));
console.log(Object.getOwnPropertyDescriptor(yuJin, 'age'));
console.log(Object.getOwnPropertyDescriptors(yuJin));

Object.defineProperty(yuJin, 'height', {
  value: 172,
  writable: true,
  enumerable: true,
  configurable: true,
});
console.log(yuJin);
console.log(Object.getOwnPropertyDescriptor(yuJin, 'height'));
yuJin.height = 180;
console.log(yuJin);

/**
 * Writable
 */
Object.defineProperty(yuJin, 'height', {
  writable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin, 'height'));
yuJin.height = 172;
console.log(yuJin);

/**
 * Enumerable
 */
console.log(yuJin);
for (const yuJinKey in yuJin) {
  console.log(yuJinKey);
}
Object.defineProperty(yuJin, 'height', {
  enumerable: false,
});
console.log(yuJin);
for (const yuJinKey in yuJin) {
  console.log(yuJinKey);
}
console.log(yuJin.height);

/**
 * Configurable
 */
console.log(Object.getOwnPropertyDescriptor(yuJin, 'height'));
Object.defineProperty(yuJin, 'height', {
  writable: true,
  configurable: false,
});
// Object.defineProperty(yuJin, 'height', {
//   enumerable: true
// });
Object.defineProperty(yuJin, 'height', {
  value: 172,
});
console.log(yuJin.height);
Object.defineProperty(yuJin, 'height', {
  writable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin, 'height'));
// Object.defineProperty(yuJin, 'height', {
//   value: 180,
// });
Object.defineProperty(yuJin, 'height', {
  writable: true,
});