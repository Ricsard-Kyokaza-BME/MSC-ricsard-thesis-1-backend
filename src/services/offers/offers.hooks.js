const { authenticate } = require('feathers-authentication').hooks;
const hooks = require('feathers-authentication-hooks');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [
      authenticate('jwt'),
      hooks.associateCurrentUser({ idField: '_id', as: 'owner' })
    ],
    update: [
      authenticate('jwt'),
      hooks.associateCurrentUser({ idField: '_id', as: 'owner' })
    ],
    patch: [
      authenticate('jwt'),
      hooks.associateCurrentUser({ idField: '_id', as: 'owner' })
    ],
    remove: [
      authenticate('jwt'),
      hooks.associateCurrentUser({ idField: '_id', as: 'owner' })
    ]
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
