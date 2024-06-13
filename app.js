const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const routes = require('./routes/index.js');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());

app.use('/', routes);

app.listen(PORT, () => console.log(`Server is running on port : ${PORT}`));
