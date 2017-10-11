/* Styles */
import '../app/app.less';

/* Framework */
import angular from 'angular';
import AngularAnimate from 'angular-animate';
import AngularTouch from 'angular-touch';
import AngularSanitize from 'angular-sanitize';
import AngularBootstrap from 'angular-ui-bootstrap';
import uirouter from 'angular-ui-router';

import routes from './app.routes'
import inbox from './inbox'

angular.module('pure360-challenge', [
  AngularAnimate,
  AngularTouch,
  AngularSanitize,
  AngularBootstrap,
  uirouter,
  inbox
])
.config(routes);
