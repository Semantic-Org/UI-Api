var
  where = 'client' // Adds files only to the client
;

Package.describe({
  name    : 'semantic:ui-api',
  summary : 'Semantic UI - Api (official): Single component release of api',
  version : '1.9.2',
  git     : 'git://github.com/Semantic-Org/UI-Api.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    
  ], where);
});
