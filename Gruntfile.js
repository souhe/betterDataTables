module.exports = function (grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),   
        uglify: {
            options: {
            },
            dist: {
                files: {
                    'betterDataTables.min.js':'betterDataTables.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['uglify']);
};
