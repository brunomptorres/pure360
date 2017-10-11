function inboxListCtrl ($scope, $state) {

  $scope.goTo = (id) => {
    $state.go('email', {
      id: id
    });
  };

}

module.exports = {
  template: require('./inbox-list.html'),
  controller: inboxListCtrl,
  bindings: {
    emails: '='
  }
}
