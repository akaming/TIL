function after() {
  console.log("after");
}

setTimeout(() => {
  console.log("exec");
}, 1000);

// Promisify 프로미스화

// 1 exec가 실행 후 after 실행시키기
function test() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("exec");
      resolve();
    }, 1000);
  });
}

test().then(function () {
  console.log("after");
});

// 2
function test() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("exec");
      resolve();
    }, 1000);
  });
}

function run2nd() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("2nd");
      resolve();
    }, 200);
  });
}

function run3rd() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("3rd");
      resolve();
    }, 200);
  });
}

function final() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("final");
      resolve();
    }, 100);
  });
}

// test().then(function () {
//   run2nd().then(function () {
//     console.log("2번째");
//     run3rd().then(function () {
//       console.log("3번째");
//       final().then(function () {
//         console.log("final");
//       });
//     });
//   });
// });

test()
  .then(() => run2nd())
  .then(() => run3rd())
  .then(() => final())
  .catch((error) => console.warn(error));
/*
axios.post()
  .then( () => {
    return z
  } )
  .then()
  */
