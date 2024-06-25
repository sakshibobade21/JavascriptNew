const name = {
  first: 'Sakshi',
  last: 'Bobade'
}

const print = function() {
  console.log(this.first+" "+this.last);
}

const newFunction = print.bind(name);
console.log(newFunction);