const request = require('request');

const breedName = process.argv[2];

const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

request(url, (error, response, body) => {
  if (error) {
    console.log(`Failed to request details: ${error}`);
    return;
  }

  const data = JSON.parse(body);

  if (data.length === 0) {
    console.log(`Breed '${breedName}' not found.`);
    return;
  }

  const breed = data[0];
  console.log(breed.description);
});