const rect1 = {
  length: 20,
  bredth: 10
}

const rect2 = {
  length: 10,
  bredth: 10
}


const calculate = function() {
  return this.length*this.bredth;
}

const calculate2 = function(bredth) {
  return this.length*bredth;
}

const area1 = calculate.call(rect1);

const area2 = calculate2.call(rect2, rect2.bredth);

console.log(area1);
console.log(area2);