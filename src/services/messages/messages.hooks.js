const { authenticate } = require('feathers-authentication').hooks;
const hooks = require('feathers-authentication-hooks');
const commonHooks = require('feathers-hooks-common');

module.exports = {
  before: {
    all: [
      authenticate('jwt')
    ],
    find: [
      commonHooks.iff(
        commonHooks.some(
          () => {
            try {
              hooks.restrictToOwner({ idField: '_id', ownerField: 'from' });
              return true;
            } catch (e) {
              return false;
            }
          },
          () => {
            try {
              hooks.restrictToOwner({ idField: '_id', ownerField: 'to' });
              return true;
            } catch (e) {
              return false;
            }
          }
        )
      )
    ],
    get: [
      commonHooks.iff(
        commonHooks.some(
          () => {
            try {
              hooks.restrictToOwner({ idField: '_id', ownerField: 'from' });
              return true;
            } catch (e) {
              return false;
            }
          },
          () => {
            try {
              hooks.restrictToOwner({ idField: '_id', ownerField: 'to' });
              return true;
            } catch (e) {
              return false;
            }
          }
        )
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
