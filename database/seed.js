const Navbar = require('./index.js');
const mongoose = require('mongoose');

const seed = [
  {
    // _id: 1,
    title: 'Riviera',
    version: 'Original Mix',
    artist: 'Kartell',
    genre: 'Indie Dance / Nu Disco',
    label: 'Roche Musique',
    released: '2012-05-21',
    key: 'A min',
    bpm: 122,
    length: 327
  }
];

const insertData = function() {
  Navbar.insertMany(seed)
    .then(() => {
      console.log('seeded');
      mongoose.connection.close();
    })
    .catch(err => console.error(err));
};

insertData();
