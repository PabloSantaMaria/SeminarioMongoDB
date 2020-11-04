# Actividad 4

[:arrow_backward: volver al index](./README.md)

1. Utilizar la misma base de datos de películas e insertar varias películas (al menos 30) con distinto contenido.
2. Crear índice en field rating y luego hacer búsquedas usando este campo.

    ```js
    db.movies.createIndex({rating: 1})

    db.movies.find({rating: {$gt: 4.5}}, {title: 1, rating: 1, _id: 0})
    db.movies.find({rating: {$gt: 3.9, $lt: 4.6}})
    ```

3. Crear índice en title y description, y después hacer búsquedas de texto en estos campos.

    ```js
    db.movies.createIndex({title: "text", description: "text"})

    db.movies.find({$text: {$search: "robot"}}, {title: 1, description: 1, _id: 0})
    db.movies.find({$text: {$search: "zero"}}).sort({rating: -1})
    ```

[:arrow_double_up: top](#actividad-4)
