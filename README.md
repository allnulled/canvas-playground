# free-canvas-playground

Usar el HTML5 Canvas API rápidamente.

## Versión online

- Para usar 2 dimensiones tienes la [aplicación de la Free Canvas Playground 2D API](https://allnulled.github.io/canvas-playground/app.2d.last.html)
- Para usar 3 dimensiones tienes la [aplicación de la Free Canvas Playground 3D API](https://allnulled.github.io/canvas-playground/app.3d.last.html)

----

## API

El `free-canvas-playground` proporciona dos APIs básica para interactuar con el HTML5 Canvas API, completamente opcionales porque igual puedes usar el HTML5 Canvas API directamente. Pero ahí están:
 - La [Free Canvas Playground API de 2D](#referencia-de-la-api-de-2d), y
 - La [Free Canvas Playground API de 3D](#referencia-de-la-api-de-3d).

----

### Referencia de la API de 2D

Los ficheros de la API están en `src/www/js/free-canvas-playground/2d/*`, y son:

  - `configuraciones.js`: parámetros globales de la aplicación.
  - `utilidades.js`: métodos globales útiles de la aplicación.
  - `contexto.js`: se configura el contexto.
  - `Pantalla.js`: clase que representa al recuadro de pintado del canvas.
  - `Fondo.js`: clase que representa el fondo del canvas.
  - `Persona.js`: clase que representa una persona.

----

Las variables disponibles en el script son:

  - `this`: el componente vue2 que renderiza el canvas.
  - `this.playground`: el objeto con la API del `free-canvas-playground`. Contiene:
    - `configuraciones` (variables globales)
    - `utilidades` (métodos globales)
    - `contexto` (el nexo con la Canvas API)
    - `Pantalla` (la clase)
    - `Fondo` (la clase)
    - `Persona` (la clase)
    - `pantalla` (la instancia)
    - `fondo` (la instancia)
    - `persona` (la instancia)

----

Esta sentencia se incluye automáticamente a los script inyectados con castelog, por lo que ya dispones de toda la API accesible automáticamente:

```calo
desacoplo constantes {
  configuraciones,
  utilidades,
  contexto,
  Pantalla,
  Fondo,
  Persona,
  pantalla,
  fondo,
  persona
} a partir de this.playground.
```

----

### Ejemplos de la API de 2D

**Ejemplo de 4 personas:**

Este script crea a 3 personas a parte de la principal, en la pantalla:

```calo
creo persona2 como una nueva Persona({ x: 150 }).
creo persona3 como una nueva Persona({ x: 220 }).
creo persona4 como una nueva Persona({ x: 290 }).
hago pantalla.incluir(persona2).
hago pantalla.incluir(persona3).
hago pantalla.incluir(persona4).
hago pantalla.pintarse().
```

----

### Referencia de la API de 3D

La API de 3D incluye la librería `three.js` y una inicialización básica de un `Universo` propio de la API.

Los ficheros de la API están en `src/www/js/free-canvas-playground/3d/*`, y son:

 - `Camara.js`: 
 - `Escena.js`: 
 - `Geometria.de.cuboide.js`: 
 - `Geometria.js`: 
 - `Malla.js`: 
 - `Material.js`: 
 - `Reproductor.js`: 
 - `Universo.js`: 

----

Las variables disponibles en el script son:

  - `this`: el componente vue2 que renderiza el canvas.
  - `this.playground`: el objeto con la API del `free-canvas-playground`. Contiene:
    - `configuraciones` (variables globales)
    - `utilidades` (métodos globales)
    - `contexto` (el nexo con la Canvas API)
    - `Camara.de.perspectiva`: una extensión de la clase `THREE.PerspectiveCamera`.
    - `Escena.estandar`: una extensión de la clase `THREE.Scene`.
    - `Malla.estandar`: una extensión de la clase `THREE.Mesh`.
    - `Material.de.malla.basico`: una extensión de la clase `THREE.MeshBasicMaterial`.
    - `Reproductor.webGL`: una extensión de la clase `THREE.WebGLRenderer`.
    - `Universo`: clase propia de la API de 3D y no de `THREE`. Esta clase controla y contiene a las demás.
    - `universo` (la instancia)

----

Esta sentencia se incluye automáticamente a los script inyectados con castelog, por lo que ya dispones de toda la API accesible automáticamente:

```calo

```

----

### Ejemplos de la API de 3D

Próximamente.