// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [Number, String];
// } = {
//   name: 'Pankaj',
//   age: 30,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'Author'],
// };

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: 'Pankaj',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN,
};

let favoriteActivities: string[];

favoriteActivities = ['Sports'];

let character = 'a';

console.log(person.age);

for (const hobby in person.hobbies) {
  if (Object.prototype.hasOwnProperty.call(person.hobbies, hobby)) {
    const element = person.hobbies[hobby];
    console.log(element);
  }
}

if (person.role === Role.AUTHOR) {
  console.log('user is author');
}
