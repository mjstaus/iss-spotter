//It will require and run our main fetch function.
const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss.js');

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

// fetchISSFlyOverTimes({ latitude: '49.27670', longitude: '-123.13000' }, (error, times) => {
//   if (error) {
//     console.log('IT DIDNT WORK! Error:', error);
//     return;
//   }
//   console.log('It worked! Flyover times:', times);
// });