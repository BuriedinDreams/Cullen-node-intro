const peeps = [
  { name: 'William' },
  { name: 'Josh' },
  { name: 'John' },
  { name: 'Vada' },
  { name: 'Dusty' },
];

function addStudent(name) {
  peeps.push({ name: name.name });
}

let instructor = 'Edan';

let allTheThingsWeWantToExport = {
  students: peeps,
  Teacher: instructor,
  addStudent: addStudent, // we need this here because we want to use this func.
};

// this is sending over peepsArray
// peeps will be the return value of require('./cullenites.js)
module.exports = allTheThingsWeWantToExport;
// module is another word for file.
