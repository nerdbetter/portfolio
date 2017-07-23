'use strict';

var app = app || {};

((module)=>{

  function Project (rawDataObject) {
    for (key in rawDataObject) {
      this[key] = rawDataObject[key];
    }
  };
  Project.all = [];

  Project.prototype.toHtml = function() {
    var template = $('#project-template').html();
    var templateRender = Handlebars.compile(template);
    return templateRender(this);
  };

  Project.prototype.handleShowProjects = function() {
    $.getJSON('data/projectObject.json')
    .then(
      function(data) {
        console.log(data);
        localStorage.setItem('projects', JSON.stringify(data));
        Project.all= project.map(function(element) {
          return new Project(element);
          console.log('projects array being built', Projects.all);
        });
        Project.all = project.map(function(ourNewProjectObject){
          return new Project(ourNewProjectObject);
          $('#projects').append(ourNewProjectObject.toHtml());
        });
      },
    function(err) {
      console.error(err);
    });
  }
  module.project = Project
  //app.Project.handleShowProjects();
})(app);
