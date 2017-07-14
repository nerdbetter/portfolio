('use strict');

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

rawData.forEach(function(projectObject) {
  projects.push(new Project(projectObject));
  console.log(projects);
});

projects.forEach(function(project) {
  console.log(project);
  $('#projects').append(project.toHtml());

});
