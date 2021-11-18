const request = require("request-promise-native");

const fetchMyIP = function () {
  return request("https://api.ipify.org/?format=json");
};

const fetchCoordsByIP = function (body) {
  const ip = JSON.parse(body).ip;
  return request(
    `https://api.freegeoip.app/json/${ip}?apikey=45937660-47f4-11ec-b7bb-8f2e783b4f4a`
  );
};

const fetchISSFlyOverTimes = function (body) {
  const { latitude, longitude } = JSON.parse(body);
  return request(
    `https://iss-pass.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`
  );
};

const nextISSTimesForMyLocation = function () {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then((body) => {
      const { response } = JSON.parse(body);
      return response;
    });
};

module.exports = {nextISSTimesForMyLocation};
