# canvas-playground

Usar el Canvas API de HTMl5 rápidamente.

## Versión online

[https://allnulled.github.io/canvas-playground](https://allnulled.github.io/canvas-playground)

## Instalación

En un directorio nuevo, clona el proyecto:

```sh
git clone .
```

Luego, dentro del proyecto creado, instala las dependencias:

```
npm install
```

## Ejecución

Para arrancar el servidor:

```sh
mpm test
```

**Nota:** yo uso `npx` para no estar instalando las mismas dependencias globales por cada proyecto. Por eso, el comando que uso yo es: `npm run test:nodep` que usa `npx` y no `npm` directamente.

## Uso

El fichero `src/www/js/play.js` es el encargado de pintar ago en el Canvas. Modifícalo, guarda los cambios y refresca el navegador para visualizar tu script para el canvas.

## ¿Por qué?

Porque muchas aplicaciones en línea te piden que te hagas una cuenta con ellos para poder hacer pruebas.
