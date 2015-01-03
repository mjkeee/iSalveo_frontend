var app = angular.module('iSalveo',['ngRoute']);
app.config(function ($routeProvider){
  $routeProvider.
  when('/',{
  	templateUrl:'partials/home.ejs'}).
  when('/forum',{
  	templateUrl:'partials/forum.ejs'}).
  when('/devices', {
  templateUrl:'partials/devices.ejs'}).
  when('/ihealth',{
  	templateUrl:'partials/ihealth.ejs'}).
  when('/information',{
  	templateUrl:'partials/information.ejs'}).
  when('/contact', {
  templateUrl:'partials/contact.ejs'}).
  when('/about',{
  	templateUrl:'partials/about.ejs'}).

  otherwise({
  	redirectTo:'/', template:'partials/home.ejs'})
});

app.controller('mainController',function ($scope) {

$scope.message = "shit";

});