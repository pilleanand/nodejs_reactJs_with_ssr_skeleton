const aboutControllers = require('../controllers/aboutControllers/aboutControllers')

module.exports.set = (router) => {
  router.get('/about', aboutControllers.fetchAboutDetailsController);
  router.post('/about', aboutControllers.addAboutController);
};
