const person = {
  firstName: 'Spongebob',
  lastName: 'Squarepants',
  hobby: 'Jellyfishing',
};
console.log(person);
const fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is", fullName);
person.job = 'fry cook';
console.log("The person's current job is:", person.job);
person['previousJob'] = 'karate teacher';
console.log("The person's previous job is:", person['previousJob']);
console.log('The complete person object:', person);
