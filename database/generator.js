const fs = require('fs');
const faker = require('faker');
const headers = [
  'id',
  'rest_id',
  'img_url',
  'caption',
  'date_posted',
  'username',
  'hover_data'
];

const writer = fs.createWriteStream(__dirname + '/photos.csv');
writer.write(headers.join(', ') + '\n');


// Write data to the supplied writeable stream ten million times.
function writeTenMillionTimes(encoding) {
  let i = 5000;

  write();

  function write() {
    let ok = true;
    while (i > 0 && ok) {
      i--;
      if (i === 0) {
        // last time!
        writer.write(generateRecord(), 'utf8');
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
        ok = writer.write(generateRecord(), 'utf8');
      }
    }

    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', write);
    }
  }
}

var k = 1;
function generateRecord() {
  var records = [];
  var randomNum = Math.floor(Math.random() * 26);
  for (var i = 1; i < 2000; i++) {
    var restaurant = {};
    restaurant.id = i;
    restaurant.name = faker.company.companyName();
    restaurant.photos = [];

    for (var j = 0; j < randomNum; j++) {
      var photo = {};
      photo.id = j;
      photo.restaurant_id = i;
      photo.img_url = `https://s3-us-west-1.amazonaws.com/recently-viewed-items/photos/food${k}.jpg`;
      photo.caption = faker.lorem.words();
      photo.date_posted = faker.date.recent();
      photo.username = faker.internet.userName();
      photo.hover_data = faker.lorem.words();

      restaurant.photos.push(photo);

      if (k < 1000) {
        k++;
      } else {
        k = 1;
      }
    }

    records.push(restaurant);
  }
  return JSON.stringify(records);
}

writeTenMillionTimes();
