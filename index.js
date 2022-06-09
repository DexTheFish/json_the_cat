const { fetchBreedDescription } = require('./breedFetcherV2');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, description) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else if (description.length < 1) {
    console.log('Please enter a valid breed');
  } else {
    console.log(description[0].description);
  }
});