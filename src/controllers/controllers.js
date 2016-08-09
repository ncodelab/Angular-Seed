import app from './app-controller';
import page1 from './page1-controller';
import page2 from './page2-controller';

const controllers = angular.module('seed.controllers', ['ngCookies']);
controllers.controller('app.Controller', app);
controllers.controller('app.Page1Controller', page1);
controllers.controller('app.Page2Controller', page2);
export default controllers;
