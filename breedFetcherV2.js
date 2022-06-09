const request = require("request");

// the user should specify the breed from the command line:

// the website tells us to put the breed into a search query as follows:
// const goodUrl = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`
// const badUrl = 'http:/api.thecatapi.com/v2/breeds/search?q=sibe';

// now we can send a request for the data:
const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`
  request(url, (error, response, body) => {

    if (error) {
      return callback(error, null);
    }

    const data = JSON.parse(body);
    
    if (Array.isArray(data)) {
      return callback(null, data);
    }
  })
};

//old stuff:
// const getBreedData = request(url, (error, response, body) => {

//   // if the request fails we can get details from error
//   if (error) {
//     console.log(error);
//     return;
//   }

//   // the message body is a string which needs to be deserialized or 'parsed' into a JS object
//   const data = JSON.parse(body);
  
//   // if the breed is invalid then the body should be empty
//   if (Array.isArray(data) && data.length < 1) {
//     console.log(`Error: no breed matching '${breed}'.`);
//     return;
//   }
//   if (Array.isArray(data) && data.length > 0) {
//     console.log(data[0].description);
//   }
// });

module.exports = { fetchBreedDescription };