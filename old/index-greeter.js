//question how to created a dirtory on Lambda
// listing 1.1  creating greeter/index.js  

//creat GreeterService function inherits from AlexaSkill.js class
'use strict'  // is this useful why i need type this?
var APP_ID = 'Greeter';
var AlexaSkill = require('./AlexaSkill'); //var AlexaSkill = require('./AlexaSkill.js');
					// upload AlexaSkill.js

var GreeterService = function(){
	AlexaSkill.call(this, APP_ID);
};
GreeterService.prototype = object.create (AlexaSkill.prototype);

// adding an onLunch event handler
'use strict' //why we need add this every time?
var APP_ID = 'Greeter';
var AlexaSkill = require('./AlexaSkill');
var SPEECH_OUTPUT = "Hello";

var GreeterService = function() {
	AlexaSkill.call(this, APP_ID);
};
GreeterService.prototype = Object.create(AlexaSkill.prototype);

//defined a helloResponseFunction function.
//response to the Alexa skill interface that tells Alexa how to respond to the user's request
var helloResponseFunction = function(intent, session, response) {
	response.tell(SPEECH_OUTPUT);
};

GreeterService.prototype.eventHandlers.onLaunch = helloResponseFunction;





