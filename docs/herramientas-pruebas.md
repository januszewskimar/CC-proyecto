#Selección de herramientas de testeo

## Selección del gestor de tareas

Para JavaScript existen dos gestores de tareas principales - Grunt y Gulp. He optado por Grunt, ya que es más fácil y tiene una comunidad de usuarios más grande, por lo cual, se puede solucionar problemas más rápidamente. Cabe destacar que Grunt es mejor para proyectos pequeños y Gulp para proyectos más grandes. Grunt es más lento que Gulp, ya que usa ficheros intermedios y el otro realiza todas las operaciones en la RAM. Sin embargo, por todas las características anteriores, he elegido Grunt.

## Configuración del gestor de tareas

Se ha configurado Grunt para que al ejecutarlo sin parámetros (`grunt`) compile los ficheros y ejecute los test. Lo mismo se alcanza ejecutando grunt test. Si se quiere compilar los ficheros sin ejecutar los test, se ejecuta `grunt compile`. La configuración se encuentra en [este fichero](https://github.com/januszewskimar/shop-safe/blob/main/Gruntfile.js).

## Selección de la biblioteca de aserciones

Para JavaScript existen varias bibliotecas de aserciones como Chai, Must.js o Should.js. En biblioteca estándar de JavaScript también existe una biblioteca de aserciones. He optado por Chai, puesto que es intuitiva pudiendo utilizarse comandos como assert, expect o should para especificar aserciones.

## Selección del marco de pruebas

Los marcos de pruebas para JavaScript más populares son Mocha y Jasmine. Las dos herramientas son muy similares pero he elegido Mocha, ya que es más popular. Ambas se integran fácilmente con Node.js y permiten el testeo asíncrono. Las dos herramientas permiten realizar el TDD pero en Mocha es más fácil el BDD (en este proyecto se seguirá TDD, ya que no se va a desarrollar el front end). Jasmine contiene una biblioteca de aserciones y Mocha no, por lo cual, es necesario instalar una o usar la estándar de JavaScript (en este caso no supone un problema).
