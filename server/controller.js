const Navbar = require('../database/index.js');

const controller = {
  get: (req, res) => {
    Navbar.find().then(data => res.status(200).send(data));
  },
  post: (req, res) => {
    res.status(201).send('POSTED');
  },
  delete: (req, res) => {
    res.status(203).send('DEL');
  },
  put: (req, res) => {
    res.status(202).send('UPDATED');
  }
};

module.exports = controller;
