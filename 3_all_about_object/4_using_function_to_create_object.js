function IdolModel1(name, year) {
  console.log(this);

  this.name = name;
  this.year = year;
  this.dance = function () {
    return `${this.name}이 춤을 춥니다!`;
  };
}

const yuJin1 = new IdolModel1('안유진', 2003);
console.log(yuJin1);
console.log(yuJin1.dance());
const yuJin2 = IdolModel1('안유진', 2003);
console.log(yuJin2);
console.log(global.name);

function IdolModel2(name, year) {
  if (!new.target) {
    return new IdolModel2(name, year);
  }

  this.name = name;
  this.year = year;
  this.dance = function () {
    return `${this.name}이 춤을 춥니다!`;
  };
}
const yuJin3 = IdolModel2('안유진', 2003);
console.log(yuJin3);