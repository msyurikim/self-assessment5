var fs = require('fs');
var path = require('path');

var getWordCount = function(filePath, callback) {
  fs.readFile(filePath, 'utf-8', function(err, data) {
    if (err) {
      callback(err, null);
      return;
    }

    var wordCount = data.trim().split(' ').length;
    callback(null, wordCount);
  });
};

var getTotalWordCount = function(filePathOne, filePathTwo, callback) {
  // YOUR CODE HERE
  var totalCount = 0;
  getWordCount(filePathOne, (err, res) => {
    if (err) {
      callback(err, null);
      return;
    } else {
      totalCount += res;
      getWordCount(filePathTwo, (err, res) => {
        if (err) {
          callback(err, null);
          return;
        } else {
          totalCount += res;
          callback(null, totalCount);
        }
      })
    }
  });
};

module.exports = getTotalWordCount;
