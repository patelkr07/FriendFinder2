
var friends = require("../data/friends");

module.exports = function(app) {

    app.get("/api/tables", function(req, res) {
        res.json(friends);
    });

    app.post("/api/tables", function(req, res) {
        res.json(friends);
    });
}