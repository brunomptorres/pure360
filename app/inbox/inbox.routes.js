routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
  .state('inbox', {
    url: '/',
    template: require('./inbox.html'),
    resolve: {
      emails: ['InboxService', (InboxService) => {
        return InboxService.getEmails()
      }]
    }
  })
  .state('email', {
    url: '/email/:id',
    template: require('./email.html'),
    resolve: {
      email: ['$stateParams', 'InboxService', ($stateParams, InboxService) => {
        return InboxService.getEmail($stateParams.id)
      }]
    }
  });
}
