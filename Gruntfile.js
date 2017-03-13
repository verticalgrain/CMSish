'use strict';
module.exports = function(grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.client %>;' +
      '*/\n',
    uglify: {
      options: {
        banner: '<%= banner %>',
        sourceMap: true,
        beautify: false,
        mangle: true,
        compress: {
          drop_console: false,
          drop_debugger: false
        }
      },
      all: {
        files: {
          'dist/cmsish.min.js': [
            'src/js/cmsish.js',
            'src/js/vendor/tabletop.min.js',
            'src/js/vendor/handlebars.min.js'
          ]
        }
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish'),
        force: true
      },
      all: {
        src: [
          'Gruntfile.js',
          'src/js/modules'
        ]
      }
    },
    modernizr: {
      dist: {
        // [REQUIRED] Path to the build you're using for development.
        devFile: 'remote',
        outputFile: 'src/js/vendor/modernizr-custom.js',
        extra: {
          shiv: true,
          printshiv: false,
          load: true,
          mq: false,
          cssclasses: true
        },
        extensibility: {
          addtest : false,
          prefixed : false,
          teststyles : false,
          testprops : false,
          testallprops : false,
          hasevents : false,
          prefixes : false,
          domprefixes : false,
          cssclassprefix: ''
        },
        //Add any test not in your JS/CSS here:
        tests: [],
        files: {
          src: [
            'src/js/{,*/}*.js',
          ]
        },
        matchCommunityTests: true,
        // Have custom Modernizr tests? Add paths to their location here.
        customTests: []
      }
    },

    exec: {
      sassyplate: {
        cmd: function(){
          var commands = [
            'git clone https://github.com/domain7/sassyplate.git',
            'grunt copy:sassyplate',
            'rm -rf sassyplate'
          ];
          return commands.join(' && ');
        }
      }
    },

    copy: {
      sassyplate: {
        files: [{
          expand: true,
          cwd: 'sassyplate',
          src: ['**'],
          dest: 'src/'
        }]
      }
    },

    watch: {
      options: {
        livereload: true
      },
      js: {
        files: ['src/js/{,*/}*.js'],
        tasks: ['js']
      }
    }
  });

  //Tasks
  grunt.registerTask('default', ['js', 'svgstore']);
  grunt.registerTask('js', ['jshint', 'uglify']);
  grunt.registerTask('sassyplate', ['exec:sassyplate']);

};

