const fs = require('fs');

const people = [];
const genders = ['M', 'F'];
const maleNames = ['John', 'Bob', 'Carl', 'Andrzej'];
const femaleNames = ['Ala', 'Jane', 'Carla', 'Ana'];
const lastNames = ['Smith', 'Kowalski', 'Schmidt', 'Artois'];
const randChoice = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};
for (let x = 0; x < 20; x++) {
  const gender = randChoice(genders);
  const data = {
    gender,
    firstName: gender === 'M' ? randChoice(maleNames) : randChoice(femaleNames),
    lastName: randChoice(lastNames),
    age: Math.floor(Math.random() * 60 + 19),
  };
  people.push(data);
}
const peopleData = JSON.stringify(people);
fs.writeFile('people.json', peopleData, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
