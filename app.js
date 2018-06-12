const express = require('express');
const path = require("path");
const homeDir = path.join(__dirname, '/welcome-page');
const fs = require('fs');
const app = express();

app.get('/', function (req, res) {
    res.sendFile(path.join(homeDir, 'index.html'));
});

app.use('/', express.static(homeDir));

app.use('/name', function (req, res) {
    function selectRandomName(textByLine) {
        return textByLine[Math.floor(Math.random() * textByLine.length)]
    }

    function readLines() {
        let text = fs.readFileSync(path.join(homeDir, '/files/names.txt'));
        let textByLine = text.toString().split("\n");
        let randomName = selectRandomName(textByLine);
        return randomName
    }

    res.send(readLines())
});

app.listen(8000);
