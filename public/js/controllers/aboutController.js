'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  aboutController.showAbout = () => {
    var activeTab = $(this).data('content');
    console.log(activeTab);
    $('.tab-content').fadeOut();
    var makeIDforTab = '#' + activeTab;
    $(makeIDforTab).fadeIn();
  }
  module.aboutController = aboutController;
})(app);
