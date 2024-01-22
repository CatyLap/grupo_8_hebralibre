
const express = require('express');
const app = express();
const path = require('path');


app.listen(3030, () => {
    console.log("Servidor corriendo");
});

app.use(express.static(path.join(__dirname, '/public')));
// Ruta para cargar index.html cuando se acceda al home
app.get('/catalogo', (req, res) => {
    let rutaHtml = path.resolve(__dirname, './views/catalogo.html');
    res.sendFile(rutaHtml, (err) => {
        if (err) {
            console.error('Error al enviar el archivo:', err);
            res.status(err.status).end();
        } else {
            console.log('Archivo enviado correctamente');
        }
    });
});

app.get('/producto', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views', 'producto.html'));
});


