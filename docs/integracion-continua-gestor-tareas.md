# Integración Continua y gestor de tareas

## Sistema de Integración Continua

Como sistema de Integración continua he elegido Travis CI, ya que es gratuito para proyectos públicos, se integra fácilmente con los repositorios de GitHub y soporta muchos lenguajes facilitando la configuración que se realiza a través de un fichero de configuración YAML. Este fichero se puede ver [aquí](.travis.yaml). Se comprueba solo la versión 15 de Node, ya que con las anteriores no funciona la aplicación. Se ha añadido el badge de Travis en la parte superior del README.

## Sistema de Integración Continua adicional

Otro sistema de Integración Continua que he elegido es CircleCI, puesto que es fácil de usar, se integra fácilmente con los repositorios de GitHub, proporciona muchas imágenes que contienen compiladores de los lenguajes más populares. Además, permite usar imágenes de docker de forma fácil y ofrece un plan gratuito. El fichero de configuración también se realiza en YAML y se puede ver [aquí](.circleci/config.yml). Se ha añadido el badge de CircleCI en la parte superior del README.

## Uso del gestor de tareas

En los dos sistemas de integración continua se utiliza el gestor de tareas Grunt.

## Uso de contenedores

En el fichero de configuración de CircleCI se utiliza el contenedor Docker del repositorio.
