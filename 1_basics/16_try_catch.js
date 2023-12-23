(() => {
  try {
    console.log('Hello');
    // throw new Error('큰 문제가 생겼습니다!');
    console.log('World!');
  } catch (e) {
    console.log('--- Catch ---');
    console.log(e);
  } finally {
    console.log('--- Finally ---');
  }
})();