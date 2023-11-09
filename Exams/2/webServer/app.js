var express = require("express");
var app = express();
app.use('/', express.static("public"));
app.use('/api/', express.json());

let data = {};

const fs = require("fs");
const serverSideStorage = "../data/db.json";
function readMonths() {
    fs.readFile(serverSideStorage, function (err, buf) {
        if (err) {
            console.log("error: ", err);
        } else {
            data = JSON.parse(buf.toString());
        }
        console.log("Data read from file.");
    });
    return data;
}

readMonths();

function saveToServer(data) {
    fs.writeFile(serverSideStorage, JSON.stringify(data), function (err, buf) {
        if (err) {
            console.log("error: ", err);
        } else {
            console.log("Data saved successfully!");
        }
    })
}


// TODO: Create your backend API here:


app.listen(3000);

app.get('/api/getmonths', async (req, res) => {
    const months = await readMonths();
    res.json(data);
});

app.put('/api/move/:fromIndex/:toIndex', async (req, res) => {
    const { fromIndex } = req.params;
    const { toIndex } = req.params;

    const curData = data;

    const monthMoved = data.splice(fromIndex, 1)[0];
    data.splice(toIndex, 0, monthMoved);

    await saveToServer(data);

    res.json({
        "months": curData,
        "moved_month": monthMoved,
        "from_index": fromIndex,
        "to_index": toIndex
    });
});

app.post('/api/setmonths', async (req, res) => {
    const { months } = req.body;
    data = months;

    await saveToServer(data);

    res.json(data);
});