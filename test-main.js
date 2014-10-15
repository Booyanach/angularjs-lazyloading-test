var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

var pathToModule = function(path) {
  return path.replace(/^\/base\//, '').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function(file) {
  console.log(file);
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    allTestFiles.push(pathToModule(file));
  }
});

require.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base/app',
  paths: {
    'd3': '../scripts/d3',
    'jquery': '../scripts/jquery',
    'angular': '../scripts/angular',
    'domReady': '../scripts/domReady',
    'stacktrace': '../scripts/stacktrace',
    'angularRoute': '../scripts/angular-route',
    'angularAnimate': '../scripts/angular-animate',

    // Modules
    'servicesModule': './services/module',
    'directivesModule': './directives/module',
    'controllersModule': './controllers/module',
  },

  // dynamically load all test files
  deps: allTestFiles,

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
});
