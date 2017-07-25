'use strict';
var app = app || {};

page('/', app.homeController.showHome);
page('/about', app.aboutController.showAbout);
page('/project', app.projectController.showProject);
page('*', function(){
  $('body').text('Not Found');
});
page();
