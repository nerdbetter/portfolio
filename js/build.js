('use strict');

var projects = [];

function Project(rawDataObj){
  this.preview = rawDataObj.preview;
  this.title = rawDataObj.title;
  this.source = rawDataObj.source;
  this.languages = rawDataObj.languages;
  this.authors = rawDataObj.authors;
  this.description = rawDataObj.description;
};

Project.prototype.toHtml = function() {
  var $newProject = $('article.template').clone();
  $newProject.toggleClass('template');

  $newProject.find('a').attr(this.source);
  $newProject.find('href').text(this.source);
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
