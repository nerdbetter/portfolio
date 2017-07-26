'use strict';
var app = app || {};

(function(module) {
  const repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    $.ajax({
      url: 'http://api.github.com/users/nerdbetter/repos',
      method: 'GET',

    })
      .then(
        data => {
          data.forEach(repo => repos.all.push(repo));
          callback();
        }
      );
  };

  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(app);
