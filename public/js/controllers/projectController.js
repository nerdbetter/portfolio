'use strict';
var app = app || {};

(function(module) {
  const projectController = {};

  projectController.showProject = () => {
    $('.tab-content').hide();
    $('#projects').fadeIn();
  }
  module.projectController = projectController;
})(app);
