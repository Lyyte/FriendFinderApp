var friendData = require("../data/friends");

module.exports = function(app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendData);
        // console.log(friendData)
    });

    app.post('/api/friends', function(req, res) {

    var user = req.body;

    for(var i = 0; i < user.scores.length; i++) {
        user.scores[i] = parseInt(user.scores[i]);
      }
  
      var bestFriendIndex = 0;
      var minimumDifference = 40;
  
      for(var i = 0; i < friendData.length; i++) {
        var totalDifference = 0;
        for(var j = 0; j < friendData[i].scores.length; j++) {
            totalDifference += Math.abs(user.scores[j] - friendData[i].scores[j]);
        }
  
        if(totalDifference < minimumDifference) {
          bestFriendIndex = i;
          minimumDifference = totalDifference;
        }
      }
  
      friendData.push(user);
  
      res.json(friendData[bestFriendIndex]);
    });
  };