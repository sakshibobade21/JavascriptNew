const p1 = new Promise((resolve, reject) => {
  setTimeout(()=>{
    resolve('Resolving 1st promise after 3 seconds');
  }, 3000);
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Rejected after 1 second');
  }, 1000)
})

const p3 = Promise.resolve('Resolved immediately');

Promise.allSettled([p1, p2, p3])
  .then(val => console.log(val))


// OP
// {status: 'fulfilled', value: 'Resolving 1st promise after 3 seconds'}
// {status: 'rejected', reason: 'Rejected after 1 second'}
// {status: 'fulfilled', value: 'Resolved immediately'}