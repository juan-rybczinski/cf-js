class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  static fromObject(object) {
    return new IdolModel(object.name, object.year);
  }

  static fromList(list) {
    return new IdolModel(list[0], list[1]);
  }
}

const yuJin = IdolModel.fromObject({
  name: '안유진',
  year: 2003,
});
console.log(yuJin);

const wonYoung = IdolModel.fromList([
  '장원영',
  2004,
]);
console.log(wonYoung);