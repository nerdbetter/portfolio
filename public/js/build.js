'use strict';

var app = app || {};

function Project (rawDataObject) {
  for (var key in rawDataObject) {
    this[key] = rawDataObject[key];
  }
}

Project.prototype.toHtml = function() {
  var template = $('#project-template').html();
  var templateRender = Handlebars.compile(template);
  return templateRender(this);
};

Project.all = [];

Project.prototype.handleShowProjects = function() {
  $.getJSON('data/projectObject.json')
  .then(
    function(data) {
      console.log(data);
      localStorage.setItem('projects', JSON.stringify(data));
      Project.all = data.map(function(element) {
        console.log('projects array being built', Project.all);
        return new Project(element);
      });
      Project.all = data.map(function(ourNewProjectObject){
        $('#projects').append(ourNewProjectObject.toHtml());
        return new Project(ourNewProjectObject);
      });
    },
  function(err) {
    console.error(err);
  });
};
