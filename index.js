//It will require and run our main fetch function.
const { fetchMyIP, fetchCoordsByIP } = require('./iss.js');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log('IT DIDNT WORK 😵');
//     return;
//   }
//   console.log('It worked! Returned IP:', ip);
// });

// fetchCoordsByIP('173.180.81.199454', (error, coords) => {
//   if (error) {
//     console.log('It didn\'t work! Error:', error);
//     return;
//   }
//   console.log('IT WORKED! Returned coordinates:', coords);
// });