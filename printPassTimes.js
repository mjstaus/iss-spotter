const printPassTimes = function(passTimes) {
  const datetime = new Date(0);
  datetime.setUTCSeconds(passTimes.risetime);
  const duration = passTimes.duration;
  console.log(`Next pass at ${datetime} for ${duration} seconds!`);
};

module.exports = { printPassTimes }