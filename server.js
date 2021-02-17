const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const path = require("path");
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, "build")));

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});

app.get("/api/read", (req, res) => {
    let rawdata = fs.readFileSync("server/data.json");
    let readLink = JSON.parse(rawdata);
    res.json(readLink.readLater);
});

app.delete("/api/read", function (req, res) {
    let rawdata = fs.readFileSync("server/data.json");
    let readLink = JSON.parse(rawdata);
    var length = readLink["readLater"].length;
    var id = parseInt(req.query.id);
    var x = [];
    for (let i = 0; i < length; i++) {
        if (readLink.readLater[i].id == id) {
            continue;
        }
        x.push(readLink.readLater[i]);
    }
    readLink.readLater = x;
    fs.writeFileSync("server/data.json", JSON.stringify(readLink), null, 4);
    let rawdata1 = fs.readFileSync("server/data.json");
    let readLink1 = JSON.parse(rawdata1);
    res.json(readLink1.readLater);
});


app.get("/api/watch", (req, res) => {
    let rawdata = fs.readFileSync("server/data.json");
    let watchLink = JSON.parse(rawdata);
    var sortx = parseInt(req.query.id);
    let array = watchLink.watchLater;

    function GetSortOrder(prop) {
        return function (a, b) {
            if (a[prop] > b[prop]) {
                return 1;
            } else if (a[prop] < b[prop]) {
                return -1;
            }
            return 0;
        }
    }
    if (sortx === 2) {
        array.sort(GetSortOrder("length"));
    } else if (sortx === 3) {
        array.sort(GetSortOrder("creater"));
    } else if (sortx === 1) {
        array.sort(GetSortOrder("title"));
    }

    res.json(array);
});

app.delete("/api/watch", function (req, res) {
    let rawdata = fs.readFileSync("server/data.json");
    let watchLink = JSON.parse(rawdata);
    var length = watchLink["watchLater"].length;
    var id = parseInt(req.query.id);
    var x = [];
    for (let i = 0; i < length; i++) {
        if (watchLink.watchLater[i].id == id) {
            continue;
        }
        x.push(watchLink.watchLater[i]);
    }
    watchLink.watchLater = x;
    fs.writeFileSync("server/data.json", JSON.stringify(watchLink), null, 4);
    let rawdata1 = fs.readFileSync("server/data.json");
    let watchLink1 = JSON.parse(rawdata1);
    res.json(watchLink1.watchLater);
});
