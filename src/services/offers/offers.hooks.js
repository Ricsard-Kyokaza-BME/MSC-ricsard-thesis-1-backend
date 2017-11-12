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
      hooks.restrictToOwner({ idField: '_id', ownerField: 'owner' })
    ],
    patch: [
      authenticate('jwt'),
      hooks.restrictToOwner({ idField: '_id', ownerField: 'owner' })
    ],
    remove: [
      authenticate('jwt'),
      hooks.restrictToOwner({ idField: '_id', ownerField: 'owner' })
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
