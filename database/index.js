const Sequelize = require('sequelize');
const {
  username,
  password,
} = require('./config');

const sequelize = new Sequelize('restaurants', username, password, {
  host: '172.17.0.2',
  port: '3306',
  dialect: 'mysql',
});

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


const findPhotos = id => Photos.findAll({
  where: {
    restaurant_id: id,
  },
});

module.exports = {
  findPhotos,
};
