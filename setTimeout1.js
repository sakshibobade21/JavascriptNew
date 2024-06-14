const timer = () => {
  let i = 1;

  setTimeout(() => {
    console.log(i);
    i++;
  }, 500)

}

timer();