// Initializes the `shoe` service on path `/shoes`
const createService = require('feathers-mongoose');
const createModel = require('../../models/shoe.model');
const hooks = require('./shoe.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/shoes', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('shoes');

  service.hooks(hooks);
};
