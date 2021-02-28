const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const path = require("path");
const port = process.env.PORT || 5000;
const filename = "server/data.json";
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, "build")));
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
app.get("/api/read", (req, res) => {
    let rawData = fs.readFileSync(filename);
    let readLink = JSON.parse(rawData);
    res.json(readLink.readLater);
});
app.post("/api/read", (req, res) => {
    let rawData = fs.readFileSync(filename);
    let readLater = JSON.parse(rawData);
    var postData = JSON.stringify(req.body);
    var x = JSON.parse(postData);
    x["id"] = readLater["readLater"].length + 1;
    readLater["readLater"].push(x);
    fs.writeFileSync(filename, JSON.stringify(readLater), null, 4);
    res.send("ok");
});
app.delete("/api/read", function (req, res) {
    let rawData = fs.readFileSync(filename);
    let readLink = JSON.parse(rawData);
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
    fs.writeFileSync(filename, JSON.stringify(readLink), null, 4);
    let rawDataTemp = fs.readFileSync(filename);
    let readLink1 = JSON.parse(rawDataTemp);
    res.json(readLink1.readLater);
});
app.get("/api/watch", (req, res) => {
    let rawData = fs.readFileSync(filename);
    let watchLink = JSON.parse(rawData);
    var getSortID = parseInt(req.query.id);
    let array = watchLink.watchLater;
    function GetSortOrder(prop) {
        return (a, b) => {
            if (a[prop] > b[prop]) {
                return 1;
            } else if (a[prop] < b[prop]) {
                return -1;
            }
            return 0;
        }
    }
    if (getSortID === 2) {
        array.sort((a, b) => {
            let secondsB = 0;
            let secondsA = 0;
            var timeB = b["length"].split(":");
            var timeA = a["length"].split(":");
            if (timeB.length == 3) {
                secondsB = timeB[0] * 60 * 60 + timeB[1] * 60 + parseInt(timeB[2]);
            } else {
                secondsB = timeB[0] * 60 + parseInt(timeB[1]);
            }
            if (timeA.length == 3) {
                secondsA = timeA[0] * 60 * 60 + timeA[1] * 60 + parseInt(timeA[2]);
            } else {
                secondsA = timeA[0] * 60 + parseInt(timeA[1]);
            }
            if (secondsA > secondsB) {
                return 1;
            } else if (secondsA < secondsB) {
                return -1;
            }
            return 0;
        });
    } else if (getSortID === 3) {
        array.sort((a, b) => {
            let secondsB = 0;
            let secondsA = 0;
            var timeB = b["length"].split(":");
            var timeA = a["length"].split(":");
            if (timeB.length == 3) {
                secondsB = timeB[0] * 60 * 60 + timeB[1] * 60 + parseInt(timeB[2]);
            } else {
                secondsB = timeB[0] * 60 + parseInt(timeB[1]);
            }
            if (timeA.length == 3) {
                secondsA = timeA[0] * 60 * 60 + timeA[1] * 60 + parseInt(timeA[2]);
            } else {
                secondsA = timeA[0] * 60 + parseInt(timeA[1]);
            }
            if (secondsA < secondsB) {
                return 1;
            } else if (secondsA > secondsB) {
                return -1;
            }
            return 0;
        });
    } else if (getSortID === 1) {
        array.sort(GetSortOrder("title"));
    } else if (getSortID === 4) {
        array.sort(GetSortOrder("creator"));
    }
    res.json(array);
});
app.post("/api/watch", (req, res) => {
    let rawData = fs.readFileSync(filename);
    let watchLater = JSON.parse(rawData);
    var postData = JSON.stringify(req.body);
    var x = JSON.parse(postData);
    x["id"] = watchLater["watchLater"].length + 1;
    watchLater["watchLater"].push(x);
    fs.writeFileSync(filename, JSON.stringify(watchLater), null, 4);
    res.send("ok");
});
app.delete("/api/watch", function (req, res) {
    let rawData = fs.readFileSync(filename);
    let watchLink = JSON.parse(rawData);
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
    fs.writeFileSync(filename, JSON.stringify(watchLink), null, 4);
    let rawDataTemp = fs.readFileSync(filename);
    let watchLink1 = JSON.parse(rawDataTemp);
    res.json(watchLink1.watchLater);
});
