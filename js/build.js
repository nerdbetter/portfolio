('use strict');

var projects = [];

function Project (rawDataObject) {
  for (key in rawDataObject) {
    this[key] = rawDataObject[key];
  }
};

Project.prototype.toHtml = function() {
  var $newProject = $('article.template').clone();
  $newProject.toggleClass('template');

  $newProject.find('href').attr('href', this.source);
  $newProject.find('a').text(this.source);
  $newProject.find('h1').text(this.title);
  $newProject.find('h2').text(this.authors);
  $newProject.find('h3').text(this.languages);
  $newProject.find('p').text(this.description);
  return $newProject;
};

rawData.forEach(function(projectObject) {
  projects.push(new Project(projectObject));
  console.log(projects);
});

projects.forEach(function(project) {
  console.log(project);
  $('#projects').append(project.toHtml());
});
