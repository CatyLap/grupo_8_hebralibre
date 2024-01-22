/*const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, './public');

app.listen(8000, () => {
    console.log('Servidor corriendo en el puerto 8000');
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
});

app.get('/contacto', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/contact.html'));
});

app.get('/productos', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/catalogo.html'));
});

app.get('/nosotros', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/about.html'));
});

app.use(express.static('public'));*/

const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, './public');

app.listen(8000, () => {
    console.log('Servidor corriendo en el puerto 8000');
});

// Define la ruta del directorio de vistas
const viewsPath = path.join(__dirname, 'views');

// Configura las rutas
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

app.get('/catalogo', (req, res) => {
    res.sendFile(path.join(viewsPath, 'catalogo.html'));

});
app.get('/producto', (req, res) => {
    res.sendFile(path.join(viewsPath, 'producto.html'));

});

app.get('/nosotros', (req, res) => {
    res.sendFile(path.join(viewsPath, 'about.html'));
});

app.use(express.static('public'));
