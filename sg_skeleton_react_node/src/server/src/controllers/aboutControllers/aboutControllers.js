const aboutService = require('../../service/aboutServices/aboutServices');

const fetchAboutDetailsController = (req, res) => {
  aboutService
    .fetchAboutDetailsService()
    .then(response => {
      res.json(response);
    })
    .catch(error => {
      res.json(error);
    });
};

const addAboutController = (req, res) => {
  const body = req.body;
  aboutService
    .addAboutService(body)
    .then(response => {
      res.json(response);
    })
    .catch(error => {
      res.json(error);
    });
};


module.exports = {
  fetchAboutDetailsController,
  addAboutController
};