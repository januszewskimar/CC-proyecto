# shop-safe

[![Travis CI - Build Status](https://travis-ci.com/januszewskimar/shop-safe.svg?branch=main)](https://travis-ci.com/januszewskimar/shop-safe)
[![CircleCI - Status]](https://circleci.com/gh/januszewskimar/shop-safe.svg?style=svg))

Repositorio con el proyecto realizado en la asignatura Cloud Computing del Máster en Ingeniería Informática por la Universidad de Granada.

## Problema
Hoy día hay muchas personas que desean realizar compras en línea. También existe una gran cantidad de tiendas cuya fiabilidad desconocen. Los usuarios quisieran conocer las opiniones de otras personas que ya han realizado compras en una determinada tienda para saber si esta es de fiar. Por otro lado, las tiendas quisieran poder defenderse públicamente y solicitar más información a los clientes con el fin de mejorar el servicio. Se desea desarrollar un sistema que permita a los clientes leer y publicar opiniones sobre tiendas y que las tiendas puedan responder a dichas opiniones.


## Cómo compilar el proyecto y ejecutar los test

* Clonar el repositorio
* Teniendo npm instalado ejecutar `npm install -g grunt-cli` y después `npm install`
* Para compilar los ficheros y ejecutar los test hay que ejecutar `grunt` o `grunt test`. Para compilar sin ejecutar los test se ejecuta `grunt compile`


## Sistema de Integración Continua

Como sistema de Integración continua he elegido Travis CI, ya que es gratuito para proyectos públicos, se integra fácilmente con los repositorios de GitHub y soporta muchos lenguajes facilitando la configuración que se realiza a través de un fichero de configuración YAML. Este fichero se puede ver [aquí](.travis.yaml). Se comprueba solo la versión 15 de Node, ya que con las anteriores no funciona la aplicación. Se ha añadido el badge de Travis en la parte superior del README.

## Sistema de Integración Continua adicional

Otro sistema de Integración Continua que he elegido es CircleCI, puesto que es fácil de usar, se integra fácilmente con los repositorios de GitHub, proporciona muchas imágenes que contienen compiladores de los lenguajes más populares. Además, permite usar imágenes de docker de forma fácil y ofrece un plan gratuito. El fichero de configuración también se realiza en YAML y se puede ver [aquí](.circleci/config.yml). Se ha añadido el badge de CircleCI en la parte superior del README.

## Uso del gestor de tareas

En los dos sistemas de integración continua se utiliza el gestor de tareas Grunt.

## Uso de contenedores

En el fichero de configuración de CircleCI se utiliza el contenedor Docker del repositorio.

## Avance en el proyecto

Se ha corregido el Dockerfile de manera que se utiliza el comando USER. Además, ahora no se copian los fuentes. El fichero se puede ver [aquí](Dockerfile).

Se ha implementado la opción de modificar una opinión sobre una tienda existente pudiendo cambiarse tanto la valoración numérica como el mensaje. Además, se ha programado la funcionalidad de modificar una respuesta a una opinión de una tienda existente. Se ha añadido un campo de fecha de modificación en las dos clases para poder saber cuándo se realizó el último cambio.

Ficheros:
* [Opinion.ts](src/Opinion.ts)
* [Test de Opinion.ts](src/test/Opinion.ts)
* [RespuestaOpinion.ts](src/RespuestaOpinion.ts)
* [Test de RespuestaOpinion.ts](src/test/RespuestaOpinion.ts)

Se ha creado el controlador de usuarios y una excepción que se utiliza cuando se intenta agregar un usuario con el nombre de usuario ya existente.

Ficheros:
* [ControladorUsuario.ts](src/ControladorUsuario.ts)
* [Test de ControladorUsuario.ts](src/test/ControladorUsuario.ts)
* [ExcepcionUsuarioYaExiste.ts](src/ExcepcionUsuarioYaExiste.ts)

## Enlaces a la documentación
* [Configuración de git y GitHub](docs/config-git-github.md)
* [Arquitectura](docs/arquitectura.md)
* [Herramientas](docs/herramientas.md)
* [Herramientas para las pruebas](docs/herramientas-pruebas.md)
* [Historias de usuario](https://github.com/januszewskimar/CC-proyecto/blob/main/docs/historias-usuario.md)
* [Planificación](https://github.com/januszewskimar/CC-proyecto/blob/main/docs/planificacion.md)
* [Contendores](docs/contenedores.md)
