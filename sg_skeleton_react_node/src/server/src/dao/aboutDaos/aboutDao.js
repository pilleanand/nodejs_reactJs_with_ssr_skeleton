const About = require('../../models/about/about');

const fetchAboutDetailsDao = () => {
  return new Promise((resolve, reject) => {
    About.find({})
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
}

const addAboutDao = (aboutData) => {
  return new Promise((resolve, reject) => {
    const about = new About(aboutData);
    about.save(about)
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
}

module.exports = {
  fetchAboutDetailsDao,
  addAboutDao
}