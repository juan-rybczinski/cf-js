const yuJin1 = {
  name: '안유진',
  year: 2003,

  get age(){
    return new Date().getFullYear() - this.year;
  },

  set age(age){
    this.year = new Date().getFullYear() - age;
  }
}

/**
 * Extensible
 * Prevent 할 경우 Property 의 추가가 불가능(삭제는 가능)
 */
console.log(Object.isExtensible(yuJin1));
yuJin1.position = 'vocal';
console.log(yuJin1);
Object.preventExtensions(yuJin1);
yuJin1.groupName = '아이브';
console.log(yuJin1);
// Object.defineProperty(yuJin1, 'groupName', {
//   value: '아이브',
// });
delete yuJin1.position;
console.log(yuJin1);

/**
 * Seal
 * configurable = false
 * Property 의 추가와 삭제가 불가능
 * 기존 Property 의 값 변경은 가능
 */
const yuJin2 = {
  name: '안유진',
  year: 2003,

  get age(){
    return new Date().getFullYear() - this.year;
  },

  set age(age){
    this.year = new Date().getFullYear() - age;
  }
}
console.log(Object.isSealed(yuJin2));
Object.seal(yuJin2);
console.log(Object.isSealed(yuJin2));
yuJin2.groupName = '아이브';
console.log(yuJin2);
delete yuJin2.name;
console.log(yuJin2);
yuJin2.year = 2004;
console.log(yuJin2);
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'name'));

/**
 * Freezed
 * writable = false, configurable = false
 * 읽기 외에 모든 기능이 불가능
 */
const yuJin3 = {
  name: '안유진',
  year: 2003,

  get age(){
    return new Date().getFullYear() - this.year;
  },

  set age(age){
    this.year = new Date().getFullYear() - age;
  }
}
console.log(Object.isFrozen(yuJin3));
Object.freeze(yuJin3);
console.log(Object.isFrozen(yuJin3));
yuJin3.groupName = '아이브';
console.log(yuJin3);
delete yuJin3.name;
console.log(yuJin3);
yuJin3.year = 2004;
console.log(yuJin3);
console.log(Object.getOwnPropertyDescriptor(yuJin3, 'name'));

const yuJin4 = {
  name: '안유진',
  year: 2003,
  wonYoung: {
    name: '장원영',
    year: 2004,
  }
}
Object.freeze(yuJin4);
console.log(Object.isFrozen(yuJin4));
console.log(Object.isFrozen(yuJin4.wonYoung));