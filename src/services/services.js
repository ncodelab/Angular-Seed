import config from './config-service';

const services = angular.module('seed.services', []);
services.factory('configService', config);
export default services;
