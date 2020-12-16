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

## Selección de imagen base

Se va a elegir la imagen base entre las siguientes opciones:
* imagen propia - Alpine
* imagen oficial de Node.js - current-slim (stretch-slim)
* imagen oficial de Node.js - latest (stretch)
* imagen oficial de Node.js - buster-slim
* imagen oficial de Node.js - buster
* imagen oficial de Node.js - alpine

![Tamaño de imágenes docker Node.js](docs/imgs/docker-tamanio-imagenes.png)

Como se puede ver, la de menor tamaño es la propia, por lo cual, la voy a usar. Para elaborarla, he reutilizado la configuración oficial de alpine quitando la parte correspondiente a la instalación de yarn. No he usado apk add, ya que en el repositorio de Alpine no están las versiones de Node.js y npm más recientes. Además, en la implementación que he elegido es posible seleccionar la versión deseada fácilmente editando la variable de entorno.

## Dockerfile

En la imagen propia, respecto la configuración oficial, he eliminando la parte correspondiente a la instalación de yarn, ya que no lo necesito. He añadido las instrucciones de copia del fichero de Grunt y de los ficheros de código fuente. He creado un fichero [.dockerignore](.dockerignore) en el que se ignoran las carpetas node_modules y los ficheros con la extensión .js y .js.map dentro de la carpeta src (el fichero Gruntfile.js no se ignora). Además, en el Dockerfile he añadido las instrucciones de instalación global de Grunt y de instalación local de las dependencias de package.json. Las instrucciones de RUN se ejecutan en un bloque para evitar la creación de capas innecesarias. Después de instalarse los módulos, los paquetes que eran necesarios para la instalación y no van a ser necesarios más adelante se desinstalan. De la misma manera, se eliminan los ficheros temporales. Está añadida también la etiqueda de encargado del mantenimiento. El comando CMD ejecuta grunt test. El fichero se puede ver [aquí](Dockerfile).

El correcto funcionamiento del contenedor se puede ver en la imagen que viene a continuación:

![Contenedor shop-safe funcionando](docs/imgs/docker-shop-safe-funcionando.png)

## Docker Hub

El contenedor se ha subido a Docker Hub. Para hacerlo, me he registrado en dicha página y he enlazado la cuenta con la de GitHub:

![Docker Hub - cuenta enlazada con GitHub](docs/imgs/contenedores/docker-hub-enlazado-github.png)

Después he creado un repositorio y lo he enlazado con el de GitHub:

![Docker Hub - creación repositorio](docs/imgs/contenedores/docker-hub-creacion-repositorio.png)

He configurado las construcciones automatizadas:

![Docker Hub - automated builds](docs/imgs/contenedores/docker-hub-automated-builds.png)

## GitHub Package Registry

He utilizado GitHub Package Registry como registro alternativo, ya que es gratuito para repositorios públicos, y además, el repositorio de código está en el mismo servicio que el contenedor y están enlazados.

Primero he activado la funcionalidad Improved Container Support en la página de GitHub:

![GitHub Improved Container Support](docs/imgs/contenedores/github-improved-container-support.png)

Después he creado un token para poder realizar gestiones de contenedores:

![GitHub Container Registry Token](docs/imgs/contenedores/github-token-github-packages.png)

Más tarde he iniciado sesión en docker con el token previamente creado:

![Docker inicio sesión en GitHub Packages](docs/imgs/contenedores/docker-login-github-packages.png)

Al final puse un tag correspondiente al contenedor y lo subí:

![Contenedor subido a GitHub Packages](docs/imgs/contenedores/docker-github-packages-push.png)

## Avance del proyecto

Se han implementado excepciones propias en vez de objetos de la clase Error que se usaban antes:
* [ExcepcionNombreUsuarioIncorrecto.ts](src/ExcepcionNombreUsuarioIncorrecto.ts)
* [ExcepcionCorreoIncorrecto.ts](src/ExcepcionCorreoIncorrecto.ts)
* [ExcepcionTelefonoIncorrecto.ts](src/ExcepcionTelefonoIncorrecto.ts)

Se han empleado las excepciones antes mencionadas en las siguientes clases:
* [Usuario.ts](src/Usuario.ts)
* [AdministradorTienda.ts](src/AdministradorTienda.ts)
* [Tienda.ts](src/Tienda.ts)

Y los test correspondientes:
* [Usuario.ts](src/test/Usuario.ts)
* [AdministradorTienda.ts](src/test/AdministradorTienda.ts)
* [Tienda.ts](src/test/Tienda.ts)

Además, se ha añadido la funcionalidad de contestar a una opinión de un cliente:
* [RespuestaOpinion.ts](src/RespuestaOpinion.ts)
* [ControladorOpiniones.ts](src/ControladorOpiniones.ts)

Y se han escrito los test para dicha funcionalidad:
* [RespuestaOpinion.ts](src/test/RespuestaOpinion.ts)
* [ControladorOpiniones.ts](src/test/ControladorOpiniones.ts)

Adicionalmente, se ha implementado la funcionalidad de conocer la valoración media de una tienda:
* [ControladorOpiniones.ts](src/ControladorOpiniones.ts)
* [ExcepcionNoHayOpiniones.ts](src/ExcepcionNoHayOpiniones.ts)

Y se ha programado el test correspondiente:
* [ControladorOpiniones.ts](src/test/ControladorOpiniones.ts)

## Sistema de Integración Continua

Como sistema de Integración continua he elegido Travis CI, ya que es gratuito para proyectos públicos, se integra fácilmente con los repositorios de GitHub y soporta muchos lenguajes facilitando la configuración que se realiza a través de un fichero de configuración YAML. Este fichero se puede ver [aquí](.travis.yaml). Se comprueba solo la versión 15 de Node, ya que con las anteriores no funciona la aplicación. Se ha añadido el badge de Travis en la parte superior del README.

## Sistema de Integración Continua adicional

Otro sistema de Integración Continua que he elegido es CircleCI, puesto que es fácil de usar, se integra fácilmente con los repositorios de GitHub, proporciona muchas imágenes que contienen compiladores de los lenguajes más populares. Además, permite usar imágenes de docker de forma fácil y ofrece un plan gratuito. El fichero de configuración también se realiza en YAML y se puede ver [aquí](.circleci/config.yml). Se ha añadido el badge de CircleCI en la parte superior del README.

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
