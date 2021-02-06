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
      usuarios: {
        args: ['src/usuarios/ServidorUsuarios.js']
      },
      administradoresTiendas: {
        args: ['src/administradores-tiendas/ServidorAdministradoresTiendas.js']
      },
      tiendas: {
        args: ['src/tiendas/ServidorTiendas.js']
      },
      opiniones: {
        args: ['src/opiniones/ServidorOpiniones.js']
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
  grunt.registerTask("run-usuarios", ["ts", "run:usuarios"]);
  grunt.registerTask("run-administradores-tiendas", ["ts", "run:administradoresTiendas"]);
  grunt.registerTask("run-tiendas", ["ts", "run:tiendas"]);
  grunt.registerTask("run-opiniones", ["ts", "run:opiniones"]);
};
