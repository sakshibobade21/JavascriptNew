const p1 = Promise.resolve("promise 1");
const p2 = Promise.resolve("promise 2");

const p = Promise.all([p1, p2]);

const pn = Promise.all([p1, p2])
  .then(resp => console.log(resp))
  .catch()

console.log(p);


// Sync code is executed first
//.then is async code

//op: 
//LINE 10 Promise {<pending>}
//LINE 7 (2) ['promise 1', 'promise 2']