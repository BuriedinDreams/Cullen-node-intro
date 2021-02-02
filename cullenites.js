const peeps = [
  { name: 'William' },
  { name: 'Josh' },
  { name: 'John' },
  { name: 'Vada' },
  { name: 'Dusty' },
];

let instructor = 'Edan';

let allTheThingsWeWantToExport = {
  students: peeps,
  Teacher: instructor,
};

// this is sending over peepsArray
// peeps will be the reutrn value of require('./cullenites.js)
module.exports = allTheThingsWeWantToExport;
// module is another word for file.
