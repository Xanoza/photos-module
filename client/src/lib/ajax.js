import $ from 'jquery';

export default {
  getPhotos: (id, callback) => {
    $.get({
      url: `/api/photos/${id}`,
      success: data => callback(null, data),
      error: (err) => {
        callback(err);
      },
    });
  },
};
