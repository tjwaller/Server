const express = require('express');
const router = express.Router();
var bodyParser = require("body-parser");

const Item = require('../../models/Item');

module.exports = router;

router.post('/', bodyParser.json(), (req, res) => {
    Item.create(req.body)
        .then((item) => res.json({msg: 'item added successfully' }))
        .catch((err) => res.status(400).json({error: 'Error'}));
});

