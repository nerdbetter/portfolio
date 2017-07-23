'use strict';

var app = app || {};

((module)=>{
  var projects = [];

  function Project (rawDataObject) {
    for (key in rawDataObject) {
      this[key] = rawDataObject[key];
    }
  };

  Project.prototype.toHtml = function() {
    var template = $('#project-template').html();
    var templateRender = Handlebars.compile(template);
    return templateRender(this);
  };

  function handleShowProjects() {
    $.getJSON('data/projectObject.json')
    .then(
      function(data) {
        console.log(data);
        localStorage.setItem('projects', JSON.stringify(data));
        data.forEach(function(projectObject) {
          projects.push(new Project(projectObject));
          console.log('projects array being built', projects);
        });
        projects.forEach(function(ourNewProjectObject){
          $('#projects').append(ourNewProjectObject.toHtml());
        });
      },
    function(err) {
      console.error(err);
    });
  }
  module.project = Project
})(app);
