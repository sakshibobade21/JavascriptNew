const timer = () => {

  for(var i=0; i<4; i++) {
    setTimeout((i) => {
        console.log(i);
      }, i*500, i)
  }

}

// timer();

const timer2 = () => {

    for(var i=0; i<4; i++) {

     const fun = (i) => {
        setTimeout(() => {
            console.log(i);
          }, i*500)
     }
      
     fun(i);
    }
  
}

timer2();