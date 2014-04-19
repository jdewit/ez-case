module.exports = function(config) {
  config.set({
    basePath: '',

    frameworks: ['mocha', 'chai'],

    files: [
      // libraries
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'src/ez-case.js',

      // tests
      'test/*Spec.js'
    ],

    port: 1844,

    browsers: ['Firefox']
  });
};
