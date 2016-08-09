export default ['$scope', '$state', 'configService',
  ($scope, $state, configService) => {

    $scope.page = {
      'message': () => `Page 2, id = ${$state.params.id}`
    };
  }];
