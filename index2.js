const { nextISSTimesForMyLocation } = require('./iss_promised.js');
const { printPassTimes } = require('./printPassTimes.js')

nextISSTimesForMyLocation()
.then((times) => {
  for(const time of times){
    printPassTimes(time)
  }
})
  .catch((error) => {
    console.log('Oh no! Error:', error)
  })

