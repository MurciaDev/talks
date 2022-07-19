# Testing basado en propiedades

Repositorio de acompañamiento para mi charla sobre testing basado en propiedades. Contiene dos módulos:

* Módulo con las slides, escritas en markdown, con código Scala ejecutado usando [`mdoc`](https://scalameta.org/mdoc/), y presentado usando [`reveal`](https://revealjs.com/)
* Módulo con el código para live coding y potencialmente para los ejemplos utilizados en las slides

## Compilar slides

1. Descargar [`sbt`](https://www.scala-sbt.org/)
2. Ejecutar `sbt mdoc`
3. Servir el contenido del directorio `modules/talk/target/mdoc`, en concreto el fichero `index.html`
    * Habitualmente utilizo [`livereload`](https://github.com/lepture/python-livereload)
