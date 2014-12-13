module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt)

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: ['*.min.js'],

        uglify: {
            options: {
                preserveComments: false
            },

            main: {
                src: 'colorify.js',
                dest: 'colorify.min.js'
            }
        },

        watch: {
            files: ['colorify.js'],
            tasks: ['uglify:main']
        }
    })

    grunt.registerTask('default', ['uglify'])
}
