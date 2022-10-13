//Fetch ApI requires a discussion of..
// Callbacks, Promises, Thenables, and Async/Await

/** Call backs */
// function firstFunction(parameters, callback) {
//   //do stuff
//   callback();
// }

/** AKA "callback hell" */
// firstFunction(para, function () {
//   //do stuff
//   secondFunction(para, function () {
//     thirdFunction(para, function () {});
//   });
// });

//We won't use Call back now

/** Promises */

//3 states: Pending, Fulfilled, Rejected

//promise: Asyn

const myPromise = new Promise((resolve, reject) => {
  const error = false;
  if (!error) {
    resolve("Yes! resolved the promise!!");
  } else {
    reject("No! rejected the promise.");
  }
});

// console.log(myPromise);

// myPromise
//   .then((value) => {
//     return value + 1;
//   })
//   .then((newValue) => {
//     console.log(newValue);
//   })
//   //catching error
//   .catch((err) => {
//     console.error(err);
//   });

// const myNextPromise = new Promise((resolve, reject) => {
//   setTimeout(function () {
//     resolve("myNextPromise resolved");
//   }, 3000);
// });

// myNextPromise.then((value) => {
//   console.log(value);
// });

// myPromise.then((value) => {
//   console.log(value);
// });

// const users = fetch("https://jsonplaceholder.typicode.com/users");

// /** Pending */
// console.log(users);

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     data.forEach((user) => {
//       console.log(user);
//     });
//   });

/** Async / Await  */

const myUsers = {
  userList: [],
};

const myCoolFunction = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonUserData = await response.json();
  console.log(jsonUserData);
  return jsonUserData;
};

const anotherFunc = async () => {
  const data = await myCoolFunction();
  myUsers.userList = data;
  console.log(myUsers.userList);
};
anotherFunc();
console.log(myUsers.userList);
