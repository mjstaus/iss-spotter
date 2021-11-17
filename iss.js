//It will contain most of the logic for fetching the data from each API endpoint.

const request = require("request");

/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const fetchMyIP = function(callback) {
  // use request to fetch IP address from JSON API
  request("https://api.ipify.org/?format=json", (err, response, body) => {
    if (err) {
      callback(err, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response ${body}`;
      callback(Error(msg), null); //Error keyword creates a new Error object that can be passed around
      return;
    }
    //if we get here, all is well  and we got the data :)
    const ip = JSON.parse(body).ip;
    if (ip) callback(null, ip);
  });
};

const fetchCoordsByIP = function(ip, callback) {
  request(
    `https://api.freegeoip.app/json/${ip}?apikey=45937660-47f4-11ec-b7bb-8f2e783b4f4a`,
    (err, response, body) => {
      if (err) {
        callback(err, null);
        return;
      }
      if (response.statusCode !== 200) {
        const msg = `Status Code ${response.statusCode} when fetching IP coordinates. Response ${body}`;
        callback(Error(msg), null);
        return;
      }
      const data = JSON.parse(body);
      const location = { latitude: data.latitude, longitude: data.longitude };
      if (location) callback(null, location);
    }
  );
};

module.exports = { fetchMyIP, fetchCoordsByIP };
