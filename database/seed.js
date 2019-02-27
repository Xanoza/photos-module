const Sequelize = require('sequelize');
const faker = require('faker');
const {
  username,
  password,
} = require('./config');

const createdb = new Sequelize('', username, password, {
  host: '172.17.0.2',
  port: '3306',
  dialect: 'mysql',
});

// Creates database
createdb.query('CREATE DATABASE IF NOT EXISTS restaurants;')
  .then(() => {
    createdb.close();
    const sequelize = new Sequelize('restaurants', username, password, {
      host: '172.17.0.2',
      port: '3306',
      dialect: 'mysql',
    });
    return sequelize;
  })
  .then((sequelize) => {
    // Schema
    const Photos = sequelize.define('photos', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      restaurant_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      image_url: {
        type: Sequelize.STRING,
      },
      caption: {
        type: Sequelize.STRING,
      },
      date_posted: {
        type: Sequelize.DATE,
      },
      username: {
        type: Sequelize.STRING,
      },
      hover_data: {
        type: Sequelize.STRING,
      },
    });

    // Create table and insert rows
    Photos.sync({
      force: true,
    })
      .then(
        () => {
          const photoTable = [];
          // i = restaurant ids
          for (let i = 1; i <= 100; i += 1) {
            const randomMax = Math.floor(Math.random() * 30) + 20;
            for (let j = 0; j <= randomMax; j += 1) {
              const randomPic = Math.floor(Math.random() * 50) + 1;
              const photoRow = Photos.build({
                restaurant_id: i,
                image_url: `https://s3-us-west-1.amazonaws.com/waitonme/photos/food${randomPic}.jpg`,
                caption: faker.random.words(),
                date_posted: faker.date.past(),
                username: faker.name.findName(),
                hover_data: faker.random.words(),
              }).save();
              photoTable.push(photoRow);
            }
          }
          return Promise.all(photoTable);
        },
      )
      .then(() => sequelize.close())
      .catch(err => console.log(err));
  });
