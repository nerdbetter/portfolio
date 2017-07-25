'use strict';
var app = app || {};

(function(module) {
  const homeController = {};

  homeController.showHome = () => {
    var activeTab = $(this).data('content');
    console.log(activeTab);
    $('.tab-content').fadeOut();
    var makeIDforTab = '#' + activeTab;
    $(makeIDforTab).fadeIn();
  }
  module.homeController = homeController;
})(app);
