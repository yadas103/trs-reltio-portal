/**
 * Service to Create missing profiles
 */
(function() {
  'use strict';

  angular
    .module('gcms.components.data')
    .factory('CustomDetails', CustomDetails);

  CustomDetails.$inject = ['$resource','localeMapper','ENVIRONMENT'];

  function CustomDetails($resource,localeMapper,ENVIRONMENT) {

    return $resource(
      ENVIRONMENT.SERVICE_URI + ':locale/custom-details/:id/:partyType' + ENVIRONMENT.SERVICE_EXT,
      {
    	  id: '@id',
    	  partyType: '@partyType',
          locale: function(){ return localeMapper.getCurrentISOCode(); }   	     	  
      },
      {        
    	  query:  { method:'GET', isArray:true }
      }
    );

  }

})();
