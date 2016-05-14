module.exports = function (grunt) {

    // Displays the elapsed execution time of grunt tasks
    require('time-grunt')(grunt);

    // Load NPM Tasks
    require('load-grunt-tasks')(grunt, ['grunt-*']);

    // Project configuration.
    grunt.initConfig({

        // Store your Package file so you can reference its specific data whenever necessary
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                options: {
                    style: 'compressed',
                },
                files: {
                    'css/style.css': 'css/main.scss'
                }
            },
        },

        // Run: `grunt watch` from command line for this section to take effect
        watch: {
            files: ['css/**/*.scss'],
            tasks: 'default'
        }

    });

    // Default Task
    grunt.registerTask('default', ['sass:dist']);

};
