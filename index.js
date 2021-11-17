//It will require and run our main fetch function.
const { fetchMyIP } = require('./iss.js');

fetchMyIP((error, ip) => {
  if (error) {
    console.log('IT DIDNT WORK 😵');
    return;
  }
  console.log('It worked! Returned IP:', ip);
});