'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  aboutController.showHome = () => {
    $('.tab-content').hide();
    $('#projects').fadeIn();
  }
  module.aboutController = aboutController;
})(app);
