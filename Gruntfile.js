

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
                src: ['RepresentacionSVE/WebContent/index.html', 'RepresentacionSVE/WebContent/indexTest.html', 'index.html', 'help.html']
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
                //basePath: 'RepresentacionSVE/WebContent/',
                //baseUrl: 'RepresentacionSVE/WebContent/',
            },
            dev: {
                //basePath:'',
                files: {
                    'index.html': 'index.html'
                }
            },
            devHelp: {
                files: {
                    'help.html': 'help.html'
                }
            },
            devFAS: {
                files: {
                    'graficas.html': 'graficas.html'
                }
            },
            dist: {
                //basePath:'',
                files: {
                    'dist.html': 'dist.html'
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
                    'dist/js/sve.min.js': ['bower_components/jquery/dist/jquery.js',
                        'bower_components/bootstrap/dist/js/bootstrap.js',
                        'bower_components/three.js/build/three.js',
                        'bower_components/OrbitControls/index.js',
                        'bower_components/immutable/dist/immutable.js',
                        'assets/js/**/*.js',
                        'bower_components/loaders.css/loaders.css.js',
                        'app/**/*.js'],
                }
            }
        },
        default: {
            task: {

            }
        }
    });


    grunt.registerTask('default', ['wiredep', 'includeSource:dev', 'includeSource:devFAS']);
    grunt.registerTask('graficas', ['includeSource:devGraph']);
    grunt.registerTask('install', ['auto_install', 'wiredep']);
    grunt.registerTask('dist', ['uglify', 'includeSource:dist']);

};