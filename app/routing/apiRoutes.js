var friendsData = require ('../data/friends.js');

module.exports = function (app) {

  app.get('/api/friends', function (request, response) {
    response.json(friendsData);
  });

  app.post('/api/friends', function(request, response) {

    // don't mess with these two
    friendsData.push(request.body);
    response.json(friendsData);


    for (var i = 0; i < friendsData.length; i++) {
      console.log(friendsData[i].name + friendsData[i].score);
    }

    var totalDifference = 0;

    function checkCompatibility (userScores) {

    }


  })

}