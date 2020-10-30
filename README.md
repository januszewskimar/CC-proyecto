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
Como lenguaje se utilizará TypeScript junto con Node.js, ya que esta combinación es ligera y rápida. Esto se debe a que Node.js está implementado con el motor V8 que compila el código JavaScript en código máquina en vez de interpretarlo en tiempo real. Además, el desarrollo de API de tipo REST en Node.js es muy fácil. Es de código abierto y es usado por las grandes empresas. Tiene una gran comunidad de desarrolladores, lo cual facilita la resolución de problemas. Se desarrollará en TypeScript para facilitar la programación y depuración.

### Almacén de datos
Como almacén de datos, se utilizará MySQL, puesto que es el sistema gestor de bases de datos más popular en cuanto a Software libre. Es de tipo SQL, por lo cual, se adecua a los datos que estarán estructurados. Existe una API para Node que permite conectarse a una base de datos de este sistema gestor de bases de datos. Además, MySQL proporciona alto rendimiento y tiene una gran comunidad de usuarios.

### Tests
Para realizar test utilizaré Mocha, ya que se integra de forma fácil con Node.js, y además, permite realizar el desarrollo dirigido por test y testeo asíncrono.

### Integración continua
Para las tareas de la integración continua, he optado por Travis, puesto que soporta JavaScript con Node.js y se integra con repositorios de GitHub. Es gratuito para proyectos de código abierto. 

## Historias de usuario
* [[HU1] Como usuario, quiero registrarme en el sistema](https://github.com/januszewskimar/shop-safe/issues/7)
* [[HU2] Como usuario, quiero añadir una opinión sobre una tienda](https://github.com/januszewskimar/shop-safe/issues/8)
* [[HU3] Como usuario, quiero modificar una opinión sobre una tienda](https://github.com/januszewskimar/shop-safe/issues/9)
* [[HU4] Como usuario, quiero eliminar una opinión sobre una tienda](https://github.com/januszewskimar/shop-safe/issues/10)
* [[HU5] Como usuario, quiero conocer las opiniones sobre una tienda](https://github.com/januszewskimar/shop-safe/issues/11)
* [[HU6] Como usuario, quiero conocer la valoración media de una tienda](https://github.com/januszewskimar/shop-safe/issues/12)
* [[HU7] Como administrador de una tienda, quiero registrarla al sistema](https://github.com/januszewskimar/shop-safe/issues/13)
* [[HU8] Como administrador de una tienda, quiero contestar a una opinión de un cliente](https://github.com/januszewskimar/shop-safe/issues/14)
* [[HU9] Como administrador de una tienda, quiero modificar una respuesta a una opinión de un cliente](https://github.com/januszewskimar/shop-safe/issues/15)
* [[HU10] Como administrador de una tienda, quiero eliminar una respuesta a una opinión de un cliente](https://github.com/januszewskimar/shop-safe/issues/16)

## Planificación
Las historias de usuario se han planificado por milestones. Cada historia de usuario contiene tareas.

### Milestone 1
En el primer milestone se ha decidido desarrollar las funcionalidades de añadir y ver las opiniones sobre una tienda. Se ha identificado a Opinión como la entidad central, por lo cual las historias de usuario relacionadas con esta se desarrollarán primero:
* [[HU2] Como usuario, quiero añadir una opinión sobre una tienda](https://github.com/januszewskimar/shop-safe/issues/8)
* [[HU5] Como usuario, quiero conocer las opiniones sobre una tienda](https://github.com/januszewskimar/shop-safe/issues/11)

Sin embargo, para poder implementarlas es necesario haber finalizado otras:
* [[HU1] Como usuario, quiero registrarme en el sistema](https://github.com/januszewskimar/shop-safe/issues/7) - antes de añadir una opinión, el usuario tiene que haberse registrado
* [[HU7] Como administrador de una tienda, quiero registrarla al sistema](https://github.com/januszewskimar/shop-safe/issues/13) - la tienda tiene que estar registrada en el sistema para poder añadir una opinión sobre ella

Primero se desarrollarán las clases iniciales:
* de la entidad central (Opinión)
* y las relacionadas con esta (Usuario y Tienda)

Después se procederá a realizar las siguientes tareas de las historias de usuario.
Una vez terminadas estas historias de usuario (la parte de back end), se podrán implementar las que quedan. Ya no dependerá ninguna de otra a partir de este momento y se podrán implementar en cualquier orden.

### Milestone 2
En este milestone se va a ampliar la funcionalidad. Las tiendas podrán responder a las opiniones de los usuarios que es una funcionalidad muy importante. Además, se podrá ver la valoración media de de las opiniones de una tienda y eliminar una opinión y una respuesta a una opinión. Se ha decidido implementar las funciones de eliminación antes de las de modificación, ya que en caso de necesitar editar una opinión, esta se puede eliminar y se puede publicar una nueva. Sin embargo, si se quisiera implementar primero la opción de modificación, sería imposible eliminar una opinión.
* [[HU8] Como administrador de una tienda, quiero contestar a una opinión de un cliente](https://github.com/januszewskimar/shop-safe/issues/14)
* [[HU6] Como usuario, quiero conocer la valoración media de una tienda](https://github.com/januszewskimar/shop-safe/issues/12)
* [[HU4] Como usuario, quiero eliminar una opinión sobre una tienda](https://github.com/januszewskimar/shop-safe/issues/10)
* [[HU10] Como administrador de una tienda, quiero eliminar una respuesta a una opinión de un cliente](https://github.com/januszewskimar/shop-safe/issues/16)

### Milestone 3
En este milestone se van a implementar las funcionalidades de modificar una opinión y una respuesta a una opinión para proveer todas las opciones de gestión de opiniones planeadas en las historias de usuario.
* [[HU3] Como usuario, quiero modificar una opinión sobre una tienda](https://github.com/januszewskimar/shop-safe/issues/9)
* [[HU9] Como administrador de una tienda, quiero modificar una respuesta a una opinión de un cliente](https://github.com/januszewskimar/shop-safe/issues/15)

Además, se ha creado un [tablero ágil](https://github.com/januszewskimar/shop-safe/projects/1).

## Clases iniciales
Se han creado las siguientes clases:
* [Cliente.js](https://github.com/januszewskimar/shop-safe/blob/main/src/clientes/Cliente.js)
* [Tienda.js](https://github.com/januszewskimar/shop-safe/blob/main/src/tiendas/Tienda.js)

## Enlaces a la documentación
* [Configuración de git y GitHub](https://github.com/januszewskimar/CC-proyecto/blob/main/docs/config-git-github.md)
