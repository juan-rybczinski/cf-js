const nameKey = 'name';
const nameValue = '안유진';

const groupKey = 'group';
const groupValue = '아이브';

const yujin = {
  [nameKey]: nameValue,
  [groupKey]: groupValue,
  dance: function () {
    console.log(`${this.name}이 춤을 춥니다!`);
  },
}
console.log(yujin);
yujin.dance();

console.log(Object.keys(yujin));
console.log(Object.values(yujin));