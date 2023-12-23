// *을 이용하여 6x6의 정사각형을 출력
for (let i = 0; i < 6; i++) {
  let row = ''
  for (let j = 0; j < 6; j++) {
    row += '*'
  }
  console.log(row);
}

/**
 * for ... in
 */
const yuJin = {
  name: '안유진',
  year: 2003,
  group: '아이브',
}

const iveMembersArray = ['안유진', '가을', '레이', '장원영', '리즈', '이서'];

for (const key in yuJin) {
  console.log(yuJin[key]);
}

for (const key in iveMembersArray) {
  console.log(iveMembersArray[key]);
}

/**
 * for ... of
 */
for (const member of iveMembersArray) {
  console.log(member);
}