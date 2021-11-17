//It will require and run our main fetch function.
const { nextISSTimesForMyLocation } = require('./iss.js');

const printPassTimes = function(passTimes) {
  const datetime = new Date(0);
  datetime.setUTCSeconds(passTimes.risetime);
  const duration = passTimes.duration;
  console.log(`Next pass at ${datetime} for ${duration} seconds!`);
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("Error:", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});