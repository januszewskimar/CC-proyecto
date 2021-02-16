module.exports = function (grunt) {
  grunt.initConfig({
    ts: {
      default: {
        src: ["src/**/*.ts"]
      },
    },
    mochaTest: {
      default: {
        src: ['src/**/test/*.js', '!src/test/Composicion.js']
      },
      composicion: {
        src: ['src/test/Composicion.js']
      }
    },
    run: {
      default: {
        options: {
          itterable: true
        },
        args: ['src/index.js']
      },
    },
  });
  grunt.loadNpmTasks("grunt-ts");
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-run');
  
  grunt.registerTask("default", ["ts", 'mochaTest:default']);
  grunt.registerTask("test", ["ts", 'mochaTest:default']);
  grunt.registerTask("test-composicion", ["ts", 'mochaTest:composicion']);
  grunt.registerTask("build", ["ts"]);
  grunt.registerTask("install", []);
};
