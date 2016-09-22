'use strict'

var _ = require('lodash');

var rp = require('request-promise');

var appid  = '&appid=123';
var serviceURI = 'http://www.faroo.com/api?src=web&f=json';
var ENDPOINT =  serviceURI + appid;// TODO search API!

function SearchDataHelper () {};

SearchDataHelper.prototype.requestWebSearch = function (web_search) {
    
    return this.getWebSearch(web_search).then(function (response) {
        
        console.log('success - received websearch info for ' + web_search);
        
        return response.body;
        
    });
    
};

SearchDataHelper.prototype.getWebSearch = function (web_search) {
   
   var options = {
       
       method: 'GET',
       uri: ENDPOINT + '&q=' + web_search,
       resolveWithFullResponse: true,
       json: true
       
   };
   
   return rp(options);
    
};

module.exports = SearchDataHelper;