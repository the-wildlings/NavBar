const Navbar = require('./index.js');
const mongoose = require('mongoose');

const seed = [
  {
    id: 1,
    title: 'Riviera',
    version: 'Original Mix',
    artist: 'Kartell',
    album: 'Riviera',
    remixers: null,
    genre: 'Indie Dance / Nu Disco',
    label: 'Roche Musique',
    released: '2012-05-21',
    key: 'A min',
    bpm: 122,
    length: 327,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Riviera-Kartell.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Riviera-Kartell.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/04+Riviera.m4a'
  },
  {
    id: 2,
    title: 'Last Call',
    version: 'Original Mix',
    artist: 'Kartell',
    album: 'Sapphire',
    remixers: null,
    genre: 'Indie Dance / Nu Disco',
    label: 'Roche Musique',
    released: '2014-01-06',
    key: 'D min',
    bpm: 130,
    length: 176,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Sapphire-Kartell.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Last_Call-Kartell.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/07+Last+Call.m4a'
  },
  {
    id: 3,
    title: 'Espoir',
    version: 'Original Mix',
    artist: 'Darius',
    album: 'Romance EP',
    remixers: null,
    genre: 'Indie Dance / Nu Disco',
    label: 'Roche Musique',
    released: '2014-02-24',
    key: 'E♭ min',
    bpm: 143,
    length: 242,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Romance_EP-Darius.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Espoir-Darius.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/01+Espoir.m4a'
  },
  {
    id: 4,
    title: 'Omeo',
    version: 'Original Mix',
    artist: 'Darius',
    album: 'Romance EP',
    remixers: null,
    genre: 'Indie Dance / Nu Disco',
    label: 'Roche Musique',
    released: '2014-02-24',
    key: 'D♭ maj',
    bpm: 112,
    length: 210,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Romance_EP-Darius.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Omeo-Darius.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/03+Omeo.m4a'
  },
  {
    id: 5,
    title: 'Vanyll',
    version: 'Original Mix',
    artist: 'Darius',
    album: 'Romance EP',
    remixers: null,
    genre: 'Indie Dance / Nu Disco',
    label: 'Roche Musique',
    released: '2014-02-24',
    key: 'A min',
    bpm: 110,
    length: 240,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Romance_EP-Darius.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Vanyll-Darius.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/05+Vanyll.m4a'
  },
  {
    id: 6,
    title: 'Hot Hands',
    version: 'Original Mix',
    artist: 'Darius',
    album: 'Romance EP',
    remixers: null,
    genre: 'Indie Dance / Nu Disco',
    label: 'Roche Musique',
    released: '2014-02-24',
    key: 'F min',
    bpm: 110,
    length: 253,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Romance_EP-Darius.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Hot_Hands-Darius.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/02+Hot+Hands.m4a'
  },
  {
    id: 7,
    title: 'S/ash',
    version: 'Original Mix',
    artist: 'Darius',
    album: 'Romance EP',
    remixers: null,
    genre: 'Indie Dance / Nu Disco',
    label: 'Roche Musique',
    released: '2014-02-24',
    key: 'E min',
    bpm: 107,
    length: 260,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Romance_EP-Darius.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/S%3Aash-Darius.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/04+S_Ash.m4a'
  },
  {
    id: 8,
    title: 'Amigo',
    version: 'Original Mix',
    artist: 'Bixel Boys',
    album: 'Amigo',
    remixers: null,
    genre: 'House',
    label: 'Dim Mak Records',
    released: '2015-08-03',
    key: 'D min',
    bpm: 137,
    length: 301,
    price: 1.99,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Amigo-Bixel_Boys.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Amigo-Bixel_Boys.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/Amigo.mp3'
  },
  {
    id: 9,
    title: 'Thor',
    version: 'Explicit',
    artist: 'Gorgon City',
    album: 'Real EP',
    remixers: null,
    genre: 'Deep House',
    label: 'Black Butter Records',
    released: '2013-02-18',
    key: 'G maj',
    bpm: 127,
    length: 377,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Real_EP-Gorgon_City.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Thor-Gorgon_City.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/Thor.mp3'
  },
  {
    id: 10,
    title: 'Afternoon',
    version: 'Original Mix',
    artist: 'Alexander Lewis',
    album: 'Afternoon',
    remixers: null,
    genre: 'Hip-Hop / R&B',
    label: 'Chill Nation',
    released: '2016-03-07',
    key: 'A min',
    bpm: 110,
    length: 145,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Afternoon-Alexander_Lewis.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Afternoon-Alexander_Lewis.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/Afternoon.mp3'
  },
  {
    id: 11,
    title: 'Strangers',
    version: 'Original Mix',
    artist: 'Da-P',
    album: 'Speaker Knockerz',
    remixers: null,
    genre: 'Hip-Hop / R&B',
    label: 'Chill Nation',
    released: '2015-03-29',
    key: 'E min',
    bpm: 117,
    length: 193,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Strangers-Da-P.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Strangers-Da-P.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/Strangers.mp3'
  },
  {
    id: 12,
    title: 'I Realize',
    version: 'Original Mix',
    artist: 'Cézaire',
    album: 'Seize The Day',
    remixers: null,
    genre: 'Indie Dance / Nu Disco',
    label: 'Roche Musique',
    released: '2017-06-10',
    key: 'A min',
    bpm: 71,
    length: 170,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/I_Realize-Cezaire.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/I_Realize-Ce%CC%81zaire.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/I+Realize.mp3'
  },
  {
    id: 13,
    title: "Don't Matter feat. Arianna Everett",
    version: 'Original Mix',
    artist: 'Cherokee',
    album: "Don't Matter",
    remixers: null,
    genre: 'Electronica / Downtempo',
    label: 'Roche Musique',
    released: '2016-07-28',
    key: 'A min',
    bpm: 109,
    length: 308,
    price: 1.49,
    albumArt:
      "https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Don't_Matter-Cherokee.jpg",
    waveform:
      "https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Don't_Matter_Cherokee.svg",
    mp3:
      "https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/01+Don't+Matter+(feat.+Darianna+Everett).m4a"
  },
  {
    id: 14,
    title: 'Get You Off',
    version: 'Mark Lower Remix',
    artist: 'Croatia Squad',
    album: 'Work It',
    remixers: 'Mark Lower',
    genre: 'Dance',
    label: 'Le Mans Recordings',
    released: '2015-12-24',
    key: 'D♭ maj',
    bpm: 120,
    length: 289,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Get_You_Off_Mark_Lower_Remix-Croatia_Squad.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Get_You_Off_Mark_Lower_Remix-Croatia_Squad.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/03+Get+You+Off+(Mark+Lower+Remix).m4a'
  },
  {
    id: 15,
    title: 'Electric',
    version: 'Electric Mantis Remix',
    artist: 'Alina Baraz feat. Khalid',
    album: 'Clarity',
    remixers: null,
    genre: 'Future Bass',
    label: 'Majestic Casual Records',
    released: '2018-03-07',
    key: 'F min',
    bpm: 137,
    length: 233,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Electric_ft._Alina_Baraz-Electric_Mantis.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Electric_ft._Alina_Baraz-Electric_Mantis.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/Alina+Baraz+ft.+Khalid+-+Electric+(Electric+Mantis+Remix).mp3'
  },
  {
    id: 16,
    title: 'Daybreak',
    version: 'Original Mix',
    artist: 'Electric Mantis',
    album: 'Clarity',
    remixers: null,
    genre: 'Future Bass',
    label: 'Majestic Casual Records',
    released: '2018-05-23',
    key: 'D min',
    bpm: 142,
    length: 181,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Daybreak-Electric_Mantis.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Daybreak-Electric_Mantis.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/Daybreak.mp3'
  },
  {
    id: 17,
    title: 'Losing My Way',
    version: 'Original Mix',
    artist: 'FKJ & Tom Misch',
    album: 'Red Bull Studio Sessions',
    remixers: null,
    genre: 'Indie Dance / Nu Disco',
    label: 'Roche Musique',
    released: '2017-03-21',
    key: 'A min',
    bpm: 110,
    length: 259,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Losing_My_Way-FKJ_%26_Tom_Misch.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Losing_My_Way-FKJ_%26_Tom_Mischsvg.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/Losing+My+Way.mp3'
  },
  {
    id: 18,
    title: 'The Unknown feat. Ayelle',
    version: 'Original Mix',
    artist: 'ford. x Hanz',
    album: 'Lush',
    remixers: null,
    genre: 'Electronica / Downtempo',
    label: 'thissongissick',
    released: '2016-05-15',
    key: 'E min',
    bpm: 107,
    length: 212,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/The_Unknown-ford_x_hanz.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/The_Unknown-ford_x_hanz.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/the+unknown+(feat.+ayelle).mp3'
  },
  {
    id: 19,
    title: '23 feat. Tymer',
    version: 'Zinc VIP',
    artist: 'Shadow Child',
    album: 23,
    remixers: 'Zinc',
    genre: 'Tech House',
    label: 'Food Music',
    released: '2013-06-23',
    key: 'C min',
    bpm: 124,
    length: 189,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/23_Zinc_VIP-Shadow_Child.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/23_Zinc_VIP-Shadow_Child.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/23+Zinc+VIP.mp3'
  },
  {
    id: 20,
    title: 'Gooey',
    version: 'Wild Culture Remix',
    artist: 'Glass Animals',
    album: 'Crown',
    remixers: 'Wild Culture',
    genre: 'Dance',
    label: 'Opus Label, LLC',
    released: '2014-11-11',
    key: 'B min',
    bpm: 110,
    length: 384,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Gooey_Wild_Culture_Remix-Glass_Animals.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Gooey_Wild_Culture_Remix-Glass_Animals.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/Gooey+(Wild+Culture+Remix).mp3'
  },
  {
    id: 21,
    title: 'NUMB feat. GRAACE',
    version: 'Original Mix',
    artist: 'Hayden James',
    album: 'NUMB',
    remixers: null,
    genre: 'Dance',
    label: 'Virgin EMI',
    released: '2018-11-17',
    key: 'D min',
    bpm: 120,
    length: 217,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Numb-Hayden_James.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/NUMB-Hayden_James.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/NUMB+feat+GRAACE.mp3'
  },
  {
    id: 22,
    title: 'All I See',
    version: 'Original Mix',
    artist: 'JackLNDN',
    album: 'All I See',
    remixers: null,
    genre: 'House',
    label: 'Ultra',
    released: '2015-07-24',
    key: 'C min',
    bpm: 117,
    length: 301,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/All_I_See-JackLNDN.jpeg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/All_I_See-JackLNDN.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/All+I+See+(Original+Mix).mp3'
  },
  {
    id: 23,
    title: 'Mine',
    version: 'Jengi Remix',
    artist: 'Bazzi',
    album: 'Mine',
    remixers: null,
    genre: 'House',
    label: 'Cosmic',
    released: '2018-09-17',
    key: 'G maj',
    bpm: 121,
    length: 190,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Mine_Jengi_Remix-Bazzi.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Mine_Jengi_Remix-Bazzi.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/Bazzi+-+Mine+(Jengi+Remix).mp3'
  },
  {
    id: 24,
    title: 'High',
    version: 'Wantigga Remix',
    artist: 'Jengi',
    album: 'High',
    remixers: 'Wantigga',
    genre: 'Hip-Hop / R&B',
    label: 'Roche Musique',
    released: '2017-05-23',
    key: 'E min',
    bpm: 107,
    length: 222,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/High_Wantigga_Remix-Jengi.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/High_Wantigga_Remix-Jengi.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/High+Wantigga+Remix.mp3'
  },
  {
    id: 25,
    title: 'At Dawn',
    version: 'Original Mix',
    artist: 'Joe Hertz',
    album: 'How It Feels EP',
    remixers: null,
    genre: 'Electronica / Downtempo',
    label: 'Platoon',
    released: '2016-09-23',
    key: 'A maj',
    bpm: 160,
    length: 248,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/At_Dawn-Joe_Hertz.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/At_Dawn-Joe_Hertz.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/At+Dawn.mp3'
  },
  {
    id: 26,
    title: 'XXX 88',
    version: 'Joe Hertz Remix',
    artist: 'MØ feat. Diplo',
    album: 'Perez Hilton',
    remixers: 'Joe Hertz',
    genre: 'Dance',
    label: 'Opus Label, LLC',
    released: '2014-06-24',
    key: 'A min',
    bpm: 88,
    length: 247,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/XXX88_Joe_Hertz_Remix-Diplo.jpeg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/XXX88_Joe_Hertz_Remix-Diplo.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/M%C3%98+feat.+Diplo+-+XXX88+(Joe+Hertz+Remix).mp3'
  },
  {
    id: 27,
    title: 'Tight feat. Madge',
    version: 'Original Mix',
    artist: 'Kaskade',
    album: 'Tight',
    remixers: null,
    genre: 'House',
    label: 'Arkade',
    released: '2018-10-12',
    key: 'E maj',
    bpm: 124,
    length: 188,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Tight-Kaskade.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Tight-Kaskade.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/01+Tight+(feat.+Madge).m4a'
  },
  {
    id: 28,
    title: 'Scriptina',
    version: 'Original Mix',
    artist: 'Losco',
    album: 'Wolf',
    remixers: null,
    genre: 'Electronica / Downtempo',
    label: 'Trapdoor Records',
    released: '2015-07-13',
    key: 'E min',
    bpm: 120,
    length: 165,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Scriptina-Losco.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Scriptina-Losco.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/Scriptina.mp3'
  },
  {
    id: 29,
    title: 'Your Love',
    version: 'Original Club Mix',
    artist: 'Mark Knight',
    album: 'Your Love',
    remixers: null,
    genre: 'House',
    label: 'Toolroom',
    released: '2013-04-22',
    key: 'E♭ min',
    bpm: 125,
    length: 400,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Your_Love-Mark_Knight.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Your_Love-Mark_Knight.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/01+Your+Love+(Original+Club+Mix).mp3'
  },
  {
    id: 30,
    title: 'Flares feat. Crayon',
    version: 'Original Mix',
    artist: 'Kartell',
    album: 'Last Glow',
    remixers: null,
    genre: 'Electronica / Downtempo',
    label: 'Roche Musique',
    released: '2016-11-18',
    key: 'E♭ maj',
    bpm: 140,
    length: 192,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Flares_ft_Crayon-Kartell.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Flares_ft_Crayon-Kartell.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/Flares+ft+Crayon.mp3'
  },
  {
    id: 31,
    title: 'After The Storm',
    version: 'Kartell Remix',
    artist: 'Kali Uchis',
    album: 'After The Storm',
    remixers: 'Kartell',
    genre: 'Electronica / Downtempo',
    label: 'Roche Musique',
    released: '2017-12-05',
    key: 'D min',
    bpm: 125,
    length: 186,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/After_The_Storm-Kartell.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/After_The_Storm-Kartell.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/Kali+Uchis+-+After+The+Storm+(Kartell+Edit).mp3'
  },
  {
    id: 32,
    title: 'Us',
    version: 'The Geek x VRV Remix',
    artist: 'Kaskade',
    album: 'Kaskade & CID Remixes',
    remixers: 'The Geek x Vrv',
    genre: 'Electronica / Downtempo',
    label: 'Warner Bros. Records/Arkade',
    released: '2016-03-11',
    key: 'B min',
    bpm: 85,
    length: 232,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Us_The_VRV_Remix-Kaskade.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Us_The_VRV_Remix-Kaskade.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/Us+The+Geek+x+Vrv+Remix.mp3'
  },
  {
    id: 33,
    title: "Can't Get Over You",
    version: 'Original Mix',
    artist: 'KINGDM',
    album: 'Majestic Chapter 3',
    remixers: null,
    genre: 'Electronica / Downtempo',
    label: 'Majestic Casual Records',
    released: '2016-07-01',
    key: 'E min',
    bpm: 115,
    length: 196,
    price: 1.49,
    albumArt:
      "https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Can't_Get_Over_You-KINGDM.jpg",
    waveform:
      "https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Can't_Get_Over_You-KINGDM.svg",
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/Cant+Get+Over+You.mp3'
  },
  {
    id: 34,
    title: 'Hollow',
    version: 'Les Loups Remix',
    artist: 'Knight One',
    album: 'Swords Cry: The Remixes',
    remixers: '',
    genre: 'Dance',
    label: 'Kissed',
    released: '2014-09-12',
    key: 'E min',
    bpm: 120,
    length: 300,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Hollow-Les_Loups.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Hollow-Les_Loups.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/02+Hollow+(Les+Loups+Remix).mp3'
  },
  {
    id: 35,
    title: 'All Of My Love',
    version: 'Original Mix',
    artist: 'KOA',
    album: 'Eton Messy Compilation',
    remixers: null,
    genre: 'Dance',
    label: 'Eton Messy Records',
    released: '2017-06-30',
    key: 'B min',
    bpm: 127,
    length: 276,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/All_Of_My_Love-KOA.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/All_Of_My_Love-KOA.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/All+Of+My+Love.mp3'
  },
  {
    id: 36,
    title: 'Mountain Top',
    version: 'Original Mix',
    artist: 'Kraak & Smaakl',
    album: "SPINNIN' DEEP",
    remixers: null,
    genre: "Funky / Groove / Jackin' House",
    label: "SPINNIN' DEEP",
    released: '2014-08-11',
    key: 'E♭ min',
    bpm: 122,
    length: 263,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Mountain_Top-Kraak_%26_Smaak.jpeg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Mountain_Top-Kraak_%26_Smaak.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/Mountain+Top+(Original+Mix).mp3'
  },
  {
    id: 37,
    title: 'Chasing Time',
    version: 'Le Flex Remix',
    artist: 'Azealia Banks',
    album: 'Chasing Time Le Flex Remix',
    remixers: 'Le Flex',
    genre: 'Indie Dance / Nu Disco',
    label: 'Le Flex Music',
    released: '2014-11-26',
    key: 'E♭ min',
    bpm: 122,
    length: 326,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Chasing_Time-Le_Flex.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Chasing_Time-Le_Flex.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/Azealia+Banks+-+Chasing+Time.mp3'
  },
  {
    id: 38,
    title: 'Unstoppable',
    version: 'FKJ Remix',
    artist: 'Lianne La Havas',
    album: 'Unstoppable FKJ Remix',
    remixers: 'FKJ',
    genre: 'Alternative',
    label: 'Warner Music Group Company',
    released: '2015-07-05',
    key: 'B min',
    bpm: 122,
    length: 316,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Unstoppable-FKJ.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Unstoppable-FKJ.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/01+Unstoppable+(FKJ+Remix).m4a'
  },
  {
    id: 39,
    title: 'Green & Gold',
    version: 'Darius Remix',
    artist: 'Lianne La Havas',
    album: 'Green & Gold Remix',
    remixers: 'Darius',
    genre: 'Indie Dance / Nu Disco',
    label: 'Dim Mak Records',
    released: '2015-10-06',
    key: 'A min',
    bpm: 122,
    length: 241,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Green_%26_Gold-Darius.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Green_%26_Gold-Darius.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/Green+%26+Gold+(Darius+Remix).mp3'
  },
  {
    id: 40,
    title: 'Marble',
    version: 'Original Mix',
    artist: 'Me & My Toothbrush',
    album: 'Show Me',
    remixers: null,
    genre: 'Dance',
    label: 'Enormous Tunes',
    released: '2015-03-09',
    key: 'E♭ min',
    bpm: 120,
    length: 326,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Marble-Me_%26_My_Toothbrush.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Marble-Me_%26_My_Toothbrush.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/Marble+(Original+Mix).mp3'
  },
  {
    id: 41,
    title: 'Lightyears',
    version: 'Original Mix',
    artist: 'Michael Davis',
    album: 'Do You Believe',
    remixers: null,
    genre: 'Electronica / Downtempo',
    label: 'Michael Davis',
    released: '2016-01-06',
    key: 'A min',
    bpm: 120,
    length: 217,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Lightyears-Michael_Davis.jpeg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Lightyears-Michael_Davis.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/Lightyears.mp3'
  },
  {
    id: 42,
    title: 'Comfortable feat. HIGH HØØPS',
    version: 'Original Mix',
    artist: 'Moods',
    album: 'Chill 2018',
    remixers: null,
    genre: 'Electronica / Downtempo',
    label: 'Armada Music Bundles',
    released: '2018-05-25',
    key: 'E min',
    bpm: 164,
    length: 217,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Comfortable-Moods.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Comfortable-Moods.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/Comfortable+(feat.+HIGH+H%C3%98%C3%98PS).mp3'
  },
  {
    id: 43,
    title: 'Slip Away',
    version: 'Original Mix',
    artist: 'Niko The Kid',
    album: 'Heldeep Talent EP Part 1',
    remixers: null,
    genre: 'Future House',
    label: 'Heldeep Records',
    released: '2015-12-04',
    key: 'D♭ min',
    bpm: 124,
    length: 204,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Slip_Away-Niko_The_Kid.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Slip_Away-Niko_The_Kid.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/Slip+Away.mp3'
  },
  {
    id: 44,
    title: 'Peanut Butter',
    version: 'Moon Boots',
    artist: 'Alison Valentine',
    album: 'Peanut Butter Remix',
    remixers: null,
    genre: 'Indie Dance / Nu Disco',
    label: 'Alison Valentine',
    released: '2012-08-31',
    key: 'A min',
    bpm: 126,
    length: 312,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Peanut_Butter-Moon_Boots.jpeg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Peanut_Butter-Moon_Boots.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/Alison+Valentine+-+Peanut+Butter+(Moon+Boots+Remix).mp3'
  },
  {
    id: 45,
    title: 'I Want Your Attention feat. Fiora',
    version: 'Original Mix',
    artist: 'Moon Boots',
    album: 'The Yearbook 2017',
    remixers: null,
    genre: 'Deep House',
    label: 'French Express',
    released: '2017-12-05',
    key: 'A maj',
    bpm: 122,
    length: 319,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/I_Want_Your_Attention-Moon_Boots.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/I_Want_Your_Attention-Moon_Boots.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/I+Want+Your+Attention+Feat+Fiora.mp3'
  },
  {
    id: 46,
    title: 'Love Strong',
    version: 'Original Mix',
    artist: 'Moon Boots',
    album: 'Love Strong',
    remixers: null,
    genre: 'Deep House',
    label: 'French Express',
    released: '2013-12-05',
    key: 'E min',
    bpm: 122,
    length: 309,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Love_Strong-Moon_Boots.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Love_Strong-Moon_Boots.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/Love+Strong.mp3'
  },
  {
    id: 47,
    title: 'Red Sky',
    version: 'Original Mix',
    artist: 'Moon Boots',
    album: 'Red Sky',
    remixers: null,
    genre: 'Deep House',
    label: 'Anjunadeep',
    released: '2015-10-16',
    key: 'D maj',
    bpm: 120,
    length: 377,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Red_Sky-Moon_Boots.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Red_Sky-Moon_Boots.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/Red+Sky+(Original+Mix).mp3'
  },
  {
    id: 48,
    title: 'Wasting My Time',
    version: 'Original Mix',
    artist: 'Niko The Kid',
    album: 'Wasting My Time',
    remixers: null,
    genre: 'Future House',
    label: 'Repost Network',
    released: '2016-12-16',
    key: 'B min',
    bpm: 125,
    length: 238,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Wasting_My_Time-Niko_The_Kid.jpeg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Wasting_My_Time-Niko_the_Kid.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/Wasting+My+Time.mp3'
  },
  {
    id: 49,
    title: 'I Got To Do',
    version: 'Original Mix',
    artist: 'Nora En Pure',
    album: 'Hedkandi Ibiza',
    remixers: null,
    genre: 'Dance',
    label: 'Ministry of Sound Recordings',
    released: '2016-03-04',
    key: 'B min',
    bpm: 123,
    length: 270,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/I_Got_To_Do-Nora_En_Pure.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/I_Got_To_Do-Nora_En_Pure.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/I+Got+To+Do+(Original+Mix).mp3'
  },
  {
    id: 50,
    title: 'Pushing On',
    version: 'Tchami Remix',
    artist: 'Oliver $ & Jimi Jules',
    album: 'DFT D42 9D',
    remixers: null,
    genre: 'Deep House',
    label: 'Defected',
    released: '2014-03-24',
    key: 'B min',
    bpm: 122,
    length: 295,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Pushing_On-Tchami.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Pushing_On-Tchami.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/01+Pushing+On+(Tchami+Remix).mp3'
  },
  {
    id: 51,
    title: 'You & Me',
    version: 'Original Mix',
    artist: 'Oxford',
    album: 'You & Me',
    remixers: null,
    genre: 'Indie Dance / Nu Disco',
    label: 'Oxford',
    released: '2013-11-24',
    key: 'B min',
    bpm: 122,
    length: 338,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/You_%26_Me-Oxford.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/You_%26_Me-Oxford.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/You+%26+Me+(Remastered+Version).mp3'
  },
  {
    id: 52,
    title: 'What A Feeling',
    version: 'Original Mix',
    artist: 'Calippo',
    album: 'Passenger 10 - What A Feeling',
    remixers: null,
    genre: 'Future House',
    label: 'Enormous Tunes',
    released: '2013-10-07',
    key: 'B♭ min',
    bpm: 123,
    length: 384,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/What_A_Feeling-Calippo.jpeg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/What_A_Feeling-Calippo.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/03+What+a+Feeling+(Calippo+Remix).m4a'
  },
  {
    id: 53,
    title: 'Gravity',
    version: 'Original Mix',
    artist: 'Pastel',
    album: 'Headroom',
    remixers: null,
    genre: 'Electronica / Downtempo',
    label: 'Pastel FR',
    released: '2017-09-10',
    key: 'A maj',
    bpm: 124,
    length: 275,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Gravity-Pastel.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Gravity-Pastel.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/Gravity.mp3'
  },
  {
    id: 54,
    title: 'Crystal Ball VIP',
    version: 'Original Mix',
    artist: 'Pat Lok',
    album: 'Crystal Ball VIP',
    remixers: null,
    genre: 'Dance',
    label: 'Kitsune',
    released: '2017-09-14',
    key: 'F maj',
    bpm: 123,
    length: 285,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Crystal_Ball_VIP-Pat_Lok.jpeg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Crystal_Ball_VIP-Pat_Lok.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/Crystal+Ball+VIP+ft+Claire+Ridgely.mp3'
  },
  {
    id: 55,
    title: 'Commitment',
    version: 'Calippo Remix',
    artist: 'Paul Richmond',
    album: 'Commitment',
    remixers: null,
    genre: 'Dance',
    label: 'Enormous Tunes',
    released: '2014-09-22',
    key: 'F min',
    bpm: 119,
    length: 383,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Commitment-Calippo.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Commitment-Calippo.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/Commitment+(Calippo+Remix).mp3'
  },
  {
    id: 56,
    title: 'Elliot',
    version: 'Original Mix',
    artist: 'Roosevelt',
    album: 'Elliot - EP',
    remixers: null,
    genre: 'Indie Dance / Nu Disco',
    label: 'Greco-Roman',
    released: '2013-08-19',
    key: 'D maj',
    bpm: 122,
    length: 261,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Elliot-Roosevelt.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Elliot-Roosevelt.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/16+Elliot.m4a'
  },
  {
    id: 57,
    title: 'You Were Right',
    version: 'Original Mix',
    artist: 'Rufus Du Sol',
    album: 'Rufus',
    remixers: null,
    genre: 'Electronica / Downtempo',
    label: 'Sweat It Out',
    released: '2016-01-22',
    key: 'A♭ maj',
    bpm: 122,
    length: 239,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/You_Were_Right-Rufus_Du_Sol.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/You_Were_Right-Rufus_Du_Sol.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/01+You+Were+Right.mp3'
  },
  {
    id: 58,
    title: 'Closure',
    version: 'Original Mix',
    artist: 'Sam Feldt',
    album: 'Sunrise to Sunset',
    remixers: null,
    genre: 'Dance',
    label: "SPINNIN' DEEP",
    released: '2017-11-24',
    key: 'C maj',
    bpm: 93,
    length: 397,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Closure-Sam_Feldt.jpeg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Closure-Sam_Feldt.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/01+Closure+(Original+Mix).mp3'
  },
  {
    id: 59,
    title: 'Hot Skin',
    version: 'Original Mix',
    artist: 'Sam Feldt',
    album: 'Sam Feldt',
    remixers: null,
    genre: 'Dance',
    label: "SPINNIN' DEEP",
    released: '2014-10-27',
    key: 'C maj',
    bpm: 120,
    length: 272,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Hot_Skin-Sam_Feldt.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Hot_Skin-Sam_Feldt.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/01+Hot+Skin.m4a'
  },
  {
    id: 60,
    title: 'Waiting So Long',
    version: 'Original Mix',
    artist: 'Sam Gelliatry',
    album: 'Powered by Inspected',
    remixers: null,
    genre: 'Indie Dance / Nu Disco',
    label: 'Sam Gelliatry',
    released: '2014-10-05',
    key: 'C maj',
    bpm: 120,
    length: 191,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Waiting_So_Long-Sam_Gellaitry.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Waiting_So_Long-Sam_Gellaitry.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/Waiting+So+Long.mp3'
  },
  {
    id: 61,
    title: 'Only You',
    version: 'Original Mix',
    artist: 'Satin Jackets',
    album: '5 Years of D&D Part 1',
    remixers: null,
    genre: 'Indie Dance / Nu Disco',
    label: 'Eskimo Recordings',
    released: '2014-10-05',
    key: 'C maj',
    bpm: 120,
    length: 413,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Only_You-Satin_Jackets.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Only_You-Satin_Jackets.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/Only+You.mp3'
  },
  {
    id: 62,
    title: 'Shine On You feat. Esser',
    version: 'Original Mix',
    artist: 'Satin Jackets',
    album: 'Shine On You',
    remixers: null,
    genre: 'Indie Dance / Nu Disco',
    label: 'Eskimo Recordings',
    released: '2016-12-12',
    key: 'D maj',
    bpm: 120,
    length: 336,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Shine_On_You-Satin_Jackets.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Shine_On_You-Satin_Jackets.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/Shine+On+You+feat.+Esser+(Original+Mix).mp3'
  },
  {
    id: 63,
    title: 'What Can I Do',
    version: 'Original Mix',
    artist: 'Secondcity',
    album: 'What Can I Do',
    remixers: null,
    genre: 'Deep House',
    label: 'Ministry of Sound Recordings',
    released: '2014-08-09',
    key: 'E min',
    bpm: 120,
    length: 368,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/What_Can_I_Do-Secondcity.jpeg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/What_Can_I_Do-Secondcity.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/What+Can+I+Do+(Original+Mix).mp3'
  },
  {
    id: 64,
    title: 'Hurting feat. AlunaGeorge',
    version: 'Original Mix',
    artist: 'SG Lewis',
    album: 'Hurting',
    remixers: null,
    genre: 'Electronica / Downtempo',
    label: 'Jasmine Music',
    released: '2018-08-18',
    key: 'G maj',
    bpm: 120,
    length: 185,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Hurting-SG_Lewis.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Hurting-SG_Lewis.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/04+Hurting+(feat.+AlunaGeorge).m4a'
  },
  {
    id: 65,
    title: 'Aura feat. J Warner',
    version: 'Original Mix',
    artist: 'SG Lewis',
    album: 'Dusk',
    remixers: null,
    genre: 'Electronica / Downtempo',
    label: 'Jasmine Music',
    released: '2018-12-12',
    key: 'B min',
    bpm: 120,
    length: 231,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Aura-SG_Lewis.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Aura-SG_Lewis.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/Aura+ft.+J+Warner.mp3'
  },
  {
    id: 66,
    title: 'I Want You',
    version: 'Original Mix',
    artist: 'Shermanology',
    album: 'I Want You',
    remixers: null,
    genre: 'House',
    label: 'Work Records',
    released: '2015-02-02',
    key: 'D♭ min',
    bpm: 120,
    length: 284,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/I_Want_You-Shermanology.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/I_Want_You-Shermanology.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/01+I+Want+You+(Original+Mix)+%5BFDM%5D.mp3'
  },
  {
    id: 67,
    title: 'Na Na',
    version: 'STWO Remix',
    artist: 'Trey Songz',
    album: 'Trey Songz Remixes',
    remixers: 'STWO',
    genre: 'Funk / Soul / Disco',
    label: 'Atlantic Records',
    released: '2014-05-19',
    key: 'F maj',
    bpm: 95,
    length: 225,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Na_Na_STWO_Remix-Trey_Songz.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Na_Na_STWO_Remix-Trey_Songz.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/04+Na+Na+(STWO+Remix).mp3'
  },
  {
    id: 68,
    title: 'OKAY',
    version: 'Dave Winnel Remix',
    artist: 'Shiba San',
    album: 'Shiba San Okay Dave Winnel Mix',
    remixers: 'Dave Winnel',
    genre: 'Electronica / Downtempo',
    label: 'Dirtybird Records',
    released: '2015-09-09',
    key: 'A min',
    bpm: 120,
    length: 240,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/OKAY_Dave_Winnel_Remix-Shiba_San.jpeg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/OKAY_Dave_Winnel_Remix-Shiba_San.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/OKAY+(Dave+Winnel+Mix).mp3'
  },
  {
    id: 69,
    title: 'Hope',
    version: 'Nora En Pure Remix',
    artist: 'Sir Felix',
    album: 'Sir Felix Hope Nora En Pure Remix',
    remixers: 'Nora En Pure',
    genre: 'Dance',
    label: 'Indiana Tones',
    released: '2014-06-20',
    key: 'A min',
    bpm: 120,
    length: 449,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Hope_Nora_En_Pure_Remix-Sir_Felix.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Hope_Nora_En_Pure_Remix-Sir_Felix.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/01+Hope+(Nora+en+Pure+Remix).m4a'
  },
  {
    id: 70,
    title: 'Do It',
    version: 'Smok Remix',
    artist: 'Jupiter',
    album: 'Jupiter',
    remixers: 'Smok Remix',
    genre: 'Indie Dance / Nu Disco',
    label: 'Grand Blanc',
    released: '2015-12-11',
    key: 'B♭ maj',
    bpm: 120,
    length: 325,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Do_It_Jupiter_Remix-Smok.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Do_It_Jupiter_Remix-Smok.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/Jupiter+-+Do+It.mp3'
  },
  {
    id: 71,
    title: 'Skeleton',
    version: 'Original Mix',
    artist: 'Tails & Inverness',
    album: 'Skeleton',
    remixers: null,
    genre: 'Dance',
    label: 'Parametric',
    released: '2018-10-19',
    key: 'D min',
    bpm: 88,
    length: 187,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Skeleton-Tails_%26_Inverness.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Skeleton-Tails_%26_Inverness.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/Skeleton+feat+Nevve.mp3'
  },
  {
    id: 72,
    title: 'On & On',
    version: 'Snakehips Edit',
    artist: 'Snakehips',
    album: 'On & On',
    remixers: null,
    genre: 'Hip Hop / R&B',
    label: 'Columbia',
    released: '2017-11-20',
    key: 'C maj',
    bpm: 113,
    length: 206,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/On_%26_On-Snakehips.jpeg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/On_%26_On-Snakehips.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/On+%26+On+(Snakehips+Edit).mp3'
  },
  {
    id: 73,
    title: 'Adieu',
    version: 'Original Mix',
    artist: 'Tchami',
    album: 'Revelations EP',
    remixers: null,
    genre: 'Future House',
    label: 'Confession',
    released: '2017-08-25',
    key: 'B min',
    bpm: 126,
    length: 413,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Adieu-Tchami.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Adieu-Tchami.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/Adieu.mp3'
  },
  {
    id: 74,
    title: "Don't",
    version: 'Original Mix',
    artist: 'Walker x Montis',
    album: "Don't",
    remixers: null,
    genre: 'House',
    label: 'Defected',
    released: '2016-03-21',
    key: 'C maj',
    bpm: 125,
    length: 238,
    price: 1.49,
    albumArt:
      "https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Don't-Walker_x_Montis.jpg",
    waveform:
      "https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Don't-Walker_x_Montis.svg",
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/Dont.mp3'
  },
  {
    id: 75,
    title: 'Just Friends',
    version: 'Original Mix',
    artist: 'Wantigga',
    album: 'Just Friends',
    remixers: null,
    genre: 'House',
    label: 'Roche Musique',
    released: '2017-05-17',
    key: 'C min',
    bpm: 117,
    length: 207,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Just_Friends-Wantigga.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Just_Friends-Wantigga.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/Just+Friends.mp3'
  },
  {
    id: 76,
    title: 'Fading',
    version: 'Original Mix',
    artist: '20syl',
    album: 'Fading',
    remixers: null,
    genre: 'Dance',
    label: 'Trackstone Records',
    released: '2017-10-20',
    key: 'A min',
    bpm: 65,
    length: 211,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Fading-20syl.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Fading-20syl.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/Fading+(prod+by+20syl).mp3'
  },
  {
    id: 77,
    title: 'Waiting Game',
    version: 'Original Mix',
    artist: 'XYPO',
    album: 'Waiting Game',
    remixers: null,
    genre: 'Electronica / Downtempo',
    label: 'Moda Black',
    released: '2014-09-22',
    key: 'C min',
    bpm: 125,
    length: 219,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Waiting_Game-XYPO.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Waiting_Game-XYPO.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/Waiting+Game.mp3'
  },
  {
    id: 78,
    title: 'Heartbreak Reputation',
    version: 'Original Mix',
    artist: 'Zimmer feat. Polina',
    album: 'Heartbreak Reputation',
    remixers: null,
    genre: 'Indie Dance / Nu Disco',
    label: 'Discotexas',
    released: '2013-03-01',
    key: 'E♭ min',
    bpm: 120,
    length: 256,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Heartbreak_Reputation-Zimmer.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Heartbreak_Reputation-Zimmer.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/Heartbreak+Reputation+(Original+Mix).mp3'
  },
  {
    id: 79,
    title: 'For You',
    version: 'Original Mix',
    artist: '3 Monkeyzz',
    album: 'For You',
    remixers: null,
    genre: 'House',
    label: 'Defected',
    released: '2014-02-12',
    key: 'A min',
    bpm: 122,
    length: 192,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/For_You-3_Monkeyzz.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/For_You-3_Monkeyzz.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/For+You.mp3'
  },
  {
    id: 80,
    title: 'Boss',
    version: 'Original Mix',
    artist: 'Disclosure',
    album: 'Moog for Love',
    remixers: null,
    genre: 'House',
    label: 'Defected',
    released: '2016-12-02',
    key: 'E min',
    bpm: 126,
    length: 286,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Boss-Disclosure.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Boss-Disclosure.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/Boss.mp3'
  },
  {
    id: 81,
    title: 'GDBYE',
    version: 'Original Mix',
    artist: 'Blue J x MOONZ',
    album: 'GDBYE',
    remixers: null,
    genre: 'House',
    label: 'Atlantic Records',
    released: '2013-04-23',
    key: 'C min',
    bpm: 122,
    length: 263,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/GDBYE-Blu_J_x_MOONZ.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/GDBYE-Blu_J_x_MOONZ.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/GDBYE.mp3'
  },
  {
    id: 82,
    title: 'Make You Feel',
    version: 'Hotel Garuda Remix',
    artist: 'Alina Baraz & Galimatias',
    album: 'Make you Feel',
    remixers: 'Hotel Garuda',
    genre: 'Progressive House',
    label: 'Slowmore',
    released: '2014-11-17',
    key: 'A♭ min',
    bpm: 128,
    length: 229,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Make_You_Feel_Hotel_Garuda_Remix-Alina_Baraz_%26_Galimatias.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Make_You_Feel_Hotel_Garuda_Remix-Alina_Baraz_%26_Galimatias.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/01+Make+You+Feel+(Hotel+Garuda+Remix).mp3'
  },
  {
    id: 83,
    title: "Please Don't Turn Me On",
    version: 'Disclosure Remix',
    artist: 'Artful Dodger',
    album: "Please Don't Turn Me On",
    remixers: 'Disclosure',
    genre: 'House',
    label: 'Public Demand Records',
    released: '2013-08-29',
    key: 'B♭ min',
    bpm: 130,
    length: 396,
    price: 1.49,
    albumArt:
      "https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Please_Don't_Turn_Me_On_Disclosure_Remix-Artful_Dodger.jpeg",
    waveform:
      "https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Please_Don't_Turn_Me_On_Disclosure_Remix-Artful_Dodger.svg",
    mp3:
      "https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/01+Please+Don't+Turn+Me+On+(Disclosure+Remix)+%5Bfeat.+Lifford%5D.m4a"
  },
  {
    id: 84,
    title: 'Into the Beat',
    version: 'Original Mix',
    artist: 'Calippo',
    album: 'Jaime Narvaez',
    remixers: null,
    genre: 'House',
    label: 'Abracadabra Recordings',
    released: '2018-03-16',
    key: 'G min',
    bpm: 124,
    length: 175,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Into_the_Beat-Calippo.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Into_the_Beat-Calippo.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/Into+The+Beat.mp3'
  },
  {
    id: 85,
    title: 'Go Deeper',
    version: 'Original Mix',
    artist: 'Cory Enemy',
    album: 'Go Deeper',
    remixers: null,
    genre: 'House',
    label: 'Cory Enemy',
    released: '2014-03-13',
    key: 'D min',
    bpm: 122,
    length: 385,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Go_Deeper-Cory_Enemy.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Go_Deeper-Cory_Enemy.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/Go+Deeper+(original+mix).mp3'
  },
  {
    id: 86,
    title: 'Alicia feat. Darius',
    version: 'Original Mix',
    artist: 'Crayon',
    album: 'Alicia',
    remixers: null,
    genre: 'Electronica / Downtempo',
    label: 'Roche Musique',
    released: '2017-06-12',
    key: 'A min',
    bpm: 122,
    length: 270,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Alicia-Crayon.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Alicia-Crayon.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/Alicia+(feat.+Darius).mp3'
  },
  {
    id: 87,
    title: 'Post Blue',
    version: 'Original Mix',
    artist: 'Crayon',
    album: 'Post Blue',
    remixers: null,
    genre: 'Electronica / Downtempo',
    label: 'Roche Musique',
    released: '2018-02-02',
    key: 'E♭ maj',
    bpm: 122,
    length: 176,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Post_Blue-Crayon.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Post_Blue-Crayon.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/Post+Blue.mp3'
  },
  {
    id: 88,
    title: 'Good Kisser',
    version: 'Disclosure Remix',
    artist: 'Usher',
    album: 'Flawed',
    remixers: 'Disclosure',
    genre: 'House',
    label: 'RCA',
    released: '2014-05-05',
    key: 'G min',
    bpm: 122,
    length: 290,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Good_Kisser_Disclosure_Remix-Usher.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Good_Kisser_Disclosure_Remix-Usher.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/01+Usher+-+Good+Kisser+(Disclosure+Remix).mp3'
  },
  {
    id: 89,
    title: 'Feeling High feat. Ruby Wood',
    version: 'Original Mix',
    artist: 'Drop Lamond',
    album: 'Feeling High',
    remixers: null,
    genre: 'House',
    label: 'Dim Mak Records',
    released: '2011-04-14',
    key: 'G min',
    bpm: 122,
    length: 320,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Feeling_High-Drop_Lamond.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Feeling_High-Drop_Lamond.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/01+Feeling+High+(feat.+Ruby+Wood).m4a'
  },
  {
    id: 90,
    title: 'Take A Look',
    version: 'Original Mix',
    artist: 'Durante',
    album: 'Take A Look',
    remixers: null,
    genre: 'Electronica / Downtempo',
    label: 'The Zone Records',
    released: '2010-08-03',
    key: 'D min',
    bpm: 122,
    length: 376,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Take_A_Look-Durante.jpeg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Take_A_Look-Durante.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/01+Take+A+Look.mp3'
  },
  {
    id: 91,
    title: 'Nothing Else',
    version: 'Original Mix',
    artist: 'Fraicheur',
    album: 'Nothing Else',
    remixers: null,
    genre: 'Dance',
    label: 'Fraicheur',
    released: '2014-03-08',
    key: 'C min',
    bpm: 122,
    length: 231,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Nothing_Else-Fraicheur.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Nothing_Else-Fraicheur.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/Nothing+Else.mp3'
  },
  {
    id: 92,
    title: 'Too Attached',
    version: 'Original Mix',
    artist: 'FVLCRVM',
    album: 'Too Attached',
    remixers: null,
    genre: 'Dance',
    label: 'FVLCRVM',
    released: '2016-05-23',
    key: 'A min',
    bpm: 122,
    length: 245,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Too_Attached-FVLCRVM.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Too_Attached-FVLCRVM.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/Too+Attached.mp3'
  },
  {
    id: 93,
    title: 'Ocean Eyes',
    version: 'Jengi Remix',
    artist: 'Billie Eilish',
    album: 'Ocean Eyes',
    remixers: 'Jengi',
    genre: 'Indie Dance / Nu Disco',
    label: 'Interscope',
    released: '2016-11-18',
    key: 'G min',
    bpm: 122,
    length: 232,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Ocean_Eyes_Jengi_Remix-Billie_Eilish.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Ocean_Eyes_Jengi_Remix-Billie_Eilish.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/Billie+Eilish+-+Ocean+Eyes+(Jengi+Remix).mp3'
  },
  {
    id: 94,
    title: 'Every Night',
    version: 'Original Mix',
    artist: 'Ghastly',
    album: 'Every Night',
    remixers: null,
    genre: 'Electro House',
    label: 'Dim Mak Records',
    released: '2015-03-05',
    key: 'G min',
    bpm: 125,
    length: 238,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Every_Night-Ghastly.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Every_Night-Ghastly.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/Every+Night.mp3'
  },
  {
    id: 95,
    title: 'Easy Life',
    version: 'Tobtok Remix',
    artist: 'Jael',
    album: 'Shuffle The Cards',
    remixers: 'Tobtok',
    genre: 'Indie Dance / Nu Disco',
    label: 'EMI',
    released: '2015-03-12',
    key: 'C min',
    bpm: 122,
    length: 180,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Easy_Life_Tobtok_Remix-Jael.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Easy_Life_Tobtok_Remix-Jael.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/Easy+life+(Tobtok+Remix).mp3'
  },
  {
    id: 96,
    title: 'Adore',
    version: 'Melvv Remix',
    artist: 'Jasmine Thompson',
    album: 'Adore',
    remixers: 'Melvv',
    genre: 'Indie Dance / Nu Disco',
    label: 'Atlantic Records',
    released: '2012-05-21',
    key: 'A min',
    bpm: 122,
    length: 172,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Adore_Melvv_Remix-Jasmine_Thompson.jpeg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Adore_Melvv_Remix-Jasmine_Thompson.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/Adore+(Melvv+Remix).mp3'
  },
  {
    id: 97,
    title: 'Hear This',
    version: 'Original Mix',
    artist: 'Jarami',
    album: 'Sketches II',
    remixers: null,
    genre: 'Indie Dance / Nu Disco',
    label: 'RCA',
    released: '2013-04-30',
    key: 'A min',
    bpm: 122,
    length: 196,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Hear_This-Jarami.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Hear_This-Jarami.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/Hear+This.mp3'
  },
  {
    id: 98,
    title: 'Light of Day',
    version: 'Original Mix',
    artist: 'Jengi',
    album: 'Light of Day',
    remixers: null,
    genre: 'Indie Dance / Nu Disco',
    label: 'Jengi',
    released: '2016-02-11',
    key: 'F min',
    bpm: 122,
    length: 212,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Light_Of_Day-Jengi.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/Light_Of_Day-Jengi.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/Light+of+Day.mp3'
  },
  {
    id: 99,
    title: 'You & I (Forever)',
    version: 'Shift K3Y Remix',
    artist: 'Jessie Ware',
    album: 'Tough Love',
    remixers: 'Shift K3Y',
    genre: 'Indie Dance / Nu Disco',
    label: 'PMR',
    released: '2014-08-14',
    key: 'A min',
    bpm: 122,
    length: 320,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/You_%26_I_(Forever)_Shift_K3Y_Remix-Jessie_Ware.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/You_%26_I_(Forever)_Shift_K3Y_Remix-Jessie_Ware.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/You+%26+I+(Forever)+(Shift+K3Y+Remix).mp3'
  },
  {
    id: 100,
    title: 'True',
    version: 'Original Mix',
    artist: 'Jengi',
    album: 'TRUE',
    remixers: null,
    genre: 'Indie Dance / Nu Disco',
    label: 'Jengi',
    released: '2013-06-12',
    key: 'G min',
    bpm: 122,
    length: 173,
    price: 1.49,
    albumArt:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/True-Jengi.jpg',
    waveform:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Waveforms/True-Jengi.svg',
    mp3:
      'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/True.mp3'
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
