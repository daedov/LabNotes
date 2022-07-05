## 1. Resumen del Proyecto

En este proyecto construiremos una aplicación para tomar notas, que nos permita
crear, editar, eliminar y consultarlas en cualquier momento.

No existe día que no tomemos notas, siempre necesitamos apuntar alguna
dirección, número telefónico, notas de alguna reunión o guardar nuestras URLs
favoritas para poder consultarlas más tarde. Muchas veces para esta actividad
utilizamos libretas o agendas que terminan siendo olvidadas, o anotamos de
manera dispersa de tal manera que perdemos de vista la prioridad y el propósito
de la nota lo cual da como resultado una nota perdida.

El objetivo principal de este proyecto es aprender a construir una _interfaz
web_ usando el _framework_ elegido. Todos estos frameworks de Frontend atacan el
mismo problema: **cómo mantener la interfaz y el estado sincronizados**. Así que
esta experiencia espera familiarizarte con el concepto de _estado de pantalla_,
y cómo cada cambio sobre el estado se va a ir reflejando en la interfaz (por
ejemplo, cada vez que agregamos una _nota_, la interfaz debe actualizar la lista
de notas).

## 2. Consideraciones generales

* Este proyecto se debe "resolver" de forma individual.

* La duración estimada del proyecto es de 4 sprints, con una duración de una
  semana cada uno.

* Trabaja en una historia hasta terminarla antes de pasar a la siguiente.

* La aplicación debe ser un _Single Page App_. Las notas serán realizadas desde
una _tablet_, pero **no debe ser una app nativa**, sino una web app que sea
**responsive** y pueda funcionar **offline**.

* Necesitamos pensar bien en el aspecto UX de quienes van a tomar las notas, el
tamaño y aspecto de los botones, la visibilidad del estado actual del pedido,
etc.

* Implementar pruebas unitarias de tus componentes.

## 3. Criterios de aceptación mínimos del proyecto

### Definición del producto

### Historias de usuaria

#### [Historia de usuaria 1] Debería poder crear cuenta, iniciar y cerrar sesión

Yo como usuaria debo poder crear una cuenta y autenticarme usando login de
Google para acceder a mis notas.

***

#### [Historia de usuaria 2] Debería poder tomar nota

Yo como usuaria quiero tomar nota para no depender de mi mala
memoria y tener presente en todo momento los apuntes ó cosas importantes que
antes escribía en papel.

***

#### [Historia de usuaria 3] Debería poder ver las notas

Yo como usuaria quiero leer mis notas para recordar lo que escribí
antes.

***

#### [Historia de usuaria 4] Debería poder editar las notas

Yo como usuaria quiero editar notas para poder modificar lo que
escribí antes.

***

#### [Historia de usuaria 5] Debería poder borrar notas

Yo como usuaria quiero borrar una nota para no volver a verla.

***

##### Criterios de aceptación

Lo que debe ocurrir para que se satisfagan las necesidades del usuario

* Anotar un título a mi nota
* Agregar el contenido de mi nota.
* Ver todas mis notas.
* Ver la última modificación de la nota.
* Modificar las notas.
* Eliminar notas.
* Se ve y funciona bien en una _Tablet_

##### Definición de terminado

Lo acordado que debe ocurrir para decir que la historia está terminada.

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Desplegaste tu aplicación y has etiquetado tu versión 

## 4. Consideraciones técnicas

El proyecto deberá contener los siguientes archivos base de configuración,
aunque no serán los únicos archivos que quizás tendrás que crear.

* `README.md` es donde se encontrará la descripción del proyecto y elementos
  relevantes de tu proyecto.
* `.editorconfig` este archivo contiene la configuración para editores de texto.
* `.gitignore`  este archivo contiene reglas para ignorar `node_modules` u otras
  carpetas que no deban incluirse en control de versiones (`git`).
* `.eslintrc` este archivo contiene reglas para formatear el código además de
  ser una buena practica tener configurado un linter.

Para este proyecto necesitas crear una Web App con **una librería o
framework de JavaScript** (`React`, `Angular` o `Vue`) y **Firebase**.

Para este proyecto tendrás que manejar _vistas_. Esto significa que cada sección
tendrá su propia URL, la cual indica que _vista_ o _componente_ será mostrado en
pantalla. Para ello necesitaremos investigar acerca de _la API para el manejo de
rutas (en la librería o framework que elijas)_ y el concepto de _Single Page
Application_.

## 5. Hacker Edition

Una vez que hayas terminado las funcionalidades base del proyecto, puedes
pasarte a esta sección.

* Si la usuaria empieza a escribir una nota y por alguna razón la pestaña del
  navegador se cierra, cuando la vuelva a abrir, la nota debería mostrarse como
  estaba.
* Subir imágenes.
* Ver el número de veces que he editado mi nota.
* Consumo de API/s (Google Maps, Spotify, Pinterest, etc.)
* Progressive Web App (PWA).
* Puedes crear categorías y clasificar por tipo de nota.
* Guardar el color de la nota.
* Crear una nota como publica.
