const aboutDao = require('../../dao/aboutDaos/aboutDao');

const fetchAboutDetailsService = () => {
  return new Promise((resolve, reject) => {
    aboutDao.fetchAboutDetailsDao()
      .then(respone => {
        resolve(respone);
      })
      .catch(error => {
        reject(error);
      });
  });
}

const addAboutService = (about) => {
  return new Promise((resolve, reject) => {
    aboutDao.addAboutDao(about)
      .then(respone => {
        resolve(respone);
      })
      .catch(error => {
        reject(error);
      });
  });
}

module.exports = {
  fetchAboutDetailsService,
  addAboutService
}