// shoe-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const shoe = new Schema({
    name: {
      type: String,
      required: true
    },
    designer: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    rating: {
      type: Number
    },
    timestamp: {
      type: Date,
      default: Date.now
    }
  });

  return mongooseClient.model('shoe', shoe);
};
