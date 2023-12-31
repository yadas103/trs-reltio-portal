/**
 * @ngdoc overview
 * @name gcms.components.modal.controller:ModalDefaultCtrl
 *
 * @description
 * Represents a default modal controller.
 */
(function () {
  'use strict';

  angular
    .module('dctmNgFileManager')
    .controller('ModalDefaultCtrl2', ModalDefault);

    ModalDefault.$inject = ['$scope','$modalInstance','$timeout','item'];

    /**
     * @ngdoc method
     * @name ModalDefault
     * @methodOf gcms.components.modal.controller:ModalDefaultCtrl
     * @description Constructor for the default modal controller
     * @param {object} $scope An object that refers to the application model
     * @param {object} $modalInstance An object which represents a modal window instance
     * @param {object} item The object received from the modal directive controller
     */
    function ModalDefault($scope,$modalInstance,$timeout, item) {
    	
      $scope.item = item;
      $scope.maxLength = 100;
      
      
      $('.popover').hide();
      
      /**
       * @ngdoc method
       * @name ok
       * @methodOf gcms.components.modal.controller:ModalDefaultCtrl
       * @description
       * Closes the modal and returns the item
       */
      $scope.ok = function (item) {
        $scope.item  = (typeof item === 'undefined') ? $scope.item : item;
        $modalInstance.close($scope.item);
      };

     /**
       * @ngdoc method
       * @name cancel
       * @methodOf gcms.components.modal.controller:ModalDefaultCtrl
       * @description
       * Dismisses the modal
       */
      $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
      };
    }
})();
