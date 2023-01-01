const express = require('express');
const app = express();
const db = require('./persistence');

app.use(express.json());
app.use(express.static(__dirname + '/static'));

app.get('/items', require('./routes/getItems'));
app.post('/items', require('./routes/addItem'));
app.put('/items/:id', require('./routes/updateItem'));
app.delete('/items/:id', require('./routes/deleteItem'));

db.init().then(() => {
    app.listen(3000, () => console.log('Listening on port 3000'));
}).catch((err) => {
    console.error(err);
    process.exit(1);
});

const gracefulShutdown = () => {
    db.teardown()
        .catch(() => {})
        .then(() => process.exit());
};

process.on('SIGINT', gracefulShutdown);
process.on('SIGTERM', gracefulShutdown);
process.on('SIGUSR2', gracefulShutdown); // Sent by nodemon
