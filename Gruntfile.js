module.exports = function (grunt) {
  grunt.initConfig({
    ts: {
      default: {
        src: ["**/*.ts", "!node_modules/**/*.ts"]
      },
    },
    mochaTest: {
      test: {
        src: ['src/test/**/*.js']
      }
    }
  });
  grunt.loadNpmTasks("grunt-ts");
  grunt.loadNpmTasks('grunt-mocha-test');
  
  grunt.registerTask("default", ["ts", 'mochaTest']);
  grunt.registerTask("test", ["ts", 'mochaTest']);
  grunt.registerTask("compile", ["ts"]);
};
