var fs = require('fs');
var path = require('path');
var fileOne = '/Users/wonboklee/Desktop/Immersive-06/im06-2018-03-self-assessments-week-04/async-word-count/files/fileOne.txt'
var fileTwo = '/Users/wonboklee/Desktop/Immersive-06/im06-2018-03-self-assessments-week-04/async-word-count/files/fileTwo.txt'

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
  getWordCount(filePathOne, function(err, wordcount1) {
  	if (err) {
  		callback(err, null);
  	} else {
      var data1 = wordcount1;   
  		getWordCount(filePathTwo, function(err, wordcount2) {
  			if (err) {
  			  callback(err, null);
  			} else {
  				var data2 = wordcount2;
  				callback(null, data1 + data2);
  			}
  		})
  	}
  })

};

var output = getTotalWordCount(fileOne, fileTwo, function(err, wordCount){
  if(err){
    console.log('err');
  } else {
    console.log(wordCount);
  }
});




module.exports = getTotalWordCount;
