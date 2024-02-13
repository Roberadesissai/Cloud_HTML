const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

let items = []; // This will store our items

// GET endpoint to retrieve items
app.get('/items', (req, res) => {
    res.status(200).json(items);
});

// POST endpoint to create a new item
app.post('/items', (req, res) => {
    const item = req.body;
    items.push(item); // Add item to the list
    res.status(201).send(`Item added with name: ${item.name}`);
});

// PUT endpoint to update an item
app.put('/items/:name', (req, res) => {
    const name = req.params.name;
    const item = req.body;
    const index = items.findIndex(i => i.name === name);
    if (index >= 0) {
        items[index] = item;
        res.send(`Item with name ${name} updated.`);
    } else {
        res.status(404).send('Item not found.');
    }
});

// DELETE endpoint to delete an item
app.delete('/items/:name', (req, res) => {
    const name = req.params.name;
    items = items.filter(i => i.name !== name);
    res.send(`Item with name ${name} deleted.`);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
