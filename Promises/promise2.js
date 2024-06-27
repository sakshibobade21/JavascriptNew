const fun = (item) => {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      item ? resolve("Item Found") : reject("Item Not Found");
    }, 1000);
    
  })
}

fun("hey")
  .then(res => console.log(res))
  .catch(err => console.log(err))