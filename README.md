# Bienvenido al proyecto Vizistore

Este proyecto esta basado en REACT JS y es la continuación de su primera versión realizado con JS puro [Viziozone ](https://github.com/pitziro/Viziozone).

Viziostore propone ser una tienda de componentes de computadora especializados. Se dividen estos en categorías y puede realizarse una selección agregando al carrito de compras y generando una orden de compra para cerrar el proceso.

![store01](https://i.ibb.co/fN58y8C/viziostore01.png)

Se encuentra implementada la visualización del carrito para poder eliminar algún producto, ver los costos preliminares o limpiar directamente el total de la proforma.

![store02](https://i.ibb.co/K6hXLpV/viziostore02.png)

Tanto el proceso de selección de productos, como la generación de la orden de compra dependen de una conexión a la base datos creada en Firestore (los datos de la conexión se encuentran almacenados en un archivo .env)

![store03](https://i.ibb.co/MMGJzm5/viziostore03.png)

## Clonar el proyecto

Para clonar el proyecto, se debe copiar el URL del proyecto y clonar en el repositorio local mediante el comando `git clone` a la última version disponible
(https://github.com/pitziro/viziostore.git)

## Información del proyecto

Para ejecutar el proyecto de forma local, se debe ejecutar el comando `npm start`. Esto abrirá automáticamente el navegador por defecto en la dirección [http://localhost:3000](http://localhost:3000) (el servidor deberá mantenerse abierto para poder ver los cambios efectuados).

#### Pre Requisitos

Al igual que resto de proyectos realizados en REACT JS, para trabajar sobre el proyecto Viziostore es necesario tener instalado NPM y NODE.JS, así como un editor de código como Visual Studio Code (recomendado), Sublime o Atom.

#### Principales dependencias

En la ejecución de Viziostore, se han implementado funcionalidades que dependen de:

- bootstrap
- firebase
- react-dom
- react-router-dom

Algunos otros módulos están instalados, pero no son utilizados en las últimas versiones del proyecto.

## Autoría

El proyeto ha sido creado como parte del curso de React JS de la plataforma Coderhouse, y es complemente original y propiedad de [Manuel Sarmiento](https://twitter.com/pitziro).

Para cualquier colaboración o uso de código, por favor pónte en contacto conmigo.
