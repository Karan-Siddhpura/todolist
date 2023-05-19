const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static("public"));

let items = [];
app.get("/", function (req, res) {

    let today = new Date();
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    let day = today.toLocaleDateString("en-US", options);
    res.render('index', { todayDate: day, todayTask: items });
})


app.post("/", function (req, res) {
    let task = req.body.task;
    items.push(task);
    res.redirect("/");
});

app.listen(5000, function () {
    console.log("Server running at port 5000");
});