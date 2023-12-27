const timeoutPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('완료!');
  }, 3000);
});
timeoutPromise.then((res) => {
  console.log('--- then ---');
  console.log(res);
});

const getPromise = (seconds, condition) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (condition) {
      resolve('성공!');
    } else {
      reject('실패!');
    }
  }, seconds * 1000);
});
getPromise(3, true).then((res) => {
  console.log('--- then1 ---');
  console.log(res);
  return getPromise(3, false);
}).then((res) => {
  console.log('--- then2 ---');
  console.log(res);
  return getPromise(3, true);
}).then((res) => {
  console.log('--- then3 ---');
  console.log(res);
}).catch((res) => {
  console.log('--- catch ---');
  console.log(res);
}).finally(() => {
  console.log('--- finally ---');
});

console.log('Non-blocking!!!');

Promise.all([
  getPromise(1, true),
  getPromise(3, true),
  getPromise(2, true),
]).then((res) => {
  console.log(res);
});