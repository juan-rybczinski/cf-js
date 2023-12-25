const testObj = {};

/**
 * __proto__: 모든 객체 존재하는 프로퍼티
 * class 관점에서 상속의 부모 클래스에 해당하는 값
 */
console.log(testObj.__proto__);
console.log(testObj.__proto__ === Object.prototype);

function IdolModel(name, year) {
  this.name = name;
  this.year = year;
}

IdolModel.prototype.sayHello = function () {
  return `${this.name}이 인사를 합니다!`
};

console.log(IdolModel.prototype);
console.dir(IdolModel.prototype, {
  showHidden: true,
});

// Circular Reference
console.log(IdolModel.prototype.constructor === IdolModel);

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin.__proto__);
console.log(yuJin.__proto__ === IdolModel.prototype);

console.log(IdolModel.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(IdolModel.prototype.__proto__ === Object.prototype);

console.log(yuJin.toString());
console.log(Object.prototype.toString());

const wonYoung = new IdolModel('장원영', 2004);
console.log(yuJin.sayHello());
console.log(wonYoung.sayHello());
console.log(yuJin.sayHello === wonYoung.sayHello);
console.log(yuJin.hasOwnProperty('sayHello'));

IdolModel.sayStaticHello = function () {
  return '안녕하세요. 저는 static method입니다!';
};

console.log(IdolModel.sayStaticHello());

// 프로퍼티 섀도잉 - class의 override
function IdolModel2(name, year) {
  this.name = name;
  this.year = year;

  this.sayHello = function () {
    return '안녕하세요. 저는 instance 메서드입니다!';
  }
}

IdolModel2.prototype.sayHello = function () {
  return '안녕하세요. 저는 prototype 메서드입니다!';
};

const gaEul = new IdolModel2('가을', 2002);
console.log(gaEul.sayHello());

/**
 * getPrototypeOf, setPrototypeOf
 * 인스턴스의 __proto__ 변경 vs 함수의 prototype 변경
 */
function FemaleIdolModel(name, year) {
  this.name = name;
  this.year = year;

  this.dance = function () {
    return `${this.name}이 춤을 춥니다!`;
  };
}

const ray = new FemaleIdolModel('레이', 2004);

console.log(yuJin.__proto__);
console.log(yuJin.__proto__ === IdolModel.prototype);
console.log(Object.getPrototypeOf(yuJin) === IdolModel.prototype);
console.log(Object.getPrototypeOf(ray) === FemaleIdolModel.prototype);
Object.setPrototypeOf(ray, IdolModel.prototype);
console.log(ray.sayHello());
console.log(ray.constructor === FemaleIdolModel);
console.log(ray.constructor === IdolModel);
console.log(yuJin.constructor === IdolModel);
console.log(Object.getPrototypeOf(ray) === IdolModel.prototype);
console.log(Object.getPrototypeOf(ray) === FemaleIdolModel.prototype);
console.log(IdolModel.prototype === FemaleIdolModel.prototype);

FemaleIdolModel.prototype = IdolModel.prototype;

const eSeo = new FemaleIdolModel('이서', 2007);
console.log(Object.getPrototypeOf(eSeo) === IdolModel.prototype);
console.log(FemaleIdolModel.prototype === IdolModel.prototype);
