const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data is fetched');
    }, 1000)
  })
}

const updateData = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data.toUpperCase());
    }, 1000)
  })
}

fetchData()
  .then(resp => {
    console.log(resp);
    return updateData(resp);
  })
  .then(resp => {
    console.log(resp);
  })
  .catch(err => console.log(err))

  

  fetchData()
  .then(resp => {
    console.log(resp);
    return resp;
  })
  .then(resp => {
    return updateData(resp);
  })
  .then(resp => {
    console.log(resp);
  })
  .catch(err => console.log(err))