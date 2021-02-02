console.log('Testing, JS');
console.log('Yay for Node!');

// peeps array was here
// load cullenites.js file.
let cullenites = require('./cullenites.js'); // require -

testCode(cullenites);

function testCode(param) {
  for (let people of param) {
    console.log(people);
    const sorters = {
      name: param.name,
    };
  }
}
