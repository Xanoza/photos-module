# CRUD API Routes

| Endpoint                    | Type    | Operation         |
|-----------------------------|---------|-------------------|
| `/api/photos/:id`           | GET     | Get a photo       |
| `/api/photos/`              | POST    | Add a photo       |
| `/api/photos/:id/:photoId`  | PUT     | Update photo      |
| `/api/photos/:id/:photoId`  | DELETE  | Delete photo      |


## GET

`/api/photos/:id`

#### Example Response Data

```js
{
  id: {
    type: INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  restaurant_id: {
    type: INTEGER,
    allowNull: false,
  },
  image_url: {
    type: STRING,
  },
  caption: {
    type: STRING,
  },
  date_posted: {
    type: DATE,
  },
  username: {
    type: STRING,
  },
  hover_data: {
    type: STRING,
  },
}

```

#### Success Response
`200 OK`

#### Error Response
`400 Bad Request`
`404 Not Found`


## POST

`/api/photos`

#### Example Request Data

```js
{
  id: {
    type: INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  restaurant_id: {
    type: INTEGER,
    allowNull: false,
  },
  image_url: {
    type: STRING,
  },
  caption: {
    type: STRING,
  },
  date_posted: {
    type: DATE,
  },
  username: {
    type: STRING,
  },
  hover_data: {
    type: STRING,
  },
}
```

#### Success Response
`201 Created`

#### Error Response
`400 Bad Request`


## PUT

`/api/photos/:id/:photoId`

#### Example Request Data

```js
{
  caption: {
    type: STRING,
  }
}
```

#### Success Response
`201 Created`

#### Error Response
`400 Bad Request`


## DELETE

`/api/photos/:id/:photoId`

#### Example Data

```js
{
  id: {
    type: INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  restaurant_id: {
    type: INTEGER,
    allowNull: false,
  },
  image_url: {
    type: STRING,
  },
  caption: {
    type: STRING,
  },
  date_posted: {
    type: DATE,
  },
  username: {
    type: STRING,
  },
  hover_data: {
    type: STRING,
  },
}
```

#### Success Response
`200 OK`

#### Error Response
`400 Bad Request`