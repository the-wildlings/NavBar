const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose
  .connect('mongodb://localhost/navbar', { useNewUrlParser: true })
  .then(() => console.log('DB CONNECTED'))
  .catch(err => console.error(err));

const navbarSchema = mongoose.Schema({
  id: { type: Number, unique: true },
  title: String,
  version: String,
  artist: String,
  album: String,
  length: Number,
  released: String,
  genre: String,
  // BPM: Number,
  key: String,
  label: String,
  remixers: String
});

const Navbar = mongoose.model('Navbar', navbarSchema);

module.exports = Navbar;
