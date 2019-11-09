const express = require('express');
const router = express.Router()
const db = require('../db')

// search
router.get('/', (req, res) => {
    db.query(`SELECT * FROM user`, function (err, result) {
        if (err) {
            console.log("error: ", err);
            res.send(500, err);
        } else {
            console.log(result);
            res.status(200).send(result);
        }
    });
})

// update
router.put('/:name', (req, res) => {

    db.query(`UPDATE user SET name = '${req.body.name}' WHERE name = '${req.params.name}'`, function (err, result) {
        if (err) {
            console.log("error: ", err);
            res.send(500, err);
        } else {
            console.log(result);
            res.status(200).send(result);
        }
    });
})

// save
router.post('/', (req, res) => {
    db.query(`INSERT INTO user (name, address) VALUES ('${req.body.name}', '${req.body.address}')`, function (err, result) {
        if (err) {
            console.log("error: ", err);
            res.send(500, err);
        } else {
            console.log(result);
            res.status(201).send(result);
        }
    });
})

// delete
router.delete('/:name', (req, res) => {
    db.query(`DELETE FROM user WHERE name = '${req.params.name}'`, function (err, result) {
        if (err) {
            console.log("error: ", err);
            res.send(500, err);
        } else {
            console.log(result);
            res.status(200).send(result);
        }
    });
})

module.exports = router;