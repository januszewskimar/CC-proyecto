# Arquitectura
El sistema se desarrollará en la arquitectura basada en microservicios, ya que se quiere desarrollar módulos independientes para conseguir bajo acoplamiento y mejorar la escalabilidad. Los usuarios se comunicarán con la puerta de enlace API, que enviará peticiones a los microservicios correspondientes. La comunicación será asíncrona mediante el modelo solicitud-respuesta, ya que es rápida y segura. Se utilizarán API basadas en REST tanto para la puerta de enlace como para los microserivicos, puesto que son universales y no obligan a usar tecnologías específicas. Cada microservicio dispondrá de una base de datos separada para conseguir bajo acoplamiento. Los datos se guardarán en almacenes relacionales, ya que en este caso se conoce de antemano su estructura. Se van a desarrollar los siguientes microservicios:

* **Usuarios** - gestionará los datos de los usuarios, es decir, personas particulares que pueden publicar opiniones sobre tiendas.
* **Administradores de Tiendas** - va a gestionar los datos de los administradores de tiendas.
* **Tiendas** - se encargará de gestionar los datos de las tiendas.
* **Opiniones** - a través de este se podrá añadir, modificar y eliminar opiniones de los usuarios y respuestas de las tiendas.
