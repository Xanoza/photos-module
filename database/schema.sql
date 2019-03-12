DROP DATABASE IF EXISTS photos;

CREATE DATABASE photos;

\c photos;

\timing

DROP TABLE IF EXISTS restaurants;
DROP TABLE IF EXISTS photos;

CREATE TABLE restaurants (
  id SERIAL NOT NULL PRIMARY KEY,
  name TEXT
);

CREATE TABLE photos (
  id SERIAL NOT NULL PRIMARY KEY,
  restaurant_id INT,
  image_url TEXT,
  caption TEXT,
  date_posted DATE,
  username TEXT,
  hover_data TEXT
);

\COPY restaurants(id, name) FROM 'restaurants.csv' DELIMITER ',' CSV HEADER;
\COPY photos(id, restaurant_id, image_url, caption, date_posted, username, hover_data) FROM 'photos.csv' DELIMITER ',' CSV HEADER;

CREATE INDEX idx_rest_id ON photos(restaurant_id);

SELECT setval('photos_id_seq', (SELECT MAX(id) FROM photos) + 1);