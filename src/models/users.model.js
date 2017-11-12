// users-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const users = new mongooseClient.Schema({

    firstName: { type: String },
    lastName: { type: String },
    email: {type: String, unique: true},
    password: { type: String },
    roles: {
      type: [String],
      default: ['user'],
      set: function (value) {
        // Prevent admin registration
        const adminIndex = value.indexOf('admin');
        if(adminIndex > -1) {
          value.splice(adminIndex, 1);
        }
        return value;
      }
    },

    facebookId: { type: String },

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('users', users);
};
