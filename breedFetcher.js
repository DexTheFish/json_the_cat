const request = require('request');
const breed = process.argv[2];

const fetchBreedDescription = function(catBreed) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${catBreed}`, (error, response, body) => {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode);
    const data = JSON.parse(body)[0];
    if (typeof data !== "object") {
      console.log("please enter a valid cat breed.");
    }
    if (typeof data === "object") {
      console.log(data.description);
    }
  });
};
//   request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode);
//   const data = JSON.parse(body)[0];
//   if (typeof data !== "object") {
//     console.log("please enter a valid cat breed.");
//   }
//   if (typeof data === "object") {
//     console.log(data.description);
//   }
// });
fetchBreedDescription(breed);