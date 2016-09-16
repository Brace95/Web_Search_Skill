'use strict';

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

var expect = chai.expect;

var SearchDataHelper = require('../search_data_helper');

chai.config.includeStack = true;

describe('SearchDataHelper', function () {
   
   var subject = new SearchDataHelper();
   
   var web_search;
   
   describe('#webSearch', function () {
       
       context('with a valid Web Search', function () {
          
          it('returns valid web search', function () {
             
             web_search = 'Alexa';
             
             var value = subject.requestWebSearch(web_search).then(function (obj) {
                 return obj.IATA;
             });
             
             return expect(value).to.eventually.eq(web_search);
              
          });
           
       });
       
       context('with an invalid Web Search', function () {
           
           it('returns invalid Web Search', function() {
              
              web_search = '***';
              return expect(subject.requestWebSearch(web_search)).to.be.rejectedWith(Error);
               
           });
           
       });
       
   });
    
});