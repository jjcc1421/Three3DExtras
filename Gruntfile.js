

module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-wiredep');
    grunt.loadNpmTasks('grunt-auto-install');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-include-source');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.initConfig({
        wiredep: {
            task: {
                src: ['app/index.html']
            }
        },
        auto_install: {
            subdir: {
                options: {
                    cwd: '',
                    stderr: false,
                    failOnError: false,
                    npm: true,
                    bower: true
                }
            }
        },
        open: {
            dev: {
                path: 'http://localhost',
                //app: 'start chrome --incognito'
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'RepresentacionSVE/WebContent/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'release/css',
                    ext: '.min.css'
                },
                    {
                        'release/build.css': ['release/css/*.css']
                    }
                ]
            }
        },
        includeSource: {
            options: {
                basePath: 'app',
                baseUrl: '',
            },
            dev: {
                //basePath:'',
                files: {
                    'app/index.html': 'app/index.html'
                }
            },
        },
        uglify: {
            options: {
                compress: {
                    drop_console: true
                }
            },
            my_target: {
                files: {
                    'three3DExtras.min.js': [
                        'app/three3DExtras.js',
                        'app/tubeLine.js'
                    ],
                }
            }
        },
        default: {
            task: {

            }
        }
    });


    grunt.registerTask('default', ['wiredep', 'includeSource:dev']);
    grunt.registerTask('dist', ['uglify']);

};