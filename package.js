Package.describe({
  name: 'zephraph:namespace',
  summary: 'A simple javascript namespacing utility',
  version: '1.2.1',
  git: 'https://github.com/zephraph/meteor-namespace.git'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');
  api.use('underscore');
  api.addFiles('namespace.js');
  api.addFiles('meteor-functions.js');
  api.export('Namespace');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('zephraph:namespace');
  api.addFiles('tests.js');
});
