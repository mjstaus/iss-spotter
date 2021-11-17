//It will contain most of the logic for fetching the data from each API endpoint.

const request = require('request');

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
  request('https://api.ipify.org/?format=json', (err, response, body) => {
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

module.exports = { fetchMyIP };