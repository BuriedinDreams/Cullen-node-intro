// load cullenites.js file.
let cullenites = require('./cullenites.js'); // we can drop the .js if we so choose.
console.log('cullenites', cullenites);

let favNum = require('./myFavoriteNum'); // need the ./ or else the require will not work.
console.log('my favorite num is:', favNum);

let scream = require('./scream');
console.log('hello', scream('world'));

// console.log('Testing, JS');
// console.log('Yay for Node!');

// peeps array was here

// testCode(cullenites); // this used to say peeps but now it says cullenites because we are grabbing our info from cullenites variable.

// function testCode(param) {
//   // remember this is cullenites
//   for (let people of param) {
//     console.log(people);
//     const sorters = {
//       name: param.name, // this used to says peeps.name
//     };
//   }
// }
