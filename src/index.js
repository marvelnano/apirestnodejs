const express = require('express');
const morgan = require('morgan');
const routeStudents = require('./routes/students');

// * Servidor
const app = express();

// * Settings
app.set('port', process.env.port || 3000);
app.set('json spaces', 2);

// * Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// * Rutas del app
app.get('/', (req, res) => {
    res.send('<h2 style="text-align:center">Bienvenido al Api Rest con Node JS sin DB</h2>');
});

app.use('/api/students', routeStudents());

app.listen(app.get('port'), () => console.log(`Escuchando en puerto ${app.get('port')}...`));