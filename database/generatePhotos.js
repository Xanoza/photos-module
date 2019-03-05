const fs = require('fs');
const faker = require('faker');
const headers = [
  'id',
  'restaurant_id',
  'image_url',
  'caption',
  'date_posted',
  'username',
  'hover_data'
];

// Write data to the supplied writeable stream x amount of times.
function writeToStream(maxRecords) {
  let restaurantId = 1;
  let writer = fs.createWriteStream(__dirname + '/photos.csv');

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

// number of food image out of 1000
let k = 1;
let photo_id = 1;
function generateRecord(restaurant_id) {
  let photos = '';
  let randomNum = Math.floor(Math.random() * 16);

  for (let j = 0; j < randomNum; j++) {
    let photo;
    let image_url = `https://s3-us-west-1.amazonaws.com/recently-viewed-items/photos/food${k}.jpg`;
    let caption = faker.lorem.words();
    let date_posted = faker.date.past().toDateString();
    let username = faker.internet.userName();
    let hover_data = faker.lorem.words();

    photo = `${photo_id}, ${restaurant_id}, ${image_url}, ${caption}, ${date_posted}, ${username}, ${hover_data}\n`;
    photos += photo;
    photo_id++;

    if (k < 1000) {
      k++;
    } else {
      k = 1;
    }
  }

  return photos;
}

writeToStream(10000000);