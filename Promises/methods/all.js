const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("resolved after 1 seconds");
    }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved after 2 seconds");
  }, 2000)
});

const promise3 = Promise.resolve("resolved immediately");

Promise.all([promise2, promise1,promise3])
  .then(values => {
    console.log(values);
  })


//OP
// (3) 
//['resolved after 2 seconds', 'resolved after 1 seconds', 'resolved immediately']