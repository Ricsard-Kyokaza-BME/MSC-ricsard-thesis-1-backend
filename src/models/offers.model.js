// offers-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const offers = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    price: { type: String },
    categories: [{ type: Schema.Types.ObjectId, ref: 'categories' }],
    owner: { type: Schema.Types.ObjectId, ref: 'users' },
    images: { type: [String] },
    coordinates: { type: [Number], index: '2dsphere'},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('offers', offers);
};
