const p1 = Promise.resolve("promise 1");
const p2 = Promise.resolve("promise 2");

const p = Promise.all([p1, p2]);

console.log(p);

setTimeout(()=>{
  console.log('op:', p);
}, 100)

// op
// [promise 1, promise 2]
// op: [promise 1, promise 2]