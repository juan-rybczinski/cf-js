class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  sayHello() {
    return `안녕하세요. ${this.name}입니다.`;
  }
}

class FemaleIdolModel extends IdolModel {
  part;

  constructor(name, year, part) {
    super(name, year);
    this.part = part;
  }

  sayHello() {
    // return `안녕하세요. ${this.name}입니다. ${this.part}을 맡고 있습니다.`;
    return `${super.sayHello()} ${this.part}를 맡고 있습니다.`;
  }
}

const yuJin = new FemaleIdolModel('안유진', 2003, '보컬');
console.log(yuJin);
console.log(yuJin.sayHello());