const countClicks = () => {
  let count = 0;
  document.getElementById("click").addEventListener('click', () => {
    console.log('Click Num: ', ++count);
  })
}

countClicks();
