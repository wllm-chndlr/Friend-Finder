// Require the data of all potential friends
var friendsData = require ('../data/friends.js');

module.exports = function (app) {

  // User who visits this page will see a JSON of friend data
  app.get('/api/friends', function (request, response) {
    response.json(friendsData);
  });

  // Handles user data when submitted (or "posted")
  app.post('/api/friends', function(request, response) {

    // Establish variable for the most compatible friend
    var bestFriend = {
      name: "",
      photo: "",
      maxDifference: 1000
    };

    // Parse the user's data
    var userData = request.body;
    var userScore = userData.score;

    // Establish variable for the total difference between scores
    var totalDifference = 0;
    
    // Loop through all potential friends
    for (var i = 0; i < friendsData.length; i++) {

      totalDifference = 0;

      // Loop through the scores for all potential friends
      for (var j = 0; friendsData[i].score[j]; j++) {

        // Calculate the difference between the scores
        totalDifference += Math.abs(parseInt(userScore[j]) - parseInt(friendsData[i].score[j]));

        if (totalDifference <= bestFriend.maxDifference) {
          bestFriend.name = friendsData[i].name;
          bestFriend.photo = friendsData[i].photo;
          bestFriend.maxDifference = totalDifference;
        }

      }

    }

    // Push the new user data to the friends array
    friendsData.push(userData);

    // Return a JSON with the best friend data
    response.json(bestFriend);

  })

}