# shop-safe
Repositorio con el proyecto realizado en la asignatura Cloud Computing del Máster en Ingeniería Informática por la Universidad de Granada.

## Problema
Hoy día hay muchas personas que desean realizar compras en línea. También existe una gran cantidad de tiendas cuya fiabilidad desconocen. Los usuarios quisieran conocer las opiniones de otras personas que ya han realizado compras en una determinada tienda para saber si esta es de fiar. Por otro lado, las tiendas quisieran poder defenderse públicamente y solicitar más información a los clientes con el fin de mejorar el servicio. Se desea desarrollar un sistema que permita a los clientes leer y publicar opiniones sobre tiendas y que las tiendas puedan responder a dichas opiniones.

## Arquitectura
El sistema se desarrollará en la arquitectura basada en microservicios, ya que se quiere desarrollar módulos independientes para conseguir bajo acoplamiento y mejorar la escalabilidad. Los usuarios se comunicarán con la puerta de enlace API que enviará peticiones a los microservicios correspondientes. La comunicación será asíncrona mediante el modelo solicitud-respuesta, ya que es rápido y seguro. Se utilizarán API basadas en REST tanto para la puerta de enlace como para los microserivicos, puesto que es universal y no obliga a usar tecnologías específicas. Cada microservicio dispondrá de una base de datos separada para conseguir bajo acoplamiento. Los datos se guardarán en almacenes relacionales, ya que en este caso se conoce de antemano su estructura. Se van a desarrollar los siguientes microservicios:

* **Usuarios** - gestionará los datos de los usuarios, es decir, personas particulares que pueden publicar opiniones sobre tiendas.
* **Administradores** - va a gestionar los datos de los administradores de tiendas.
* **Tiendas** - se encargará de gestionar los datos de las tiendas.
* **Opiniones** - a través de este se podrá añadir, modificar y eliminar opiniones de los clientes y respuestas de las tiendas.

## Herramientas

### Lenguaje de programación
Como lenguaje se utilizará JavaScript junto con Node.js, ya que esta combinación es ligera y rápida. Esto se debe a que Node.js está implementado con el motor V8 que compila el código JavaScript en código máquina en vez de interpretarlo en tiempo real. Además, el desarrollo de API de tipo REST en Node.js es muy fácil. Es de código abierto y es usado por las grandes empresas. Tiene una gran comunidad de desarrolladores, lo cual facilita la resolución de problemas.

### Almacén de datos
Como almacén de datos, se utilizará MySQL, puesto que es el sistema gestor de bases de datos más popular en cuanto a Software libre. Es de tipo SQL, por lo cual, se adecua a los datos que estarán estructurados. Existe una API para Node que permite conectarse a una base de datos de este sistema gestor de bases de datos. Además, MySQL proporciona alto rendimiento y tiene una gran comunidad de usuarios.

### Tests
Para realizar test utilizaré Mocha, ya que es gratuito, se integra de forma fácil con Node.js, y además, permite realizar el desarrollo dirigido por test y testeo asíncrono.

### Integración continua
Para las tareas de la integración continua, he optado por Travis, puesto que soporta JavaScript con Node.js y se integra con repositorios de GitHub. Es gratuito para proyectos de código abierto. 

## Historias de usuario
* [[HU1] Como cliente, quiero registrarme en el sistema](https://github.com/januszewskimar/shop-safe/issues/7)
* [[HU2] Como cliente, quiero añadir una opinión sobre una tienda](https://github.com/januszewskimar/shop-safe/issues/8)
* [[HU3] Como cliente, quiero modificar una opinión sobre una tienda](https://github.com/januszewskimar/shop-safe/issues/9)
* [[HU4] Como cliente, quiero eliminar una opinión sobre una tienda](https://github.com/januszewskimar/shop-safe/issues/10)
* [[HU5] Como cliente, quiero conocer las opiniones sobre una tienda](https://github.com/januszewskimar/shop-safe/issues/11)
* [[HU6] Como cliente, quiero conocer la valoración media de una tienda](https://github.com/januszewskimar/shop-safe/issues/12)
* [[HU7] Como administrador de una tienda, quiero registrarla al sistema](https://github.com/januszewskimar/shop-safe/issues/13)
* [[HU8] Como administrador de una tienda, quiero contestar a una opinión de un cliente](https://github.com/januszewskimar/shop-safe/issues/14)
* [[HU9] Como administrador de una tienda, quiero modificar una respuesta a una opinión de un cliente](https://github.com/januszewskimar/shop-safe/issues/15)
* [[HU10] Como administrador de una tienda, quiero eliminar una respuesta a una opinión de un cliente](https://github.com/januszewskimar/shop-safe/issues/16)

## Planificación
Las historias de usuario se han planificado por milestones. Cada historia de usuario contiene tareas.

- [Milestone 2](https://github.com/januszewskimar/shop-safe/milestone/2)
  - [[HU1] Como cliente, quiero registrarme en el sistema](https://github.com/januszewskimar/shop-safe/issues/7)
  - [[HU7] Como administrador de una tienda, quiero registrarla al sistema](https://github.com/januszewskimar/shop-safe/issues/13)
- [Milestone 3](https://github.com/januszewskimar/shop-safe/milestone/3)
  - [[HU2] Como cliente, quiero añadir una opinión sobre una tienda](https://github.com/januszewskimar/shop-safe/issues/8)
  - [[HU8] Como administrador de una tienda, quiero contestar a una opinión de un cliente](https://github.com/januszewskimar/shop-safe/issues/14)
- [Milestone 4](https://github.com/januszewskimar/shop-safe/milestone/4)
  - [[HU5] Como cliente, quiero conocer las opiniones sobre una tienda](https://github.com/januszewskimar/shop-safe/issues/11)
  - [[HU6] Como cliente, quiero conocer la valoración media de una tienda](https://github.com/januszewskimar/shop-safe/issues/12)
- [Milestone 5](https://github.com/januszewskimar/shop-safe/milestone/5)
  - [[HU3] Como cliente, quiero modificar una opinión sobre una tienda](https://github.com/januszewskimar/shop-safe/issues/9)
  - [[HU9] Como administrador de una tienda, quiero modificar una respuesta a una opinión de un cliente](https://github.com/januszewskimar/shop-safe/issues/15)
- [Milestone 6](https://github.com/januszewskimar/shop-safe/milestone/6)
  - [[HU4] Como cliente, quiero eliminar una opinión sobre una tienda](https://github.com/januszewskimar/shop-safe/issues/10)
  - [[HU10] Como administrador de una tienda, quiero eliminar una respuesta a una opinión de un cliente](https://github.com/januszewskimar/shop-safe/issues/16)

Además, se ha creado un [tablero ágil](https://github.com/januszewskimar/shop-safe/projects/1).

## Clases iniciales
Se han creado las siguientes clases:
* [Cliente.js](https://github.com/januszewskimar/shop-safe/blob/main/src/clientes/Cliente.js)
* [Tienda.js](https://github.com/januszewskimar/shop-safe/blob/main/src/tiendas/Tienda.js)

## Enlaces a la documentación
* [Configuración de git y GitHub](https://github.com/januszewskimar/CC-proyecto/blob/main/docs/config-git-github.md)
