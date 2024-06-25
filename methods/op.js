const users = [
  {firstName: 'Sakshi', lastName: 'B' , age: 27 },
  {firstName: 'Alex', lastName: 'D' , age: 16 },
  {firstName: 'Phil', lastName: 'Dun' , age: 50 },
  {firstName: 'Halley', lastName: 'Phy' , age: 27 },
];

// {27: 2, 16: 1, 50:1}

const fname = users.filter(user => user.age < 30).map(user => user.firstName);

console.log(fname);

const fname2 = users.reduce((acc, curr) => {
  if(curr.age < 30) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);

console.log(fname2);

const reduce = users.reduce((acc, curr) => {
  if(acc[curr.age]) {
    acc[curr.age] += 1;
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

const red = users.reduce((acc, curr) => {
  acc[curr.age] = acc[curr.age] ? acc[curr.age] + 1: 1;
  return acc;
}, {});

const obj = {
  Sakshi: 'Hey',
  age: 20
}

console.log(obj.Sakshi);
console.log(obj[users[0].firstName]);

obj.age = obj.age+10;

console.log(obj);

console.log(reduce);
console.log(red);