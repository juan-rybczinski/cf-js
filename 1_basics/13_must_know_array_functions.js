let iveMembers = [
  '안유진',
  '가을',
  '레이',
  '장원영',
  '리즈',
  '이서',
];

/**
 * Mutable
 * push()
 * pop()
 * shift()
 * unshift()
 * splice(Start index, count)
 */
console.log(iveMembers.push('코드팩토리'));
console.log(iveMembers);
console.log(iveMembers.pop());
console.log(iveMembers);
console.log(iveMembers.shift());
console.log(iveMembers);
console.log(iveMembers.unshift('안유진'));
console.log(iveMembers);
const result = iveMembers.splice(0, 3);
console.log(result);
console.log(iveMembers);
iveMembers = [...result, ...iveMembers];
console.log(iveMembers);

/**
 * Immutable
 * concat()
 * slice(Start index, End index(excluding))
 */
console.log(iveMembers.concat('코드팩토리'));
console.log(iveMembers);
console.log(iveMembers.slice(0, 3));
console.log(iveMembers);

const numbers1 = [1, 6, 3, 4, 2];
console.log(numbers1.sort());
console.log(numbers1.reverse());
console.log(numbers1.sort((a, b) => a > b ? 1 : -1));
console.log(numbers1.sort((a, b) => a > b ? -1 : 1));


const numbers2 = [1, 6, 3, 4, 2];
console.log(numbers2.filter((x) => x % 2 === 0));
console.log(numbers2.find((x) => x % 2 === 0));
console.log(numbers2.findIndex((x) => x % 2 === 0));
console.log(numbers2.reduce((c, n) => c + n, 0));
console.log(iveMembers.reduce((c, n) => c + n.length, 0));