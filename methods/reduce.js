const arr = [1,2,3,4];

const sum = arr.reduce((acc, sum) => {
  acc += sum;
  return acc;
}, 0);

console.log(sum);

const max = () => {
  let max = arr[0];
  for(let i=1; i<arr.length; i++) {
    max = arr[i]>max ? arr[i] : max;
  }
  return max;
}

console.log(max());

const maxNum = arr.reduce((acc, curr) => {
  acc = acc > curr ? acc : curr;
  return acc;
}, arr[0]);

console.log(maxNum);

const maxNum2 = arr.reduce((acc, curr) => {
  return acc > curr ? acc : curr;
}, arr[0]);
  
console.log(maxNum2);