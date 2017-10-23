const { authenticate } = require('feathers-authentication').hooks;
const hooks = require('feathers-authentication-hooks');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [
      hooks.associateCurrentUser({ idField: '_id', as: 'owner' })
    ],
    update: [
      hooks.associateCurrentUser({ idField: '_id', as: 'owner' })
    ],
    patch: [
      hooks.associateCurrentUser({ idField: '_id', as: 'owner' })
    ],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
