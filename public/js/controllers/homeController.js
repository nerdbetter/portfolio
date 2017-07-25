'use strict';
var app = app || {};

(function(module) {
  const homeController = {};

  homeController.showHome = () => {
    $('.tab-content').hide();
    $('#projects').fadeIn();
  }
  module.homeController = homeController;
})(app);
