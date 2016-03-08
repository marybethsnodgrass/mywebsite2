// 'use strict';

// angular.module('app', ['duScroll']).
//   controller('appCtrl', function($scope, $document) {
//     $scope.spies = []

// .directive('scrollSpy', function($window) {
//   restrict: 'A'
//   controller: ($scope) ->
    
//     # a spyObj has an id, a function to call when it's section is in view,
//     # and a function to call when it's out of sight.
//     # This is created in the second directive
//     function addSpy(spyObj) {
//         $scope.spies.push(spyObj);
//     }
//   link: (scope, elem, attrs) ->
//     spyElems = []
//     scope.$watch 'spies', (spies) ->
//       for spy in spies
//         unless spyElems[spy.id]?
//           spyElems[spy.id] = elem.find('#'+spy.id)

//     $($window).scroll ->
//       highlightSpy = null
//       for spy in scope.spies
//         spy.out()
//         if (pos = spyElems[spy.id].offset().top) - $window.scrollY <= 0
//           spy.pos = pos
//           highlightSpy ?= spy
//           if highlightSpy.pos < spy.pos
//             highlightSpy = spy

//       highlightSpy?.in()

