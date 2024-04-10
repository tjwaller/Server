const express = require('express');
const router = express.Router();
var bodyParser = require("body-parser");
const Item = require('../../models/Item');


// router.get('/', (req, res) => {res.send('testing get / item route')});
// router.get('/:id', (req, res) => {res.send('testing get /:id route')});
// router.post('/', (req, res) => {res.send('testing post / item route')});
// router.put('/:id', (req, res) => {res.send('testing put /:id route')});
// router.delete('/:id', (req, res) => {res.send('testing delete /:id route')});

router.post('/', bodyParser.json(), (req, res) => {
    Item.create(req.body)
        .then((item) => res.json({ msg: 'Item added successfully' }))
        .catch((err) => res.status(400).json({error: 'Error'}));
});

router.get('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then((item) => res.json(item))
        .catch((err) => res.status(404).json({ noitemfound: 'No Item Found'}));
});

router.put('/:id', (req, res) => {
    Item.findByIdAndUpdate(req.params.id, req.body)
        .then((item) => res.json({ msg: 'updated successfully' }))
        .catch((err) => res.status(400).json({ error: 'Unable to update the Database' }));
});


router.delete('/:id', (req, res) => {
    Item.findByIdAndDelete(req.params.id)
        .then((item) => res.json({ msg: 'Item entry deleted successfully' }))
        .catch((err) => res.status(404).json({ error: 'No such Item'}));
});




module.exports = router;