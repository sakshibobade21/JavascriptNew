const array = [1,2,3,4];

const newArray = array.map(i => i*2);

console.log(newArray); //[2,4,6,8]

const twice = (num) => {
  return 2*num;
}

const newMapper = (array, fun1) => {
  let opArray = [];
  for(let i=0; i<array.length; i++) {
    opArray.push(fun1(array[i]));
  }
  return opArray;
}

const newArray2 = newMapper(array, twice);
console.log(newArray2);

Array.prototype.newMapper2 = (array, fun1) => {
  let opArray = [];
  for(let i=0; i<array.length; i++) {
    opArray.push(fun1(array[i]));
  }
  return opArray;
}

const newArray3 = array.newMapper2(array, twice);
console.log(newArray3);

Array.prototype.newMapper3 = function(fun1) {
  let opArray = [];
  for(let i=0; i<this.length; i++) {
    opArray.push(fun1(this[i]));
  }
  return opArray;
}
  
const newArray4 = array.newMapper3(twice);
console.log(newArray4);