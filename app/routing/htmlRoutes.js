// Dependencies
var path = require('path');

// Export specific HTML routes
module.exports = function (app) {

  app.get("/survey", function(request, response) {
    response.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

  app.use(function(request, response) {
    response.sendFile(path.join(__dirname, "/../public/home.html"));
  });

}