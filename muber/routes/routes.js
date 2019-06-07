const DriversController = require('../controllers/drivers_controller');

module.exports = (app) => {
  // Run this function whenever someone goes to
  // localhost:3050/
  app.get('/', DriversController.index);

  app.post('/api/drivers', DriversController.create);
};
