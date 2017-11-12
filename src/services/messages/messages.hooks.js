const { authenticate } = require('feathers-authentication').hooks;
const hooks = require('feathers-authentication-hooks');
const commonHooks = require('feathers-hooks-common');

module.exports = {
  before: {
    all: [
      authenticate('jwt')
    ],
    find: [
      commonHooks.some(
        hooks.restrictToOwner({ idField: '_id', ownerField: 'from' }),
        hooks.restrictToOwner({ idField: '_id', ownerField: 'to' })
      )
    ],
    get: [
      commonHooks.some(
        hooks.restrictToOwner({ idField: '_id', ownerField: 'from' }),
        hooks.restrictToOwner({ idField: '_id', ownerField: 'to' })
      )
    ],
    create: [
      hooks.associateCurrentUser({ idField: '_id', as: 'from' })
    ],
    update: [
      hooks.restrictToOwner({ idField: '_id', ownerField: 'from' })
    ],
    patch: [
      hooks.restrictToOwner({ idField: '_id', ownerField: 'from' })
    ],
    remove: [
      hooks.restrictToOwner({ idField: '_id', ownerField: 'from' })
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
