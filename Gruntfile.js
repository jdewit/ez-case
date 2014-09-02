'use_strict';

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    bump: {
      options: {
        files: ['package.json', 'bower.json'],
        updateConfigs: [],
        commit: true,
        push: false,
        commitMessage: 'Release v%VERSION%',
        commitFiles: ['package.json', 'bower.json']
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      src: {
        files: {
          src: ['src/*.js']
        },
      }
    },
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        background: true,
        singleRun: false
      },
      singleRun: {
        configFile: 'karma.conf.js',
        singleRun: true
      }
    },
    uglify: {
      options: {
        mangle: true,
        compile: true,
        compress: true
      },
      dist: {
        files: {
          'dist/ez-case.min.js': ['src/*.js']
        }
      }
    },
    watch: {
      dev: {
        files: ['Gruntfile.js', 'src/*', 'test/**/*Spec.js'],
        tasks: ['jshint', 'uglify', 'karma:unit:run']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-bump');
  grunt.loadNpmTasks('grunt-karma');

  grunt.registerTask('default', ['jshint', 'uglify', 'karma:singleRun']);
  grunt.registerTask('dev', ['karma:unit:start', 'watch']);
  grunt.registerTask('test', ['karma:singleRun']);
};
