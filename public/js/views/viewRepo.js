
'use strict';
var app = app || {};

(function(module) {
  const repoView = {};

  const ui = function() {
    let $projects = $('#projects');

    $projects.find('ul').empty();
  };
  var template = $('#repo-template').html();
  const render = Handlebars.compile(template);
  console.log(render);

  repoView.index = function() {
    ui();
    $('#projects ul').append(
      app.repos.with('name').map(render)
    );
  };

  module.repoView = repoView;
})(app);
