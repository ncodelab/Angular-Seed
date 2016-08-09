export default ['$scope', '$state', 'configService',
  ($scope, $state, configService) => {

    $scope.message = 'Hello Angular Seed';
    $scope.messageFromService = configService.get().data;
  }];
