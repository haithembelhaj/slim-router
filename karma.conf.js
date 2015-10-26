'use strict';

module.exports = function (config) {

  config.set({

    basePath: '',

    frameworks: ['mocha', 'chai', 'sinon'],

    files: [
      'dist/router.js',
      'test/*.js'
    ],

    reporters: ['progress'],

    port: 9876,
    colors: true,
    autoWatch: true,
    singleRun: false,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    browsers: ['PhantomJS']

  });
};