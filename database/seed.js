const Navbar = require('./index.js');
const mongoose = require('mongoose');

const seed = [
  {
    id: 1,
    title: 'Riviera',
    version: 'Original Mix',
    artist: 'Kartell',
    album: 'Riviera',
    genre: 'Indie Dance / Nu Disco',
    label: 'Roche Musique',
    released: '2012-05-21',
    key: 'A min',
    bpm: 122,
    length: 327
  },
  {
    id: 2,
    title: 'Last Call',
    version: 'Original Mix',
    artist: 'Kartell',
    album: 'Sapphire',
    genre: 'Indie Dance / Nu Disco',
    label: 'Roche Musique',
    released: '2014-01-06',
    key: 'D min',
    bpm: 130,
    length: 176
  },
  {
    id: 3,
    title: 'Espoir',
    version: 'Original Mix',
    artist: 'Darius',
    album: 'Romance EP',
    genre: 'Indie Dance / Nu Disco',
    label: 'Roche Musique',
    released: '2014-02-24',
    key: 'E♭ min',
    bpm: 143,
    length: 242
  },
  {
    id: 4,
    title: 'Omeo',
    version: 'Original Mix',
    artist: 'Darius',
    album: 'Romance EP',
    genre: 'Indie Dance / Nu Disco',
    label: 'Roche Musique',
    released: '2014-02-24',
    key: 'D♭ maj',
    bpm: 112,
    length: 210
  },
  {
    id: 5,
    title: 'Vanyll',
    version: 'Original Mix',
    artist: 'Darius',
    album: 'Romance EP',
    genre: 'Indie Dance / Nu Disco',
    label: 'Roche Musique',
    released: '2014-02-24',
    key: 'A min',
    bpm: 110,
    length: 240
  },
  {
    id: 6,
    title: 'Hot Hands',
    version: 'Original Mix',
    artist: 'Darius',
    album: 'Romance EP',
    genre: 'Indie Dance / Nu Disco',
    label: 'Roche Musique',
    released: '2014-02-24',
    key: 'F min',
    bpm: 110,
    length: 253
  },
  {
    id: 7,
    title: 'S/ash',
    version: 'Original Mix',
    artist: 'Darius',
    album: 'Romance EP',
    genre: 'Indie Dance / Nu Disco',
    label: 'Roche Musique',
    released: '2014-02-24',
    key: 'E min',
    bpm: 107,
    length: 260
  },
  {
    id: 8,
    title: 'Amigo',
    version: 'Original Mix',
    artist: 'Bixel Boys',
    album: 'Amigo',
    genre: 'House',
    label: 'Dim Mak Records',
    released: '2015-08-03',
    key: 'D min',
    bpm: 137,
    length: 301
  },
  {
    id: 9,
    title: 'Thor',
    version: 'Explicit',
    artist: 'Gorgon City',
    album: 'Real EP',
    genre: 'Deep House',
    label: 'Black Butter Records',
    released: '2013-02-18',
    key: 'G maj',
    bpm: 127,
    length: 377
  },
  {
    id: 10,
    title: 'Afternoon',
    version: 'Original Mix',
    artist: 'Alexander Lewis',
    album: 'Afternoon',
    genre: 'Hip-Hop / R&B',
    label: 'Chill Nation',
    released: '2016-03-07',
    key: 'A min',
    bpm: 110,
    length: 145
  },
  {
    id: 11,
    title: 'Strangers',
    version: 'Original Mix',
    artist: 'Da-P',
    album: 'Speaker Knockerz',
    genre: 'Hip-Hop / R&B',
    label: 'Chill Nation',
    released: '2015-03-29',
    key: 'E min',
    bpm: 117,
    length: 193
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
