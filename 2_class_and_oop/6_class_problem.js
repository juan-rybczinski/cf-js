const iveMembers = [
  {
    name: '안유진',
    year: 2003,
  },
  {
    name: '가을',
    year: 2002,
  },
  {
    name: '레이',
    year: 2004,
  },
  {
    name: '장원영',
    year: 2004,
  },
  {
    name: '리즈',
    year: 2004,
  },
  {
    name: '이서',
    year: 2007,
  },
];

const btsMembers = [
  {
    name: '진',
    year: 1992,
  },
  {
    name: '슈가',
    year: 1993,
  },
  {
    name: '제이홉',
    year: 1994,
  },
  {
    name: 'RM',
    year: 1994,
  },
  {
    name: '지민',
    year: 1995,
  },
  {
    name: '뷔',
    year: 1995,
  },
  {
    name: '정국',
    year: 1997,
  },
];

class Country {
  name;
  idolGroups

  constructor(name, idolGroups) {
    this.name = name;
    this.idolGroups = idolGroups;
  }
}

const korea = new Country('한국', ['아이브', 'BTS']);
console.log(korea);

class IdolGroup {
  name;
  members;

  constructor(name, members) {
    this.name = name;
    this.members = members;
  }
}

const ive = new IdolGroup('아이브', iveMembers);
console.log(ive);
const bts = new IdolGroup('BTS', btsMembers);
console.log(bts);

class Idol {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

const iveIdolMembers = iveMembers.map((member) => new Idol(member.name, member.year));
console.log(iveIdolMembers);
const btsIdolMembers = btsMembers.map((member) => new Idol(member.name, member.year));
console.log(btsIdolMembers);

class MaleIdol extends Idol {
  sing() {
    return `${this.name}이 노래를 합니다.`
  }
}
const btsMaleIdolMembers = btsMembers.map((member) => new MaleIdol(member.name, member.year));
console.log(btsMaleIdolMembers);

class FemaleIdol extends Idol {
  dance() {
    return `${this.name}이 춤을 춥니다.`
  }
}
const iveFemaleIdolMembers = iveMembers.map((member) => new FemaleIdol(member.name, member.year));
console.log(iveFemaleIdolMembers);

const allTogether = new Country(
  '한국',
  [
    new IdolGroup(
      '아이브',
      iveMembers.map((member) => new FemaleIdol(member.name, member.year)),
    ),
    new IdolGroup(
      'BTS',
      btsMembers.map((member) => new MaleIdol(member.name, member.year)),
    ),
  ],
);
console.log(allTogether);