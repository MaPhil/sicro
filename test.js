'use strict';

var testInstance = require('./index.js');

//testInstance.add('test3','* * * * * echo "hallo ich bin ein test" >> ~/Desktop/tmp3.txt').then(function () {
//  testInstance.status();
//});
testInstance.remove('test3').then(function () {
  testInstance.status();
});
