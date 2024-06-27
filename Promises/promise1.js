const myPromise = new Promise((resolve, reject) => {
  setTimeout(()=>{
    const success = true;
    success ? resolve("Promise is resolved"): reject("Promise is rejected");
  }, 1000);
})

myPromise
  .then(response => console.log(response))
  .catch(error => console.log(error))