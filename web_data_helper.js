'use strict';

module.change_code = 1;

/* Important requirment to read from API */
var _ = require('lodash');
var rp = require('request-promise');

/* API end point */
var ENDPOINT = 'https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json';

/* Constructor */
function WebDataHelper() {}

/* This is the function that will go and search the api for the search. */
WebDataHelper.prototype.getWebSearch = function(search) {
    
    /* Options for the api call */
    var options = {
        method: 'GET',
        uri: ENDPOINT + '&titles=' + search,
        json: true
    };
    
    return rp(options);
    
};

/* this is the function that will format the return from the search function. */
WebDataHelper.prototype.formatWebSearch = function(searchObject) {
  
  for (var key in searchObject.query.pages) {
  
        console.log(key);
      if(key > 0) {
          
        var temp = _.template('The search of ${search_title} has returned something.');
        return temp({search_title: searchObject.query.pages[key].title});
        
      } else {
          
          var temp = _.template('Could not find anything with that search.');
          return temp();
          
      }
      
    }   
    
};

module.exports = WebDataHelper;