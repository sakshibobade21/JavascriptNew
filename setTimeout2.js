const timer = () => {

    for(var i=1; i<6; i++) {
      setTimeout(() => {
        console.log(i);
      }, i*1000)
    }

}

timer();

// op: 6 6 6 6 6

const timer2 = () => {

    for(let i=1; i<6; i++) {
      setTimeout(() => {
        console.log(i);
      }, i*1000)
    }

}

timer2();

// op: 1 2 3 4 5