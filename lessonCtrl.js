angular.module('directivePractice').controller('lessonCtrl', function($scope){

  $scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];
  $scope.announceDay = function announceDay(lesson, day) {
    alert(lesson + ' is active on ' + day + '.');
  }
})
