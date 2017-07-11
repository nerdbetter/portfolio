('use strict');

var projects = [];
function Project(preview, title, src, languages, authors, description){
  this.preview = rawData.preview;
  this.title = rawData.title;
  this.source = rawData.source;
  this.languages = rawData.languages;
  this.authors = rawData.authors;
  this.description = rawData.description;
};

Project.prototype.toHtml = function() {
  var $Projects = $('article.template').clone();
  $Projects.toggleClass('template');


};
