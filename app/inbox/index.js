import angular from 'angular'
import uirouter from 'angular-ui-router'

import routes from './inbox.routes.js'
import inboxList from './inbox-list/inbox-list.component'
import InboxService from './inbox.service'

export default angular.module('pure360-challenge.inbox', [uirouter])
  .config(routes)
  .component('inboxList', inboxList)
  .service('InboxService', InboxService)
  .name
