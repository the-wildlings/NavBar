const express = require('express');
const path = require('path');
const router = require('./router');
const port = 3001;
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

let app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use('/api', router);

app.listen(port, () => console.log(`Listening on port ${port}!`));
