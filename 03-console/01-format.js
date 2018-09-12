#!/usr/bin/node
const user = {
  name:'于洋',
  age: 20,
  qq:'937508676'
};
console.log('name: %s' , user.name);
console.log('qq:', user.qq);
console.log(`qq: ${user.qq}`);
console.log('age  :%d',user.age);
console.log('JSON: %j',user);

console.error('Error! something wrong!');
