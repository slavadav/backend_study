const express = require('express');
// import express from 'express';
// "type": "module",


const PORT = 5000;

const app = express();

app.get('/', (req, res) => {
    res.status(200).json('some data');
});

app.listen(PORT, () => console.log(`server started on port ${PORT}`));