var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var cartesRouter = require('./routes/cartes');
var classesRouter = require('./routes/classes');
var typesRouter = require('./routes/types');
var competencesRouter = require('./routes/competences');

var app = express();
var cors = require('cors');



const hostname = '127.0.0.1';
const port = 3000;

app.use(cors())

app.listen(port, hostname, () => {
    console.log(`Serveur demarré sur http://${hostname}:${port}`);
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/cards', cartesRouter);
app.use('/classes', classesRouter);
app.use('/types', typesRouter);
app.use('/competences', competencesRouter);



module.exports = app;
