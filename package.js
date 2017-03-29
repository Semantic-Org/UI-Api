
Package.describe({
  name    : 'semantic:ui-api',
  summary : 'Semantic UI - Api: Single component release',
  version : '2.2.10',
  git     : 'git://github.com/Semantic-Org/UI-Api.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    'api.js'
  ], 'client');
});
