// 생성자 함수
function IdolFunction(name, year) {
  this.name = name;
  this.year = year;
}

const yuJin = new IdolFunction('안유진', 2003);
console.log(yuJin);