// listing 1.1  creating greeter/index.js  

//creat GreeterService function inherits from AlexaSkill.js class
'use strict'  // is this useful why i need type this?
var APP_ID = 'Greeter';
var AlexaSkill = require('./AlexaSkill'); //var AlexaSkill = require('./AlexaSkill.js');

var GreeterService = function(){
	AlexaSkill.call(this, APP_ID);
};
GreeterService.prototype = object.create (AlexaSkill.prototype);






