# Planificación
Las historias de usuario se han planificado por milestones. Cada historia de usuario contiene tareas.

## Milestone 1
En el primer milestone se ha decidido desarrollar las funcionalidades de añadir y ver las opiniones sobre una tienda. Se ha identificado a Opinión como la entidad central, por lo cual las historias de usuario relacionadas con esta se desarrollarán primero:
* [[HU2] Como usuario, quiero añadir una opinión sobre una tienda](https://github.com/januszewskimar/shop-safe/issues/8)
* [[HU5] Como usuario, quiero conocer las opiniones sobre una tienda](https://github.com/januszewskimar/shop-safe/issues/11)

Sin embargo, para poder implementarlas es necesario haber finalizado las siguientes:
* [[HU1] Como usuario, quiero registrarme en el sistema](https://github.com/januszewskimar/shop-safe/issues/7) - antes de añadir una opinión, el usuario tiene que haberse registrado
* [[HU7] Como administrador de una tienda, quiero registrarla al sistema](https://github.com/januszewskimar/shop-safe/issues/13) - la tienda tiene que estar registrada en el sistema para poder añadir una opinión sobre ella

Primero se desarrollarán las clases iniciales:
* Usuario
* AdministradorTienda
* Tienda
* Opinión

Una vez terminadas estas historias de usuario (la parte de back end), se podrán implementar las que quedan. Ya no dependerá ninguna de otra a partir de este momento y se podrán implementar en cualquier orden.

## Milestone 2
En este milestone se va a ampliar la funcionalidad. Las tiendas podrán responder a las opiniones de los usuarios, que es una funcionalidad muy importante. Además, se podrá ver la valoración media de de las opiniones de una tienda y eliminar una opinión y una respuesta a una opinión. Se ha decidido implementar las funciones de eliminación antes de las de modificación, ya que en caso de necesitar editar una opinión, esta se puede eliminar y se puede publicar una nueva. Sin embargo, si se quisiera implementar primero la opción de modificación, sería imposible eliminar una opinión.

Lista de historias de usuario:
* [[HU8] Como administrador de una tienda, quiero contestar a una opinión de un cliente](https://github.com/januszewskimar/shop-safe/issues/14)
* [[HU6] Como usuario, quiero conocer la valoración media de una tienda](https://github.com/januszewskimar/shop-safe/issues/12)
* [[HU4] Como usuario, quiero eliminar una opinión sobre una tienda](https://github.com/januszewskimar/shop-safe/issues/10)
* [[HU10] Como administrador de una tienda, quiero eliminar una respuesta a una opinión de un cliente](https://github.com/januszewskimar/shop-safe/issues/16)

## Milestone 3
En este milestone se van a implementar las funcionalidades de modificar una opinión y una respuesta a una opinión para tener todas las opciones de gestión de opiniones planeadas en las historias de usuario.

Lista de historias de usuario:
* [[HU3] Como usuario, quiero modificar una opinión sobre una tienda](https://github.com/januszewskimar/shop-safe/issues/9)
* [[HU9] Como administrador de una tienda, quiero modificar una respuesta a una opinión de un cliente](https://github.com/januszewskimar/shop-safe/issues/15)

Además, se ha creado un [tablero ágil](https://github.com/januszewskimar/shop-safe/projects/1).
