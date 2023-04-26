# free-canvas-playground

Usar el HTML5 Canvas API rápidamente.

## Versión online

[https://allnulled.github.io/canvas-playground](https://allnulled.github.io/canvas-playground)

## API

El `free-canvas-playground` proporciona una API básica para interactuar con el HTML5 Canvas API..

### Referencia

Los ficheros de la API están en `src/www/js/free-canvas-playground/2D*`, y son:

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

