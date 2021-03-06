var db = require("../models");


module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });
  
  // Load example page and pass in an example by id
  app.get("/example/:id", function (req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function (dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });


//***************************************************************************************/
// Provide a route for those publishing a question
//***************************************************************************************/
  app.get("/publish", function (req, res) {
    var PORT = require('../server').PORT;
    res.render("publish", { msg: "Publisher Panel" });
  });


//***************************************************************************************/
// Provide a route for those subscribing to the channel
//***************************************************************************************/
  app.get("/subscribe", function (req, res) {
    res.render("subscribe", { msg: "Poll Vault App Listening..." });
  });

//***************************************************************************************/
// Render 404 page for any unmatched routes
//***************************************************************************************/
app.get("*", function (req, res) {
    res.render("404");
  });
};
