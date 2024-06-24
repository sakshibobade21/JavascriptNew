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