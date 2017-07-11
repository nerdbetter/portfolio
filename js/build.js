('use strict');

function Project(preview, name, src, languages){
  this.preview = preview;
  this.name = name;
  this.source = src;
  this.languages = languages;
  this.authors = authors;
};

Project.prototype.toHtml = function() {
  var $Projects = $('article.template').clone();
  $Projects.toggleClass('template');
};
