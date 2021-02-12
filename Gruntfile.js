module.exports = function (grunt) {
  grunt.initConfig({
    ts: {
      default: {
        src: ["src/**/*.ts"]
      },
    },
    mochaTest: {
      test: {
        src: ['src/**/test/*.js']
      }
    },
    run: {
      default: {
        options: {
          itterable: true
        },
        args: ['src/index.js']
      }
    }
  });
  grunt.loadNpmTasks("grunt-ts");
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-run');
  
  grunt.registerTask("default", ["ts", 'mochaTest']);
  grunt.registerTask("test", ["ts", 'mochaTest']);
  grunt.registerTask("build", ["ts"]);
  grunt.registerTask("install", []);
};
