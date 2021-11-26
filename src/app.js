const express = require('express');
const path = require('path');
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

const routesIndex = require("./routes/index.js");
app.use('/', routesIndex);

const routesCienciasnaturales = require("./routes/cienciasnaturales.js");
app.use('/cienciasnaturales', routesCienciasnaturales);

const routesEconomia = require("./routes/economia.js");
app.use('/economia', routesEconomia);

/*const userRoutes = require('./routes/userRoutes.js');
app.use('/user', userRoutes);*/

const publicPath = path.resolve(__dirname, '../public');
app.use('/', express.static(publicPath));

const puerto = 3000;
app.listen(process.env.PORT || puerto, () => {
    console.log(`"El servidor local está corriendo en el puerto: ${puerto}`);
});