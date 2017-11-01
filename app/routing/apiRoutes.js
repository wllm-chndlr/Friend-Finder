var friendsData = require ('../data/friends.js');

module.exports = function (app) {

  app.get('/api/friends', function (request, response) {
    response.json(friendsData);
  });

  app.post('/api/friends', function(request, response) {

    var bestMatch = {
      name: "",
      photo: "",
      friendDifference: 1000
    };

    var userData = request.body;
    var userScore = userData.score;

    var totalDifference = 0;
    
    for (var i = 0; i < friendsData.length; i++) {

      totalDifference = 0;

      for (var j = 0; friendsData[i].score[j]; j++) {

        totalDifference += Math.abs(parseInt(userScore[j]) - parseInt(friendsData[i].score[j]));

        if (totalDifference <= bestMatch.friendDifference) {
          bestMatch.name = friendsData[i].name;
          bestMatch.photo = friendsData[i].photo;
          bestMatch.friendDifference = totalDifference;
        }

      }

    }

    friendsData.push(userData);

    response.json(bestMatch);

  })

}