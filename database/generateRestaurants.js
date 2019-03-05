const fs = require('fs');
const faker = require('faker');
const headers = [
  'id',
  'name'
];

// Write data to the supplied writeable stream x amount of times.
function writeToStream(maxRecords) {
  let restaurantId = 1;
  let writer = fs.createWriteStream(__dirname + '/restaurants.csv');

  writer.write(headers.join(', ') + '\n');
  write();

  function write() {
    let ok = true;

    while (restaurantId <= maxRecords && ok) {
      if (restaurantId === maxRecords) {
        writer.write(generateRecord(restaurantId), 'utf8');
      } else {
        // if writer.write(chunk) returns false, the 'drain' event will be emitted
        // when it is appropriate to resume writing data to the stream.
        ok = writer.write(generateRecord(restaurantId), 'utf8');
      }
      restaurantId++;
    }

    if (restaurantId < maxRecords) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', write);
    }
  }
}

function generateRecord(restaurant_id) {
  let restaurant_name = faker.lorem.words();

  return `${restaurant_id},${restaurant_name}\n`;
}

writeToStream(10000000);