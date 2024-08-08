const person = {
  firstName: 'Zoobia',
  lastName: 'Syyed',
  hobby: 'painting',
};
console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is " + fullName);

person.job = 'unemployed lol';
console.log('this person is ' + person.job);

person['previousJob'] = 'Apple';
console.log('this person used to work for' + person['previousJob']);

console.log(person);
