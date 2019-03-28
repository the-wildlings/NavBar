const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose
  .connect('mongodb://localhost/navbar')
  .then(() => console.log('DB CONNECTED'))
  .catch(err => console.error(err));

const navbarSchema = mongoose.Schema({
  title: String,
  version: String,
  artist: String,
  length: Number,
  released: String,
  genre: String,
  // BPM: Number,
  Key: String,
  Label: String,
  Remixers: String
});

const Navbar = mongoose.model('Navbar', navbarSchema);

module.exports = Navbar;
