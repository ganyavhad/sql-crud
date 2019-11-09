const express = require('express');
const app = express();
app.use(express.json());

// database
require('./db');

// router
const userRouter = require('./route/userRouter');

app.get('/', (req, res) => {
    res.send('connected')
})

app.use('/user', userRouter);

app.listen(3000);