# shop-safe
Repositorio con el proyecto realizado en la asignatura Cloud Computing del Máster en Ingeniería Informática por la Universidad de Granada.

## Problema
Hoy día hay muchas personas que desean realizar compras en línea. También existe una gran cantidad de tiendas cuya fiabilidad desconocen. Los usuarios quisieran conocer las opiniones de otras personas que ya han realizado compras en una determinada tienda para saber si esta es de fiar. Por otro lado, las tiendas quisieran poder defenderse públicamente y solicitar más información a los clientes con el fin de mejorar el servicio.

## Arquitectura
El sistema se desarrollará en la arquitectura basada en microservicios, ya que esta permite que cada componente se despliegue de forma independiente. Gracias a este tipo de arquitectura, se consigue bajo acoplamiento y mejora la escalabilidad. Además, la depuración y el despliegue continuo son más fáciles de realizar. Habrá un módulo central que proporcionará una API basada en REST, puesto que es universal y no obliga a usar tecnologías específicas. Los microservicios se comunicarán de manera asíncrona mediante el modelo solicitud-respuesta, ya que es rápido y seguro. Se utilizarán interfaces REST. Se van a desarrollar los siguientes microservicios:
* **Usuarios** - gestionará los datos de los usuarios
* **Tiendas** - se encargará de gestionar los datos de las tiendas
* **Opiniones** - a través de este se podrá consultar, añadir y modificar opiniones de los clientes y respuestas de las tiendas

Cada microservicio dispondrá de una base de datos separada para conseguir bajo acomplamiento. Los datos se almacenarán en almacenes relacionales, ya que en este caso se conoce de antemano su estructura.

## Enlaces a la documentación
* [Hito 0](https://github.com/januszewskimar/CC-proyecto/blob/main/docs/hito-0.md)
