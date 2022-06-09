const request = require("request");

// the user should specify the breed from the command line:

// the website tells us to put the breed into a search query as follows:
// const goodUrl = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`
// const badUrl = 'http:/api.thecatapi.com/v2/breeds/search?q=sibe';

// now we can send a request for the data:
const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {

    if (error) {
      return callback(error, null);
    }

    const data = JSON.parse(body);
    
    if (Array.isArray(data) && data.length) {
      return callback(null, data[0].description);
    }
    if (Array.isArray(data) && !data.length) {
      return callback(null, null);
    }

  });
};

module.exports = { fetchBreedDescription };