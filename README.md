# shop-safe
Repositorio con el proyecto realizado en la asignatura Cloud Computing del Máster en Ingeniería Informática por la Universidad de Granada.

## Problema
Hoy día hay muchas personas que desean realizar compras en línea. También existe una gran cantidad de tiendas cuya fiabilidad desconocen. Los usuarios quisieran conocer las opiniones de otras personas que ya han realizado compras en una determinada tienda para saber si esta es de fiar. Por otro lado, las tiendas quisieran poder defenderse públicamente y solicitar más información a los clientes con el fin de mejorar el servicio. Se desea desarrollar un sistema que permita a los clientes leer y publicar opiniones sobre tiendas y que las tiendas puedan responder a dichas opiniones.

## Selección del gestor de tareas

Para JavaScript existen dos gestores de tareas principales - Grunt y Gulp. He optado por Grunt, ya que es más fácil y tiene una comunidad de usuarios más grande, por lo cual, se puede solucionar problemas más rápidamente. Cabe destacar que Grunt es mejor para proyectos pequeños y Gulp para proyectos más grandes. Grunt es más lento que Gulp, ya que usa ficheros intermedios y el otro realiza todas las operaciones en la RAM. Sin embargo, por todas las características anteriores, he elegido Grunt.

## Configuración del gestor de tareas

Se ha configurado Grunt para que al ejecutarlo sin parámetros (`grunt`) compile los ficheros y ejecute los test. Lo mismo se alcanza ejecutando grunt test. Si se quiere compilar los ficheros sin ejecutar los test, se ejecuta `grunt compile`. La configuración se encuentra en [este fichero](Gruntfile.js).

## Selección de la biblioteca de aserciones

Para JavaScript existen varias bibliotecas de aserciones como Chai, Must.js o Should.js. En biblioteca estándar de JavaScript también existe una biblioteca de aserciones. He optado por Chai, puesto que es intuitiva pudiendo utilizarse comandos como assert, expect o should para especificar aserciones.

## Selección del marco de pruebas

Los marcos de pruebas para JavaScript más populares son Mocha y Jasmine. Las dos herramientas son muy similares pero he elegido Mocha, ya que es más popular. Ambas se integran fácilmente con Node.js y permiten el testeo asíncrono. Las dos herramientas permiten realizar el TDD pero en Mocha es más fácil el BDD (en este proyecto se seguirá TDD, ya que no se va a desarrollar el front end). Jasmine contiene una biblioteca de aserciones y Mocha no, por lo cual, es necesario instalar una o usar la estándar de JavaScript (en este caso no supone un problema).

## Clases desarrolladas

* [Usuario.ts](/src/Usuario.ts)
* [AdministradorTienda.ts](/src/AdministradorTienda.ts)
* [Tienda.ts](/src/Tienda.ts)
* [Opinion.ts](/src/Opinion.ts)
* [ControladorOpiniones.ts](/src/ControladorOpiniones.ts)
* [ValidacionDatos.ts](/src/ValidacionDatos.ts)

Tests:
* [Usuario.ts](/src/test/Usuario.ts)
* [AdministradorTienda.ts](/src/test/AdministradorTienda.ts)
* [Tienda.ts](/src/test/Tienda.ts)
* [Opinion.ts](/src/test/Opinion.ts)
* [ControladorOpiniones.ts](/src/test/ControladorOpiniones.ts)

## Cómo compilar el proyecto y ejecutar los test

* Clonar el repositorio
* Teniendo npm instalado ejecutar `npm install -g grunt-cli` y después `npm install`
* Para compilar los ficheros y ejecutar los test hay que ejecutar `grunt` o `grunt test`. Para compilar sin ejecutar los test se ejecuta `grunt compile`

## Enlaces a la documentación
* [Configuración de git y GitHub](https://github.com/januszewskimar/CC-proyecto/blob/main/docs/config-git-github.md)
* [Arquitectura](https://github.com/januszewskimar/CC-proyecto/blob/main/docs/arquitectura.md)
* [Herramientas](https://github.com/januszewskimar/CC-proyecto/blob/main/docs/herramientas.md)
* [Historias de usuario](https://github.com/januszewskimar/CC-proyecto/blob/main/docs/historias-usuario.md)
* [Planificación](https://github.com/januszewskimar/CC-proyecto/blob/main/docs/planificacion.md)
