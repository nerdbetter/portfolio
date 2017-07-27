'use strict';
var app = app || {};

(function(module) {
  const projectController = {};

  projectController.showProject = () => {
    app.repos.requestRepos(app.repoView.index);
    app.Project.showProjects();
    $('.tab-content').fadeOut();
    $('#projects').fadeIn();
  }
  module.projectController = projectController;
})(app);
