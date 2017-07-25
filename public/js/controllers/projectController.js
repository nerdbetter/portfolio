'use strict';
var app = app || {};

(function(module) {
  const projectController = {};

  projectController.showProject = () => {
    var activeTab = $(this).data('content');
    console.log(activeTab);
    $('.tab-content').fadeOut();
    var makeIDforTab = '#' + activeTab;
    $(makeIDforTab).fadeIn();
    //$(this).toggleClass('hideActive');
    app.Project.showProjects();

  }
  module.projectController = projectController;
})(app);
