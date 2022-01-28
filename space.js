const express = require('express');
const app =  express();
const port = 3000;
const path = require('path').join(__dirname);
const options = {extensions: ['html']};
app.use(express.static(path,options));
app.use(express.json());
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});