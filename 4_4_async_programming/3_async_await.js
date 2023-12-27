const getPromise = (seconds, condition) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (condition) {
      resolve('성공!');
    } else {
      reject('에러!');
    }
  }, seconds * 1000);
});

async function runner() {
  try {
    console.log(await getPromise(1, true));
    console.log(await getPromise(2, true));
    console.log(await getPromise(3, false));
  } catch (e) {
    console.log('--- catch ---');
    console.log(e);
  } finally {
    console.log('--- finally ---');
  }
}

runner();
console.log('Non-blocking!');