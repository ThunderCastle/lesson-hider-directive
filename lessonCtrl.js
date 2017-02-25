angular.module('directivePractice').controller('lessonCtrl', function($scope){

  $scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];
  $scope.dayAlert = function announceDay(lesson, day) {
    return lesson + ' is active on ' + day + '.';
  }
})
