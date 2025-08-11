import { writeFileSync, readFileSync } from 'node:fs';

const users = [
  {
    name: 'Adam',
    email: 'adam@test.com',
  },
];

const usersJson = JSON.stringify(users);

writeFileSync('./users.json', usersJson);

const readUserJson = readFileSync('./users.json');
const readUsers = JSON.parse(readUserJson);

console.log(readUsers);
