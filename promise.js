function job1() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("resolved ok!");
    }, 2000);
  });
}

function job2() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("job2 ok!");
    }, 2000);
  });
}

job1().then(function (data) {
  console.log("data", data);
  job2().then(function (data) {
    console.log("data2", data);
  });
});

job1()
  .then(function (data) {
    console.log("data", data);
    return job2();
  })
  .catch(function (reason) {
    console.log("reason", reason);
  })
  .then(function (data) {
    console.log("data2", data);
  });
