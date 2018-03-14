const express = require('express');
const app = express();

app.use(express.json());

const players = [
    {"name":"Mikey Whelan","id":"1"},
    {"name":"Josh Lundstram","id":"2"},
    {"name":"Emmet Hughes","id":"3"}
];

app.get('/', (req, res) => {
    res.send('working');
});

app.get('/api/players', (req, res) => {
    res.send(players);
});

app.get('/api/players/:id', (req, res) => {
    const player = players.find(c => c.id === req.params.id);

    if(!player) {
        res.status(404).send('cannot find soz mate')
    } else {
        res.send(player)
    }
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listenin on ${port}`);
});