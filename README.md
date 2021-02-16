# shop-safe

[![Travis CI - Build Status](https://travis-ci.com/januszewskimar/shop-safe.svg?branch=main)](https://travis-ci.com/januszewskimar/shop-safe)
[![CircleCI - Status](https://circleci.com/gh/januszewskimar/shop-safe.svg?style=svg)](https://circleci.com/gh/januszewskimar/shop-safe)

Repositorio con el proyecto realizado en la asignatura Cloud Computing del Máster en Ingeniería Informática por la Universidad de Granada.

## Problema
Hoy día hay muchas personas que desean realizar compras en línea. También existe una gran cantidad de tiendas cuya fiabilidad desconocen. Los usuarios quisieran conocer las opiniones de otras personas que ya han realizado compras en una determinada tienda para saber si esta es de fiar. Por otro lado, las tiendas quisieran poder defenderse públicamente y solicitar más información a los clientes con el fin de mejorar el servicio. Se desea desarrollar un sistema que permita a los clientes leer y publicar opiniones sobre tiendas y que las tiendas puedan responder a dichas opiniones.

## Documentación y justificación de la estructura del clúster

El clúster está compuesto por 3 contenedores:

* servicio - es la aplicación desarrollada
* mongodb - almacena los datos
* logstash - recibe los logs

La estructura es adecuada, puesto que hay un contenedor de la aplicación (se ha cambiado la estructura de microservicios a un único servicio). El contenedor servicio se comunica con la base de datos para obtener o guardar datos. Además, envía los datos de cada petición que recibe al logger para poder almacenarlos.

## Documentación y justificación de la configuración de cada uno de los contenedores que lo componen

### servicio

En este caso he utilizado una parte del contenedor oficial de nodejs. He suprimido las partes no necesarias como la instalación de yarn. He añadido una herramienta llamada docker-compose-wait que recibe un nombre de servidor con un puerto y hasta que dicho servidor no conteste a la petición, el programa no acaba. Esto se hace para no arrancar el servidor principal antes de que arranque la base de datos o el logger. Existen varias herramientas de este tipo, sin embargo, he elegido esta, dado que permite que se ejecute en el CMD sin parámetros. Estos parámetros se especifican en el fichero de composición como variables de entorno. Esto permite que si en el futuro se crea un contenedor más, no haya que editar el Dockerfile sino editar la variable de entorno en el fichero de composición añadiendo los datos del nuevo servidor si es necesario.

Además, se define un volumen con los ficheros fuentes. Esto permite que se pueda cambiar los ficheros de código fuente sin tener que reconstruir el contenedor para que los cambios entren en vigor. Basta con reiniciarlo.

[Dockerfile](servicio.Dockerfile)
[docker-compose.yml](docker-compose.yml)

### mongodb

El contenedor usa la imagen [mongo](https://hub.docker.com/_/mongo). Se le pasa mediante variables de entorno el usuario y contraseña del usuario que tendrá permisos root.

[docker-compose.yml](docker-compose.yml)

### logstash

Este contenedor utiliza la imagen [bitnami/logstash](https://hub.docker.com/r/bitnami/logstash/). Se usa una variable de entorno LOGSTASH_CONF_STRING que se almacena en el [.env](.env) como CONFIG_LOGSTASH. Se establece que la comunicación es mediante el protocolo TCP, el puerto de comunicación es el 8081 y los datos se reciben en formato JSON. La salida se realiza mediante salida estándar.

[docker-compose.yml](docker-compose.yml)


## Documentación del fichero de composición

[docker-compose.yml](docker-compose.yml)

Se utiliza una red de tipo puente a la que están conectados todos los contenedores. Este tipo de red permite la resolución de DNS automática entre los contenedores. Solo se expone el puerto en el contenedor servicio, puesto que no es necesario conectarse desde fuera al logger ni a la base de datos.

En el fichero de composición se utilizan variables de entorno guardadas en el fichero [.env](.env), lo que permite que mediante el cambio de una variable se pueda cambiar la configuración tanto del servidor como del cliente.

## Testeo del mismo

Para testear la composición, se ha creado un fichero de test usando chai-http. Se hacen peticiones para testear las rutas de la API. [Fichero](src/test/Composicion.ts).

## Adicional

Se ha modificado todas las funciones para interactuar con la base de datos. Sin embargo, se ha mantenido la opción del almacén local. Si el objeto de la base de datos es null, los cambios se realizan localmente y en otro caso se hacen en la base de datos. [Commit](https://github.com/januszewskimar/shop-safe/commit/2f941883c210fc7a4fcaafcfaafbcab73e15d660)

Según los comentarios de la corrección, se ha cambiado la arquitectura de microservicios a un único servicio. [Commit código](https://github.com/januszewskimar/shop-safe/commit/2c986d2c18a71f86f75c15e1676ccdf5f9fc7916) [Commit Dockerfiles](https://github.com/januszewskimar/shop-safe/commit/3b830914cdf6e89158b104ee4f1acb5ac684f6e8)

Se han cambiado las variables en el heap por constantes donde hacía falta. [Commit](https://github.com/januszewskimar/shop-safe/commit/94c9c01189919cb30cd17066707d04964a9b6b14)

Además, se han corregido los códigos de respuesta en la API. [Commit](https://github.com/januszewskimar/shop-safe/commit/9f489c062a860ecb5ee1c3e617d92fe2d00c3e36)


## Enlaces a la documentación
* [Configuración de git y GitHub](docs/config-git-github.md)
* [Arquitectura](docs/arquitectura.md)
* [Herramientas](docs/herramientas.md)
* [Herramientas para las pruebas](docs/herramientas-pruebas.md)
* [Historias de usuario](https://github.com/januszewskimar/CC-proyecto/blob/main/docs/historias-usuario.md)
* [Planificación](https://github.com/januszewskimar/CC-proyecto/blob/main/docs/planificacion.md)
* [Contendores](docs/contenedores.md)
* [Integración continua y gestor de tareas](docs/integracion-continua-gestor-tareas.md)
* [Microservicio](docs/microservicio.md)
