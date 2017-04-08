import angular from 'angular';
import mainComp from './components/main/main.js';

angular.module('main', [])
       .component('mainComponent', mainComp);

angular.bootstrap(document, ['main']);
