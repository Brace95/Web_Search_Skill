'use strict';

module.change_code = 1;

/* Importing all the important stuff */
var Alexa = require('alexa-app');
var skill = new Alexa.app('web_search');
var WebDataHelper = require('./web_data_helper');
var _ = require('lodash');

/* Prompts */
var reprompt = 'I didn\'t catch that search query, Please say it again.';
var prompt = 'Please tell me a search query.';

/* Startup and timeout prompting */
skill.launch(function(request, response) {
   response.say(prompt).reprompt(reprompt). shouldEnsSession(false); 
});

/* Setup the intent requirements */
skill.intent('webSearchIntent', {
   'slots': {
       'SEARCH': 'SEARCH_QUERY'
   },
   'utterances': ['{search for|search|find|lookup} {-|SEARCH}']
}, function(request, response) {
    
    var search = request.slot('SEARCH');
    var wdh = new WebDataHelper();
    
    if(_.isEmpty(search)){
        prompt = 'I didn\'t hear a search query please tell me a search query';
        response.say(prompt).reprompt(reprompt).shouldEnsSession(false);
        return true
    } else {
    
        wdh.getWebSearch(search).then(function(searchResults) {
            
           console.log("Seached result: \n" + searchResults);
           response.say(wdh.formatWebSearch(searchResults)).send();
           
        }).catch(function(err){
            console.log(err.statusCode)
            prompt = 'I couldn\'t find anything for the search ' + search;
            response.say(prompt).reprompt(reprompt).shouldEnsSession(false).send();
            
        });
        
        return false;

    }
    
});

module.exports = skill;