const { fetchBreedDescription } = require('./breedFetcherV2');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else if (!desc) {
    console.log('Please enter a valid breed');
  } else if (desc) {
    console.log(desc);
  }
});